/**
 * Preview-host allowlist and placeholder detectors.
 * Ported from marriages-of-grace `scripts/lib/visual-rules.mjs`, trimmed to
 * Senior Schools Network hosts.
 */

import fs from 'node:fs';
import path from 'node:path';

const DNS_LABEL = '(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)';

const ALLOWED_ORIGINS = [
  new RegExp(
    `^https://${DNS_LABEL}-senior-schools-network\\.${DNS_LABEL}\\.workers\\.dev$`,
    'i'
  ),
  new RegExp(
    `^https://senior-schools-network\\.${DNS_LABEL}\\.workers\\.dev$`,
    'i'
  ),
  /^https:\/\/seniorschools\.org$/i,
];

export const PLACEHOLDER_RULES = [
  { id: '[COPY]', pattern: /\[COPY\]/i },
  { id: 'Lorem ipsum', pattern: /lorem\s+ipsum/i },
  { id: 'TODO', pattern: /\bTODO\b/ },
];

export function checkPreviewUrl(input) {
  if (typeof input !== 'string' || input.trim() === '') {
    return { ok: false, reason: 'missing url' };
  }

  let url;
  try {
    url = new URL(input);
  } catch {
    return { ok: false, reason: 'invalid url' };
  }

  if (url.username || url.password) {
    return { ok: false, reason: 'credentials are not allowed' };
  }
  if (url.protocol !== 'https:') {
    return { ok: false, reason: 'https is required' };
  }
  if (url.pathname !== '/' && url.pathname !== '') {
    return { ok: false, reason: 'pass an origin, not a path' };
  }
  if (url.search || url.hash) {
    return { ok: false, reason: 'query and hash are not allowed' };
  }

  const origin = url.origin;
  const allowed = ALLOWED_ORIGINS.some((pattern) => pattern.test(origin));
  if (!allowed) {
    return { ok: false, reason: `origin is not allowlisted: ${origin}` };
  }
  return { ok: true, origin };
}

export function findPlaceholders(text) {
  if (!text) return [];
  const hits = [];
  for (const rule of PLACEHOLDER_RULES) {
    if (rule.pattern.test(text)) hits.push(rule.id);
  }
  return hits;
}

export function scanSurfaces(surfaces) {
  const findings = [];
  for (const [surface, text] of Object.entries(surfaces || {})) {
    for (const hit of findPlaceholders(text)) {
      findings.push({ surface, hit });
    }
  }
  return findings;
}

export function compLookedFor(template, width) {
  const name = template || '(no template)';
  return `design/comps/${name}/renders/*-${width}.webp|png|jpg`;
}

export function findCompRender(repoRoot, template, width) {
  if (!template || !/^[a-z0-9-]+$/i.test(template)) return null;
  if (width !== 390 && width !== 1440) return null;

  const dir = path.join(repoRoot, 'design', 'comps', template, 'renders');
  let names;
  try {
    names = fs.readdirSync(dir);
  } catch {
    return null;
  }

  const suffix = `-${width}`;
  const matches = names
    .filter((name) => {
      const extension = path.extname(name).toLowerCase();
      if (!['.webp', '.png', '.jpg', '.jpeg'].includes(extension)) return false;
      const base = name.slice(0, -extension.length);
      return base.endsWith(suffix);
    })
    .sort();

  if (matches.length === 0) return null;
  return path.join(dir, matches[0]);
}

export function loadRouteConfig(file) {
  let parsed;
  try {
    parsed = JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (error) {
    throw new Error(`could not read routes ${file}: ${error.message}`);
  }
  if (!parsed || !Array.isArray(parsed.routes) || parsed.routes.length === 0) {
    throw new Error(`routes missing in ${file}`);
  }
  if (!Array.isArray(parsed.viewports) || parsed.viewports.length === 0) {
    throw new Error(`viewports missing in ${file}`);
  }
  for (const viewport of parsed.viewports) {
    if (
      !Number.isInteger(viewport.width) ||
      !Number.isInteger(viewport.height) ||
      viewport.width < 1 ||
      viewport.height < 1
    ) {
      throw new Error(`invalid viewport in ${file}`);
    }
  }
  return parsed;
}

export function resolveSampleSlug({ outDir, textsDir, prefer }) {
  const slugs = new Set();

  const textsOut = outDir ? path.join(outDir, 'texts') : null;
  if (textsOut && fs.existsSync(textsOut)) {
    for (const name of fs.readdirSync(textsOut)) {
      const full = path.join(textsOut, name);
      if (name.endsWith('.html') && fs.statSync(full).isFile()) {
        slugs.add(name.slice(0, -'.html'.length));
      } else if (
        fs.existsSync(path.join(full, 'index.html')) &&
        fs.statSync(full).isDirectory()
      ) {
        slugs.add(name);
      }
    }
  }

  if (slugs.size === 0 && textsDir && fs.existsSync(textsDir)) {
    for (const name of fs.readdirSync(textsDir)) {
      if (
        name.endsWith('.md') &&
        fs.statSync(path.join(textsDir, name)).isFile()
      ) {
        slugs.add(name.slice(0, -'.md'.length));
      }
    }
  }

  if (prefer && slugs.has(prefer)) return prefer;
  return [...slugs].sort()[0] || null;
}

export function applySampleSlug(route, slug) {
  if (!route.sample) return route.path;
  if (!slug) {
    throw new Error('no text slug found in out/texts or public/texts');
  }
  const encoded = slug
    .split('/')
    .map((part) => encodeURIComponent(part))
    .join('/');
  return route.path.replaceAll('{slug}', encoded);
}

export function httpOk(expect, status) {
  if (expect === 404 || expect === '404') return status === 404;
  if (expect === '2xx' || expect == null) {
    return typeof status === 'number' && status >= 200 && status < 300;
  }
  return status === Number(expect);
}
