
import Link from 'next/link';

export default function Categories(){
  const cats = [
    { slug: 'tecnologia', name: 'Tecnología' },
    { slug: 'hogar', name: 'Hogar' },
    { slug: 'belleza', name: 'Belleza' },
    { slug: 'deportes', name: 'Deportes' }
  ];
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Categorías</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cats.map(c=>(
          <Link key={c.slug} href={`/categories/${c.slug}`} className="card p-6 hover:shadow-lg transition block">
            <div className="text-lg font-semibold">{c.name}</div>
            <div className="text-sm text-gray-500">Explorar →</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
