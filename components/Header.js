import Link from 'next/link';

export default function Header(){
  return (
    <header className="hero-grad border-b border-gray-200">
      <div className="container flex items-center justify-between py-5">
        <Link href="/" className="text-2xl font-extrabold tracking-tight">
          <span className="text-gray-900">Teknova</span><span className="text-brand-600">shop</span>
        </Link>
        <nav className="flex gap-4 text-sm">
          <Link href="/" className="hover:text-brand-600">Inicio</Link>
          <Link href="/categories" className="hover:text-brand-600">Categorías</Link>
          <Link href="/newsletter" className="hover:text-brand-600">Newsletter</Link>
        </nav>
      </div>
    </header>
  );
}
