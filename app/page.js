
import CarouselTop from '@/components/CarouselTop';
import SidebarProducts from '@/components/SidebarProducts';
import CategoryGrid from '@/components/CategoryGrid';
import NewsList from '@/components/NewsList';
import productsAll from '@/data/products.json';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

function getBaseUrl(){
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '');
  return (envUrl || 'http://localhost:3000').replace(/\/$/,''); 
}

async function fetchNews(){
  const base = getBaseUrl();
  const res = await fetch(`${base}/api/news`, { cache: 'no-store' });
  if(!res.ok) return { items: [] };
  return res.json();
}

export default async function Home(){
  const { items } = await fetchNews();
  const featured = (productsAll||[]).filter(p => p.featured).slice(0,6);
  return (
    <div className="space-y-8">
      <section className="hero-grad rounded-3xl p-8">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          La tienda <span className="text-brand-600">tech</span> con noticias y chollos
        </h1>
        <p className="mt-2 max-w-2xl text-gray-600">
          Selección curada de gadgets y electrónica que rinde en comisión. Actualizado diariamente.
        </p>
      </section>

      <section className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="mb-2 text-xl font-bold">Top ventas</h2>
          <CarouselTop items={featured} />
          <div>
            <h2 className="mb-2 text-xl font-bold">Noticias tecnológicas</h2>
            <NewsList items={items} />
          </div>
        </div>
        <div>
          <h2 className="mb-2 text-xl font-bold">Ofertas rápidas</h2>
          <SidebarProducts />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">Categorías</h2>
        <CategoryGrid />
      </section>
    </div>
  );
}
