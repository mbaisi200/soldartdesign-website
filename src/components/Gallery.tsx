import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const galleryImages = [
  { src: '/images/gallery-1.jpg', alt: 'Montagem de estrutura metálica', category: 'Serralheria' },
  { src: '/images/gallery-2.jpg', alt: 'Estrutura metálica industrial', category: 'Caldeiraria' },
  { src: '/images/gallery-3.jpg', alt: 'Projeto estrutural em aço', category: 'Caldeiraria' },
  { src: '/images/gallery-4.jpg', alt: 'Detalhe de soldagem', category: 'Serralheria' },
  { src: '/images/gallery-5.jpg', alt: 'Estrutura metálica completa', category: 'Caldeiraria' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('Todos');
  const { ref, isVisible } = useScrollAnimation();

  const categories = ['Todos', 'Serralheria', 'Caldeiraria'];
  const filteredImages = filter === 'Todos'
    ? galleryImages
    : galleryImages.filter(img => img.category === filter);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);

  const goNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const goPrev = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <section id="galeria" className="py-28 bg-ink-950 relative overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`max-w-3xl mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-brand-500" />
            <span className="text-brand-400 text-xs font-bold uppercase tracking-[0.28em]">Nossos projetos</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-white leading-[1.02] mb-5">
            Galeria de <span className="text-gradient-brand">trabalhos</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Uma seleção de projetos executados com precisão, segurança e acabamento impecável.
          </p>
        </div>

        {/* Filter */}
        <div className={`flex flex-wrap gap-3 mb-12 ${isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border ${
                filter === cat
                  ? 'bg-brand-500 border-brand-500 text-white shadow-lg shadow-brand-500/30'
                  : 'bg-white/5 border-white/10 text-zinc-400 hover:border-brand-500/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={image.src}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer border border-white/10 hover:border-brand-500/40 transition-colors duration-500 ${
                index === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
              } ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
              onClick={() => openLightbox(index)}
            >
              <div className={`${index === 0 ? 'h-80 sm:h-full sm:min-h-[26rem]' : 'h-60 sm:h-64'}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.2s]"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-brand-500 rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500 shadow-xl shadow-brand-500/40">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="text-[11px] text-brand-300 font-bold uppercase tracking-[0.2em]">{image.category}</span>
                  <p className="text-white text-sm mt-1 font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center lightbox-overlay bg-ink-950/95 p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 hover:bg-brand-500 hover:text-white rounded-full flex items-center justify-center text-white transition-colors"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 z-10 w-12 h-12 bg-white/10 hover:bg-brand-500 hover:text-white rounded-full flex items-center justify-center text-white transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 z-10 w-12 h-12 bg-white/10 hover:bg-brand-500 hover:text-white rounded-full flex items-center justify-center text-white transition-colors"
            aria-label="Próxima"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <img
            src={filteredImages[selectedImage].src}
            alt={filteredImages[selectedImage].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl animate-scale-in border border-white/10"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <p className="text-sm text-zinc-300">{filteredImages[selectedImage].alt}</p>
            <p className="text-xs text-zinc-600 mt-1 font-display tracking-widest">
              {selectedImage + 1} / {filteredImages.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
