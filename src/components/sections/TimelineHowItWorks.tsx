import { useState, useEffect, useRef } from 'react';
import { Mic, Link, Brain } from 'lucide-react';

const TimelineHowItWorks = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [showHighlight, setShowHighlight] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const steps = [
    {
      icon: <Mic className="text-green-400" size={16} />,
      title: "Post meeting brief",
      description: '"Had a great call with Raj about the partnership. He\'s interested in the API integration."'
    },
    {
      icon: <Link className="text-blue-400" size={16} />,
      title: "Context linked",
      description: "Asmi connects: Raj → Partnership → API → Your roadmap → Previous technical discussions + Email thread about API specs + Calendar meetings with Raj"
    },
    {
      icon: <Brain className="text-purple-400" size={16} />,
      title: "Deep insights generated",
      description: "Raj (CTO at TechCorp) → Met 3x this quarter → Always asks about scalability → Prefers technical demos → Decision maker for $50K+ deals → Best contact time: 2-4 PM → Responds well to data-driven pitches"
    }
  ];

  const highlightText = "Asmi compounds each day to become super-intelligent, high agency version of yourself.";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start revealing steps one by one
            const revealSteps = async () => {
              for (let i = 0; i < steps.length; i++) {
                await new Promise(resolve => setTimeout(resolve, 800));
                setVisibleSteps(prev => [...prev, i]);
              }
              // After all steps are visible, show highlight
              setTimeout(() => {
                setShowHighlight(true);
              }, 1000);
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
    if (showHighlight && !isTyping) {
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
    }
  }, [showHighlight, isTyping, highlightText]);

  return (
    <div ref={sectionRef} className="min-h-screen bg-black py-8 sm:py-12 md:py-16 lg:py-20 flex items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-space font-bold text-white mb-6 sm:mb-8 md:mb-12 lg:mb-16 text-center leading-tight">
          How it flows
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
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 font-inter leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlighted summary */}
        {showHighlight && (
          <div className="mt-8 sm:mt-12 md:mt-16 bg-gradient-to-r from-green-900/20 via-black to-purple-900/20 border border-green-400/30 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 text-center animate-fade-in">
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

export default TimelineHowItWorks;
