import { Phone, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function CTA() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-steel-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl" />
      </div>

      {/* Geometric pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rotate-45" />
        <div className="absolute top-20 right-20 w-16 h-16 border-2 border-white rotate-12" />
        <div className="absolute bottom-10 left-1/3 w-12 h-12 border-2 border-white -rotate-12" />
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-white rotate-45" />
      </div>

      <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Pronto para transformar seu
            <span className="text-brand-400"> projeto em realidade?</span>
          </h2>
          <p className="text-steel-300 text-lg mb-10 max-w-2xl mx-auto">
            Entre em contato agora mesmo e receba um orçamento personalizado. 
            Nossa equipe está pronta para atender você com excelência.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5511955522564?text=Olá! Gostaria de solicitar um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-brand-600 hover:bg-brand-500 text-white font-bold text-lg rounded-full transition-all duration-300 shadow-2xl shadow-brand-600/30 hover:shadow-brand-500/50 hover:scale-105"
            >
              <Phone className="w-6 h-6" />
              Solicitar Orçamento Grátis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <p className="text-steel-500 text-sm mt-6">
            Resposta rápida • Sem compromisso • Atendimento personalizado
          </p>
        </div>
      </div>
    </section>
  );
}
