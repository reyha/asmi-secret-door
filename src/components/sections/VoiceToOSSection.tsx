
import { useState, useEffect, useRef } from 'react';
import { Mic, Zap, Brain } from 'lucide-react';

const VoiceToOSSection = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [showHighlight, setShowHighlight] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const steps = [
    {
      icon: <Mic className="text-green-400" size={16} />,
      year: "Now: Memory Assistant",
      description: "Knows everything you've said. Reminds you when it matters."
    },
    {
      icon: <Zap className="text-blue-400" size={16} />,
      year: "2025: Personal OS",
      description: "One interface for everything — calendar, people, inbox, and thoughts."
    },
    {
      icon: <Brain className="text-purple-400" size={16} />,
      year: "2026: Decision Layer",
      description: "Asmi starts making calls. Nudges. Scheduling. Purchases. All for you."
    }
  ];

  const highlightText = "Asmi becomes the interface for your digital life. The OS for how everything gets done, without you asking.";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start revealing steps one by one
            const revealSteps = async () => {
              for (let i = 0; i < steps.length; i++) {
                await new Promise(resolve => setTimeout(resolve, 1000));
                setVisibleSteps(prev => [...prev, i]);
              }
              // After all steps are visible, show highlight
              setTimeout(() => {
                setShowHighlight(true);
              }, 1200);
            };
            revealSteps();
          }
        });
      },
      { threshold: 0.3, rootMargin: '-50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!showHighlight) return;

      setIsTyping(true);
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i <= highlightText.length) {
          setTypedText(highlightText.substring(0, i));
          i++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);
        }
      }, 40);
      return () => clearInterval(typeInterval);
  }, [showHighlight]);

  return (
    <div ref={sectionRef} className="min-h-screen bg-black py-8 sm:py-12 md:py-16 lg:py-20 flex items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-space font-bold text-white mb-6 sm:mb-8 md:mb-12 lg:mb-16 text-center leading-tight">
          <span className="text-sm sm:text-base md:text-lg lg:text-2xl font-light text-gray-400 block mb-1 sm:mb-2">Starting with Personal OS.</span>
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white">Leading to a Single Interface for Everything.</span>
        </h2>

        <div className="relative">
          {/* Mobile-first timeline layout */}
          <div className="space-y-6 sm:space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => (stepRefs.current[index] = el)}
                className={`relative flex items-start space-x-3 sm:space-x-4 transition-all duration-700 transform ${
                  visibleSteps.includes(index) 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-8'
                }`}
              >
                {/* Timeline line and dot */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black border-2 border-gray-600 flex items-center justify-center relative z-10 transition-all duration-500">
                    <div className={`transition-all duration-300 ${
                      visibleSteps.includes(index) ? 'opacity-100' : 'opacity-0'
                    }`}>
                      {step.icon}
                    </div>
                    {visibleSteps.includes(index) && (
                      <div className="absolute inset-0 rounded-full border-2 border-green-400 animate-pulse" />
                    )}
                  </div>
                  
                  {/* Connecting line to next step */}
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-16 sm:h-20 md:h-24 mt-2 bg-gray-800 relative">
                      <div 
                        className={`w-0.5 bg-gradient-to-b from-green-400 to-purple-400 absolute top-0 transition-all duration-1000 ease-out ${
                          visibleSteps.includes(index + 1) ? 'h-full' : 'h-0'
                        }`}
                      />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 pt-1">
                  <h3 className="text-base sm:text-lg md:text-xl font-space font-bold text-white mb-1 sm:mb-2">
                    {step.year}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 font-inter leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI becomes interface card */}
        {showHighlight && (
          <div className="mt-8 sm:mt-12 md:mt-16 bg-black border border-white/20 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 text-center animate-fade-in">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-space font-bold text-white mb-2 sm:mb-4 leading-relaxed">
              {typedText}
              {isTyping && <span className="animate-pulse text-green-400">|</span>}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default VoiceToOSSection;
