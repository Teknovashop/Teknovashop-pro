import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Teknovashop Pro',
  description: 'Noticias tech + chollos con afiliados',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main className="container py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
