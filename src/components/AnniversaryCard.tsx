import { Heart, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

interface AnniversaryCardProps {
  names: { from: string; to: string };
  isVisible: boolean;
  nikkahDetails?: {
    event: string;
    groom: string;
    bride: string;
    date: string;
  };
}

const AnniversaryCard = ({ names, isVisible, nikkahDetails }: AnniversaryCardProps) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isVisible, hasAnimated]);

  return (
    <div className="w-full max-w-3xl mx-auto relative">
      {/* Hearts border pattern - animated in from corners */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top left hearts cluster */}
        <div className={`absolute -top-4 -left-4 transition-all duration-1000 ${hasAnimated ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 -translate-x-10 -translate-y-10'}`}>
          <div className="relative">
            <Heart className="w-8 h-8 text-primary fill-primary animate-float" />
            <Heart className="absolute top-6 left-6 w-6 h-6 text-accent fill-accent animate-float-delayed" />
            <Heart className="absolute top-2 left-10 w-4 h-4 text-rose-light fill-rose-light animate-float" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
        
        {/* Top right hearts cluster */}
        <div className={`absolute -top-4 -right-4 transition-all duration-1000 delay-200 ${hasAnimated ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-x-10 -translate-y-10'}`}>
          <div className="relative">
            <Heart className="w-10 h-10 text-primary fill-primary/80 animate-heartbeat" />
            <Heart className="absolute top-8 -left-4 w-5 h-5 text-accent fill-accent animate-float" />
          </div>
        </div>
        
        {/* Floating hearts spray */}
        {hasAnimated && [...Array(12)].map((_, i) => (
          <Heart 
            key={i}
            className="absolute text-primary/40 fill-primary/30 animate-spray-heart"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${10 + Math.random() * 30}%`,
              width: `${12 + Math.random() * 16}px`,
              height: `${12 + Math.random() * 16}px`,
              animationDelay: `${0.5 + i * 0.1}s`,
            }}
          />
        ))}
      </div>

      {/* Main card */}
      <div 
        className={`relative bg-gradient-to-br from-card via-white to-rose-50 rounded-3xl shadow-2xl overflow-hidden transition-all duration-1000 ${
          hasAnimated ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}
      >
        {/* Decorative border frame */}
        <div className="hidden sm:block absolute inset-3 sm:inset-4 border-2 border-rose-200/50 rounded-2xl pointer-events-none" />
        <div className="hidden sm:block absolute inset-5 sm:inset-6 border border-rose-100/50 rounded-xl pointer-events-none" />
        
        {/* Corner decorations - hidden on mobile */}
        <div className="hidden md:block absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-primary/40 rounded-tl-lg" />
        <div className="hidden md:block absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-primary/40 rounded-tr-lg" />
        <div className="hidden md:block absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-primary/40 rounded-bl-lg" />
        <div className="hidden md:block absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-primary/40 rounded-br-lg" />
        
        {/* Sparkles */}
        <Sparkles className={`hidden sm:block absolute top-8 right-16 w-5 h-5 text-gold-soft transition-all duration-700 delay-700 ${hasAnimated ? 'opacity-100 animate-sparkle' : 'opacity-0'}`} />
        <Sparkles className={`hidden sm:block absolute bottom-32 left-12 w-4 h-4 text-gold-soft transition-all duration-700 delay-900 ${hasAnimated ? 'opacity-100 animate-sparkle' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }} />
        
        {/* Main content */}
        <div className="relative py-8 px-4 sm:py-12 sm:px-6 md:py-16 md:px-10 pb-28 sm:pb-24 text-center">
          {/* Flying hearts animation at top */}
          <div className={`flex justify-center gap-2 mb-4 sm:mb-6 transition-all duration-700 delay-300 ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            {[...Array(5)].map((_, i) => (
              <Heart 
                key={i}
                className="w-3 h-3 sm:w-4 sm:h-4 text-primary fill-primary animate-float"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
          
          {/* Happy text - slides in from left */}
          <h1 className={`font-script text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-primary mb-3 sm:mb-4 md:mb-6 transition-all duration-700 delay-500 ${hasAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            Nikkah Ceremony
          </h1>
          
          {/* Decorative line - scales in */}
          <div className={`flex items-center justify-center gap-2 sm:gap-4 my-4 sm:my-6 md:my-8 transition-all duration-500 delay-900 ${hasAnimated ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
            <div className="h-px w-12 sm:w-20 md:w-32 bg-gradient-to-r from-transparent to-primary" />
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-primary fill-primary animate-pulse" />
            <div className="h-px w-12 sm:w-20 md:w-32 bg-gradient-to-l from-transparent to-primary" />
          </div>
          
          {/* Groom and Bride names - BIGGER */}
          <div className={`transition-all duration-700 delay-1000 ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="font-script text-xl sm:text-2xl md:text-4xl lg:text-5xl text-primary mb-2 sm:mb-3 leading-tight">
              {nikkahDetails?.groom}
            </p>
            <p className="font-elegant text-xs sm:text-base md:text-lg text-muted-foreground mb-2 sm:mb-4">with</p>
            <p className="font-script text-xl sm:text-2xl md:text-4xl lg:text-5xl text-primary mb-4 sm:mb-6 md:mb-8 leading-tight">
              {nikkahDetails?.bride}
            </p>
          </div>
          
          {/* Date and Time */}
          <div className={`mt-3 sm:mt-4 md:mt-6 transition-all duration-700 delay-1100 ${hasAnimated ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
            <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-rose-100 to-pink-100 rounded-full border border-rose-200">
              <p className="font-script text-base sm:text-lg md:text-xl text-primary break-words">
                {nikkahDetails?.date}
              </p>
            </div>
          </div>
          
          {/* Signature */}
          <div className={`mt-5 sm:mt-8 md:mt-10 text-center transition-all duration-700 delay-1200 ${hasAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <p className="font-script text-base sm:text-lg md:text-lg text-muted-foreground">
              United in Love & Faith ✨
            </p>
            <p className="font-elegant text-xs sm:text-sm text-primary mt-1 sm:mt-2">
              May this bond last forever
            </p>
          </div>
        </div>
        
        {/* Bottom flowers decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 flex justify-center items-end gap-2 sm:gap-3 pb-2 sm:pb-4 pointer-events-none">
          {[...Array(7)].map((_, i) => (
            <div 
              key={i} 
              className={`flex flex-col items-center transition-all duration-500 ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ 
                animationDelay: `${1.3 + i * 0.08}s`,
                transitionDelay: `${1.3 + i * 0.08}s` 
              }}
            >
              <Heart 
                className={`text-primary fill-primary animate-float ${i % 2 === 0 ? 'w-2 h-2 sm:w-3 sm:h-3' : 'w-3 h-3 sm:w-4 sm:h-4'}`} 
                style={{ transform: 'rotate(180deg)', animationDelay: `${i * 0.1}s` }}
              />
              <div className="w-0.5 h-6 sm:h-8 bg-gradient-to-b from-green-500 to-green-600 rounded-full" />
            </div>
          ))}
        </div>
        
        {/* I Love You text decoration - bottom left */}
        <div className={`absolute bottom-8 sm:bottom-12 left-4 sm:left-6 transition-all duration-700 delay-1400 ${hasAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <span className="font-script text-lg sm:text-2xl md:text-3xl text-primary">Alhamdulillah ❤️</span>
        </div>
      </div>
    </div>
  );
};

export default AnniversaryCard;