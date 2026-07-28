import { Shield, Clock, Award, Target } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const features = [
  {
    icon: Award,
    title: 'Excelência Técnica',
    description: 'Equipe qualificada com domínio em técnicas avançadas de soldagem e montagem.',
  },
  {
    icon: Shield,
    title: 'Segurança',
    description: 'Compromisso total com normas de segurança em todas as etapas do projeto.',
  },
  {
    icon: Clock,
    title: 'Prazos',
    description: 'Cumprimento rigoroso dos prazos acordados com cada cliente.',
  },
  {
    icon: Target,
    title: 'Inovação',
    description: 'Foco contínuo em soluções inovadoras e de alta durabilidade.',
  },
];

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="sobre" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-steel-100 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-100 rounded-full text-brand-700 text-sm font-semibold mb-6">
              <div className="w-1.5 h-1.5 bg-brand-500 rounded-full" />
              Nossa História
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-steel-900 mb-6">
              Construindo
              <span className="text-brand-600"> confiança</span>
              <br />há mais de 3 anos
            </h2>
            <div className="space-y-4 text-steel-600 leading-relaxed text-lg">
              <p>
                Fundada com o propósito de oferecer soluções metálicas de alto padrão, a{' '}
                <strong className="text-steel-800">SOLDARTDESIGN</strong> possui 3 anos de atuação 
                no mercado, consolidando-se como uma empresa especializada em serralheria fina, 
                caldeiraria e manutenção.
              </p>
              <p>
                Ao longo de sua trajetória, construiu uma reputação sólida baseada na excelência 
                técnica, no rigor com a qualidade, no cumprimento de prazos e no compromisso com 
                a segurança.
              </p>
              <p>
                Atendendo aos segmentos <strong className="text-steel-800">residencial, comercial 
                e industrial</strong>, a empresa mantém foco contínuo na inovação, na durabilidade 
                de suas estruturas e na entrega de soluções eficientes, alinhadas às necessidades 
                específicas de cada cliente.
              </p>
            </div>
          </div>

          {/* Image + Features */}
          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/gallery-1.jpg"
                  alt="Profissional SOLDARTDESIGN trabalhando"
                  className="w-full h-80 object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-5 border border-steel-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-brand-600" />
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold text-steel-900">3+</div>
                    <div className="text-steel-500 text-sm">Anos no Mercado</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`group p-6 bg-steel-50 hover:bg-white rounded-2xl border border-steel-100 hover:border-brand-200 transition-all duration-500 hover:shadow-xl hover:shadow-brand-100/50 hover:-translate-y-1 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 2) * 150}ms` }}
              >
                <div className="w-12 h-12 bg-brand-100 group-hover:bg-brand-500 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-brand-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display text-lg font-semibold text-steel-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-steel-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
