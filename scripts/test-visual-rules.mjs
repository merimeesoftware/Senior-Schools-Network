/**
 * Allowlist, placeholder, trailing-slash, and no-comp report checks.
 * Fixtures live in a temp directory. Nothing here reads rendered site copy.
 */

import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { CHROME_LAUNCH_ARGS } from './lib/capture.mjs';
import { isAllowedUrl } from './lib/nav-guard.mjs';
import { resolveRequest, startStaticServer } from './lib/static-server.mjs';
import { buildReport } from './lib/visual-report.mjs';
import {
  checkPreviewUrl,
  findCompRender,
  findPlaceholders,
  loadRouteConfig,
  resolveSampleSlug,
  scanSurfaces,
} from './lib/visual-rules.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, '..');

let failed = 0;

async function check(name, fn) {
  try {
    await fn();
    console.log(`ok ${name}`);
  } catch (error) {
    failed += 1;
    console.error(`not ok ${name}`);
    console.error(error);
  }
}

function allow(url) {
  const result = checkPreviewUrl(url);
  assert.equal(result.ok, true, result.reason || url);
  assert.equal(result.origin, new URL(url).origin);
}

function refuse(url, pattern) {
  const result = checkPreviewUrl(url);
  assert.equal(result.ok, false, url);
  if (pattern) assert.match(result.reason, pattern);
}

await check('allowlist accepts the three SSN origins', () => {
  allow('https://seniorschools.org');
  allow('https://seniorschools.org/');
  allow('https://senior-schools-network.example.workers.dev');
  allow('https://preview-senior-schools-network.my-account.workers.dev');
  allow('https://Feat-1-senior-schools-network.Sub.workers.dev');
});

await check('allowlist refuses everything else', () => {
  refuse('https://example.com');
  refuse('http://seniorschools.org', /https/);
  refuse('https://seniorschools.org/philosophy', /path/);
  refuse('https://user:pass@seniorschools.org', /credentials/);
  refuse('https://seniorschools.org/?x=1', /query/);
  refuse('https://www.seniorschools.org');
  refuse('https://seniorschools.org.evil.com');
  refuse('https://evil.seniorschools.org');
  refuse('https://preview.senior-schools-network.sub.workers.dev');
  refuse('https://senior-schools-network-preview.sub.workers.dev');
  refuse('https://foo.bar-senior-schools-network.sub.workers.dev');
  refuse('https://senior-schools-network.workers.dev');
  refuse('http://127.0.0.1:3000');
  refuse('https://127.0.0.1');
  refuse('', /missing/);
  refuse('not a url', /invalid/);
});

await check('placeholder detector flags COPY, lorem, and TODO only', () => {
  assert.deepEqual(findPlaceholders('Hero [COPY] here'), ['[COPY]']);
  assert.deepEqual(findPlaceholders('see [copy]'), ['[COPY]']);
  assert.deepEqual(findPlaceholders('Lorem ipsum dolor'), ['Lorem ipsum']);
  assert.deepEqual(findPlaceholders('ship TODO later'), ['TODO']);
  assert.deepEqual(findPlaceholders('todos and to-do'), []);
  assert.deepEqual(findPlaceholders('todo'), []);
  const findings = scanSurfaces({
    visible: 'clean',
    hidden: 'Lorem ipsum',
    attributes: 'data-x=TODO',
    html: '<p>[COPY]</p>',
  });
  assert.deepEqual(
    findings.map((finding) => `${finding.hit} in ${finding.surface}`),
    ['Lorem ipsum in hidden', 'TODO in attributes', '[COPY] in html']
  );
});

await check('nav guard allows one origin and blocks the other', () => {
  const origin = 'http://127.0.0.1:9';
  assert.equal(isAllowedUrl(`${origin}/philosophy`, origin), true);
  assert.equal(isAllowedUrl('about:blank', origin), true);
  assert.equal(isAllowedUrl('data:image/gif;base64,aaaa', origin), true);
  assert.equal(isAllowedUrl('https://example.com/x', origin), false);
  assert.equal(isAllowedUrl('http://127.0.0.1:10/', origin), false);
});

await check('chrome launch keeps the sandbox on', () => {
  assert.equal(CHROME_LAUNCH_ARGS.includes('--no-sandbox'), false);
});

await check('auto-trailing-slash matches the Worker table', () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'stills-html-'));
  fs.writeFileSync(path.join(root, 'file.html'), 'file');
  fs.mkdirSync(path.join(root, 'folder'));
  fs.writeFileSync(path.join(root, 'folder', 'index.html'), 'folder');
  fs.writeFileSync(path.join(root, '404.html'), 'missing');
  fs.writeFileSync(path.join(root, 'app.js'), 'js');

  const hit = (pathname) => resolveRequest(root, pathname);
  assert.deepEqual(
    { status: hit('/file').status, base: path.basename(hit('/file').file) },
    { status: 200, base: 'file.html' }
  );
  assert.deepEqual(hit('/file.html'), { status: 307, location: '/file' });
  assert.deepEqual(hit('/file/'), { status: 307, location: '/file' });
  assert.deepEqual(hit('/file/index'), { status: 307, location: '/file' });
  assert.deepEqual(hit('/file/index.html'), { status: 307, location: '/file' });
  assert.deepEqual(hit('/folder'), { status: 307, location: '/folder/' });
  assert.deepEqual(hit('/folder.html'), { status: 307, location: '/folder' });
  assert.equal(path.basename(hit('/folder/').file), 'index.html');
  assert.equal(hit('/folder/').status, 200);
  assert.deepEqual(hit('/folder/index'), { status: 307, location: '/folder' });
  assert.deepEqual(hit('/folder/index.html'), {
    status: 307,
    location: '/folder',
  });
  assert.equal(hit('/app.js').status, 200);
  assert.equal(hit('/missing').status, 404);
  assert.equal(path.basename(hit('/missing').file), '404.html');
  assert.equal(hit('/%2e%2e/%2e%2e/etc/passwd').status, 404);
  assert.equal(
    resolveRequest(root, '/missing', { notFoundHandling: 'index-200' }).status,
    200
  );
});

