import products from '@/data/products.json';
import ProductCard from '@/components/ProductCard';

export async function generateStaticParams(){
  const cats = Array.from(new Set(products.map(p => p.category))).map(slug => ({ slug }));
  return cats;
}

export default function CategoryPage({ params }){
  const items = products.filter(p => p.category === params.slug);
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold capitalize">Categoría: {params.slug}</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(p => <ProductCard key={p.id} p={p} />)}
      </div>
    </div>
  );
}
