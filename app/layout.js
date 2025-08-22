
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export const metadata={title:'Teknovashop — Noticias y chollos tech',description:'La tienda tech con noticias y chollos actualizados a diario.'};
export default function RootLayout({children}){return(<html lang="es"><body><Header/><main className="container py-8">{children}</main><Footer/></body></html>);}
