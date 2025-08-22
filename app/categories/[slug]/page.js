
import products from '@/data/products.json';

export default function CategoryPage({ params }){
  const list = (products||[]).filter(p => (p.category||'').toLowerCase() === (params.slug||'').toLowerCase());
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold capitalize">Categoría: {params.slug}</h1>
      {list.length === 0 ? <div className="text-sm text-gray-500">No hay productos en esta categoría aún.</div> : null}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map(p => (
          <a key={p.id} href={p.url} target="_blank" className="card p-4 hover:shadow-lg transition block">
            <img src={p.image} alt={p.title} className="w-full h-48 object-cover rounded-lg border" />
            <div className="mt-3">
              <div className="text-sm text-gray-500">{p.subtitle}</div>
              <h3 className="font-semibold">{p.title}</h3>
              <div className="text-sm text-gray-600">{p.price_text}</div>
              <div className="flex flex-wrap gap-1 mt-2">
                {p.badges?.map((b,i)=>(<span key={i} className="badge">{b}</span>))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
