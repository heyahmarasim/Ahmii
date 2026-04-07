import { Heart } from 'lucide-react';

interface ReasonsILoveYouProps {
  isVisible: boolean;
}

const reasons = [
  "Your kindness and compassion light up every room you enter.",
  "How you make me feel safe and cherished in your presence.",
  "The way you support my dreams and celebrate my victories.",
  "Your sense of humor that makes even tough days feel lighter.",
  "How you listen with your heart, not just your ears.",
  "Your patience and understanding when life gets complicated.",
  "The gentle way you show your love through your actions.",
  "How you inspire me to be a better person every single day.",
  "Your infectious smile that brightens my entire world.",
  "Because with you, I found my perfect partner and soulmate, Iqra ❤️",
];

const ReasonsILoveYou = ({ isVisible }: ReasonsILoveYouProps) => {
  return (
    <div
      className={`w-full max-w-2xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="font-script text-4xl sm:text-5xl text-primary mb-3">
          10 Reasons Why I'm Blessed With You
        </h2>
        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-rose-light" />
          <Heart className="w-5 h-5 text-primary fill-primary animate-heartbeat" />
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-rose-light" />
        </div>
      </div>

      {/* Reasons list */}
      <div className="space-y-4">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 bg-card/80 backdrop-blur-sm rounded-2xl border border-rose-light/20 shadow-soft animate-fade-in-up"
            style={{ animationDelay: `${0.3 + index * 0.15}s` }}
          >
            <span className="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm shadow-md">
              {index + 1}
            </span>
            <p className="font-romantic text-lg text-card-foreground/90 leading-relaxed pt-1">
              {reason}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReasonsILoveYou;
