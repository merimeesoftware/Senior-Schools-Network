/**
 * Serve a Next static export the way the Worker does:
 * `html_handling: auto-trailing-slash` and `not_found_handling: 404-page`.
 * See Cloudflare's HTML handling table (file.html without a slash,
 * folder/index.html with a slash).
 */

import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json',
};

function contentType(file) {
  return TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream';
}

function safeJoin(root, ...parts) {
  const rootResolved = path.resolve(root);
  const target = path.resolve(rootResolved, ...parts);
  if (target !== rootResolved && !target.startsWith(rootResolved + path.sep)) {
    return null;
  }
  return target;
}

function isFileInside(root, file) {
  if (!file) return false;
  try {
    const rootReal = fs.realpathSync(root);
    const real = fs.realpathSync(file);
    if (real !== rootReal && !real.startsWith(rootReal + path.sep))
      return false;
    return fs.statSync(real).isFile();
  } catch {
    return false;
  }
}

function find404(root, pathname) {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length > 0 && parts[parts.length - 1].includes('.')) parts.pop();
  while (true) {
    const candidate =
      parts.length === 0
        ? safeJoin(root, '404.html')
        : safeJoin(root, ...parts, '404.html');
    if (isFileInside(root, candidate)) return candidate;
    if (parts.length === 0) return null;
    parts.pop();
  }
}

function notFound(root, pathname, notFoundHandling) {
  if (notFoundHandling === 'index-200') {
    const index = safeJoin(root, 'index.html');
    if (isFileInside(root, index)) return { status: 200, file: index };
    return { status: 200, body: 'ok' };
  }
  const file = find404(root, pathname);
  if (file) return { status: 404, file };
  return { status: 404, body: 'Not found' };
}

export function resolveRequest(root, rawPathname, options = {}) {
  const notFoundHandling = options.notFoundHandling || '404-page';
  let pathname;
  try {
    pathname = decodeURIComponent(String(rawPathname || '/').split('?')[0]);
  } catch {
    return notFound(root, '/', notFoundHandling);
  }
  if (!pathname.startsWith('/')) pathname = `/${pathname}`;
  pathname = pathname.replace(/\/{2,}/g, '/');
  if (pathname.includes('\0'))
    return notFound(root, pathname, notFoundHandling);

  const relative = pathname.replace(/^\/+/, '');
  if (relative && !pathname.endsWith('/') && !relative.endsWith('.html')) {
    const exact = safeJoin(root, relative);
    if (isFileInside(root, exact)) return { status: 200, file: exact };
  }

  const trailing = pathname.length > 1 && pathname.endsWith('/');
  let stripped = trailing ? pathname.slice(0, -1) : pathname;
  let indexForm = false;
  if (stripped.endsWith('/index.html')) {
    stripped = stripped.slice(0, -'/index.html'.length) || '/';
    indexForm = true;
  } else if (stripped.endsWith('/index')) {
    stripped = stripped.slice(0, -'/index'.length) || '/';
    indexForm = true;
  } else if (stripped.endsWith('.html')) {
    stripped = stripped.slice(0, -'.html'.length) || '/';
  }

  if (stripped === '/' || stripped === '') {
    if (indexForm || pathname.endsWith('.html')) {
      if (pathname !== '/') return { status: 307, location: '/' };
    }
    const index = safeJoin(root, 'index.html');
    if (isFileInside(root, index)) return { status: 200, file: index };
    return notFound(root, pathname, notFoundHandling);
  }

  const logical = stripped.replace(/^\//, '');
  const htmlFile = safeJoin(root, `${logical}.html`);
  const indexFile = safeJoin(root, logical, 'index.html');
  const hasHtml = isFileInside(root, htmlFile);
  const hasIndex = isFileInside(root, indexFile);

  if (!hasHtml && !hasIndex) {
    return notFound(root, pathname, notFoundHandling);
  }

  if (hasHtml && hasIndex) {
    if (indexForm) {
      const dest = `${stripped}/`;
      if (pathname !== dest) return { status: 307, location: dest };
      return { status: 200, file: indexFile };
    }
    if (pathname.endsWith('.html')) return { status: 307, location: stripped };
    if (trailing) return { status: 200, file: indexFile };
    return { status: 200, file: htmlFile };
  }

  if (hasIndex) {
    if (indexForm || pathname.endsWith('.html')) {
      if (pathname !== stripped) return { status: 307, location: stripped };
    }
    if (!trailing) return { status: 307, location: `${stripped}/` };
    return { status: 200, file: indexFile };
  }

  if (pathname !== stripped) return { status: 307, location: stripped };
  return { status: 200, file: htmlFile };
}

export function startStaticServer(root, options = {}) {
  const notFoundHandling = options.notFoundHandling || '404-page';
  if (notFoundHandling !== '404-page' && notFoundHandling !== 'index-200') {
    return Promise.reject(
      new Error(`unknown notFoundHandling: ${notFoundHandling}`)
    );
  }

  const server = http.createServer((req, res) => {
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      res.writeHead(405, { Allow: 'GET, HEAD' });
      res.end();
      return;
    }
    const url = new URL(req.url || '/', 'http://127.0.0.1');
    const result = resolveRequest(root, url.pathname, { notFoundHandling });
    if (result.location) {
      const location = url.search
        ? `${result.location}${url.search}`
        : result.location;
      res.writeHead(result.status, { Location: location });
      res.end();
      return;
    }
    if (result.file) {
      const body = fs.readFileSync(result.file);
      res.writeHead(result.status, {
        'Content-Type': contentType(result.file),
        'Content-Length': body.length,
        'Cache-Control': 'no-store',
      });
      if (req.method === 'HEAD') res.end();
      else res.end(body);
      return;
    }
    const body = Buffer.from(result.body || '');
    res.writeHead(result.status, {
      'Content-Type': 'text/plain; charset=utf-8',
      'Content-Length': body.length,
    });
    if (req.method === 'HEAD') res.end();
    else res.end(body);
  });

  return new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', () => {
      const address = server.address();
      resolve({
        origin: `http://127.0.0.1:${address.port}`,
        close() {
          return new Promise((done) => server.close(() => done()));
        },
      });
    });
  });
}
