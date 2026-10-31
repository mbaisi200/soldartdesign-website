import { Zap } from 'lucide-react';

const items = [
  'Serralheria Fina',
  'Caldeiraria',
  'Manutenção Industrial',
  'Portões & Estruturas',
  'Projetos Sob Medida',
  'Itatiba — SP',
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="relative border-y border-white/10 bg-ink-900/60 py-5 overflow-hidden">
      <div className="animate-marquee flex w-max items-center gap-10 pr-10">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-display text-lg sm:text-xl font-medium uppercase tracking-[0.25em] text-zinc-400 whitespace-nowrap">
              {item}
            </span>
            <Zap className="w-4 h-4 text-brand-500 fill-brand-500 shrink-0" />
          </span>
        ))}
      </div>
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-950 to-transparent" />
    </div>
  );
}
