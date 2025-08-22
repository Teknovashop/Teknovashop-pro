'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product = {} }) {
  const {
    title = 'Producto',
    price,
    url = '#',
    image,
    clickText = 'Ver oferta',
  } = product || {};

  const safeImage = image || '/images/placeholder-product.png';

  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-52 w-full overflow-hidden bg-gray-50">
        <Image
          src={safeImage}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={false}
          unoptimized={true}
        />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="line-clamp-2 font-medium">{title}</h3>
        {price ? <p className="text-sm text-gray-600">{price}</p> : null}
        <Link href={url} target="_blank" rel="nofollow noopener" className="inline-flex items-center rounded-xl bg-brand-600 px-3 py-2 text-white hover:bg-brand-700 transition-colors text-sm">
          {clickText}
        </Link>
      </div>
    </div>
  );
}
