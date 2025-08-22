'use client'
import Link from 'next/link'

export default function NewsList({ items = [] }) {
  if (!items.length) return <p className="text-sm text-gray-500">Sin noticias por ahora.</p>
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((n, idx) => (
        <Link key={idx} href={n.link} target="_blank" className="block rounded-xl border p-4 hover:bg-gray-50">
          <div className="text-xs text-gray-500 mb-1">{n.source}</div>
          <div className="font-semibold line-clamp-2">{n.title}</div>
          {n.date && <div className="mt-1 text-xs text-gray-400">{new Date(n.date).toLocaleString('es-ES')}</div>}
        </Link>
      ))}
    </div>
  )
}
