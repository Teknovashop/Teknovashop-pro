'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function CarouselTop() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/api/products').then(r => r.json()).then(d => {
      const all = d.products || d || [];
      setItems(all.filter(p => (p.tag || []).includes('top')).slice(0, 10));
    }).catch(()=>{});
  }, []);

  if (!items.length) return <div className="h-48 grid place-items-center text-gray-400">Cargando top ventas…</div>;

  return (
    <div className="grid sm:grid-cols-3 gap-6">
      {items.map((p) => (
        <div key={p.id} className="rounded-2xl border p-4">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-gray-100">
            {p.image && (
              <Image src={p.image} alt={p.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
            )}
          </div>
          <div className="mt-3 font-medium">{p.title}</div>
          {p.price != null && <div className="text-sm text-gray-500">{p.price.toFixed(2)} €</div>}
          <a href={p.url} target="_blank" rel="nofollow sponsored noopener"
             className="inline-block mt-2 rounded-full bg-violet-600 px-4 py-2 text-white text-sm">Ver precio</a>
        </div>
      ))}
    </div>
  );
}
