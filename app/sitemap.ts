import type { MetadataRoute } from 'next';

// Basic sitemap that lists the key top-level routes in this app.
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://seniorschoolsnetwork.org';
  const now = new Date().toISOString();

  const routes = [
    '',
    '/philosophy',
    '/schools',
    '/home-application',
    '/join-found',
    '/contact',
    '/gallery',
  ];

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.7,
  }));
}
