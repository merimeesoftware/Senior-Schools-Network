/**
 * Preview-host allowlist and placeholder detectors.
 * Ported from marriages-of-grace `scripts/lib/visual-rules.mjs`, trimmed to
 * Senior Schools Network hosts.
 */

import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
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

function isSafeRef(ref) {
  return (
    typeof ref === 'string' &&
    ref.length > 0 &&
    ref.length < 256 &&
    /^[A-Za-z0-9._/-]+$/.test(ref) &&
    !ref.includes('..') &&
    !ref.startsWith('-') &&
    !ref.startsWith('/') &&
    !ref.endsWith('/')
  );
}

function isSafeGitPath(gitPath) {
  return (
    typeof gitPath === 'string' &&
    gitPath.length > 0 &&
    gitPath.length < 512 &&
    /^[A-Za-z0-9._/-]+$/.test(gitPath) &&
    !gitPath.includes('..') &&
    !gitPath.startsWith('/') &&
    !gitPath.startsWith('-')
  );
}

export function resolveBaseRef(env = process.env) {
  if (isSafeRef(env.GITHUB_BASE_REF)) return env.GITHUB_BASE_REF;
  return 'main';
}

function gitShow(repoRoot, ref, gitPath) {
  if (!isSafeRef(ref) || !isSafeGitPath(gitPath)) return null;
  try {
    const bytes = execFileSync('git', ['show', `origin/${ref}:${gitPath}`], {
      cwd: repoRoot,
      encoding: 'buffer',
      stdio: ['ignore', 'pipe', 'ignore'],
      maxBuffer: 64 * 1024 * 1024,
    });
    if (!bytes || bytes.length === 0) return null;
    return bytes;
  } catch {
    return null;
  }
}

function gitList(repoRoot, ref, dir) {
  if (!isSafeRef(ref) || !isSafeGitPath(dir)) return [];
  try {
    const out = execFileSync(
      'git',
      ['ls-tree', '-r', '-z', '--name-only', `origin/${ref}`, dir],
      {
        cwd: repoRoot,
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'ignore'],
        maxBuffer: 1024 * 1024,
      }
    );
    return out.split('\0').filter(Boolean);
  } catch {
    return [];
  }
}

export function findCompRender(repoRoot, template, width, base) {
  if (!template || !/^[a-z0-9-]+$/i.test(template)) return null;
  if (width !== 390 && width !== 1440) return null;

  const ref = base || resolveBaseRef();
  if (!isSafeRef(ref)) return null;

  const dir = `design/comps/${template}/renders`;
  const suffix = `-${width}`;
  const matches = gitList(repoRoot, ref, dir)
    .map((name) => name.replaceAll('\\', '/'))
    .filter((name) => {
      if (!name.startsWith(`${dir}/`)) return false;
      const baseName = name.slice(dir.length + 1);
      if (!baseName || baseName.includes('/')) return false;
      const extension = path.posix.extname(baseName).toLowerCase();
      if (!['.webp', '.png', '.jpg', '.jpeg'].includes(extension)) {
        return false;
      }
      const stem = baseName.slice(0, -extension.length);
      return stem.endsWith(suffix);
    })
    .sort();

  if (matches.length === 0) return null;
  const gitPath = matches[0];
  const bytes = gitShow(repoRoot, ref, gitPath);
  if (!bytes) return null;

  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'stills-comp-'));
  const file = path.join(tmpDir, path.posix.basename(gitPath));
  fs.writeFileSync(file, bytes);
  return {
    file,
    source: `origin/${ref}:${gitPath}`,
    cleanup() {
      fs.rmSync(tmpDir, { recursive: true, force: true });
    },
  };
}

function parseRouteConfig(parsed, label) {
  if (!parsed || !Array.isArray(parsed.routes) || parsed.routes.length === 0) {
    throw new Error(`routes missing in ${label}`);
  }
  if (!Array.isArray(parsed.viewports) || parsed.viewports.length === 0) {
    throw new Error(`viewports missing in ${label}`);
  }
  for (const viewport of parsed.viewports) {
    if (
      !Number.isInteger(viewport.width) ||
      !Number.isInteger(viewport.height) ||
      viewport.width < 1 ||
      viewport.height < 1
    ) {
      throw new Error(`invalid viewport in ${label}`);
    }
  }
  return parsed;
}

export function loadRouteConfig(file) {
  let parsed;
  try {
    parsed = JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (error) {
    throw new Error(`could not read routes ${file}: ${error.message}`);
  }
  return parseRouteConfig(parsed, file);
}

const ROUTES_GIT_PATH = 'scripts/stills/routes.json';

export function loadRoutesFromBase(repoRoot, base) {
  const ref = base || resolveBaseRef();
  const bytes = isSafeRef(ref) ? gitShow(repoRoot, ref, ROUTES_GIT_PATH) : null;
  if (bytes) {
    let parsed;
    const label = `origin/${ref}:${ROUTES_GIT_PATH}`;
    try {
      parsed = JSON.parse(bytes.toString('utf8'));
    } catch (error) {
      throw new Error(`could not read routes ${label}: ${error.message}`);
    }
    return {
      config: parseRouteConfig(parsed, label),
      source: label,
      fallback: false,
    };
  }
  const file = path.join(repoRoot, ROUTES_GIT_PATH);
  return { config: loadRouteConfig(file), source: file, fallback: true };
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
