import { ChevronDown, Phone, ArrowRight, MapPin } from 'lucide-react';

const stats = [
  { value: '3+', label: 'Anos de experiência' },
  { value: '100%', label: 'Compromisso com qualidade' },
  { value: '3', label: 'Segmentos atendidos' },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="Estrutura metálica SOLDARTDESIGN"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/80 to-ink-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/60" />
        <div className="absolute inset-0 bg-brushed opacity-60" />
      </div>

      {/* Ambient glow */}
      <div className="absolute -top-32 right-0 w-[36rem] h-[36rem] bg-brand-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24 w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-3 px-4 py-2 rounded-full border border-brand-500/30 bg-brand-500/10 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-spark" />
            <span className="text-brand-200 text-xs sm:text-sm font-semibold uppercase tracking-[0.22em]">
              Serralheria fina • Caldeiraria • Manutenção
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display font-bold uppercase leading-[0.95] mb-8">
            <span className="animate-fade-in-up block text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight">
              Estruturas que
            </span>
            <span className="animate-fade-in-up animation-delay-100 block text-5xl sm:text-7xl lg:text-8xl text-gradient-brand tracking-tight">
              sustentam
            </span>
            <span className="animate-fade-in-up animation-delay-200 block text-5xl sm:text-7xl lg:text-8xl text-stroke tracking-tight">
              sonhos
            </span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-in-up animation-delay-300 text-lg sm:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed">
            Transformamos metal em soluções de alto padrão para os segmentos
            residencial, comercial e industrial — com precisão, segurança e acabamento impecável.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up animation-delay-400 flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="https://wa.me/5511955522564?text=Olá! Gostaria de solicitar um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 text-white font-bold rounded-full transition-all duration-300 shadow-2xl shadow-brand-500/30 hover:shadow-brand-400/50 hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" />
              Solicitar Orçamento
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#galeria"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/15 hover:border-brand-400/60 text-white font-semibold transition-all duration-300 backdrop-blur-sm hover:bg-white/5"
            >
              Ver Projetos
            </a>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up animation-delay-500 grid grid-cols-3 max-w-2xl border-t border-white/10 pt-8 gap-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl sm:text-5xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-zinc-500 text-xs sm:text-sm mt-2 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Location */}
          <div className="animate-fade-in-up animation-delay-600 mt-10 inline-flex items-center gap-2 text-zinc-500 text-sm">
            <MapPin className="w-4 h-4 text-brand-500" />
            Itatiba — São Paulo
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">Role</span>
        <a href="#sobre" className="text-zinc-500 hover:text-brand-400 transition-colors animate-bounce">
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}
