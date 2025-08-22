
import './globals.css';

export const metadata = {
  title: 'Teknovashop Pro',
  description: 'Tienda tech con noticias y chollos actualizada a diario.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-gray-50 text-gray-900">
        <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b">
          <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
            <a href="/" className="text-2xl font-extrabold">Teknova<span className="text-brand-600">shop</span></a>
            <nav className="space-x-6 text-sm font-medium">
              <a href="/" className="hover:text-brand-600">Inicio</a>
              <a href="/categories" className="hover:text-brand-600">Categorías</a>
              <a href="/newsletter" className="hover:text-brand-600">Newsletter</a>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-7xl px-4 py-8">{children}</main>
        <footer className="mt-16 border-t">
          <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-gray-600">
            © {new Date().getFullYear()} Teknovashop · Algunos enlaces son de afiliado.
          </div>
        </footer>
      </body>
    </html>
  );
}
