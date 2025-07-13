/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SwipeableCardProps {
  children: React.ReactNode;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  isActive: boolean;
  showGuide?: boolean;
  showSwipeHint?: boolean;
  showSwipeTilt: any
}

const SwipeableCard = ({
  children,
  onSwipeLeft,
  onSwipeRight,
  isActive,
  showGuide = false,
  showSwipeTilt = false,
}: SwipeableCardProps) => {
  const [dragState, setDragState] = useState({
    isDragging: false,
    startX: 0,
    currentX: 0,
    deltaX: 0,
  });
  const cardRef = useRef<HTMLDivElement>(null);
  const [hasSwipedOnce, setHasSwipedOnce] = useState(false);  

  useEffect(() => {
    if (!showSwipeTilt || hasSwipedOnce) return;

    const animateSwipe = () => {
      // Delay before animation starts
      setTimeout(() => {
        // Swipe right only
        setDragState({
          isDragging: true,
          startX: 0,
          currentX: -50,
          deltaX: -50,
        });

        setTimeout(() => {
          // Reset to center
          setDragState({
            isDragging: false,
            startX: 0,
            currentX: 0,
            deltaX: 0,
          });

          setHasSwipedOnce(true);
        }, 700); // pause after right tilt
      }, 600); // initial delay before starting animation
    };

    animateSwipe();
  }, [showSwipeTilt, hasSwipedOnce]);

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setDragState((prev) => ({
      ...prev,
      isDragging: true,
      startX: touch.clientX,
      currentX: touch.clientX,
      deltaX: 0,
    }));
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!dragState.isDragging) return;

    const touch = e.touches[0];
    const deltaX = touch.clientX - dragState.startX;

    setDragState((prev) => ({
      ...prev,
      currentX: touch.clientX,
      deltaX,
    }));
  };

  const handleTouchEnd = () => {
    if (!dragState.isDragging) return;

    const threshold = 100;
    const { deltaX } = dragState;

    if (Math.abs(deltaX) > threshold) {
      if (deltaX < -threshold && onSwipeLeft) {
        onSwipeLeft();
      } else if (deltaX > threshold && onSwipeRight) {
        onSwipeRight();
      }
    }

    setDragState({
      isDragging: false,
      startX: 0,
      currentX: 0,
      deltaX: 0,
    });
  };

  const getCardStyle = () => {
    const rotation = dragState.deltaX * (hasSwipedOnce ? 0.1 : 0.05);
    const opacity = Math.max(
      hasSwipedOnce ? 0.8 : 0.85,
      1 - Math.abs(dragState.deltaX) / 300
    );

    const style = {
      transform: `translateX(${dragState.deltaX}px) rotate(${rotation}deg)`,
      opacity,
      willChange: "transform, opacity",
    };

    // if (!hasSwipedOnce) {
    //   return {
    //     ...style,
    //     transition: "transform 0.6s ease-in-out, opacity 0.4s ease-in-out",
    //   };
    // }

    return {
      ...style,
      transition: dragState.isDragging
        ? "none"
        : "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    };
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Left arrow */}
      <button
        onClick={onSwipeRight}
        className="hidden md:flex fixed left-4 top-1/2 transform -translate-y-1/2 z-30 p-3 bg-green-500/20 border-2 border-green-400 rounded-full hover:bg-green-500/40 transition"
        aria-label="Swipe Left"
        type="button"
      >
        <ChevronLeft size={24} className="text-green-400" />
      </button>

      {/* Right arrow */}
      <button
        onClick={onSwipeLeft}
        className="hidden md:flex fixed right-4 top-1/2 transform -translate-y-1/2 z-30 p-3 bg-blue-500/20 border-2 border-blue-400 rounded-full hover:bg-blue-500/40 transition"
        aria-label="Swipe Right"
        type="button"
      >
        <ChevronRight size={24} className="text-blue-400" />
      </button>

      {/* Swipeable Card */}
      <div
        ref={cardRef}
        className={`w-full h-full touch-none select-none cursor-grab active:cursor-grabbing ${
          isActive ? "z-10" : "z-0"
        }`}
        style={getCardStyle()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {children}
      </div>

      {/* Swipe Guide Overlay */}
      {/* {showGuide && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-20 animate-fade-in">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 mx-4 text-center border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">How to Navigate</h3>
            <div className="flex items-center justify-center space-x-6 mb-4">
              <div className="flex items-center space-x-2 text-green-400">
                <ChevronLeft size={24} />
                <span className="text-sm">Swipe right</span>
              </div>
              <div className="w-px h-6 bg-white/30"></div>
              <div className="flex items-center space-x-2 text-blue-400">
                <span className="text-sm">Swipe left</span>
                <ChevronRight size={24} />
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Swipe to navigate between sections
            </p>
          </div>
        </div>
      )} */}

      {/* Swipe Direction Indicators */}
      {dragState.isDragging && (
        <>
          <div
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-opacity duration-150 ${
              dragState.deltaX > 50 ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="bg-green-500/20 border-2 border-green-400 rounded-full p-4">
              <ChevronLeft size={32} className="text-green-400" />
            </div>
          </div>
          <div
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-opacity duration-150 ${
              dragState.deltaX < -50 ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="bg-blue-500/20 border-2 border-blue-400 rounded-full p-4">
              <ChevronRight size={32} className="text-blue-400" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SwipeableCard;
