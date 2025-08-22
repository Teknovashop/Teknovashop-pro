import products from '@/data/products.json';
import ProductCard from './ProductCard';

export default function SidebarProducts(){
  const picks = products.slice(0,6);
  return (
    <aside className="space-y-3">
      <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">Ofertas rápidas</h3>
      {picks.map(p => <ProductCard key={p.id} p={p} />)}
    </aside>
  );
}
