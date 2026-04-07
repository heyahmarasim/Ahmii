import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

const MusicPlayer = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [showVolume, setShowVolume] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Auto-play when component mounts
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
      audioRef.current.currentTime = 0; // Start from beginning
      
      // Try to autoplay
      const playAudio = async () => {
        try {
          await audioRef.current?.play();
          setIsPlaying(true);
        } catch (error) {
          // Autoplay was prevented, user needs to interact
          console.log('Autoplay prevented, waiting for user interaction');
        }
      };
      playAudio();
    }
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.currentTime = Math.max(audioRef.current.currentTime, 0);
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
      if (newVolume === 0) {
        setIsMuted(true);
      } else if (isMuted) {
        setIsMuted(false);
        audioRef.current.muted = false;
      }
    }
  };

  return (
    <>
      {/* Audio element */}
      <audio
        ref={audioRef}
        src="/audio/background-music.mp3"
        loop
        muted={isMuted}
      />

      {/* Music control button */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
        {/* Play/Pause button */}
        <button
          onClick={togglePlay}
          className="p-3 rounded-full bg-card/90 backdrop-blur-sm shadow-romantic transition-all duration-300 hover:scale-110 hover:shadow-glow border border-rose-light/20"
          title={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-primary" />
          ) : (
            <Play className="w-5 h-5 text-primary" />
          )}
        </button>

        {/* Mute/Unmute button */}
        <button
          onClick={toggleMute}
          onMouseEnter={() => setShowVolume(true)}
          onMouseLeave={() => setShowVolume(false)}
          className="p-3 rounded-full bg-card/90 backdrop-blur-sm shadow-romantic transition-all duration-300 hover:scale-110 hover:shadow-glow border border-rose-light/20 relative"
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-primary" />
          ) : (
            <Volume2 className="w-5 h-5 text-primary" />
          )}
        </button>

        {/* Volume slider */}
        <div 
          className={`absolute top-16 right-0 bg-card/95 backdrop-blur-sm rounded-xl shadow-romantic p-3 border border-rose-light/20 transition-all duration-300 ${showVolume ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
          onMouseEnter={() => setShowVolume(true)}
          onMouseLeave={() => setShowVolume(false)}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-romantic text-muted-foreground">{volume}%</span>
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={handleVolumeChange}
              className="w-24 h-2 bg-rose-200 rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MusicPlayer;
