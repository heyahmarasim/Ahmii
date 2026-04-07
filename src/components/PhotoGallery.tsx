import { useState, useEffect } from 'react';
import { Heart, X, ChevronLeft, ChevronRight } from 'lucide-react';
import photo1 from '@/assets/photo1.jpeg';
import photo2 from '@/assets/photo2.jpeg';
import photo3 from '@/assets/photo3.jpeg';
import photo4 from '@/assets/photo4.jpeg';

interface Photo {
  id: number;
  caption: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
  isVisible: boolean;
}

const photoImages = [photo1, photo2, photo3, photo4];

const PhotoGallery = ({ photos, isVisible }: PhotoGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const rotations = [-4, 2, -3, 3];

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isVisible, hasAnimated]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') setSelectedIndex((selectedIndex + 1) % photos.length);
      if (e.key === 'ArrowLeft') setSelectedIndex((selectedIndex - 1 + photos.length) % photos.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, photos.length]);

  return (
    <div className="w-full max-w-6xl mx-auto relative">
      <div className={`relative bg-gradient-to-br from-card via-white to-rose-50 rounded-3xl shadow-2xl p-6 sm:p-10 transition-all duration-1000 ${hasAnimated ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        
        {/* Header */}
        <div className={`text-center mb-10 transition-all duration-700 delay-200 ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <h2 className="font-script text-4xl sm:text-6xl text-primary mb-3 tracking-wide">
            Our Special Moments
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-rose-300" />
            <Heart className="w-5 h-5 text-primary fill-primary animate-heartbeat" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-rose-300" />
          </div>
          <p className="font-romantic text-muted-foreground mt-3 italic">
            Click on any photo to view
          </p>
        </div>

        {/* Polaroid photo grid */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 lg:gap-12">
          {photos.map((photo, index) => (
            <div 
              key={photo.id}
              className={`relative group transition-all duration-700 ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ 
                transitionDelay: `${0.4 + index * 0.15}s`,
                transform: hasAnimated ? `rotate(${rotations[index % rotations.length]}deg)` : 'rotate(0deg)',
              }}
            >
              <div 
                className="bg-white p-3 sm:p-4 rounded-sm shadow-xl cursor-pointer transition-all duration-300 hover:scale-105 hover:rotate-0 hover:shadow-2xl"
                onClick={() => setSelectedIndex(index)}
                style={{
                  boxShadow: '0 4px 20px rgba(0,0,0,0.15), 0 8px 32px rgba(0,0,0,0.1)'
                }}
              >
                <div className="w-48 sm:w-56 lg:w-64 aspect-square overflow-hidden bg-muted">
                  <img 
                    src={photoImages[index]} 
                    alt={photo.caption}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="h-16 sm:h-20 flex items-center justify-center pt-2">
                  <p className="font-script text-lg sm:text-xl text-card-foreground text-center px-2">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Signature */}
        <div className={`text-center mt-10 transition-all duration-700 delay-1000 ${hasAnimated ? 'opacity-100' : 'opacity-0'}`}>
          <span className="font-script text-2xl text-primary">Forever & Always ❤️</span>
        </div>
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedIndex(null)}
        >
          <div className="relative max-w-3xl max-h-[80vh] w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute -top-12 right-0 p-2 text-white hover:text-rose-300 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>
            
            {/* Previous button */}
            <button
              onClick={() => setSelectedIndex((selectedIndex - 1 + photos.length) % photos.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 p-2 text-white hover:text-rose-300 transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            {/* Next button */}
            <button
              onClick={() => setSelectedIndex((selectedIndex + 1) % photos.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 p-2 text-white hover:text-rose-300 transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <img 
              src={photoImages[selectedIndex]} 
              alt={photos[selectedIndex].caption}
              className="w-full h-full object-contain rounded-lg shadow-2xl max-h-[70vh]"
            />
            <p className="text-center text-white font-script text-2xl mt-4">
              {photos[selectedIndex].caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
