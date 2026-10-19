/**
 * Planted fixtures. Each guard must go red with its exit code.
 * The pages are written in a temp directory. Repo content is not asserted.
 */

import { spawn, execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const sharp = require('sharp');

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, '..');
const checker = path.join(here, 'visual-check.mjs');
const SHA = 'abcdef1234567890';

const CLEAN_HOME = `<!doctype html>
<html><head><title>Home</title></head>
<body><p>A finished sentence.</p></body></html>`;

const COPY_HOME = `<!doctype html>
<html><head><title>Home</title></head>
<body><p>Hero [COPY] goes here.</p></body></html>`;

const NOT_FOUND = `<!doctype html>
<html><head><title>Missing</title></head>
<body><p>This page is not on the site.</p></body></html>`;

const TALL_HOME = `<!doctype html>
<html><head><meta charset="utf-8"><style>
html, body { margin: 0; padding: 0; background: #fff; }
.spacer { height: 16200px; background: #fff; }
.marker { height: 120px; background: #ff00aa; }
</style></head>
<body><div class="spacer"></div><div class="marker">STILLS-BOTTOM-MARKER</div></body>
</html>`;

const ONE_PIXEL_PNG = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==',
  'base64'
);

function git(cwd, args) {
  execFileSync('git', args, {
    cwd,
    stdio: 'ignore',
    env: {
      ...process.env,
      GIT_AUTHOR_NAME: 'stills',
      GIT_AUTHOR_EMAIL: 'stills@example.com',
      GIT_COMMITTER_NAME: 'stills',
      GIT_COMMITTER_EMAIL: 'stills@example.com',
    },
  });
}

function initRepo(root) {
  git(root, ['init', '-b', 'main']);
  fs.writeFileSync(path.join(root, 'README'), 'fixture\n');
  git(root, ['add', 'README']);
  git(root, ['commit', '-m', 'init']);
  git(root, ['update-ref', 'refs/remotes/origin/main', 'HEAD']);
}

function commitFile(root, rel, bytes, message) {
  const full = path.join(root, rel);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, bytes);
  git(root, ['add', '--', rel]);
  git(root, ['commit', '-m', message]);
}

function runNode(script, args, cwd) {
  return new Promise((resolve) => {
    const child = spawn(process.execPath, [script, ...args], {
      cwd,
      env: { ...process.env, GITHUB_BASE_REF: 'main' },
    });
    let stdout = '';
    let stderr = '';
    child.stdout.on('data', (chunk) => {
      stdout += chunk;
    });
    child.stderr.on('data', (chunk) => {
      stderr += chunk;
    });
    child.on('exit', (code) => resolve({ code, stdout, stderr }));
  });
}

function writeSite(dir, home) {
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), home);
  fs.writeFileSync(path.join(dir, '404.html'), NOT_FOUND);
}

function writeRoutes(file) {
  fs.writeFileSync(
    file,
    JSON.stringify(
      {
        viewports: [{ width: 390, height: 667 }],
        routes: [
          { key: 'home', path: '/', expect: '2xx', comp: 'home' },
          {
            key: 'not-found',
            path: '/visual-check-404',
            expect: 404,
            comp: 'not-found',
          },
        ],
      },
      null,
      2
    )
  );
}

async function runFixture(root, extraArgs) {
  const outDir = path.join(root, 'checks');
  const result = await runNode(
    checker,
    [
      '--dir',
      path.join(root, 'out'),
      '--routes',
      path.join(root, 'routes.json'),
      '--repo',
      root,
      '--out',
      outDir,
      '--sha',
      SHA,
      ...extraArgs,
    ],
    root
  );
  let results = null;
  let summary = '';
  const resultsPath = path.join(outDir, 'results.json');
  const summaryPath = path.join(outDir, 'summary.md');
  if (fs.existsSync(resultsPath)) {
    results = JSON.parse(fs.readFileSync(resultsPath, 'utf8'));
  }
  if (fs.existsSync(summaryPath)) {
    summary = fs.readFileSync(summaryPath, 'utf8');
  }
  return { ...result, results, summary, outDir };
}

let failed = 0;

function expect(name, condition, detail) {
  if (condition) {
    console.log(`ok ${name}`);
    return;
  }
  failed += 1;
  console.error(`not ok ${name}`);
  if (detail) console.error(detail);
}

