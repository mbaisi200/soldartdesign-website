import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const galleryImages = [
  { src: '/images/gallery-1.jpg', alt: 'Montagem de estrutura metálica residencial', category: 'Serralheria' },
  { src: '/images/gallery-2.jpg', alt: 'Mezanino metálico industrial', category: 'Caldeiraria' },
  { src: '/images/gallery-3.jpg', alt: 'Estrutura metálica vista superior', category: 'Caldeiraria' },
  { src: '/images/gallery-4.jpg', alt: 'Treliças estruturais de aço', category: 'Caldeiraria' },
  { src: '/images/gallery-5.jpg', alt: 'Estrutura metálica residencial', category: 'Serralheria' },
  { src: '/images/gallery-6.jpg', alt: 'Detalhes de solda em treliça', category: 'Serralheria' },
  { src: '/images/gallery-7.jpg', alt: 'Mezanino com escada metálica', category: 'Caldeiraria' },
  { src: '/images/gallery-8.jpg', alt: 'Estrutura metálica completa', category: 'Caldeiraria' },
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
    <section id="galeria" className="py-24 bg-white relative overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-100 rounded-full text-brand-700 text-sm font-semibold mb-6">
            <div className="w-1.5 h-1.5 bg-brand-500 rounded-full" />
            Nossos Projetos
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-steel-900 mb-4">
            Galeria de
            <span className="text-brand-600"> trabalhos</span>
          </h2>
          <p className="text-steel-500 text-lg">
            Conheça alguns dos nossos projetos realizados com excelência e dedicação.
          </p>
        </div>

        {/* Filter */}
        <div className={`flex justify-center gap-3 mb-12 ${isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === cat
                  ? 'bg-brand-600 text-white shadow-lg shadow-brand-400/30'
                  : 'bg-steel-100 text-steel-600 hover:bg-steel-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={image.src}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                index === 0 || index === 5 ? 'sm:col-span-2 sm:row-span-2' : ''
              } ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
              onClick={() => openLightbox(index)}
            >
              <div className={`${index === 0 || index === 5 ? 'h-80 sm:h-full' : 'h-56 sm:h-64'}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-steel-900/80 via-steel-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:scale-100 scale-75 transition-transform duration-500">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs text-brand-200 font-semibold uppercase tracking-wider">{image.category}</span>
                  <p className="text-white text-sm mt-1">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center lightbox-overlay bg-steel-950/90 p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <img
            src={filteredImages[selectedImage].src}
            alt={filteredImages[selectedImage].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-center">
            <p className="text-sm text-steel-300">{filteredImages[selectedImage].alt}</p>
            <p className="text-xs text-steel-500 mt-1">
              {selectedImage + 1} / {filteredImages.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
