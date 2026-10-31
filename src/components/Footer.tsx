import { Phone, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-ink-950 text-zinc-400 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center shadow-lg shadow-brand-500/30">
                <span className="font-display text-xl font-bold text-white">S</span>
              </div>
              <div className="leading-none">
                <span className="font-display text-2xl font-bold tracking-[0.18em] text-white">SOLDART</span>
                <span className="font-display text-2xl font-bold tracking-[0.18em] text-brand-400">DESIGN</span>
              </div>
            </div>
            <p className="leading-relaxed max-w-md mb-7 text-zinc-500">
              Serralheria fina, caldeiraria e manutenção. Soluções metálicas de
              alto padrão para os segmentos residencial, comercial e industrial.
            </p>
            <a
              href="https://wa.me/5511955522564?text=Olá! Gostaria de solicitar um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/15 border border-green-500/30 hover:border-green-500/60 text-green-400 font-bold rounded-full transition-all duration-300 hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              (11) 95552-2564
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.24em] mb-6 text-white">Navegação</h4>
            <ul className="space-y-3">
              {[
                { label: 'Início', href: '#inicio' },
                { label: 'Sobre Nós', href: '#sobre' },
                { label: 'Serviços', href: '#servicos' },
                { label: 'Galeria', href: '#galeria' },
                { label: 'Contato', href: '#contato' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-zinc-500 hover:text-brand-400 transition-colors duration-300 text-sm group inline-flex items-center gap-2"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-brand-400 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.24em] mb-6 text-white">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                <a
                  href="https://wa.me/5511955522564"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-brand-400 transition-colors text-sm"
                >
                  (11) 95552-2564
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                <span className="text-zinc-500 text-sm leading-relaxed">
                  Rua João Atílio Franzini, 55<br />
                  Lot. Parque Empresarial<br />
                  Adelelmo Corradini<br />
                  Itatiba - SP, 13257-596
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} SOLDARTDESIGN. Todos os direitos reservados.
          </p>
          <button
            onClick={scrollToTop}
            className="w-11 h-11 bg-white/5 border border-white/10 hover:bg-brand-500 hover:border-brand-500 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
