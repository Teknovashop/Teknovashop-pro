
'use client';
export default function NewsList({ items = [] }){
  if(!items?.length) return <div className="text-sm text-gray-500">Cargando noticias…</div>;
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {items.map((n,idx)=>(
        <a key={idx} href={n.link} target="_blank" className="card p-4 hover:shadow-lg transition block">
          <div className="text-xs text-gray-500">{n.date} · {n.source}</div>
          <h3 className="font-semibold mt-1">{n.title}</h3>
          {n.summary ? <p className="text-sm text-gray-600 mt-1 line-clamp-2">{n.summary}</p> : null}
        </a>
      ))}
    </div>
  );
}
