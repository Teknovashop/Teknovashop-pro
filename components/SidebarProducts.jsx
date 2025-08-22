
import products from '@/data/products.json';

function Item({p}){
  return (
    <div className="card p-4 flex items-center gap-3">
      <img src={p.image} alt={p.title} className="w-16 h-16 object-cover rounded-md border" />
      <div className="flex-1">
        <div className="text-sm font-semibold">{p.title}</div>
        <div className="text-xs text-gray-500">{p.price_text}</div>
        <a href={p.url} target="_blank" className="btn mt-2 text-xs">Ver oferta</a>
      </div>
    </div>
  );
}

export default function SidebarProducts(){
  const items = (products||[]).filter(p => p.sidebar).slice(0,6);
  return (
    <div className="space-y-4">
      {items.map(p => <Item key={p.id} p={p}/>)}
    </div>
  );
}
