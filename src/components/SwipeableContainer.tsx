
import { useState, useEffect } from 'react';
import SwipeableCard from './SwipeableCard';

interface SwipeableContainerProps {
  children: React.ReactNode[];
  onSectionChange?: (index: number) => void;
}

const SwipeableContainer = ({ children, onSectionChange }: SwipeableContainerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showGuide, setShowGuide] = useState(true);
    const [showSwipeHint, setShowSwipeHint] = useState(true);

  useEffect(() => {
     setShowSwipeHint(true);
  }, []);

  useEffect(() => {
    onSectionChange?.(currentIndex);
  }, [currentIndex, onSectionChange]);

  const handleSwipeLeft = () => {
    if (currentIndex < children.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handleSwipeRight = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setShowGuide(false);
  };

  return (
    <div className="relative w-full h-screen overflow-x-hidden overflow-y-auto bg-black">
      {/* Progress Dots */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white w-6' 
                : index < currentIndex
                ? 'bg-white/80'
                : 'bg-white/30'
            }`}
          />
        ))}
      </div>

      {/* Card Stack */}
      <div className="relative w-full h-full">
        {children.map((child, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-500 ease-out ${
              index === currentIndex 
                ? 'translate-x-0 opacity-100 z-10' 
                : index < currentIndex
                ? '-translate-x-full opacity-0 z-0'
                : 'translate-x-full opacity-0 z-0'
            }`}
          >
            <SwipeableCard
              onSwipeLeft={handleSwipeLeft}
              onSwipeRight={handleSwipeRight}
              isActive={index === currentIndex}
              showGuide={showGuide && index === 0}
              showSwipeHint={true}
            >
              {child}
            </SwipeableCard>
          </div>
        ))}
      </div>

      {/* Section Counter */}
      <div className="fixed bottom-6 right-6 z-30 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
        <span className="text-white text-sm font-medium">
          {currentIndex + 1} / {children.length}
        </span>
      </div>
    </div>
  );
};

export default SwipeableContainer;
