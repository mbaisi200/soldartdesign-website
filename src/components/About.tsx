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

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 mb-6">
      <span className="h-px w-10 bg-brand-500" />
      <span className="text-brand-400 text-xs font-bold uppercase tracking-[0.28em]">{children}</span>
    </div>
  );
}

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="sobre" className="py-28 bg-ink-950 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-1/3 -left-40 w-[30rem] h-[30rem] bg-brand-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Text */}
          <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <Eyebrow>Nossa história</Eyebrow>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-white leading-[1.02] mb-8">
              Construindo <span className="text-gradient-brand">confiança</span>
              <br />
              há mais de 3 anos
            </h2>
            <div className="space-y-5 text-zinc-400 leading-relaxed text-lg">
              <p>
                Fundada com o propósito de oferecer soluções metálicas de alto padrão, a{' '}
                <strong className="text-white font-semibold">SOLDARTDESIGN</strong> consolidou-se
                como referência em serralheria fina, caldeiraria e manutenção.
              </p>
              <p>
                Uma reputação construída sobre excelência técnica, rigor com a qualidade,
                cumprimento de prazos e compromisso absoluto com a segurança.
              </p>
              <p>
                Atendemos os segmentos <strong className="text-white font-semibold">residencial,
                comercial e industrial</strong> — com foco contínuo em inovação, durabilidade
                e soluções sob medida para cada cliente.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand-500/40 via-transparent to-transparent blur-xl" />
              <div className="relative rounded-[1.75rem] overflow-hidden border border-white/10">
                <img
                  src="/images/gallery-1.jpg"
                  alt="Profissional SOLDARTDESIGN trabalhando"
                  className="w-full h-[26rem] object-cover hover:scale-105 transition-transform duration-[1.2s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-8 -left-4 sm:-left-8 bg-ink-800/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-5 pr-7 animate-float-y">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center shadow-lg shadow-brand-500/30">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="font-display text-3xl font-bold text-white">3+</div>
                    <div className="text-zinc-400 text-sm uppercase tracking-wider">Anos no mercado</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-28 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`group relative p-7 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-brand-500/40 hover:bg-white/[0.05] transition-all duration-500 hover:-translate-y-2 overflow-hidden ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 1) * 120}ms` }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="font-display text-sm text-zinc-600 mb-5">0{index + 1}</div>
                <div className="w-14 h-14 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center mb-5 group-hover:bg-brand-500 group-hover:shadow-lg group-hover:shadow-brand-500/30 transition-all duration-300">
                  <Icon className="w-6 h-6 text-brand-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
