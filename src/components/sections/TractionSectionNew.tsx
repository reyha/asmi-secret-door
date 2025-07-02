
import { useState, useEffect, useRef } from 'react';

const TractionSectionNew = () => {
  const [typedText, setTypedText] = useState('');
  const [showStats, setShowStats] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const testimonialText = "This is exactly what I've been looking for. Asmi actually gets things done without me having to think about it.";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setShowStats(true), 500);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (showStats) {
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i < testimonialText.length) {
          setTypedText(testimonialText.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typeInterval);
        }
      }, 30);
      return () => clearInterval(typeInterval);
    }
  }, [showStats]);

  return (
    <div ref={sectionRef} className="min-h-screen bg-black py-20 flex items-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-space font-bold text-white mb-16">
          Built. Shipped. Growing.
        </h2>

        {/* Early Adopters Card */}
        {showStats && (
          <div className="bg-black/80 border border-white/20 rounded-3xl p-8 mb-8 animate-fade-in">
            <div className="text-5xl md:text-6xl font-space font-bold text-green-400 mb-2">
              500+
            </div>
            <div className="text-xl text-white font-inter">
              Early Adopters
            </div>
          </div>
        )}

        {/* Testimonial Card */}
        {showStats && (
          <div className="bg-black/80 border border-white/20 rounded-3xl p-8 mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex-shrink-0"></div>
              <div className="text-left">
                <p className="text-lg text-white font-inter mb-2">
                  "{typedText}"
                  {typedText.length < testimonialText.length && <span className="animate-pulse">|</span>}
                </p>
                <p className="text-gray-400 font-inter">— Beta User</p>
              </div>
            </div>
          </div>
        )}

        {/* Next 100 Days */}
        <div className="text-2xl font-space font-medium text-white mb-8">
          Next 100 Days
        </div>

        {/* Calendar Memory Card */}
        {showStats && (
          <div className="bg-black/80 border border-white/20 rounded-3xl p-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="bg-green-400/20 rounded-2xl p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="text-xl font-inter font-medium text-white">Calendar Memory</div>
              </div>
              <div className="bg-green-400 text-black px-3 py-1 rounded-full text-sm font-medium">
                Live
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TractionSectionNew;
