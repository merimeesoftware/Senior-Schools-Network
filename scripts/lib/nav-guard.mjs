/**
 * Lock a browser context to one origin.
 * Ported from marriages-of-grace `scripts/lib/nav-guard.mjs`.
 * Off-origin document navigations and redirects are aborted. data: and blob:
 * URLs stay allowed so in-page images still paint.
 */

export function originOf(url) {
  return new URL(url).origin;
}

export function isAllowedUrl(raw, allowedOrigin) {
  if (raw === 'about:blank') return true;
  let parsed;
  try {
    parsed = new URL(raw);
  } catch {
    return false;
  }
  if (parsed.origin === allowedOrigin) return true;
  if (parsed.protocol === 'data:' || parsed.protocol === 'blob:') return true;
  return false;
}

export async function attachNavGuard(context, origin) {
  const allowedOrigin = originOf(origin);
  const blocked = [];

  const onRoute = async (route) => {
    const request = route.request();
    const url = request.url();
    if (!isAllowedUrl(url, allowedOrigin)) {
      blocked.push({
        url,
        resourceType: request.resourceType(),
        isNavigation: request.isNavigationRequest(),
      });
      await route.abort('blockedbyclient');
      return;
    }

    // data: and blob: URLs are allowed and have nothing to fetch on the network.
    if (
      url.startsWith('data:') ||
      url.startsWith('blob:') ||
      url === 'about:blank'
    ) {
      await route.continue();
      return;
    }

    // Chromium follows redirects without a second route event. Fetch the
    // response ourselves so an off-origin Location is refused before the
    // browser can leave the locked origin.
    let response;
    try {
      response = await route.fetch({ maxRedirects: 0 });
    } catch {
      await route.abort('failed');
      return;
    }

    const status = response.status();
    if (status >= 300 && status < 400) {
      const location = response.headers()['location'];
      if (location) {
        let next = location;
        try {
          next = new URL(location, url).href;
        } catch {
          next = location;
        }
        if (!isAllowedUrl(next, allowedOrigin)) {
          blocked.push({
            url: next,
            resourceType: request.resourceType(),
            isNavigation: request.isNavigationRequest(),
          });
          await route.fulfill({
            status: 403,
            contentType: 'text/plain; charset=utf-8',
            body: 'off-origin redirect blocked',
          });
          return;
        }
      }
    }

    await route.fulfill({ response });
  };

  await context.route('**/*', onRoute);

  return {
    allowedOrigin,
    blocked,
    navigationBlocks() {
      return blocked.filter((entry) => entry.isNavigation);
    },
    async dispose() {
      await context.unroute('**/*', onRoute);
    },
  };
}
