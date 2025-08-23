import dynamic from 'next/dynamic';

const CarouselTop = dynamic(() => import('@/components/CarouselTop'), { ssr: false });
const SidebarProducts = dynamic(() => import('@/components/SidebarProducts'), { ssr: false });
const NewsList = dynamic(() => import('@/components/NewsList'), { ssr: false });

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="hero-grad rounded-3xl p-8">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          La tienda <span className="text-violet-600">tech</span> con noticias y chollos
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
            <NewsList />
          </div>
        </div>
        <div>
          <SidebarProducts />
        </div>
      </section>
    </div>
  );
}
