
import { useState, useEffect, useRef } from 'react';
import { Mic, Zap, Brain } from 'lucide-react';

const VoiceToOSSection = () => {
  const [visibleSteps, setVisibleSteps] = useState([]);
  const [showHighlight, setShowHighlight] = useState(false);
  const sectionRef = useRef(null);
  const stepRefs = useRef([]);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting && !visibleSteps.includes(index)) {
            setVisibleSteps(prev => [...prev, index]);
            
            if (index === steps.length - 1) {
              setTimeout(() => setShowHighlight(true), 500);
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleSteps]);

  return (
    <div ref={sectionRef} className="min-h-screen bg-black py-20 flex items-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-space font-bold text-white mb-16 text-center">
          You start with voice.<br />
          You end up with an OS.
        </h2>

        <div className="flex">
          {/* Timeline line */}
          <div className="flex flex-col items-center mr-8">
            <div className="w-1 h-96 bg-gray-800 relative">
              <div 
                className="w-1 bg-gradient-to-b from-green-400 via-blue-400 to-purple-400 absolute top-0 transition-all duration-1000"
                style={{ height: `${(visibleSteps.length / steps.length) * 100}%` }}
              />
            </div>
            
            {steps.map((_, index) => (
              <div
                key={index}
                className={`absolute w-4 h-4 rounded-full border-2 bg-black transition-all duration-500 ${
                  visibleSteps.includes(index) ? 'border-green-400' : 'border-gray-600'
                }`}
                style={{ top: `${120 + (index * 120)}px` }}
              >
                {visibleSteps.includes(index) && (
                  <div className="w-full h-full rounded-full bg-green-400 animate-pulse" />
                )}
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => (stepRefs.current[index] = el)}
                className={`transition-all duration-700 ${
                  visibleSteps.includes(index) ? 'opacity-100 translate-x-0' : 'opacity-30 translate-x-8'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-black/50 rounded-lg border border-white/20">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-space font-bold text-white mb-2">
                      {step.year}
                    </h3>
                    <p className="text-gray-300 font-inter">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI becomes interface card */}
        {showHighlight && (
          <div className="mt-16 bg-black border border-white/20 rounded-3xl p-8 text-center animate-fade-in">
            <h3 className="text-2xl font-space font-bold text-white mb-4">
              AI becomes the interface for your digital life. The OS for how you live, think, and act.
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default VoiceToOSSection;
