import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface FloatingHeart {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    const createHeart = () => {
      const heart: FloatingHeart = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        size: Math.random() * 20 + 10,
        duration: Math.random() * 8 + 8,
        delay: Math.random() * 2,
        opacity: Math.random() * 0.4 + 0.1,
      };
      setHearts(prev => [...prev, heart]);

      // Remove heart after animation
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== heart.id));
      }, (heart.duration + heart.delay) * 1000);
    };

    // Create initial hearts
    for (let i = 0; i < 8; i++) {
      setTimeout(createHeart, i * 500);
    }

    // Continue creating hearts
    const interval = setInterval(createHeart, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="floating-heart"
          style={{
            left: `${heart.left}%`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          <Heart
            size={heart.size}
            className="text-primary fill-primary"
            style={{ opacity: heart.opacity }}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
