/**
 * Preview stills check.
 * Ported from marriages-of-grace `scripts/visual-check.mjs`.
 *
 * Default: build the static export, serve it like the Worker, capture stills.
 * `--url` captures an allowlisted deployed origin and does not build.
 *
 * Exit 0: hard checks passed.
 * Exit 1: a hard check failed (HTTP status or placeholder copy).
 * Exit 2: bad input or setup (url, Chrome, build).
 */

import { spawn } from 'node:child_process';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  captureFullPageJpeg,
  collectSurfaces,
  launchChrome,
} from './lib/capture.mjs';
import { attachNavGuard } from './lib/nav-guard.mjs';
import { writeSideBySide } from './lib/side-by-side.mjs';
import { startStaticServer } from './lib/static-server.mjs';
import { buildReport, describeChecks } from './lib/visual-report.mjs';
import {
  applySampleSlug,
  checkPreviewUrl,
  compLookedFor,
  findCompRender,
  httpOk,
  loadRouteConfig,
  loadRoutesFromBase,
  resolveBaseRef,
  resolveSampleSlug,
  scanSurfaces,
} from './lib/visual-rules.mjs';

const HELP = `Usage: bun run stills [--url <origin>] [--out <dir>] [--dir <static-root>]

Capture full-page JPEG stills of the Senior Schools Network routes.

Default mode builds with \`bun run build\`, serves out/ on 127.0.0.1 with
Workers auto-trailing-slash and 404-page handling, then captures.

--url <origin>              Capture this allowlisted origin. Does not build.
--out <dir>                 Output directory. Default: checks-out/<sha7>/
--dir <static-root>         Serve this directory instead of building.
--routes <file>             Route list. Default: origin/<base>:scripts/stills/routes.json,
                            or the working tree until the base branch has it
--sha <sha>                 Commit recorded in the report. Default: git HEAD
--repo <dir>                Repository root. Default: current directory
--not-found-handling <mode> 404-page (Worker) or index-200 (self-test hook)

Exit 0 hard checks passed, 1 a hard check failed, 2 bad input or setup.
`;

function parseArgs(argv) {
  const args = {
    help: false,
    url: null,
    out: null,
    dir: null,
    routes: null,
    sha: null,
    repo: null,
    notFoundHandling: null,
  };
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    const take = () => {
      const value = argv[i + 1];
      if (!value || value.startsWith('--')) {
        throw new Error(`missing value for ${token}`);
      }
      i += 1;
      return value;
    };
    switch (token) {
      case '--help':
      case '-h':
        args.help = true;
        break;
      case '--url':
        args.url = take();
        break;
      case '--out':
        args.out = take();
        break;
      case '--dir':
        args.dir = take();
        break;
      case '--routes':
        args.routes = take();
        break;
      case '--sha':
        args.sha = take();
        break;
      case '--repo':
        args.repo = take();
        break;
      case '--not-found-handling':
        args.notFoundHandling = take();
        break;
      default:
        throw new Error(`unknown argument ${token}`);
    }
  }
  return args;
}

function readGitSha(repoRoot) {
  try {
    return execFileSync('git', ['rev-parse', 'HEAD'], {
      cwd: repoRoot,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
  } catch {
    return null;
  }
}

function runBuild(repoRoot) {
  return new Promise((resolve) => {
    const child = spawn('bun', ['run', 'build'], {
      cwd: repoRoot,
      stdio: 'inherit',
    });
    child.on('error', () => resolve(127));
    child.on('exit', (code) => resolve(code ?? 1));
  });
}

function isBrowserDeath(error) {
  const message = String(error && error.message ? error.message : error);
  return /browser has been closed|Target page, context or browser has been closed|Connection closed/i.test(
    message
  );
}

function writeOutputs(outDir, report) {
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'summary.md'), report.markdown);
  fs.writeFileSync(
    path.join(outDir, 'results.json'),
    `${JSON.stringify(report.results, null, 2)}\n`
  );
}

