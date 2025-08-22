
import { getNews } from '@/app/lib/news';
import CarouselTop from '@/components/CarouselTop';
import SidebarProducts from '@/components/SidebarProducts';
import NewsList from '@/components/NewsList';
export const revalidate=3600;
export default async function Home(){const news=await getNews(6);return(<div className="grid grid-cols-1 lg:grid-cols-12 gap-6"><section className="lg:col-span-8 space-y-6"><header className="py-6"><h1 className="text-4xl md:text-5xl font-extrabold">La tienda <span className="text-brand-500">tech</span> con noticias y chollos<br/>actualizados cada día</h1><p className="mt-3 text-gray-300">Selección curada para comprar mejor.</p></header><CarouselTop/><NewsList items={news}/></section><aside className="lg:col-span-4"><SidebarProducts/></aside></div>);}
