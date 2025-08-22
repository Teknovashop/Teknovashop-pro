
import Parser from 'rss-parser';

export const runtime = 'nodejs';
export const revalidate = 0;
export const dynamic = 'force-dynamic';

const DEFAULT_FEEDS = [
  'https://www.xataka.com/tag/inteligencia-artificial/rss2.xml',
  'https://www.xataka.com/tag/tecnologia/rss2.xml',
  'https://hipertextual.com/tag/tecnologia/feed',
  'https://www.genbeta.com/feed',
  'https://news.google.com/rss?hl=es-419&gl=ES&ceid=ES:es&q=inteligencia%20artificial%20OR%20tecnolog%C3%ADa'
];

export async function GET(){
  try{
    const parser = new Parser({ timeout: 10000 });
    const feeds = (process.env.NEWS_FEEDS_ES?.split(',').filter(Boolean)) || DEFAULT_FEEDS;
    const results = await Promise.allSettled(feeds.map(f => parser.parseURL(f)));
    const items = [];
    for(const r of results){
      if(r.status === 'fulfilled'){
        const feed = r.value;
        for(const it of (feed.items||[])){
          items.push({
            title: it.title,
            link: it.link,
            date: it.isoDate || it.pubDate || '',
            source: feed.title?.replace(/\s*RSS.*/i,'') || 'RSS',
            summary: it.contentSnippet || ''
          });
        }
      }
    }
    // sort by date desc
    items.sort((a,b)=> (new Date(b.date) - new Date(a.date)));
    return Response.json({ items: items.slice(0,12) }, { headers: { 'Cache-Control': 'no-store' }});
  }catch(e){
    return Response.json({ items: [] }, { status: 200 });
  }
}
