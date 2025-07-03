
import { useState, useEffect, useRef } from 'react';
import { Brain, Mic, MessageCircle } from 'lucide-react';

const TimelineHowItWorks = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [typedCompoundingText, setTypedCompoundingText] = useState('');
  const [typedHighlightText, setTypedHighlightText] = useState('');
  const [showHighlight, setShowHighlight] = useState(false);
  const [isTypingCompounding, setIsTypingCompounding] = useState(false);
  const [isTypingHighlight, setIsTypingHighlight] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const steps = [
    {
      icon: <Mic className="text-green-400" size={16} />,
      title: 'Voice note → Stored',
      description: '"Had a great call with Raj about the partnership. He\'s interested in the API integration."',
      color: 'border-green-400'
    },
    {
      icon: <Brain className="text-blue-400" size={16} />,
      title: 'Context linked',
      description: 'Asmi connects: Raj → Partnership → API → Your roadmap → Previous technical discussions + Email thread about API specs + Calendar meetings with Raj',
      color: 'border-blue-400'
    },
    {
      icon: <MessageCircle className="text-purple-400" size={16} />,
      title: 'Deep insights generated',
      description: 'Raj (CTO at TechCorp) → Met 3x this quarter → Always asks about scalability → Prefers technical demos → Decision maker for $50K+ deals → Best contact time: 2-4 PM → Responds well to data-driven pitches',
      color: 'border-purple-400'
    }
  ];

  const compoundingText = "Compounding always wins!";
  const highlightText = "From messages... to personal OS";

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
                  }, 300);
                }
                
                return newVisible;
              });
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: '-30px' }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleSteps, showHighlight]);

  // Typewriter effect for compounding text
  useEffect(() => {
    if (showHighlight && !isTypingCompounding) {
      setIsTypingCompounding(true);
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i < compoundingText.length) {
          setTypedCompoundingText(compoundingText.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typeInterval);
          setIsTypingCompounding(false);
          setTimeout(() => {
            setIsTypingHighlight(true);
          }, 300);
        }
      }, 60);
      return () => clearInterval(typeInterval);
    }
  }, [showHighlight, isTypingCompounding]);

  // Typewriter effect for highlight text
  useEffect(() => {
    if (isTypingHighlight && !isTypingCompounding) {
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i < highlightText.length) {
          setTypedHighlightText(highlightText.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typeInterval);
          setIsTypingHighlight(false);
        }
      }, 50);
      return () => clearInterval(typeInterval);
    }
  }, [isTypingHighlight, isTypingCompounding]);

  return (
    <div ref={sectionRef} className="min-h-screen bg-black py-8 sm:py-12 md:py-16 lg:py-20 flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center min-h-[60vh] gap-6 sm:gap-8">
          {/* Content */}
          <div className="w-full max-w-2xl space-y-6 sm:space-y-8 md:space-y-10">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => (stepRefs.current[index] = el)}
                className={`relative flex items-start space-x-3 sm:space-x-4 transition-all duration-700 ${
                  visibleSteps.includes(index) ? 'opacity-100 translate-x-0' : 'opacity-30 translate-x-4'
                }`}
              >
                {/* Timeline dot and line */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black border-2 border-gray-600 flex items-center justify-center relative z-10 transition-all duration-500">
                    <div className={`transition-all duration-300 ${
                      visibleSteps.includes(index) ? 'opacity-100' : 'opacity-50'
                    }`}>
                      {step.icon}
                    </div>
                    {visibleSteps.includes(index) && (
                      <div className={`absolute inset-0 rounded-full border-2 ${step.color} animate-pulse`} />
                    )}
                  </div>
                  
                  {/* Connecting line */}
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-16 sm:h-20 md:h-24 mt-2 bg-gray-800 relative">
                      <div 
                        className={`w-0.5 bg-gradient-to-b from-green-400 via-blue-400 to-purple-400 absolute top-0 transition-all duration-1000 ${
                          visibleSteps.includes(index + 1) ? 'h-full' : 'h-0'
                        }`}
                      />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 pt-1">
                  <h3 className="text-base sm:text-lg md:text-xl font-space font-semibold text-white mb-1 sm:mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 font-inter leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Highlight Card */}
            {showHighlight && (
              <div className="mt-6 sm:mt-8 md:mt-12 p-4 sm:p-6 md:p-8 bg-black rounded-xl sm:rounded-2xl md:rounded-3xl border-2 border-green-400/30 animate-fade-in">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-space font-bold text-green-400 mb-2 sm:mb-3">
                  {typedCompoundingText}
                  {isTypingCompounding && <span className="animate-pulse">|</span>}
                </h2>
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-space font-bold text-green-400 mb-2 sm:mb-3">
                  {typedHighlightText}
                  {isTypingHighlight && <span className="animate-pulse">|</span>}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 font-inter leading-relaxed">
                  Asmi compounds each day to become super-intelligent, high agency version of yourself.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineHowItWorks;
