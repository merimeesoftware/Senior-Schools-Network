// Unauthenticated health check. Static export writes the body to out/healthz.
// Keep this path out of the sitemap and the nav.
export const dynamic = 'force-static';

export function GET() {
  return new Response('ok\n', {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