function emptyShot(route, viewport) {
  const label = `${viewport.width}x${viewport.height}`;
  return {
    key: route.key,
    path: route.path,
    expect: route.expect,
    viewport: label,
    width: viewport.width,
    height: viewport.height,
    http: null,
    httpOk: false,
    placeholders: [],
    placeholderOk: true,
    offOrigin: false,
    captureError: null,
    file: null,
    comp: 'no-comp',
    compLookedFor: compLookedFor(route.comp, viewport.width),
    compRender: null,
    sideBySide: null,
    hardOk: false,
  };
}

export async function runStills(options) {
  const repoRoot = path.resolve(options.repoRoot || process.cwd());
  const notFoundHandling = options.notFoundHandling || '404-page';
  let server = null;
  let browser = null;

  const sha = options.sha || readGitSha(repoRoot);
  if (!sha) {
    console.error('stills: git rev-parse HEAD failed');
    return 2;
  }
  const sha7 = sha.slice(0, 7);
  const generatedAt = new Date().toISOString();
  const outDir = path.resolve(
    options.outDir || path.join(repoRoot, 'checks-out', sha7)
  );

  try {
    if (options.url && options.dir) {
      throw new Error('pass either --url or --dir, not both');
    }
    if (notFoundHandling !== '404-page' && notFoundHandling !== 'index-200') {
      throw new Error(`unknown not-found handling: ${notFoundHandling}`);
    }

    let config;
    if (options.routesFile) {
      config = loadRouteConfig(options.routesFile);
      console.error(`stills: routes ${options.routesFile}`);
    } else {
      const loaded = loadRoutesFromBase(repoRoot);
      config = loaded.config;
      const base = resolveBaseRef();
      console.error(
        loaded.fallback
          ? `stills: routes ${loaded.source} (origin/${base} has no scripts/stills/routes.json)`
          : `stills: routes ${loaded.source}`
      );
    }
    let origin;
    let target;
    let staticDir = null;

    if (options.url) {
      const checked = checkPreviewUrl(options.url);
      if (!checked.ok) {
        console.error(`stills: refused url (${checked.reason})`);
        return 2;
      }
      origin = checked.origin;
      target = origin;
    } else {
      staticDir = options.dir
        ? path.resolve(options.dir)
        : path.join(repoRoot, 'out');
      if (!options.dir) {
        const buildCode = await runBuild(repoRoot);
        if (buildCode !== 0) {
          console.error(`stills: build failed (exit ${buildCode})`);
          return 2;
        }
      }
      if (!fs.existsSync(staticDir)) {
        throw new Error(`static directory missing: ${staticDir}`);
      }
      server = await startStaticServer(staticDir, { notFoundHandling });
      origin = server.origin;
      target = 'local build';
    }

    const slug = resolveSampleSlug({
      outDir: staticDir,
      textsDir: path.join(repoRoot, 'public', 'texts'),
      prefer: config.sample && config.sample.prefer,
    });
    const routes = config.routes.map((route) => ({
      ...route,
      path: applySampleSlug(route, slug),
    }));

    fs.mkdirSync(outDir, { recursive: true });

    try {
      browser = await launchChrome();
    } catch (error) {
      const report = buildReport({
        sha,
        sha7,
        target,
        shots: [],
        generatedAt,
        exitCode: 2,
        setupError: error.message,
      });
      writeOutputs(outDir, report);
      console.error(`stills: ${error.message}`);
      return 2;
    }

    const context = await browser.newContext({
      deviceScaleFactor: 1,
      reducedMotion: 'reduce',
      viewport: {
        width: config.viewports[0].width,
        height: config.viewports[0].height,
      },
    });
    const guard = await attachNavGuard(context, origin);
    const shots = [];
    let browserDied = false;

    for (const route of routes) {
      for (const viewport of config.viewports) {
        const shot = emptyShot(route, viewport);
        const fileName = `${route.key}-${shot.viewport}.jpg`;
        console.error(`stills: ${route.path} ${shot.viewport}`);
        const blockedBefore = guard.blocked.length;
        let page;
        try {
          page = await context.newPage();
          await page.setViewportSize({
            width: viewport.width,
            height: viewport.height,
          });
          const response = await page.goto(`${origin}${route.path}`, {
            waitUntil: 'load',
            timeout: 60000,
          });
          shot.http = response ? response.status() : null;
          const landed = page.url();
          if (landed !== 'about:blank') {
            shot.offOrigin = new URL(landed).origin !== origin;
          }
          const navigatedOff = guard.blocked
            .slice(blockedBefore)
            .some((entry) => entry.isNavigation);
          if (navigatedOff) shot.offOrigin = true;
          const surfaces = await collectSurfaces(page);
          shot.placeholders = scanSurfaces(surfaces);
          const dest = path.join(outDir, fileName);
          const captured = await captureFullPageJpeg(page, dest);
          shot.file = fileName;
          shot.scrollHeight = captured.scrollHeight;
          if (captured.scaled) {
            shot.note = `scaled from ${captured.scrollHeight}px to fit JPEG`;
          }

          const comp = findCompRender(repoRoot, route.comp, viewport.width);
          try {
            if (comp) {
              const sideName = `${route.key}-${shot.viewport}-comp.jpg`;
              await writeSideBySide({
                compPath: comp.file,
                shotPath: dest,
                dest: path.join(outDir, sideName),
                sha7,
              });
              shot.comp = 'side-by-side';
              shot.compRender = comp.source;
              shot.sideBySide = sideName;
            }
          } finally {
            if (comp) comp.cleanup();
          }
        } catch (error) {
          shot.captureError =
            error instanceof Error ? error.message : String(error);
          if (isBrowserDeath(error)) browserDied = true;
          const navigatedOff = guard.blocked
            .slice(blockedBefore)
            .some((entry) => entry.isNavigation);
          if (navigatedOff) shot.offOrigin = true;
        } finally {
          if (page) await page.close().catch(() => {});
        }

        shot.httpOk = httpOk(route.expect, shot.http);
        shot.placeholderOk = shot.placeholders.length === 0;
        shot.hardOk =
          shot.httpOk &&
          shot.placeholderOk &&
          !shot.offOrigin &&
          !shot.captureError &&
          Boolean(shot.file);
        shots.push(shot);
        if (browserDied) break;
      }
      if (browserDied) break;
    }

    await guard.dispose().catch(() => {});
    const exitCode = browserDied
      ? 2
      : shots.some((shot) => !shot.hardOk)
        ? 1
        : 0;
    const report = buildReport({
      sha,
      sha7,
      target,
      shots,
      generatedAt,
      exitCode,
      setupError: browserDied ? 'Chrome failed during capture' : null,
    });
    writeOutputs(outDir, report);
    const failed = shots.filter((shot) => !shot.hardOk).length;
    console.log(
      `stills: ${target} → ${outDir} (${shots.length} stills, ${failed} hard failures, exit ${exitCode})`
    );
    if (failed > 0) {
      for (const shot of shots.filter((item) => !item.hardOk)) {
        console.error(
          `stills: ${shot.path} ${shot.viewport}: ${describeChecks(shot)}`
        );
      }
    }
    return exitCode;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`stills: ${message}`);
    return 2;
  } finally {
    if (browser) await browser.close().catch(() => {});
    if (server) await server.close().catch(() => {});
  }
}

const isMain =
  process.argv[1] &&
  path.resolve(process.argv[1]) ===
    path.resolve(fileURLToPath(import.meta.url));

if (isMain) {
  let args;
  try {
    args = parseArgs(process.argv.slice(2));
  } catch (error) {
    console.error(`stills: ${error.message}`);
    process.exit(2);
  }
  if (args.help) {
    console.log(HELP);
    process.exit(0);
  }
  const code = await runStills({
    url: args.url,
    outDir: args.out,
    dir: args.dir,
    routesFile: args.routes,
    sha: args.sha,
    repoRoot: args.repo,
    notFoundHandling: args.notFoundHandling,
  });
  process.exit(code);
}
