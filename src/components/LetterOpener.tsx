import { useState } from 'react';
import { Heart } from 'lucide-react';

interface LetterOpenerProps {
  onOpen: () => void;
  isOpen: boolean;
}

const LetterOpener = ({ onOpen, isOpen }: LetterOpenerProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    if (!isOpening) {
      setIsOpening(true);
      setTimeout(() => {
        onOpen();
      }, 1200);
    }
  };

  return (
    <div 
      className={`fixed inset-0 z-40 flex items-center justify-center transition-all duration-1000 ${
        isOpen ? 'opacity-0 pointer-events-none scale-110' : 'opacity-100'
      }`}
      style={{
        background: 'linear-gradient(180deg, hsl(330, 75%, 70%) 0%, hsl(340, 80%, 55%) 50%, hsl(350, 75%, 45%) 100%)',
      }}
    >
      {/* Depth pattern overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 20% 20%, hsl(330, 80%, 80%) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, hsl(350, 70%, 35%) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, hsl(340, 75%, 60%) 0%, transparent 70%)
          `,
        }}
      />

      {/* Envelope Container - Full page coverage */}
      <div 
        className="absolute inset-0 cursor-pointer"
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Back of envelope (visible when flap opens) */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, hsl(340, 70%, 65%) 0%, hsl(350, 75%, 50%) 100%)',
          }}
        />
        
        {/* Envelope body with depth */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Left flap - Dark */}
          <div 
            className="absolute left-0 top-0 w-1/2 h-full origin-left"
            style={{
              background: 'linear-gradient(135deg, hsl(340, 65%, 55%) 0%, hsl(350, 70%, 40%) 50%, hsl(355, 65%, 35%) 100%)',
              clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
              boxShadow: 'inset -20px 0 60px rgba(0,0,0,0.3)',
            }}
          />
          
          {/* Right flap - Dark */}
          <div 
            className="absolute right-0 top-0 w-1/2 h-full origin-right"
            style={{
              background: 'linear-gradient(-135deg, hsl(340, 65%, 55%) 0%, hsl(350, 70%, 40%) 50%, hsl(355, 65%, 35%) 100%)',
              clipPath: 'polygon(100% 0, 0 50%, 100% 100%)',
              boxShadow: 'inset 20px 0 60px rgba(0,0,0,0.3)',
            }}
          />
          
          {/* Bottom flap - Highlighted */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-1/2 origin-bottom"
            style={{
              background: 'linear-gradient(180deg, hsl(338, 75%, 72%) 0%, hsl(345, 70%, 60%) 50%, hsl(350, 65%, 50%) 100%)',
              clipPath: 'polygon(0 100%, 50% 0, 100% 100%)',
              boxShadow: 'inset 0 10px 40px rgba(255,255,255,0.2), inset 0 -5px 30px rgba(0,0,0,0.15)',
            }}
          />
          
        </div>

        {/* Top flap - Highlighted with pink - opens on click */}
        <div 
          className={`absolute top-0 left-0 right-0 h-1/2 origin-top transition-transform duration-1000 ease-out ${
            isOpening ? 'envelope-flap-open' : ''
          }`}
          style={{
            background: 'linear-gradient(0deg, hsl(345, 70%, 58%) 0%, hsl(338, 80%, 75%) 50%, hsl(330, 85%, 82%) 100%)',
            clipPath: 'polygon(0 0, 50% 100%, 100% 0)',
            transformStyle: 'preserve-3d',
            boxShadow: '0 10px 40px rgba(0,0,0,0.25)',
          }}
        >
          {/* Flap highlight at top */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.3) 0%, transparent 30%, rgba(0,0,0,0.05) 100%)',
              clipPath: 'polygon(0 0, 50% 100%, 100% 0)',
            }}
          />
        </div>

        {/* Heart seal - Centered */}
        <div 
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-500 ${
            isHovered && !isOpening ? 'scale-110' : 'scale-100'
          } ${isOpening ? 'opacity-0 scale-150' : 'opacity-100'}`}
        >
          {/* Wax seal */}
          <div className="relative w-24 h-24 sm:w-32 sm:h-32">
            <div 
              className="absolute inset-0 rounded-full animate-pulse-glow"
              style={{
                background: 'radial-gradient(circle at 30% 30%, hsl(350, 65%, 45%) 0%, hsl(355, 60%, 35%) 50%, hsl(360, 55%, 28%) 100%)',
                boxShadow: '0 8px 30px rgba(0,0,0,0.5), inset 0 3px 15px rgba(255,255,255,0.15), inset 0 -3px 10px rgba(0,0,0,0.2)',
              }}
            />
            
            {/* Heart icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Heart 
                className={`w-12 h-12 sm:w-16 sm:h-16 text-rose-200 fill-rose-300/80 drop-shadow-lg ${
                  isHovered && !isOpening ? 'animate-heartbeat' : ''
                }`}
              />
            </div>
            
            {/* Decorative rings */}
            <div className="absolute inset-2 rounded-full border-2 border-rose-400/40" />
            <div className="absolute inset-4 rounded-full border border-rose-300/30" />
          </div>
        </div>

        {/* Depth edge highlights */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top edge highlight */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-b from-white/20 to-transparent" />
          {/* Left edge shadow */}
          <div className="absolute top-0 left-0 bottom-0 w-2 bg-gradient-to-r from-black/10 to-transparent" />
          {/* Right edge shadow */}
          <div className="absolute top-0 right-0 bottom-0 w-2 bg-gradient-to-l from-black/10 to-transparent" />
          {/* Bottom edge shadow */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-black/15 to-transparent" />
        </div>
      </div>

      {/* Click instruction */}
      <div 
        className={`absolute bottom-12 left-1/2 -translate-x-1/2 z-30 transition-all duration-500 ${
          isOpening ? 'opacity-0 translate-y-4' : isHovered ? 'opacity-100 translate-y-0' : 'opacity-70'
        }`}
      >
        <p className="font-script text-2xl sm:text-3xl text-white text-center drop-shadow-lg animate-pulse">
          Click to open your letter
        </p>
        <p className="font-script text-xl sm:text-2xl text-rose-100 text-center drop-shadow-lg mt-4">
          بسم الله الرحمن الرحيم
        </p>
      </div>

      {/* Ambient floating hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {[...Array(12)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-white/15 fill-white/10 animate-float"
            style={{
              left: `${5 + i * 8}%`,
              top: `${10 + (i % 4) * 22}%`,
              width: `${20 + (i % 4) * 10}px`,
              height: `${20 + (i % 4) * 10}px`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${4 + i * 0.4}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LetterOpener;
