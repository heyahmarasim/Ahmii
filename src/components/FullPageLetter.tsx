import { Heart, Quote, ChevronDown } from 'lucide-react';

interface FullPageLetterProps {
  recipientName: string;
  letterContent: string;
  signature: string;
  isVisible: boolean;
  onContinue: () => void;
}

const FullPageLetter = ({ recipientName, letterContent, signature, isVisible, onContinue }: FullPageLetterProps) => {
  const paragraphs = letterContent.split('\n\n');
  
  return (
    <div 
      className={`min-h-screen w-full relative transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-rose-blush/20 to-card" />
      
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-primary to-transparent" />

      {/* Content container */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 sm:py-24">
        {/* Letter paper */}
        <div 
          className="w-full max-w-3xl bg-card/95 backdrop-blur-sm rounded-3xl shadow-romantic p-6 sm:p-12 md:p-16 relative overflow-hidden animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          {/* Paper texture overlay */}
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute inset-0" style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
              opacity: 0.05
            }} />
          </div>

          {/* Decorative corner flourishes */}
          <div className="absolute top-6 left-6 w-24 h-24 border-t-2 border-l-2 border-primary/20 rounded-tl-2xl" />
          <div className="absolute top-6 right-6 w-24 h-24 border-t-2 border-r-2 border-primary/20 rounded-tr-2xl" />
          <div className="absolute bottom-6 left-6 w-24 h-24 border-b-2 border-l-2 border-primary/20 rounded-bl-2xl" />
          <div className="absolute bottom-6 right-6 w-24 h-24 border-b-2 border-r-2 border-primary/20 rounded-br-2xl" />

          {/* Header */}
          <div className="text-center mb-10 relative z-10">
            <Quote className="w-10 h-10 text-primary/20 mx-auto mb-4 rotate-180" />
            <h2 className="font-script text-4xl sm:text-5xl md:text-6xl text-primary mb-3">
              My Letter to You
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-rose-light" />
              <Heart className="w-5 h-5 text-primary fill-primary animate-heartbeat" />
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-rose-light" />
            </div>
          </div>

          {/* Salutation */}
          <p 
            className="font-elegant italic text-xl sm:text-2xl text-card-foreground mb-8 animate-fade-in-up"
            style={{ animationDelay: '0.5s' }}
          >
            To my dearest <span className="text-primary font-semibold">{recipientName}</span>,
          </p>

          {/* Letter content */}
          <div className="space-y-6 relative z-10">
            {paragraphs.map((paragraph, index) => (
              <p 
                key={index}
                className="font-romantic text-lg sm:text-xl text-card-foreground/90 leading-relaxed animate-fade-in-up"
                style={{ animationDelay: `${0.7 + index * 0.2}s` }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Signature */}
          <div 
            className="mt-12 text-center animate-fade-in-up"
            style={{ animationDelay: '1.3s' }}
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <Heart className="w-4 h-4 text-primary fill-primary" />
              <span className="font-elegant text-card-foreground/70 text-lg">I love you Always & Forever</span>
              <Heart className="w-4 h-4 text-primary fill-primary" />
            </div>
            <p className="font-script text-4xl sm:text-5xl text-primary">
              {signature}
            </p>
          </div>

          {/* Decorative seal */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-rose-deep rounded-full flex items-center justify-center shadow-lg border-4 border-card">
              <Heart className="w-8 h-8 text-white fill-white" />
            </div>
          </div>
        </div>

        {/* Continue button */}
        <button
          onClick={onContinue}
          className="mt-16 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 animate-fade-in-up group"
          style={{ animationDelay: '1.5s' }}
        >
          <span className="font-romantic text-lg">Continue to more surprises</span>
          <ChevronDown className="w-6 h-6 animate-bounce group-hover:text-primary" />
        </button>
      </div>
    </div>
  );
};

export default FullPageLetter;
