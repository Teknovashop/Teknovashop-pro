
import Link from 'next/link';
const CATS = [
  { slug: 'tecnologia', name: 'Tecnología' },
  { slug: 'hogar', name: 'Hogar' },
  { slug: 'belleza', name: 'Belleza' },
  { slug: 'deportes', name: 'Deportes' }
];

export default function CategoryGrid(){
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {CATS.map(c => (
        <Link key={c.slug} href={`/categories/${c.slug}`} className="card p-6 hover:shadow-lg transition block">
          <div className="text-lg font-semibold">{c.name}</div>
          <div className="text-sm text-gray-500">Ver productos →</div>
        </Link>
      ))}
    </div>
  );
}
