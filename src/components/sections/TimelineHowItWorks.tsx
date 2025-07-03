
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
      icon: <Mic className="text-green-400" size={20} />,
      title: 'Voice note → Stored',
      description: '"Had a great call with Raj about the partnership. He\'s interested in the API integration."',
      color: 'border-green-400'
    },
    {
      icon: <Brain className="text-blue-400" size={20} />,
      title: 'Context linked',
      description: 'Asmi connects: Raj → Partnership → API → Your roadmap → Previous technical discussions + Email thread about API specs + Calendar meetings with Raj',
      color: 'border-blue-400'
    },
    {
      icon: <MessageCircle className="text-purple-400" size={20} />,
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
                
                // Show highlight card after all steps are visible
                if (newVisible.length === steps.length && !showHighlight) {
                  setTimeout(() => {
                    setShowHighlight(true);
                  }, 300); // Faster
                }
                
                return newVisible;
              });
            }
          }
        });
      },
      { threshold: 0.3, rootMargin: '-30px' } // More sensitive for mobile
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
          // Start typing the highlight text after compounding text is done
          setTimeout(() => {
            setIsTypingHighlight(true);
          }, 300); // Faster
        }
      }, 60); // Faster typing
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
      }, 50); // Faster typing
      return () => clearInterval(typeInterval);
    }
  }, [isTypingHighlight, isTypingCompounding]);

  return (
    <div ref={sectionRef} className="min-h-screen bg-black py-12 sm:py-16 md:py-20 flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center min-h-[60vh] gap-8 lg:gap-12">
          {/* Timeline */}
          <div className="flex lg:flex-col items-center lg:mr-12 relative order-2 lg:order-1">
            <div className="w-1 h-64 sm:h-80 lg:h-96 bg-gray-800 relative">
              <div 
                className="w-1 bg-gradient-to-b from-green-400 via-blue-400 to-purple-400 absolute top-0 transition-all duration-1000"
                style={{ 
                  height: visibleSteps.length > 0 ? `${(visibleSteps.length / steps.length) * 100}%` : '0%'
                }}
              />
            </div>
            
            {steps.map((step, index) => (
              <div
                key={index}
                className={`absolute w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 rounded-full border-2 bg-black transition-all duration-500 ${
                  visibleSteps.includes(index) ? step.color : 'border-gray-600'
                }`}
                style={{ top: `${(index / (steps.length - 1)) * (256 - 24)}px` }}
              >
                <div className="w-full h-full rounded-full flex items-center justify-center">
                  {visibleSteps.includes(index) && (
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-current animate-pulse" />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 space-y-8 sm:space-y-10 lg:space-y-12 order-1 lg:order-2">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => (stepRefs.current[index] = el)}
                className={`transition-all duration-700 ${
                  visibleSteps.includes(index) ? 'opacity-100 translate-x-0' : 'opacity-30 translate-x-8'
                }`}
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="p-2 sm:p-3 bg-black/50 border border-white/20 rounded-lg sm:rounded-xl flex-shrink-0">
                    {step.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-space font-semibold text-white mb-2 sm:mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 font-inter leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Highlight Card */}
            {showHighlight && (
              <div className="mt-8 sm:mt-10 lg:mt-12 p-4 sm:p-6 lg:p-8 bg-black rounded-2xl sm:rounded-3xl border-2 border-green-400/30 animate-fade-in">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-space font-bold text-green-400 mb-3 sm:mb-4">
                  {typedCompoundingText}
                  {isTypingCompounding && <span className="animate-pulse">|</span>}
                </h2>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-space font-bold text-green-400 mb-3 sm:mb-4">
                  {typedHighlightText}
                  {isTypingHighlight && <span className="animate-pulse">|</span>}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-400 font-inter leading-relaxed">
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
