interface NavigationDotsProps {
  currentSection: number;
  totalSections: number;
  onNavigate: (index: number) => void;
  isVisible: boolean;
}

const NavigationDots = ({ currentSection, totalSections, onNavigate, isVisible }: NavigationDotsProps) => {
  if (!isVisible) return null;
  
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3 bg-card/90 backdrop-blur-sm rounded-full shadow-romantic border border-rose-light/20">
      {[...Array(totalSections)].map((_, index) => (
        <button
          key={index}
          onClick={() => onNavigate(index)}
          className={`transition-all duration-300 rounded-full ${
            currentSection === index 
              ? 'w-8 h-3 bg-gradient-to-r from-primary to-accent shadow-soft' 
              : 'w-3 h-3 bg-primary/30 hover:bg-primary/50 hover:scale-110'
          }`}
          aria-label={`Go to section ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
