import { useState } from 'react';
import { Heart } from 'lucide-react';

interface EnvelopeProps {
  onOpen: () => void;
  isOpen: boolean;
}

const Envelope = ({ onOpen, isOpen }: EnvelopeProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative cursor-pointer transition-all duration-700 ${
        isOpen ? 'opacity-0 scale-75 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      onClick={onOpen}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Envelope body */}
      <div className="relative w-80 h-56 sm:w-96 sm:h-64 mx-auto envelope-wrapper">
        {/* Back of envelope */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-rose-deep rounded-lg shadow-romantic" />
        
        {/* Inner shadow for depth */}
        <div className="absolute inset-2 bg-gradient-to-b from-rose-deep/50 to-transparent rounded-lg" />
        
        {/* Envelope flap */}
        <div 
          className={`absolute top-0 left-0 right-0 h-32 sm:h-40 origin-top transition-transform duration-700 ${
            isHovered ? 'scale-y-[0.85]' : ''
          }`}
          style={{
            background: 'linear-gradient(180deg, hsl(348, 83%, 50%) 0%, hsl(348, 70%, 42%) 100%)',
            clipPath: 'polygon(0 0, 50% 70%, 100% 0)',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Flap inner shading */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, transparent 0%, hsl(345, 50%, 30%, 0.3) 100%)',
              clipPath: 'polygon(0 0, 50% 70%, 100% 0)',
            }}
          />
        </div>
        
        {/* Envelope front */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-44 sm:h-52 bg-gradient-to-b from-primary to-rose-deep rounded-b-lg"
          style={{
            clipPath: 'polygon(0 25%, 50% 0, 100% 25%, 100% 100%, 0 100%)',
          }}
        />
        
        {/* Heart seal */}
        <div 
          className={`absolute top-24 sm:top-28 left-1/2 -translate-x-1/2 z-10 transition-all duration-300 ${
            isHovered ? 'scale-110' : ''
          }`}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-rose-deep rounded-full blur-md animate-pulse-glow" />
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-rose-deep to-primary rounded-full flex items-center justify-center shadow-lg border-2 border-rose-light/30">
              <Heart 
                className={`w-7 h-7 sm:w-8 sm:h-8 text-rose-light fill-rose-light transition-transform duration-300 ${
                  isHovered ? 'animate-heartbeat' : ''
                }`} 
              />
            </div>
          </div>
        </div>
        
        {/* Decorative lines on envelope */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-48 space-y-2">
          <div className="h-0.5 bg-rose-light/20 rounded-full" />
          <div className="h-0.5 bg-rose-light/15 rounded-full mx-4" />
          <div className="h-0.5 bg-rose-light/10 rounded-full mx-8" />
        </div>
      </div>
      
      {/* Click hint */}
      <p 
        className={`text-center mt-6 font-script text-2xl text-rose-light transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-1'
        }`}
      >
        Click to open your letter
      </p>
    </div>
  );
};

export default Envelope;
