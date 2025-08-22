import CategoryGrid from '@/components/CategoryGrid';

export const metadata = { title: 'Categorías — Teknovashop' };

export default function CategoriesPage(){
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Categorías</h1>
      <CategoryGrid />
    </div>
  );
}
