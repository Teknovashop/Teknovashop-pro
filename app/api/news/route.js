// app/api/news/route.js
import Parser from 'rss-parser';

export const dynamic = 'force-dynamic';          // avoid prerender at build
export const revalidate = 0;                     // no static cache
export const runtime = 'nodejs';                 // ensure Node runtime

const parser = new Parser({ timeout: 8000 });

function sanitizeList(list) {
  return (list || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
    .filter((u) => /^https?:\/\//i.test(u));
}

export async function GET() {
  try {
    const raw = process.env.NEWS_FEEDS_ES || '';
    const feeds = sanitizeList(raw);

    if (feeds.length === 0) {
      return Response.json({ items: [] }, { status: 200 });
    }

    const results = await Promise.allSettled(
      feeds.map(async (url) => {
        try {
          const feed = await parser.parseURL(url);
          return (feed.items || []).slice(0, 10).map((i) => ({
            title: i.title || '',
            link: i.link || '',
            isoDate: i.isoDate || i.pubDate || null,
            source: feed.title || '',
          }));
        } catch {
          return [];
        }
      })
    );

    const items = results
      .map((r) => (r.status === 'fulfilled' ? r.value : []))
      .flat()
      .sort((a, b) => new Date(b.isoDate || 0) - new Date(a.isoDate || 0))
      .slice(0, 30);

    return Response.json({ items });
  } catch (e) {
    return Response.json({ items: [] });
  }
}
