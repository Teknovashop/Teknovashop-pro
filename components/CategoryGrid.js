import Link from 'next/link';

const CATS = [
  { slug:'tecnologia', name:'Tecnología' },
  { slug:'hogar', name:'Hogar' },
  { slug:'belleza', name:'Belleza' },
  { slug:'deportes', name:'Deportes' },
];

export default function CategoryGrid(){
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {CATS.map(c => (
        <Link key={c.slug} href={`/categories/${c.slug}`} className="card text-center font-semibold">
          {c.name}
        </Link>
      ))}
    </div>
  );
}
