import { Phone, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-steel-900 text-white relative">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-1 mb-4">
              <span className="font-display text-3xl font-bold tracking-wider text-white">SOLDART</span>
              <span className="font-display text-3xl font-bold tracking-wider text-brand-400">DESIGN</span>
            </div>
            <p className="text-steel-400 leading-relaxed max-w-md mb-6">
              Especializada em serralheria fina, caldeiraria e manutenção. 
              Soluções metálicas de alto padrão para os segmentos residencial, 
              comercial e industrial.
            </p>
            <a
              href="https://wa.me/5511955522564?text=Olá! Gostaria de solicitar um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              (11) 95552-2564
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-white">Navegação</h4>
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
                    className="text-steel-400 hover:text-brand-400 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-white">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
                <a
                  href="https://wa.me/5511955522564"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-steel-400 hover:text-brand-400 transition-colors text-sm"
                >
                  (11) 95552-2564
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
                <span className="text-steel-400 text-sm leading-relaxed">
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
      <div className="border-t border-steel-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-steel-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} SOLDARTDESIGN. Todos os direitos reservados.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-steel-800 hover:bg-brand-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
