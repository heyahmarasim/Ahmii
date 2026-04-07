import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface ConfettiProps {
  isActive: boolean;
  duration?: number;
}

interface Particle {
  id: number;
  x: number;
  delay: number;
  size: number;
  color: string;
  type: 'heart' | 'circle' | 'star';
  rotation: number;
  duration: number;
}

const Confetti = ({ isActive, duration = 4000 }: ConfettiProps) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isActive) {
      setIsVisible(true);
      const colors = [
        'hsl(348, 83%, 47%)', // primary
        'hsl(340, 80%, 60%)', // accent
        'hsl(340, 80%, 85%)', // rose-light
        'hsl(40, 60%, 70%)',  // gold
        'hsl(0, 100%, 100%)', // white
        'hsl(350, 60%, 95%)', // rose-blush
      ];

      const types: ('heart' | 'circle' | 'star')[] = ['heart', 'circle', 'star'];
      
      const newParticles: Particle[] = Array.from({ length: 80 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 1.5,
        size: 8 + Math.random() * 16,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: types[Math.floor(Math.random() * types.length)],
        rotation: Math.random() * 360,
        duration: 2 + Math.random() * 2,
      }));

      setParticles(newParticles);

      const timer = setTimeout(() => {
        setIsVisible(false);
        setParticles([]);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isActive, duration]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-confetti-fall"
          style={{
            left: `${particle.x}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        >
          {particle.type === 'heart' ? (
            <Heart
              style={{
                width: particle.size,
                height: particle.size,
                color: particle.color,
                fill: particle.color,
                transform: `rotate(${particle.rotation}deg)`,
              }}
            />
          ) : particle.type === 'circle' ? (
            <div
              className="rounded-full"
              style={{
                width: particle.size,
                height: particle.size,
                backgroundColor: particle.color,
                transform: `rotate(${particle.rotation}deg)`,
              }}
            />
          ) : (
            <div
              style={{
                width: particle.size,
                height: particle.size,
                backgroundColor: particle.color,
                clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                transform: `rotate(${particle.rotation}deg)`,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Confetti;