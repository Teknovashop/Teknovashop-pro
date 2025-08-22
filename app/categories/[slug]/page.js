
import products from '@/data/products.json';import ProductCard from '@/components/ProductCard';
export async function generateStaticParams(){const cats=Array.from(new Set(products.map(p=>p.category)));return cats.map(c=>({slug:c}));}
export default function Category({params}){const list=products.filter(p=>p.category===params.slug);return(<div className='space-y-6'><h1 className='text-3xl font-bold capitalize'>Categoría: {params.slug}</h1><div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>{list.map(p=><ProductCard key={p.id} product={p}/>)}</div></div>);}
