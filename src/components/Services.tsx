import { Wrench, Building2, Cog, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    icon: Wrench,
    title: 'Serralheria Fina',
    description:
      'Projetos sob medida em serralheria fina, com acabamentos de alta qualidade para ambientes residenciais e comerciais. Portões, grades, corrimãos, escadas e estruturas decorativas com precisão e elegância.',
    image: '/images/gallery-5.jpg',
    features: ['Portões e Grades', 'Corrimãos', 'Escadas Metálicas', 'Estruturas Decorativas'],
  },
  {
    icon: Building2,
    title: 'Caldeiraria',
    description:
      'Fabricação e montagem de estruturas metálicas de grande porte. Mezaninos, coberturas, galpões e treliças com engenharia de precisão, garantindo segurança e durabilidade em cada projeto.',
    image: '/images/gallery-2.jpg',
    features: ['Mezaninos', 'Coberturas Metálicas', 'Galpões', 'Treliças Estruturais'],
  },
  {
    icon: Cog,
    title: 'Manutenção',
    description:
      'Serviços de manutenção preventiva e corretiva para estruturas metálicas. Reparos, reforços estruturais e substituição de componentes, garantindo a longevidade e segurança das instalações.',
    image: '/images/gallery-8.jpg',
    features: ['Manutenção Preventiva', 'Manutenção Corretiva', 'Reforços Estruturais', 'Reformas'],
  },
];

export default function Services() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="servicos" className="py-24 bg-steel-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-brand-200 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-steel-200 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-100 rounded-full text-brand-700 text-sm font-semibold mb-6">
            <div className="w-1.5 h-1.5 bg-brand-500 rounded-full" />
            Nossos Serviços
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-steel-900 mb-4">
            Soluções completas em
            <span className="text-brand-600"> estruturas metálicas</span>
          </h2>
          <p className="text-steel-500 text-lg">
            Oferecemos serviços especializados para atender às necessidades dos segmentos 
            residencial, comercial e industrial com máxima qualidade.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`group bg-white rounded-2xl overflow-hidden border border-steel-100 hover:border-brand-200 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-steel-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-brand-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold text-steel-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-steel-500 leading-relaxed mb-5 text-sm">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-steel-600">
                        <div className="w-1.5 h-1.5 bg-brand-500 rounded-full flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="https://wa.me/5511955522564?text=Olá! Gostaria de saber mais sobre o serviço de {service.title}."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-semibold text-sm group/link transition-colors"
                  >
                    Solicitar Orçamento
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
