import { Phone, MapPin, MessageCircle, Clock, Send } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState } from 'react';

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

  return (
    <section id="contato" className="py-24 bg-steel-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-1/3 w-80 h-80 bg-brand-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-steel-200 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-100 rounded-full text-brand-700 text-sm font-semibold mb-6">
            <div className="w-1.5 h-1.5 bg-brand-500 rounded-full" />
            Fale Conosco
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-steel-900 mb-4">
            Entre em
            <span className="text-brand-600"> contato</span>
          </h2>
          <p className="text-steel-500 text-lg">
            Estamos prontos para atender você. Solicite um orçamento sem compromisso!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className={`lg:col-span-2 space-y-6 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            {/* WhatsApp Card */}
            <a
              href="https://wa.me/5511955522564?text=Olá! Gostaria de solicitar um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 bg-green-50 hover:bg-green-100 border border-green-200 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-steel-900 mb-1">WhatsApp</h3>
                  <p className="text-green-700 font-semibold text-lg">(11) 95552-2564</p>
                  <p className="text-steel-500 text-sm mt-1">Clique para conversar</p>
                </div>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href="tel:+5511955522564"
              className="group block p-6 bg-white hover:bg-brand-50 border border-steel-200 hover:border-brand-200 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-brand-100 group-hover:bg-brand-500 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors">
                  <Phone className="w-7 h-7 text-brand-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-steel-900 mb-1">Telefone</h3>
                  <p className="text-steel-700 font-semibold text-lg">(11) 95552-2564</p>
                  <p className="text-steel-500 text-sm mt-1">Ligue agora</p>
                </div>
              </div>
            </a>

            {/* Address Card */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rua+João+Atílio+Franzini+55+Itatiba+SP"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 bg-white hover:bg-brand-50 border border-steel-200 hover:border-brand-200 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-brand-100 group-hover:bg-brand-500 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors">
                  <MapPin className="w-7 h-7 text-brand-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-steel-900 mb-1">Endereço</h3>
                  <p className="text-steel-600 text-sm leading-relaxed">
                    Rua João Atílio Franzini, 55<br />
                    Lot. Parque Empresarial Adelelmo Corradini<br />
                    Itatiba - SP, 13257-596
                  </p>
                  <p className="text-brand-600 text-sm mt-2 font-medium">Ver no mapa →</p>
                </div>
              </div>
            </a>

            {/* Hours */}
            <div className="p-6 bg-white border border-steel-200 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-7 h-7 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-steel-900 mb-1">Horário</h3>
                  <p className="text-steel-600 text-sm">Seg - Sex: 08:00 - 18:00</p>
                  <p className="text-steel-600 text-sm">Sáb: 08:00 - 12:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-3 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="bg-white rounded-2xl border border-steel-200 shadow-xl p-8">
              <h3 className="font-display text-2xl font-bold text-steel-900 mb-2">
                Solicite um Orçamento
              </h3>
              <p className="text-steel-500 mb-8">
                Preencha o formulário e entraremos em contato via WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-steel-700 mb-2">Nome completo</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-steel-50 border border-steel-200 rounded-xl text-steel-800 placeholder-steel-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-steel-700 mb-2">Telefone</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-steel-50 border border-steel-200 rounded-xl text-steel-800 placeholder-steel-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-steel-700 mb-2">Serviço de interesse</label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 bg-steel-50 border border-steel-200 rounded-xl text-steel-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all appearance-none"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="Serralheria Fina">Serralheria Fina</option>
                    <option value="Caldeiraria">Caldeiraria</option>
                    <option value="Manutenção">Manutenção</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-steel-700 mb-2">Mensagem</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-steel-50 border border-steel-200 rounded-xl text-steel-800 placeholder-steel-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none"
                    placeholder="Descreva o que você precisa..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-brand-300/40 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Send className="w-5 h-5" />
                  Enviar via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className={`mt-16 rounded-2xl overflow-hidden shadow-xl border border-steel-200 ${isVisible ? 'animate-fade-in-up animation-delay-400' : 'opacity-0'}`}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.5!2d-46.8388!3d-23.0058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAwJzIwLjkiUyA0NsKwNTAnMTkuNyJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
            width="100%"
            height="350"
            style={{ border: 0 }}
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
