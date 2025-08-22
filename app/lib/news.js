
import Parser from 'rss-parser';
const FEEDS=['https://www.theverge.com/rss/index.xml','https://www.engadget.com/rss.xml'];
const parser=new Parser();
export async function getNews(limit=8){const out=[];for(const url of FEEDS){try{const feed=await parser.parseURL(url);for(const item of feed.items.slice(0,6)){out.push({id:item.guid||item.link,title:item.title,link:item.link,source:feed.title,date:item.isoDate||item.pubDate});}}catch(e){console.error('RSS',url,e?.message);} }out.sort((a,b)=>new Date(b.date||0)-new Date(a.date||0));return out.slice(0,limit);}
