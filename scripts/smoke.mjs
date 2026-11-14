/**
 * Post-build checks for the static export.
 * Run after `bun run build`. Does not start a server.
 */

import fs from 'node:fs';

const healthPath = 'out/healthz';
const philosophyPath = 'out/philosophy.html';
const sitemapPath = 'out/sitemap.xml';
const homePath = 'out/index.html';

function fail(message) {
  console.error(`smoke: ${message}`);
  process.exit(1);
}

if (!fs.existsSync(healthPath) || !fs.statSync(healthPath).isFile()) {
  fail(`missing ${healthPath}`);
}

const health = fs.readFileSync(healthPath, 'utf8');
if (health.trim() !== 'ok') {
  fail(`${healthPath} must contain ok, got ${JSON.stringify(health)}`);
}

if (!fs.existsSync(philosophyPath) || !fs.statSync(philosophyPath).isFile()) {
  fail(`missing ${philosophyPath}`);
}

if (!fs.existsSync(sitemapPath)) {
  fail(`missing ${sitemapPath}`);
}
const sitemap = fs.readFileSync(sitemapPath, 'utf8');
if (sitemap.includes('healthz')) {
  fail(`${sitemapPath} lists healthz`);
}

if (!fs.existsSync(homePath)) {
  fail(`missing ${homePath}`);
}
const home = fs.readFileSync(homePath, 'utf8');
if (home.includes('/healthz')) {
  fail(`${homePath} links to /healthz`);
}

console.log(`${healthPath}: ${JSON.stringify(health)}`);
console.log(`${philosophyPath}: present`);
