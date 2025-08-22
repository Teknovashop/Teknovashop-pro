'use client'
import Link from 'next/link'

export default function NewsList({ items = [] }) {
  if (!items.length) {
    return <div className="rounded-lg border p-4 text-sm text-gray-500">No hay noticias por ahora. Inténtalo en unos minutos.</div>
  }
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((n, i) => (
        <Link key={i} href={n.link} target="_blank" className="rounded-xl border p-4 hover:shadow-sm transition">
          <div className="text-xs text-gray-500">{new Date(n.pubDate).toLocaleString('es-ES')} · {n.source}</div>
          <h3 className="mt-1 font-semibold">{n.title}</h3>
          {n.description ? <p className="mt-1 text-sm text-gray-600 line-clamp-3">{n.description}</p> : null}
        </Link>
      ))}
    </div>
  )
}
