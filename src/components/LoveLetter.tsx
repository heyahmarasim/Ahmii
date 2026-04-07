import { Heart, Quote } from 'lucide-react';

interface LoveLetterProps {
  recipientName: string;
  letterContent: string;
  signature: string;
  isVisible: boolean;
}

const LoveLetter = ({ recipientName, letterContent, signature, isVisible }: LoveLetterProps) => {
  const paragraphs = letterContent.split('\n\n');
  
  return (
    <div 
      className={`card-romantic p-6 sm:p-10 max-w-3xl mx-auto relative transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: '0.5s' }}
    >
      {/* Decorative header */}
      <div className="text-center mb-8">
        <div className="flex justify-center gap-2 mb-4">
          <Quote className="w-8 h-8 text-primary/30 rotate-180" />
        </div>
        <h2 className="font-script text-4xl sm:text-5xl text-primary mb-2">
          My Letter to You
        </h2>
        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-rose-light" />
          <Heart className="w-4 h-4 text-primary fill-primary" />
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-rose-light" />
        </div>
      </div>
      
      {/* Letter content */}
      <div className="bg-rose-blush/30 rounded-xl p-6 sm:p-8 border border-rose-light/20">
        {/* Salutation */}
        <p className="font-elegant italic text-lg text-card-foreground mb-6">
          To my dearest <span className="text-primary">{recipientName}</span>,
        </p>
        
        {/* Letter paragraphs */}
        <div className="space-y-4 font-romantic text-card-foreground/90 leading-relaxed">
          {paragraphs.map((paragraph, index) => (
            <p 
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${0.8 + index * 0.2}s` }}
            >
              {paragraph}
            </p>
          ))}
        </div>
        
        {/* Signature */}
        <div className="mt-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span className="font-elegant text-card-foreground/70">I love you Always & Forever</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
          </div>
          <p className="font-script text-3xl text-primary">
            {signature}
          </p>
        </div>
      </div>
      
      {/* Decorative elements at bottom corners */}
      <div className="absolute -bottom-2 -left-2 w-20 h-20 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary fill-current">
          <path d="M10,90 Q30,70 50,90 Q70,70 90,90 Q70,60 50,40 Q30,60 10,90" />
        </svg>
      </div>
      <div className="absolute -bottom-2 -right-2 w-20 h-20 opacity-20 scale-x-[-1]">
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary fill-current">
          <path d="M10,90 Q30,70 50,90 Q70,70 90,90 Q70,60 50,40 Q30,60 10,90" />
        </svg>
      </div>
    </div>
  );
};

export default LoveLetter;
