// app/page.js
export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { headers } from 'next/headers';

import CarouselTop from '@/components/CarouselTop';
import SidebarProducts from '@/components/SidebarProducts';
import CategoryGrid from '@/components/CategoryGrid';
import NewsList from '@/components/NewsList';

// --- Helper: construye una URL absoluta válida tanto en Vercel como en local ---
function getBaseUrl() {
  // 1) Preferimos variables de entorno si existen
  const env = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL;
  if (env) {
    // VERCEL_URL suele venir sin protocolo; NEXT_PUBLIC_SITE_URL normalmente ya lo incluye
    return env.startsWith('http') ? env : `https://${env}`;
  }

  // 2) Fallback: construir desde cabeceras (útil en SSR)
  const h = headers();
  const proto = h.get('x-forwarded-proto') ?? 'https';
  const host = h.get('host') ?? 'localhost:3000';
  return `${proto}://${host}`;
}

async function fetchNews() {
  try {
    const base = getBaseUrl();
    const res = await fetch(`${base}/api/news`, { cache: 'no-store' });
    if (!res.ok) return { items: [] };
    return res.json();
  } catch {
    return { items: [] };
  }
}

export default async function Home() {
  const { items = [] } = await fetchNews();

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
          <CarouselTop />
          <div>
            <h2 className="mb-2 text-xl font-bold">Noticias tecnológicas</h2>
            <NewsList items={items} />
          </div>
        </div>
        <div>
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
