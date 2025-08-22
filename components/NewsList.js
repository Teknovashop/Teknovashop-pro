export default function NewsList({ items }){
  return (
    <div className="space-y-3">
      {items.map((n) => (
        <a key={n.link} href={n.link} target="_blank" rel="nofollow noopener"
           className="card block">
          <div className="text-xs text-gray-500">{n.source}</div>
          <div className="mt-1 font-semibold">{n.title}</div>
          <div className="mt-1 text-sm text-gray-500">{n.pubDate}</div>
        </a>
      ))}
    </div>
  );
}
