import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ p }){
  return (
    <div className="card flex gap-4">
      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-gray-100">
        <Image src={p.image} alt={p.title} fill sizes="96px" className="object-cover"/>
      </div>
      <div className="min-w-0">
        <h3 className="font-semibold line-clamp-2">{p.title}</h3>
        <div className="mt-1 text-sm text-gray-500">{p.price}</div>
        <div className="mt-2">
          <Link href={p.url} target="_blank" rel="nofollow noopener" className="rounded-lg bg-brand-600 px-3 py-1.5 text-white">
            Ver oferta
          </Link>
        </div>
      </div>
    </div>
  );
}
