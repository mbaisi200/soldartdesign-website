import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5511955522564?text=Olá! Gostaria de solicitar um orçamento."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Fale pelo WhatsApp"
    >
      {/* Pulse */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20" />

      <div className="relative w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 transition-all duration-300 hover:scale-110 border border-white/20">
        <MessageCircle className="w-8 h-8 text-white" />
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
        <div className="bg-ink-800 border border-white/10 text-white text-sm font-medium px-4 py-2 rounded-xl whitespace-nowrap shadow-xl">
          Fale conosco!
          <div className="absolute top-full right-6 border-4 border-transparent border-t-ink-800" />
        </div>
      </div>
    </a>
  );
}