await check('served unknown path is 404 and index-200 is 200', async () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'stills-serve-'));
  fs.writeFileSync(path.join(root, 'index.html'), '<p>home</p>');
  fs.writeFileSync(path.join(root, '404.html'), '<p>missing</p>');
  const proper = await startStaticServer(root);
  try {
    const home = await fetch(`${proper.origin}/`);
    const missing = await fetch(`${proper.origin}/visual-check-404`);
    assert.equal(home.status, 200);
    assert.equal(missing.status, 404);
    assert.match(await missing.text(), /missing/);
  } finally {
    await proper.close();
  }

  const spa = await startStaticServer(root, { notFoundHandling: 'index-200' });
  try {
    const missing = await fetch(`${spa.origin}/visual-check-404`);
    assert.equal(missing.status, 200);
    assert.match(await missing.text(), /home/);
  } finally {
    await spa.close();
  }
});

await check('sample slug prefers the configured text, else the first', () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'stills-slug-'));
  const texts = path.join(root, 'texts');
  fs.mkdirSync(texts);
  fs.writeFileSync(path.join(texts, 'zeta.html'), '');
  fs.writeFileSync(path.join(texts, 'alpha.html'), '');
  fs.writeFileSync(
    path.join(texts, 'Boethius-the-Consolation-of-Philosophy.html'),
    ''
  );
  assert.equal(
    resolveSampleSlug({
      outDir: root,
      prefer: 'Boethius-the-Consolation-of-Philosophy',
    }),
    'Boethius-the-Consolation-of-Philosophy'
  );
  fs.rmSync(path.join(texts, 'Boethius-the-Consolation-of-Philosophy.html'));
  assert.equal(resolveSampleSlug({ outDir: root }), 'alpha');
});

await check('missing comp is named and is not a pass', () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'stills-comp-'));
  assert.equal(findCompRender(root, 'home', 390), null);
  fs.mkdirSync(path.join(root, 'design', 'comps', 'home', 'renders'), {
    recursive: true,
  });
  fs.writeFileSync(
    path.join(root, 'design', 'comps', 'home', 'renders', 'cover-3900.png'),
    ''
  );
  fs.writeFileSync(
    path.join(root, 'design', 'comps', 'home', 'renders', 'b-cover-390.png'),
    ''
  );
  fs.writeFileSync(
    path.join(root, 'design', 'comps', 'home', 'renders', 'a-cover-390.png'),
    ''
  );
  assert.equal(
    path.basename(findCompRender(root, 'home', 390)),
    'a-cover-390.png'
  );
  assert.equal(findCompRender(root, 'home', 1440), null);
  assert.equal(findCompRender(root, '../home', 390), null);

  const shot = {
    key: 'home',
    path: '/',
    viewport: '390x667',
    http: 200,
    expect: '2xx',
    httpOk: true,
    placeholders: [],
    placeholderOk: true,
    offOrigin: false,
    captureError: null,
    file: 'home-390x667.jpg',
    comp: 'no-comp',
    compLookedFor: 'design/comps/home/renders/*-390.webp|png|jpg',
    hardOk: true,
  };
  const report = buildReport({
    sha: 'abcdef1234567890',
    sha7: 'abcdef1',
    target: 'local build',
    shots: [shot],
    generatedAt: '2026-10-19T00:00:00.000Z',
    exitCode: 0,
  });
  assert.match(report.markdown, /## No comp/);
  assert.match(report.markdown, /`\/` \(`home`\)/);
  assert.match(report.markdown, /390x667/);
  assert.match(report.markdown, /design\/comps\/home\/renders\/\*-390/);
  assert.equal(report.results.shots[0].comp, 'no-comp');
  assert.doesNotMatch(JSON.stringify(report.results), /"comp":\s*"pass"/);
  assert.throws(() =>
    buildReport({
      sha: 'abcdef1234567890',
      sha7: 'abcdef1',
      target: 'local build',
      shots: [{ ...shot, comp: 'pass' }],
      generatedAt: '2026-10-19T00:00:00.000Z',
      exitCode: 0,
    })
  );
});

await check(
  'committed route list is the nine routes at three viewports',
  () => {
    const config = loadRouteConfig(
      path.join(repoRoot, 'scripts', 'stills', 'routes.json')
    );
    assert.equal(config.routes.length, 9);
    assert.deepEqual(
      config.viewports.map(
        (viewport) => `${viewport.width}x${viewport.height}`
      ),
      ['390x667', '390x844', '1440x900']
    );
    assert.equal(
      config.routes.find((route) => route.sample).path,
      '/texts/{slug}'
    );
    assert.equal(
      config.routes.find((route) => route.expect === 404).path,
      '/visual-check-404'
    );
    assert.equal(
      config.sample.prefer,
      'Boethius-the-Consolation-of-Philosophy'
    );
  }
);

if (failed > 0) {
  console.error(`visual-rules: ${failed} failed`);
  process.exit(1);
}
console.log('visual-rules: ok');
