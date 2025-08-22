
import products from '@/data/products.json';
export const revalidate = 0;
export const dynamic = 'force-dynamic';

export async function GET(){
  try{
    const items = (products||[]);
    return Response.json({ items });
  }catch(e){
    return Response.json({ items: [] });
  }
}
