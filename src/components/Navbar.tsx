import { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Contato', href: '#contato' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-950/85 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.45)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center shadow-lg shadow-brand-500/30 group-hover:shadow-brand-400/50 transition-shadow">
              <span className="font-display text-lg font-bold text-white">S</span>
            </div>
            <div className="leading-none">
              <span className="font-display text-xl sm:text-2xl font-bold tracking-[0.18em] text-white">
                SOLDART
              </span>
              <span className="font-display text-xl sm:text-2xl font-bold tracking-[0.18em] text-brand-400">
                DESIGN
              </span>
              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mt-0.5">
                Serralheria fina
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-300 group/link"
              >
                {link.label}
                <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-brand-400 scale-x-0 group-hover/link:scale-x-100 origin-left transition-transform duration-300" />
              </a>
            ))}
            <a
              href="https://wa.me/5511955522564?text=Olá! Gostaria de solicitar um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine ml-4 inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 text-white text-sm font-bold rounded-full transition-all duration-300 shadow-lg shadow-brand-500/25 hover:shadow-brand-400/40 hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              Orçamento
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white hover:border-brand-500/50 transition-colors"
            aria-label="Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-ink-950/95 backdrop-blur-xl border-t border-white/10">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-4 py-3.5 text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl text-base font-medium transition-colors border-b border-white/5"
              >
                {link.label}
                <span className="font-display text-xs text-zinc-600">0{i + 1}</span>
              </a>
            ))}
            <a
              href="https://wa.me/5511955522564?text=Olá! Gostaria de solicitar um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mx-1 mt-4 px-5 py-4 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-bold rounded-2xl transition-all"
            >
              <Phone className="w-5 h-5" />
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
