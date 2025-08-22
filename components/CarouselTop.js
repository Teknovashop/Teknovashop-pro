'use client';
import dynamic from 'next/dynamic';
const Slider = dynamic(() => import('react-slick').then(m => m.default), { ssr: false });
import Image from 'next/image';
import Link from 'next/link';
import products from '@/data/products.json';

export default function CarouselTop(){
  const featured = products.filter(p => p.featured);
  const settings = {
    dots: true, arrows: false, infinite: true, autoplay: true, autoplaySpeed: 3500,
    slidesToShow: 3, slidesToScroll: 1, responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ]
  };
  return (
    <div className="card">
      <div className="mb-3 text-sm font-medium text-gray-500">Top ventas</div>
      <Slider {...settings}>
        {featured.map(p => (
          <div key={p.id} className="px-2">
            <div className="rounded-xl border border-gray-200 p-3">
              <div className="relative h-48 w-full overflow-hidden rounded-lg bg-gray-100">
                <Image src={p.image} alt={p.title} fill className="object-cover"/>
              </div>
              <div className="mt-2 line-clamp-2 font-semibold">{p.title}</div>
              <div className="text-sm text-gray-500">{p.price}</div>
              <Link href={p.url} target="_blank" rel="nofollow noopener" className="mt-2 inline-block rounded-lg bg-brand-600 px-3 py-1.5 text-white">
                Ver precio
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
