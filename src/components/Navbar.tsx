import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

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
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ?           'bg-brand-600/95 backdrop-blur-md shadow-lg border-b border-brand-500'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className={`flex items-center gap-1 transition-colors duration-300`}>
              <div className="relative">
                <span className={`font-display text-2xl sm:text-3xl font-bold tracking-wider transition-colors duration-300 ${
                  scrolled ? 'text-white' : 'text-white'
                }`}>
                  SOLDART
                </span>
                <span className={`font-display text-2xl sm:text-3xl font-bold tracking-wider transition-colors duration-300 ${
                  scrolled ? 'text-brand-200' : 'text-brand-200'
                }`}>
                  DESIGN
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 ${
                  scrolled
                    ? 'text-white/90 hover:text-white'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5511955522564?text=Olá! Gostaria de solicitar um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-green-500/30 hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-white' : 'text-white'
            }`}
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-brand-600/95 backdrop-blur-md border-t border-brand-500 shadow-xl">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg text-base font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5511955522564?text=Olá! Gostaria de solicitar um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mx-4 mt-3 px-5 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-all"
            >
              <Phone className="w-4 h-4" />
              Fale pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
