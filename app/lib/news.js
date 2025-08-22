import Parser from 'rss-parser'

const parser = new Parser({
  timeout: 10000,
  headers: { 'User-Agent': 'TeknovashopBot/1.0' },
})

// Feeds de tecnología en español
const FEEDS = [
  'https://www.xataka.com/tag/tecnologia/rss2.xml',
  'https://www.genbeta.com/rss',
  'https://www.elespanol.com/elandroidelibre/rss',
  'https://www.hipertextual.com/tecnologia/feed',
  'https://www.applesfera.com/feed',
]

export async function fetchNewsES(limit = 16) {
  const items = []
  for (const url of FEEDS) {
    try {
      const feed = await parser.parseURL(url)
      for (const it of (feed.items || [])) {
        items.push({
          title: it.title || '',
          link: it.link || '#',
          date: it.isoDate || it.pubDate || null,
          source: feed.title || new URL(url).hostname,
        })
      }
    } catch (e) {
      // Ignorar errores puntuales de un feed para no romper la lista
    }
  }
  items.sort((a, b) => (new Date(b.date || 0)) - (new Date(a.date || 0)))
  return items.slice(0, limit)
}
