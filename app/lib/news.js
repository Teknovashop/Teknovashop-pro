import Parser from 'rss-parser';

const parser = new Parser();
const FEEDS = [
  'https://www.theverge.com/rss/index.xml',
  'https://www.engadget.com/rss.xml'
];

export async function getNews(limit = 6){
  const results = await Promise.all(FEEDS.map(async (u) => {
    try {
      const feed = await parser.parseURL(u);
      const source = (new URL(feed.link || u)).hostname.replace('www.','');
      return (feed.items || []).slice(0, 6).map(it => ({
        title: it.title || '',
        link: it.link || '#',
        pubDate: it.isoDate || it.pubDate || '',
        source
      }));
    } catch {
      return [];
    }
  }));
  return results.flat().slice(0, limit);
}
