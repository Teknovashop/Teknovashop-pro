import Parser from 'rss-parser';
import { NextResponse } from 'next/server';

export async function GET() {
  const parser = new Parser();
  const feeds = (process.env.NEWS_FEEDS_ES || '').split(',');
  let items = [];

  for (const url of feeds) {
    try {
      const feed = await parser.parseURL(url.trim());
      items.push(...feed.items.map(i => ({
        title: i.title,
        link: i.link,
        pubDate: i.pubDate,
        contentSnippet: i.contentSnippet
      })));
    } catch (e) {
      console.error("Error fetching feed:", url, e);
    }
  }

  items = items.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
  return NextResponse.json({ items });
}
