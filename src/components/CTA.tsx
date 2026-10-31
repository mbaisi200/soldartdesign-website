import { Phone, ArrowRight, BadgeCheck } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function CTA() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-ink-950 relative overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          className={`relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-brand-400 via-brand-500 to-brand-700 px-8 py-16 sm:px-16 sm:py-20 text-center ${
            isVisible ? 'animate-scale-in' : 'opacity-0'
          }`}
        >
          {/* Texture + decorations */}
          <div className="absolute inset-0 bg-brushed opacity-70" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/20 rounded-full blur-[100px]" />
          <div className="absolute -bottom-32 -left-16 w-96 h-96 bg-ink-950/20 rounded-full blur-[100px]" />
          <div className="absolute top-8 left-8 w-16 h-16 border-2 border-ink-950/15 rotate-45 hidden sm:block" />
          <div className="absolute bottom-10 right-12 w-10 h-10 border-2 border-ink-950/15 rotate-12 hidden sm:block" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/25 text-white text-xs font-bold uppercase tracking-[0.24em] mb-7">
              <BadgeCheck className="w-4 h-4" />
              Orçamento gratuito
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-ink-950 leading-[1.02] mb-6 max-w-3xl mx-auto">
              Pronto para tirar seu projeto do papel?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto font-medium">
              Fale agora com nossa equipe e receba um orçamento personalizado —
              sem compromisso e com resposta rápida.
            </p>
            <a
              href="https://wa.me/5511955522564?text=Olá! Gostaria de solicitar um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine group inline-flex items-center justify-center gap-3 px-10 py-5 bg-ink-950 hover:bg-black text-white font-bold text-lg rounded-full transition-all duration-300 shadow-2xl hover:-translate-y-0.5"
            >
              <Phone className="w-6 h-6" />
              Solicitar Orçamento Grátis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-white/60 text-sm mt-7 font-semibold uppercase tracking-wider">
              Resposta rápida • Sem compromisso • Atendimento personalizado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
