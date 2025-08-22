
'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function CarouselTop({ items = [] }){
  const settings = {
    dots: true, arrows: false, infinite: true,
    slidesToShow: 3, slidesToScroll: 1, autoplay: true, autoplaySpeed: 3500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640,  settings: { slidesToShow: 1 } }
    ]
  };
  if(!items?.length) return <div className="card p-6 text-sm text-gray-500">Sin productos destacados todavía.</div>;
  return (
    <div className="card p-4">
      <Slider {...settings}>
        {items.map(p => (
          <div key={p.id}>
            <div className="h-full card p-4">
              <img src={p.image} alt={p.title} className="w-full h-48 object-cover rounded-lg border" />
              <div className="mt-3">
                <div className="text-sm text-gray-500">{p.subtitle}</div>
                <h3 className="font-semibold">{p.title}</h3>
                <div className="text-sm text-gray-600">{p.price_text}</div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {p.badges?.map((b,i)=>(<span key={i} className="badge">{b}</span>))}
                </div>
                <a href={p.url} target="_blank" className="btn mt-3">Ver precio</a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
