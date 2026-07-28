import { ChevronDown, Phone, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="Estrutura metálica SOLDARTDESIGN"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-steel-950/90 via-steel-900/75 to-steel-900/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-steel-950/60 via-transparent to-steel-950/30" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-brand-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 bg-brand-500/20 border border-brand-400/30 rounded-full text-brand-200 text-sm font-medium mb-8 backdrop-blur-sm">
            <div className="w-2 h-2 bg-brand-300 rounded-full animate-pulse" />
            Excelência em Soluções Metálicas
          </div>

          {/* Heading */}
          <h1 className="animate-fade-in-up animation-delay-100 font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Estruturas que
            <span className="block text-brand-300">sustentam sonhos</span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-in-up animation-delay-200 text-lg sm:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed">
            Especialistas em serralheria fina, caldeiraria e manutenção. 
            Transformamos metal em soluções de alto padrão para os segmentos 
            residencial, comercial e industrial.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up animation-delay-300 flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/5511955522564?text=Olá! Gostaria de solicitar um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-full transition-all duration-300 shadow-2xl shadow-brand-600/30 hover:shadow-brand-500/40 hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              Solicitar Orçamento
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/20 hover:border-white/40 text-white font-semibold rounded-full transition-all duration-300 backdrop-blur-sm hover:bg-white/10"
            >
              Conheça a Empresa
            </a>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up animation-delay-500 mt-16 grid grid-cols-3 gap-8 max-w-lg">
            <div>
              <div className="font-display text-3xl sm:text-4xl font-bold text-white">3+</div>
              <div className="text-steel-400 text-sm mt-1">Anos de<br />Experiência</div>
            </div>
            <div>
              <div className="font-display text-3xl sm:text-4xl font-bold text-white">100%</div>
              <div className="text-steel-400 text-sm mt-1">Compromisso<br />com Qualidade</div>
            </div>
            <div>
              <div className="font-display text-3xl sm:text-4xl font-bold text-white">3</div>
              <div className="text-steel-400 text-sm mt-1">Segmentos<br />Atendidos</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#sobre" className="text-white/50 hover:text-white/80 transition-colors">
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
}
