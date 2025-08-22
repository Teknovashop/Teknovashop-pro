'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function ProductCard({ product }) {
  const [failed, setFailed] = useState(false)
  const img = failed || !product.image ? '/images/placeholder-product.png' : product.image

  return (
    <div className="group relative overflow-hidden rounded-2xl border bg-white">
      <div className="aspect-[4/3] overflow-hidden">
        <Image
          src={img}
          alt={product.title}
          fill
          sizes="(max-width:768px) 100vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-105"
          onError={() => setFailed(true)}
          priority={false}
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold leading-tight">{product.title}</h3>
        {product.price ? <div className="mt-1 font-bold text-brand-600">{product.price}</div> : null}
        <a
          href={product.url}
          target="_blank"
          className="mt-3 inline-flex items-center rounded-full bg-brand-600 px-4 py-2 text-white hover:bg-brand-700">
          Ver oferta
        </a>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/0 via-black/0 to-black/0 group-hover:via-black/5 group-hover:to-black/10 transition"></div>
    </div>
  )
}
