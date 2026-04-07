import { useState, useEffect, useRef } from 'react';
import FloatingHearts from '@/components/FloatingHearts';
import LetterOpener from '@/components/LetterOpener';
import AnniversaryCard from '@/components/AnniversaryCard';
import NavigationDots from '@/components/NavigationDots';
import Confetti from '@/components/Confetti';

const Index = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Customizable content
  const names = {
    from: "Muzamil Hashmi",
    to: "Iqra Ali"
  };
  
  const nikkahDetails = {
    event: "Nikkah Ceremony",
    groom: "Muzamil Hashmi",
    bride: "Iqra Ali",
    date: "Sunday 1:00 PM, 12 April"
  };

  const photos = [
    { id: 1, caption: "Our special moments" },
    { id: 2, caption: "Together forever" },
    { id: 3, caption: "Love of my life" },
    { id: 4, caption: "You & me" },
  ];

  const totalSections = 2; // Card, Image section

  const handleOpen = () => {
    setIsOpened(true);
    setShowConfetti(true);
    setShowContent(true);
  };

  const handleContinue = () => {
    // Not needed anymore
  };

  const handleNavigate = (index: number) => {
    setCurrentSection(index);
    if (contentRef.current) {
      const sections = contentRef.current.querySelectorAll('.content-section');
      sections[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current || !showContent) return;
      const sections = contentRef.current.querySelectorAll('.content-section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionBottom = sectionTop + rect.height;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setCurrentSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showContent]);

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Confetti Animation */}
      <Confetti isActive={showConfetti} duration={5000} />
      
      {/* Floating Hearts */}
      <FloatingHearts />
      
      {/* Letter Opener (Red Envelope Style) */}
      <LetterOpener onOpen={handleOpen} isOpen={isOpened} />
      
      {/* Main Content */}
      <div 
        ref={contentRef}
        className={`transition-all duration-1000 ${
          showContent ? 'opacity-100' : 'opacity-0 pointer-events-none h-0 overflow-hidden'
        }`}
      >
        {/* Hearts background */}
        <div className="fixed inset-0 hearts-bg pointer-events-none" />
        
        {/* Nikkah Card Section */}
        <section className="content-section min-h-screen flex items-center justify-center py-16 px-4 relative z-10">
          <AnniversaryCard names={names} isVisible={showContent} nikkahDetails={nikkahDetails} />
        </section>
        
        {/* Nikkah Invitation Image Section */}
        <section className="content-section w-full h-screen flex items-center justify-center relative z-10 overflow-hidden">
          <div className="w-full h-full relative group cursor-zoom-in transition-all duration-500 hover:scale-110">
            {/* Blurred Image Background */}
            <img 
              src="/invitation-image.jpg" 
              alt="Nikkah Invitation"
              className="w-full h-full object-cover blur-sm"
              loading="lazy"
              onError={(e) => {
                console.log('Image failed to load from:', e.currentTarget.src);
                e.currentTarget.src = '/placeholder.svg';
              }}
            />
            
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-black/25" />
            
            {/* Invitation Text - Top Center */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center text-white max-w-4xl mx-auto px-6">
              <div className="space-y-8">
                <div className="font-vibes text-5xl md:text-6xl drop-shadow-lg">
                  You are warmly invited
                </div>
                
                <div className="py-8 border-t-2 border-b-2 border-white/40">
                  <div className="font-vibes text-4xl md:text-5xl drop-shadow-lg mb-8">
                    to an evening of celebration and blessings
                  </div>
                  <div className="font-vibes text-3xl md:text-4xl drop-shadow-lg mb-8 opacity-95">
                    as two souls unite in the holy bond of Nikkah
                  </div>
                  <div className="font-script text-lg md:text-xl drop-shadow-lg leading-relaxed opacity-90">
                    Join us in witnessing this beautiful moment filled with love, faith, and family. Together with our families, we celebrate this sacred union and invite you to share in our joy and blessings.
                  </div>
                </div>
                
                <div className="font-vibes text-3xl md:text-4xl drop-shadow-lg opacity-95">
                  With warm regards and heartfelt gratitude
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="py-16 text-center relative z-10">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-card/80 backdrop-blur-sm rounded-full shadow-romantic border border-rose-light/20">
            <span className="font-script text-2xl sm:text-3xl text-primary animate-pulse-glow">
              Alhamdulillah for this beautiful journey together ❤️
            </span>
          </div>
        </footer>
      </div>
      
      {/* Navigation Dots */}
      <NavigationDots 
        currentSection={currentSection}
        totalSections={totalSections}
        onNavigate={handleNavigate}
        isVisible={showContent}
      />
    </div>
  );
};

export default Index;