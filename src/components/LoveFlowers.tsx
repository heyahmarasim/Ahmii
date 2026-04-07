import { useEffect, useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import flowerCorner from '@/assets/flower-corner.png';
import tulipBouquet from '@/assets/flower-bouquet.png';
interface LoveFlowersProps {
  isVisible: boolean;
}
const loveTranslations = [{
  language: "English",
  text: "I Love You"
}, {
  language: "Spanish",
  text: "Te Amo"
}, {
  language: "French",
  text: "Je T'aime"
}, {
  language: "Italian",
  text: "Ti Amo"
}, {
  language: "German",
  text: "Ich Liebe Dich"
}, {
  language: "Portuguese",
  text: "Eu Te Amo"
}, {
  language: "Japanese",
  text: "愛してる"
}, {
  language: "Korean",
  text: "사랑해"
}, {
  language: "Chinese",
  text: "我爱你"
}, {
  language: "Hindi",
  text: "मैं तुमसे प्यार करता हूँ"
}, {
  language: "Arabic",
  text: "أحبك"
}, {
  language: "Russian",
  text: "Я тебя люблю"
}];
const LoveFlowers = ({
  isVisible
}: LoveFlowersProps) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isVisible, hasAnimated]);
  const leftTranslations = loveTranslations.slice(0, 6);
  const rightTranslations = loveTranslations.slice(6, 12);
  return <div className="w-full max-w-6xl mx-auto relative">
      {/* Background card */}
      <div className={`relative bg-gradient-to-br from-card via-white to-rose-50 rounded-3xl shadow-2xl p-6 sm:p-10 overflow-hidden transition-all duration-1000 ${hasAnimated ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        
        {/* Corner flowers - Top Left */}
        <img src={flowerCorner} alt="Flower decoration" className={`absolute top-0 left-0 w-24 sm:w-32 lg:w-40 h-auto transition-all duration-700 delay-200 ${hasAnimated ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
        
        {/* Corner flowers - Top Right */}
        <img src={flowerCorner} alt="Flower decoration" className={`absolute top-0 right-0 w-24 sm:w-32 lg:w-40 h-auto transition-all duration-700 delay-300 ${hasAnimated ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} style={{
        transform: 'scaleX(-1)'
      }} />
        
        {/* Corner flowers - Bottom Left */}
        <img src={flowerCorner} alt="Flower decoration" className={`absolute bottom-0 left-0 w-24 sm:w-32 lg:w-40 h-auto transition-all duration-700 delay-400 ${hasAnimated ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} style={{
        transform: 'scaleY(-1)'
      }} />
        
        {/* Corner flowers - Bottom Right */}
        <img src={flowerCorner} alt="Flower decoration" className={`absolute bottom-0 right-0 w-24 sm:w-32 lg:w-40 h-auto transition-all duration-700 delay-500 ${hasAnimated ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} style={{
        transform: 'scale(-1, -1)'
      }} />
        
        {/* Header */}
        <div className={`text-center mb-8 transition-all duration-700 delay-200 ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <h2 className="font-elegant text-3xl sm:text-5xl lg:text-6xl text-primary mb-2 tracking-widest uppercase">FLOWERS FOR YOU</h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-rose-300" />
            <Heart className="w-5 h-5 text-primary fill-primary animate-heartbeat" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-rose-300" />
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-center py-8">
          
          {/* Left translations */}
          <div className="flex flex-col gap-4 order-2 lg:order-1">
            {leftTranslations.map((item, index) => <div key={item.language} className={`relative transition-all duration-500 ${hasAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`} style={{
            transitionDelay: `${0.4 + index * 0.1}s`
          }}>
                <div className="relative bg-gradient-to-r from-rose-100 to-pink-100 rounded-xl p-4 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 border border-rose-200/50">
                  <div className="text-center">
                    <p className="text-xs uppercase tracking-wider text-rose-400 mb-1 font-romantic">{item.language}</p>
                    <p className="font-script text-xl sm:text-2xl text-primary">{item.text}</p>
                  </div>
                  <Heart className="absolute -right-2 -top-2 w-5 h-5 text-primary fill-primary animate-pulse" />
                </div>
              </div>)}
          </div>

          {/* Center - Tulip bouquet */}
          <div className={`relative flex justify-center order-1 lg:order-2 transition-all duration-1000 delay-300 ${hasAnimated ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
            <div className="relative">
              <img src={tulipBouquet} alt="Beautiful tulip bouquet" className="w-48 sm:w-64 lg:w-80 h-auto drop-shadow-2xl animate-float" />
              
              {/* Sparkles around bouquet */}
              <Sparkles className={`absolute -top-4 -right-4 w-6 h-6 text-gold-soft transition-all duration-500 delay-1000 ${hasAnimated ? 'opacity-100 animate-sparkle' : 'opacity-0'}`} />
              <Sparkles className={`absolute top-20 -left-6 w-5 h-5 text-gold-soft transition-all duration-500 delay-1100 ${hasAnimated ? 'opacity-100 animate-sparkle' : 'opacity-0'}`} style={{
              animationDelay: '0.5s'
            }} />
              <Sparkles className={`absolute bottom-20 -right-4 w-4 h-4 text-gold-soft transition-all duration-500 delay-1200 ${hasAnimated ? 'opacity-100 animate-sparkle' : 'opacity-0'}`} style={{
              animationDelay: '0.8s'
            }} />
              
              {/* Floating hearts around */}
              <Heart className={`absolute -top-2 left-4 w-4 h-4 text-primary fill-primary transition-all duration-500 delay-800 ${hasAnimated ? 'opacity-100 animate-float' : 'opacity-0'}`} />
              <Heart className={`absolute top-1/3 -right-6 w-5 h-5 text-accent fill-accent transition-all duration-500 delay-900 ${hasAnimated ? 'opacity-100 animate-float-delayed' : 'opacity-0'}`} />
              <Heart className={`absolute bottom-1/3 -left-8 w-4 h-4 text-primary fill-primary transition-all duration-500 delay-1000 ${hasAnimated ? 'opacity-100 animate-float' : 'opacity-0'}`} style={{
              animationDelay: '1s'
            }} />
            </div>
          </div>

          {/* Right translations */}
          <div className="flex flex-col gap-4 order-3">
            {rightTranslations.map((item, index) => <div key={item.language} className={`relative transition-all duration-500 ${hasAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`} style={{
            transitionDelay: `${0.4 + index * 0.1}s`
          }}>
                <div className="relative bg-gradient-to-l from-rose-100 to-pink-100 rounded-xl p-4 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 border border-rose-200/50">
                  <div className="text-center">
                    <p className="text-xs uppercase tracking-wider text-rose-400 mb-1 font-romantic">{item.language}</p>
                    <p className="font-script text-xl sm:text-2xl text-primary">{item.text}</p>
                  </div>
                  <Heart className="absolute -left-2 -top-2 w-5 h-5 text-primary fill-primary animate-pulse" />
                </div>
              </div>)}
          </div>
        </div>

        {/* Hearts border at bottom */}
        <div className={`flex justify-center gap-2 mt-6 transition-all duration-700 delay-1200 ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[...Array(15)].map((_, i) => <Heart key={i} className="w-4 h-4 text-primary fill-primary animate-float" style={{
          animationDelay: `${i * 0.1}s`
        }} />)}
        </div>

        {/* Signature */}
        <div className={`text-right mt-6 pr-4 transition-all duration-700 delay-1300 ${hasAnimated ? 'opacity-100' : 'opacity-0'}`}>
          <span className="font-script text-2xl text-primary">With Love! ❤️</span>
        </div>
      </div>
    </div>;
};
export default LoveFlowers;