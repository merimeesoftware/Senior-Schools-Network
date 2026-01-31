import type { MetadataRoute } from 'next';
import { getAllTextSlugs } from '@/lib/content/teasers';

// Sitemap listing all routes for SEO
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = 'https://seniorschoolsnetwork.org';
  const now = new Date().toISOString();

  // Static routes
  const staticRoutes = [
    { path: '', priority: 1 },
    { path: '/philosophy', priority: 0.9 },
    { path: '/network-directory', priority: 0.9 },
    { path: '/engage', priority: 0.8 },
    { path: '/contact', priority: 0.5 },
    { path: '/privacy', priority: 0.3 },
  ];

  // Dynamic text routes
  const textSlugs = await getAllTextSlugs();
  const textRoutes = textSlugs.map((slug) => ({
    path: `/texts/${encodeURIComponent(slug)}`,
    priority: 0.6,
  }));

  const allRoutes = [...staticRoutes, ...textRoutes];

  return allRoutes.map(({ path, priority }) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority,
  }));
}