const rules = await runNode(
  path.join(here, 'test-visual-rules.mjs'),
  [],
  repoRoot
);
process.stdout.write(rules.stdout);
process.stderr.write(rules.stderr);
expect('visual-rules exit 0', rules.code === 0, `exit ${rules.code}`);

const nav = await runNode(path.join(here, 'test-visual-nav.mjs'), [], repoRoot);
process.stdout.write(nav.stdout);
process.stderr.write(nav.stderr);
expect('visual-nav exit 0', nav.code === 0, `exit ${nav.code}`);

const copyRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'stills-copy-'));
writeSite(path.join(copyRoot, 'out'), COPY_HOME);
writeRoutes(path.join(copyRoot, 'routes.json'));
const copy = await runFixture(copyRoot, []);
console.log(`placeholder fixture: exit ${copy.code} (expected 1)`);
expect('placeholder fixture exit 1', copy.code === 1, copy.stderr);
const copyHome = copy.results?.shots?.find((shot) => shot.key === 'home');
expect(
  'placeholder fixture names [COPY]',
  copyHome?.placeholders?.some((finding) => finding.hit === '[COPY]'),
  JSON.stringify(copyHome, null, 2)
);
const copyProbe = copy.results?.shots?.find((shot) => shot.key === 'not-found');
expect('placeholder fixture still requires the 404', copyProbe?.http === 404);

const probeRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'stills-404-'));
writeSite(path.join(probeRoot, 'out'), CLEAN_HOME);
writeRoutes(path.join(probeRoot, 'routes.json'));
const probe = await runFixture(probeRoot, [
  '--not-found-handling',
  'index-200',
]);
console.log(`404 probe fixture: exit ${probe.code} (expected 1)`);
expect('404 probe fixture exit 1', probe.code === 1, probe.stderr);
const probeShot = probe.results?.shots?.find(
  (shot) => shot.key === 'not-found'
);
expect(
  '404 probe fixture saw HTTP 200',
  probeShot?.http === 200 && probeShot?.httpOk === false,
  JSON.stringify(probeShot, null, 2)
);

const url = await runNode(
  checker,
  ['--url', 'https://example.com', '--sha', SHA],
  repoRoot
);
console.log(`url allowlist fixture: exit ${url.code} (expected 2)`);
expect('url allowlist exit 2', url.code === 2, url.stderr);
expect(
  'url allowlist says refused',
  /refused url/i.test(url.stderr),
  url.stderr
);

const noCompRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'stills-nocomp-'));
writeSite(path.join(noCompRoot, 'out'), CLEAN_HOME);
writeRoutes(path.join(noCompRoot, 'routes.json'));
const noComp = await runFixture(noCompRoot, []);
console.log(
  `no-comp fixture: exit ${noComp.code} (expected 0); comp status ${noComp.results?.shots?.map((shot) => shot.comp).join(', ')}`
);
expect('no-comp fixture exit 0', noComp.code === 0, noComp.stderr);
expect(
  'no-comp summary has its own section',
  /## No comp/.test(noComp.summary)
);
expect(
  'no-comp summary names the home target',
  /`\/` \(`home`\)/.test(noComp.summary) &&
    /design\/comps\/home\/renders/.test(noComp.summary)
);
expect(
  'no-comp is not recorded as pass',
  noComp.results?.shots?.every((shot) => shot.comp === 'no-comp') &&
    !/"comp":\s*"pass"/.test(JSON.stringify(noComp.results)),
  JSON.stringify(noComp.results?.shots, null, 2)
);

const prOnlyRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'stills-prcomp-'));
writeSite(path.join(prOnlyRoot, 'out'), CLEAN_HOME);
writeRoutes(path.join(prOnlyRoot, 'routes.json'));
initRepo(prOnlyRoot);
const prComp = 'design/comps/home/renders/cover-390.png';
commitFile(prOnlyRoot, prComp, ONE_PIXEL_PNG, 'comp only on the pr checkout');
const prOnly = await runFixture(prOnlyRoot, []);
console.log(
  `pr-only comp fixture: exit ${prOnly.code} (expected 0); comp status ${prOnly.results?.shots?.map((shot) => shot.comp).join(', ')}`
);
expect('pr-only comp fixture exit 0', prOnly.code === 0, prOnly.stderr);
const prHome = prOnly.results?.shots?.find((shot) => shot.key === 'home');
expect(
  'comp that exists only in the pr checkout is no comp',
  prHome?.comp === 'no-comp' && fs.existsSync(path.join(prOnlyRoot, prComp)),
  JSON.stringify(prHome, null, 2)
);
expect(
  'pr-only comp writes no side-by-side',
  !fs.existsSync(path.join(prOnlyRoot, 'checks', 'home-390x667-comp.jpg'))
);
expect(
  'pr-only comp stays in the no-comp table',
  /\| `\/` \(`home`\) \|/.test(prOnly.summary)
);

const compRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'stills-side-'));
writeSite(path.join(compRoot, 'out'), CLEAN_HOME);
writeRoutes(path.join(compRoot, 'routes.json'));
initRepo(compRoot);
commitFile(
  compRoot,
  'design/comps/home/renders/cover-390.png',
  ONE_PIXEL_PNG,
  'comp on the base branch'
);
git(compRoot, ['update-ref', 'refs/remotes/origin/main', 'HEAD']);
git(compRoot, ['rm', 'design/comps/home/renders/cover-390.png']);
git(compRoot, ['commit', '-m', 'pr checkout has no comp']);
const side = await runFixture(compRoot, []);
console.log(`side-by-side fixture: exit ${side.code} (expected 0)`);
expect('side-by-side fixture exit 0', side.code === 0, side.stderr);
const sideShot = side.results?.shots?.find((shot) => shot.key === 'home');
expect(
  'side-by-side status is side-by-side',
  sideShot?.comp === 'side-by-side'
);
const sideFile = path.join(compRoot, 'checks', 'home-390x667-comp.jpg');
const sideBytes = fs.existsSync(sideFile)
  ? fs.readFileSync(sideFile)
  : Buffer.alloc(0);
expect(
  'side-by-side jpeg exists',
  sideBytes.length > 8 && sideBytes[0] === 0xff && sideBytes[1] === 0xd8,
  sideFile
);
expect(
  'home is absent from the no-comp table',
  !/\| `\/` \(`home`\) \|/.test(side.summary)
);
expect(
  'side-by-side names the base blob',
  sideShot?.compRender ===
    'origin/main:design/comps/home/renders/cover-390.png',
  sideShot?.compRender
);

const tallRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'stills-tall-'));
writeSite(path.join(tallRoot, 'out'), TALL_HOME);
fs.writeFileSync(
  path.join(tallRoot, 'routes.json'),
  JSON.stringify(
    {
      viewports: [{ width: 390, height: 667 }],
      routes: [{ key: 'tall', path: '/', expect: '2xx', comp: 'home' }],
    },
    null,
    2
  )
);
const tall = await runFixture(tallRoot, []);
console.log(`tall page fixture: exit ${tall.code} (expected 0)`);
expect('tall page fixture exit 0', tall.code === 0, tall.stderr);
const tallShot = tall.results?.shots?.find((shot) => shot.key === 'tall');
expect(
  'tall page scroll height is over 16000',
  tallShot?.scrollHeight > 16000,
  JSON.stringify(tallShot, null, 2)
);
const tallFile = path.join(tallRoot, 'checks', 'tall-390x667.jpg');
const tallImage = sharp(tallFile, { limitInputPixels: false });
const tallMeta = await tallImage.metadata();
expect(
  'tall still is over 16000px',
  tallMeta.height > 16000,
  String(tallMeta.height)
);
const { data, info } = await sharp(tallFile, { limitInputPixels: false })
  .raw()
  .toBuffer({ resolveWithObject: true });

function magentaShare(y) {
  let hits = 0;
  for (let x = 0; x < info.width; x += 1) {
    const i = (y * info.width + x) * info.channels;
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (r > 180 && g < 80 && b > 100) hits += 1;
  }
  return hits / info.width;
}

const bottomShare = magentaShare(info.height - 40);
const topShare = magentaShare(10);
expect(
  'tall still keeps the bottom marker',
  bottomShare > 0.5 && topShare < 0.05,
  `bottom ${bottomShare} top ${topShare} height ${info.height}`
);

if (failed > 0) {
  console.error(`test-stills: ${failed} failed`);
  process.exit(1);
}
console.log('test-stills: ok');
