import { Wrench, Building2, Cog, ArrowUpRight, Check } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    icon: Wrench,
    title: 'Serralheria Fina',
    description:
      'Projetos sob medida com acabamentos de alta qualidade para ambientes residenciais e comerciais. Precisão e elegância em cada detalhe.',
    image: '/images/gallery-5.jpg',
    features: ['Portões e Grades', 'Corrimãos', 'Escadas Metálicas', 'Estruturas Decorativas'],
  },
  {
    icon: Building2,
    title: 'Caldeiraria',
    description:
      'Fabricação e montagem de estruturas metálicas de grande porte com engenharia de precisão. Segurança e durabilidade garantidas.',
    image: '/images/gallery-2.jpg',
    features: ['Mezaninos', 'Coberturas Metálicas', 'Galpões', 'Treliças Estruturais'],
  },
  {
    icon: Cog,
    title: 'Manutenção',
    description:
      'Manutenção preventiva e corretiva para estruturas metálicas. Reparos e reforços que prolongam a vida útil das instalações.',
    image: '/images/gallery-3.jpg',
    features: ['Manutenção Preventiva', 'Manutenção Corretiva', 'Reforços Estruturais', 'Reformas'],
  },
];

export default function Services() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="servicos" className="py-28 bg-ink-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-brushed opacity-40 pointer-events-none" />
      <div className="absolute -top-40 right-1/4 w-[28rem] h-[28rem] bg-brand-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className={`max-w-3xl mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-brand-500" />
            <span className="text-brand-400 text-xs font-bold uppercase tracking-[0.28em]">Nossos serviços</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-white leading-[1.02] mb-5">
            Soluções completas em <span className="text-gradient-brand">estruturas metálicas</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Do projeto à entrega: especialização técnica para os segmentos residencial,
            comercial e industrial.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const waText = encodeURIComponent(`Olá! Gostaria de saber mais sobre o serviço de ${service.title}.`);
            return (
              <article
                key={service.title}
                className={`group relative rounded-[1.75rem] bg-ink-950 border border-white/10 hover:border-brand-500/40 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_-16px_rgba(245,158,11,0.25)] ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                {/* Image */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.2s]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
                  <span className="absolute top-5 right-6 font-display text-5xl font-bold text-white/15 group-hover:text-brand-500/40 transition-colors duration-500">
                    0{index + 1}
                  </span>
                  <div className="absolute bottom-5 left-6">
                    <div className="w-14 h-14 rounded-2xl bg-brand-500 flex items-center justify-center shadow-lg shadow-brand-500/40 group-hover:rotate-6 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-7">
                  <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">{service.description}</p>

                  <ul className="space-y-2.5 mb-7">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-zinc-300">
                        <span className="w-5 h-5 rounded-full bg-brand-500/15 border border-brand-500/30 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-brand-400" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://wa.me/5511955522564?text=${waText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 font-bold text-sm uppercase tracking-wider group/link transition-colors"
                  >
                    Solicitar orçamento
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-600 via-brand-400 to-brand-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
