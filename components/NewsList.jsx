'use client';

import { useEffect, useState } from 'react';

export default function NewsList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetch('/api/news').then(r => r.json()).then(d => {
      if (mounted) setItems(d.items || []);
    }).catch(()=>{}).finally(()=>setLoading(false));
    return () => { mounted = false; };
  }, []);

  if (loading) return <div className="text-sm text-gray-500">Cargando noticias…</div>;
  if (!items.length) return <div className="text-sm text-gray-500">Sin noticias por ahora.</div>;

  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {items.map((n, i) => (
        <a key={i} href={n.link} target="_blank" rel="noopener noreferrer nofollow"
           className="block rounded-xl border p-4 hover:shadow-sm">
          <div className="text-xs text-gray-400">{new Date(n.isoDate || Date.now()).toLocaleString('es-ES')}</div>
          <div className="font-medium">{n.title}</div>
          <div className="text-xs text-gray-500 mt-1">{n.source}</div>
        </a>
      ))}
    </div>
  );
}
