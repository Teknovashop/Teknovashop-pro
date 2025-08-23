'use client';

import { useEffect, useState } from 'react';

export default function SidebarProducts() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/api/products').then(r => r.json()).then(d => {
      const all = d.products || d || [];
      setItems(all.filter(p => (p.tag || []).includes('quick')).slice(0, 6));
    }).catch(()=>{});
  }, []);

  return (
    <div className="space-y-3">
      {items.map(p => (
        <a key={p.id} href={p.url} target="_blank" rel="nofollow sponsored noopener"
           className="block rounded-xl border p-4 hover:shadow-sm">
          <div className="font-medium">{p.title}</div>
          {p.price != null && <div className="text-sm text-gray-500">{p.price.toFixed(2)} €</div>}
          <div className="mt-1 inline-flex items-center text-violet-600 text-sm">Ver oferta</div>
        </a>
      ))}
      {!items.length && <div className="text-sm text-gray-400">Cargando ofertas…</div>}
    </div>
  );
}
