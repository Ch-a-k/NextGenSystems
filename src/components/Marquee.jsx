export default function Marquee({ items = [] }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-mask overflow-hidden">
      <div className="marquee-track flex min-w-max gap-8 py-6">
        {doubled.map((it, i) => (
          <span key={i} className="text-white/70">{it}</span>
        ))}
      </div>
    </div>
  );
}


