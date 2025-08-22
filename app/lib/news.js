import Parser from 'rss-parser'

const parser = new Parser({
  timeout: 10000,
  headers: { 'User-Agent': 'TeknovashopBot/1.0 (+https://teknovashop-pro.vercel.app)' }
})

const FEEDS_ES = [
  'https://www.xataka.com/tag/feeds/rss2.xml',
  'https://www.genbeta.com/tag/feeds/rss2.xml',
  'https://hipertextual.com/feed',
  'https://www.elespanol.com/elandroidelibre/rss',
  'https://www.applesfera.com/tag/feeds/rss2.xml',
  // Google News en español sobre IA y tecnología
  'https://news.google.com/rss/search?q=inteligencia+artificial&hl=es-ES&gl=ES&ceid=ES:es',
  'https://news.google.com/rss/search?q=tecnologia&hl=es-ES&gl=ES&ceid=ES:es'
]

function norm(item) {
  const pubDate = item.isoDate || item.pubDate || item.published || item.updated
  const ts = pubDate ? new Date(pubDate).getTime() : Date.now()
  const link = item.link || item.guid || ''
  let source = item.creator || item['dc:creator'] || item.source || (item?.['content:encoded'] ? '' : '')
  // fallback al dominio del enlace
  try {
    if (!source && link) source = new URL(link).hostname.replace('www.', '')
  } catch {}
  const title = (item.title || '').trim()
  const description = (item.contentSnippet || item.summary || '').trim()
  return { title, link, pubDate: ts, source, description }
}

export async function fetchNewsES(limit = 16) {
  const results = []
  await Promise.allSettled(FEEDS_ES.map(async (url) => {
    const feed = await parser.parseURL(url)
    for (const it of (feed.items || [])) {
      const x = norm(it)
      if (x.title && x.link) results.push(x)
    }
  }))
  // dedupe por link
  const seen = new Set()
  const dedup = []
  for (const r of results) {
    if (seen.has(r.link)) continue
    seen.add(r.link)
    dedup.push(r)
  }
  dedup.sort((a,b) => b.pubDate - a.pubDate)
  return dedup.slice(0, limit)
}
