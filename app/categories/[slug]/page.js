import ProductCard from '@/components/ProductCard';
import products from '@/data/products.json' assert { type: 'json' };

export const dynamic = 'force-static';

const CATEGORIES = [
  { slug: 'tecnologia', label: 'Tecnología' },
  { slug: 'deportes', label: 'Deportes' },
  { slug: 'belleza', label: 'Belleza' },
  { slug: 'hogar', label: 'Hogar' },
];

export async function generateStaticParams() {
  return CATEGORIES.map(c => ({ slug: c.slug }));
}

export default function CategoryPage({ params }) {
  const slug = params?.slug;
  const cat = CATEGORIES.find(c => c.slug === slug);
  const list = (products || []).filter(p => (p.category || '').toLowerCase() === slug);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">{cat ? cat.label : 'Categoría'}</h1>
      {list.length === 0 ? (
        <p className="text-gray-600">No hay productos aún en esta categoría.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, idx) => (
            <ProductCard key={p.id || idx} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
