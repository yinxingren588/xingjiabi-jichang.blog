import type { APIRoute } from 'astro';
import { AIRPORTS } from '../data/airports';

export const GET: APIRoute = async () => {
  const baseUrl = 'https://xingjiabi-jichang.blog';
  const today = new Date().toISOString().split('T')[0];

  const staticRoutes = [
    { url: `${baseUrl}/`, priority: '1.0', changefreq: 'daily', lastmod: today },
    { url: `${baseUrl}/airports/`, priority: '0.95', changefreq: 'daily', lastmod: today },
    { url: `${baseUrl}/pricing/`, priority: '0.95', changefreq: 'daily', lastmod: today },
    { url: `${baseUrl}/faq/`, priority: '0.90', changefreq: 'daily', lastmod: today },
    { url: `${baseUrl}/reviews/`, priority: '0.90', changefreq: 'daily', lastmod: today },
    { url: `${baseUrl}/guides/`, priority: '0.80', changefreq: 'weekly', lastmod: today },
    { url: `${baseUrl}/sitemap/`, priority: '0.70', changefreq: 'weekly', lastmod: today },
    { url: `${baseUrl}/disclaimer/`, priority: '0.30', changefreq: 'monthly', lastmod: '2026-01-01' },
  ];

  const guideRoutes = [
    { url: `${baseUrl}/guides/clash-verge-rev/`, priority: '0.80', changefreq: 'monthly', lastmod: '2026-03-02' },
    { url: `${baseUrl}/guides/shadowrocket-ios/`, priority: '0.75', changefreq: 'monthly', lastmod: '2026-03-02' },
    { url: `${baseUrl}/guides/sing-box-guide/`, priority: '0.75', changefreq: 'monthly', lastmod: '2026-03-02' },
  ];

  const reviewRoutes = AIRPORTS.map((airport) => ({
    url: `${baseUrl}/reviews/${airport.id}/`,
    priority: airport.id === 'yinxingren' ? '0.88' : '0.82',
    changefreq: 'weekly',
    lastmod: '2026-03-01',
  }));

  const allEntries = [...staticRoutes, ...reviewRoutes, ...guideRoutes];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${allEntries
  .map(
    (item) => `  <url>
    <loc>${item.url}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'X-Robots-Tag': 'noindex', // Sitemap itself doesn't need to be indexed as a webpage
    },
  });
};
