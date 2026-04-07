import { useState } from 'react';

interface NikkahInvitationProps {
  groom?: string;
  bride?: string;
  date?: string;
  imageUrl?: string;
}

const NikkahInvitation = ({ 
  groom = "Muzamil Hashmi",
  bride = "Iqra Ali",
  date = "Sunday, 1:00 PM",
  imageUrl = "/invitation-image.jpg"
}: NikkahInvitationProps) => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="w-full h-full relative overflow-hidden bg-black/5">
      {/* Blurred Background Image */}
      <div
        className={`absolute inset-0 transition-transform duration-500 ease-out ${
          isZoomed ? 'scale-110' : 'scale-100'
        }`}
        style={{
          backgroundImage: `url('${imageUrl}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px)',
          zIndex: 0,
        }}
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 z-5" />

      {/* Zoom boundary - click anywhere to toggle zoom */}
      <div
        className="absolute inset-0 z-10 cursor-pointer transition-opacity hover:bg-white/5"
        onClick={() => setIsZoomed(!isZoomed)}
      />

      {/* Invitation Text - Top Right */}
      <div className="absolute top-6 right-6 md:top-12 md:right-12 z-20 max-w-sm bg-white/95 backdrop-blur-md rounded-lg p-6 md:p-8 shadow-2xl border border-rose-200/50">
        {/* Islamic greeting */}
        <div className="text-center mb-4">
          <p className="font-elegant text-xs text-primary/60 tracking-widest mb-2">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
          <p className="font-script text-xl md:text-2xl text-primary mb-3">
            In the Name of Allah
          </p>
        </div>

        {/* Invitation text */}
        <div className="space-y-3 text-center">
          <div>
            <p className="font-elegant text-xs text-muted-foreground/70 mb-1">
              Together with joy and blessings, we invite you to join us as we celebrate
            </p>
            <p className="font-script text-2xl text-primary/90 mb-1">
              Our Nikkah
            </p>
            <p className="font-elegant text-sm text-muted-foreground">
              The blessed union of
            </p>
          </div>

          {/* Names */}
          <div className="py-3 border-t border-b border-rose-200/30">
            <p className="font-script text-lg text-primary mb-2">{groom}</p>
            <p className="text-xs text-muted-foreground">and</p>
            <p className="font-script text-lg text-primary">{bride}</p>
          </div>

          {/* Date */}
          <div className="pt-2">
            <p className="font-elegant text-xs text-muted-foreground/70 mb-1">
              On
            </p>
            <p className="font-script text-md text-primary/80">{date}</p>
          </div>

          {/* Closing */}
          <div className="pt-3 text-xs text-muted-foreground/60 border-t border-rose-200/30">
            <p className="italic">
              "And of His signs is that He created for you from yourselves mates that you may find tranquility in them"
            </p>
            <p className="text-xs mt-2 font-elegant text-primary/60">
              - Quran 30:21
            </p>
          </div>
        </div>

        {/* Zoom hint */}
        <div className="mt-4 text-center text-xs text-muted-foreground/50 font-elegant">
          {isZoomed ? '✓ Click to zoom out' : 'Click image to reveal'}
        </div>
      </div>

      {/* Hover indicator for zoom */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-white/70 text-xs font-elegant pointer-events-none transition-opacity">
        {isZoomed ? '🔍 ' : ''}
      </div>
    </div>
  );
};

export default NikkahInvitation;
