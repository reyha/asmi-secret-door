
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
      icon: <Mic className="text-green-400" size={20} />,
      year: "Now: Memory Assistant",
      description: "Knows everything you've said. Reminds you when it matters."
    },
    {
      icon: <Zap className="text-blue-400" size={20} />,
      year: "2025: Personal OS",
      description: "One interface for everything — calendar, people, inbox, and thoughts."
    },
    {
      icon: <Brain className="text-purple-400" size={20} />,
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
            const index = stepRefs.current.findIndex(ref => ref === entry.target);
            if (index !== -1 && !visibleSteps.includes(index)) {
              setVisibleSteps(prev => {
                const newVisible = [...prev, index].sort((a, b) => a - b);
                if (newVisible.length === steps.length && !showHighlight) {
                  setTimeout(() => {
                    setShowHighlight(true);
                  }, 1000);
                }
                return newVisible;
              });
            }
          }
        });
      },
      { threshold: 0.7, rootMargin: '-50px 0px' }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleSteps, showHighlight]);

  useEffect(() => {
    if (showHighlight && !isTyping) {
      setIsTyping(true);
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i < highlightText.length) {
          setTypedText(highlightText.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);
        }
      }, 30);
      return () => clearInterval(typeInterval);
    }
  }, [showHighlight, isTyping]);

  return (
    <div ref={sectionRef} className="min-h-screen bg-black py-20 flex items-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-space font-bold text-white mb-16 text-center">
          Starting with Personal OS.<br />
          Will end up with universal layer.
        </h2>

        <div className="flex">
          {/* Timeline content */}
          <div className="flex-1 space-y-24 mr-8">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => (stepRefs.current[index] = el)}
                className={`transition-all duration-700 transform ${
                  visibleSteps.includes(index) 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-30 translate-x-8'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-black/50 rounded-lg border border-white/20 flex-shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-space font-bold text-white mb-2">
                      {step.year}
                    </h3>
                    <p className="text-gray-300 font-inter text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline line */}
          <div className="flex flex-col items-center ml-8 relative">
            <div className="w-1 bg-gray-800 relative" style={{ height: '400px' }}>
              <div 
                className="w-1 bg-gradient-to-b from-green-400 via-blue-400 to-purple-400 absolute top-0 transition-all duration-1000 ease-out"
                style={{ 
                  height: visibleSteps.length > 0 ? `${(visibleSteps.length / steps.length) * 100}%` : '0%'
                }}
              />
            </div>
            
            {/* Timeline dots */}
            {steps.map((_, index) => (
              <div
                key={index}
                className={`absolute w-4 h-4 rounded-full border-2 bg-black transition-all duration-500 ${
                  visibleSteps.includes(index) ? 'border-green-400' : 'border-gray-600'
                }`}
                style={{ top: `${30 + (index * 133)}px` }}
              >
                {visibleSteps.includes(index) && (
                  <div className="w-full h-full rounded-full bg-green-400 animate-pulse" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* AI becomes interface card */}
        {showHighlight && (
          <div className="mt-16 bg-black border border-white/20 rounded-3xl p-8 text-center animate-fade-in">
            <h3 className="text-2xl font-space font-bold text-white mb-4">
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
