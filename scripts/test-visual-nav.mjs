/**
 * Off-origin navigations and redirects are aborted.
 * Two local origins only. No repo pages.
 */

import assert from 'node:assert/strict';
import http from 'node:http';

import { launchChrome } from './lib/capture.mjs';
import { attachNavGuard } from './lib/nav-guard.mjs';

function listen(handler) {
  const server = http.createServer(handler);
  return new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', () => {
      resolve({
        origin: `http://127.0.0.1:${server.address().port}`,
        close: () => new Promise((done) => server.close(() => done())),
      });
    });
  });
}

const other = await listen((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end('<!doctype html><title>other</title><p>other origin</p>');
});

const home = await listen((req, res) => {
  const url = new URL(req.url || '/', 'http://127.0.0.1');
  if (url.pathname === '/bounce') {
    res.writeHead(302, { Location: `${other.origin}/landed` });
    res.end();
    return;
  }
  if (url.pathname === '/ok') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<!doctype html><title>ok</title><p>same origin</p>');
    return;
  }
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(
    `<!doctype html><title>home</title><p>home</p><a id="away" href="${other.origin}/secret">away</a>`
  );
});

let browser;
let failed = 0;

function fail(name, error) {
  failed += 1;
  console.error(`not ok ${name}`);
  console.error(error);
}

try {
  browser = await launchChrome();
  const context = await browser.newContext();
  const guard = await attachNavGuard(context, home.origin);
  const page = await context.newPage();

  const same = await page.goto(`${home.origin}/ok`, { waitUntil: 'load' });
  assert.equal(same.status(), 200);
  assert.equal(page.url(), `${home.origin}/ok`);
  assert.equal(guard.blocked.length, 0);
  console.log('ok same-origin navigation');

  await page.goto(`${home.origin}/`, { waitUntil: 'load' });
  const before = guard.blocked.length;
  await page
    .evaluate((next) => {
      window.location.href = next;
    }, `${other.origin}/secret`)
    .catch(() => {});
  await new Promise((resolve) => setTimeout(resolve, 400));
  assert.notEqual(new URL(page.url()).origin, other.origin);
  const hopped = guard.blocked.slice(before);
  assert.ok(
    hopped.some((entry) => entry.url.startsWith(other.origin)),
    'off-origin hop was not blocked'
  );
  console.log('ok off-origin location change blocked');

  const redirectBefore = guard.blocked.length;
  let redirectError = null;
  try {
    await page.goto(`${home.origin}/bounce`, {
      waitUntil: 'load',
      timeout: 5000,
    });
  } catch (error) {
    redirectError = error;
  }
  assert.notEqual(new URL(page.url()).origin, other.origin);
  const redirected = guard.blocked.slice(redirectBefore);
  assert.ok(
    redirected.some(
      (entry) => entry.isNavigation && entry.url.startsWith(other.origin)
    ),
    `redirect was not blocked (${redirectError ? redirectError.message : page.url()})`
  );
  console.log('ok off-origin redirect blocked');

  await guard.dispose();
  await context.close();
} catch (error) {
  fail('nav guard', error);
} finally {
  if (browser) await browser.close().catch(() => {});
  await home.close();
  await other.close();
}

if (failed > 0) {
  console.error('visual-nav: failed');
  process.exit(1);
}
console.log('visual-nav: ok');
