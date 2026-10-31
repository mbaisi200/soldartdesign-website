import { Phone, MapPin, MessageCircle, Clock, Send } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState } from 'react';

const inputClasses =
  'w-full px-4 py-3.5 bg-white/[0.04] border border-white/10 rounded-2xl text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-brand-500/60 focus:border-brand-500/60 transition-all';

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${formData.name}.%0A%0AServiço de interesse: ${formData.service}%0A%0AMensagem: ${formData.message}%0A%0ATelefone para contato: ${formData.phone}`;
    window.open(`https://wa.me/5511955522564?text=${text}`, '_blank');
  };

  const cards = [
    {
      href: 'https://wa.me/5511955522564?text=Olá! Gostaria de solicitar um orçamento.',
      icon: MessageCircle,
      title: 'WhatsApp',
      main: '(11) 95552-2564',
      sub: 'Clique para conversar',
      accent: true,
    },
    {
      href: 'tel:+5511955522564',
      icon: Phone,
      title: 'Telefone',
      main: '(11) 95552-2564',
      sub: 'Ligue agora',
      accent: false,
    },
  ];

  return (
    <section id="contato" className="py-28 bg-ink-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-brushed opacity-40 pointer-events-none" />
      <div className="absolute top-20 right-0 w-[26rem] h-[26rem] bg-brand-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className={`max-w-3xl mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-brand-500" />
            <span className="text-brand-400 text-xs font-bold uppercase tracking-[0.28em]">Fale conosco</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-white leading-[1.02] mb-5">
            Vamos <span className="text-gradient-brand">conversar?</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Solicite um orçamento sem compromisso. Respondemos rápido.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Info cards */}
          <div className={`lg:col-span-2 space-y-5 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <a
                  key={card.title}
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`group flex items-center gap-5 p-6 rounded-3xl border transition-all duration-300 hover:-translate-y-1 ${
                    card.accent
                      ? 'bg-green-500/[0.07] border-green-500/25 hover:border-green-500/50 hover:shadow-[0_16px_40px_-12px_rgba(34,197,94,0.35)]'
                      : 'bg-white/[0.03] border-white/10 hover:border-brand-500/40 hover:shadow-[0_16px_40px_-12px_rgba(245,158,11,0.25)]'
                  }`}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${
                      card.accent
                        ? 'bg-green-500 shadow-lg shadow-green-500/30'
                        : 'bg-brand-500/15 border border-brand-500/30'
                    }`}
                  >
                    <Icon className={`w-7 h-7 ${card.accent ? 'text-white' : 'text-brand-400'}`} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">{card.title}</h3>
                    <p className={`font-bold text-lg ${card.accent ? 'text-green-400' : 'text-zinc-200'}`}>{card.main}</p>
                    <p className="text-zinc-500 text-sm">{card.sub}</p>
                  </div>
                </a>
              );
            })}

            {/* Address */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rua+João+Atílio+Franzini+55+Itatiba+SP"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-5 p-6 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-brand-500/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-500/15 border border-brand-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <MapPin className="w-7 h-7 text-brand-400" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white mb-1">Endereço</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Rua João Atílio Franzini, 55<br />
                  Lot. Parque Empresarial Adelelmo Corradini<br />
                  Itatiba - SP, 13257-596
                </p>
                <p className="text-brand-400 text-sm mt-2 font-semibold">Ver no mapa →</p>
              </div>
            </a>

            {/* Hours */}
            <div className="flex items-start gap-5 p-6 rounded-3xl bg-white/[0.03] border border-white/10">
              <div className="w-14 h-14 rounded-2xl bg-brand-500/15 border border-brand-500/30 flex items-center justify-center shrink-0">
                <Clock className="w-7 h-7 text-brand-400" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white mb-1">Horário</h3>
                <p className="text-zinc-400 text-sm">Seg — Sex: 08:00 às 18:00</p>
                <p className="text-zinc-400 text-sm">Sábado: 08:00 às 12:00</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className={`lg:col-span-3 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="rounded-[1.75rem] bg-ink-950 border border-white/10 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/70 to-transparent" />
              <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white mb-2">
                Solicite um orçamento
              </h3>
              <p className="text-zinc-500 mb-8">
                Preencha e caia direto no nosso WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Nome completo</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={inputClasses}
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Telefone</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={inputClasses}
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Serviço de interesse</label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className={`${inputClasses} appearance-none ${formData.service ? '' : 'text-zinc-600'}`}
                  >
                    <option value="" className="bg-ink-900">Selecione um serviço</option>
                    <option value="Serralheria Fina" className="bg-ink-900">Serralheria Fina</option>
                    <option value="Caldeiraria" className="bg-ink-900">Caldeiraria</option>
                    <option value="Manutenção" className="bg-ink-900">Manutenção</option>
                    <option value="Outro" className="bg-ink-900">Outro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Mensagem</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`${inputClasses} resize-none`}
                    placeholder="Descreva o que você precisa..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-shine w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 text-white font-bold rounded-2xl transition-all duration-300 shadow-lg shadow-brand-500/25 hover:shadow-brand-400/40 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Send className="w-5 h-5" />
                  Enviar via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className={`mt-12 rounded-[1.75rem] overflow-hidden border border-white/10 shadow-2xl ${isVisible ? 'animate-fade-in-up animation-delay-400' : 'opacity-0'}`}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.5!2d-46.8388!3d-23.0058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAwJzIwLjkiUyA0NsKwNTAnMTkuNyJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
            width="100%"
            height="350"
            style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(0.9)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização SOLDARTDESIGN"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
