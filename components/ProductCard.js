'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductCard({ p }) {
  const img = p.image || '/images/placeholder-product.png'
  return (
    <div className="rounded-xl border p-3 bg-white shadow-sm">
      <div className="relative h-52 w-full overflow-hidden rounded-lg">
        <Image
          src={img}
          alt={p.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={false}
        />
      </div>
      <h3 className="mt-3 line-clamp-2 font-semibold">{p.title}</h3>
      {p.price && <p className="text-sm text-gray-600 mt-1">{p.price}</p>}
      <Link
        href={p.url}
        className="mt-3 inline-flex rounded-lg bg-brand-600 px-3 py-2 text-white hover:bg-brand-700"
        target="_blank" rel="nofollow sponsored noopener"
      >
        Ver precio
      </Link>
    </div>
  )
}
