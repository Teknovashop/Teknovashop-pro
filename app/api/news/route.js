// Force dynamic execution; do not prerender
export const dynamic = 'force-dynamic';
export const revalidate = 0;

import Parser from 'rss-parser';

const parser = new Parser({
  headers: {
    'user-agent': 'Mozilla/5.0 (compatible; teknovashop/1.0)'
  },
  timeout: 10000
});

const DEFAULT_FEEDS = [
  'https://www.xataka.com/tag/inteligencia-artificial/rss2.xml',
  'https://www.xataka.com/tag/tecnologia/rss2.xml',
  'https://www.genbeta.com/feed',
  'https://hipertextual.com/tag/tecnologia/feed',
  'https://news.google.com/rss?hl=es-419&gl=ES&ceid=ES:es&q=inteligencia%20artificial%20OR%20tecnolog%C3%ADa'
];

function parseList(val) {
  if (!val) return DEFAULT_FEEDS;
  return val
    .split(/[\n,]/)
    .map(s => s.trim())
    .filter(Boolean);
}

export async function GET() {
  const feeds = parseList(process.env.NEWS_FEEDS_ES);
  const items = [];

  await Promise.all(feeds.map(async (url) => {
    try {
      const feed = await parser.parseURL(url);
      const source = (feed?.title || new URL(url).hostname);
      (feed?.items || []).slice(0, 20).forEach(it => {
        items.push({
          title: it.title || '',
          link: it.link || '',
          isoDate: it.isoDate || it.pubDate || null,
          source
        });
      });
    } catch (err) {
      console.error('Feed fail', url, err?.message);
    }
  }));

  items.sort((a,b) => new Date(b.isoDate || 0) - new Date(a.isoDate || 0));
  return Response.json({ items: items.slice(0, 30) });
}
