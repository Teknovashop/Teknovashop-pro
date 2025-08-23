export default function ProductCard({ product }) {
  const imageUrl = product.image && product.image.trim() !== '' 
    ? product.image 
    : `https://via.placeholder.com/300x200.png?text=${encodeURIComponent(product.title)}`;

  return (
    <div className="border rounded-lg p-4 shadow-sm flex flex-col">
      <img src={imageUrl} alt={product.title} className="w-full h-40 object-cover rounded-md" />
      <h3 className="mt-2 font-semibold">{product.title}</h3>
      <p className="text-gray-600">{product.price}</p>
      <a href={product.url} target="_blank" rel="noopener sponsored"
         className="mt-2 inline-block bg-purple-600 text-white px-4 py-2 rounded">
        Ver oferta
      </a>
    </div>
  );
}
