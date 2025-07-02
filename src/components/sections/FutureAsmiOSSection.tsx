
import { useState, useEffect, useRef } from 'react';

const FutureAsmiOSSection = () => {
  const [visiblePhases, setVisiblePhases] = useState(0);
  const [showVision, setShowVision] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const phases = [
    {
      title: 'Now: Memory Assistant',
      description: 'Knows everything you\'ve said. Reminds you when it matters.',
      color: '#37D67A',
      icon: '🧠'
    },
    {
      title: '2025: Personal OS',
      description: 'One interface for everything — calendar, people, inbox, and thoughts.',
      color: '#3B82F6',
      icon: '⚡'
    },
    {
      title: '2026: Decision Layer',
      description: 'Asmi starts making calls. Nudges. Scheduling. Purchases. All for you.',
      color: '#8B5CF6',
      icon: '🤖'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger phase animations
            const timer1 = setTimeout(() => setVisiblePhases(1), 500);
            const timer2 = setTimeout(() => setVisiblePhases(2), 1000);
            const timer3 = setTimeout(() => setVisiblePhases(3), 1500);
            const timer4 = setTimeout(() => setShowVision(true), 2500);

            return () => {
              clearTimeout(timer1);
              clearTimeout(timer2);
              clearTimeout(timer3);
              clearTimeout(timer4);
            };
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen bg-[#1F1F23] flex flex-col items-center justify-center px-4 relative">
      <div className="max-w-sm mx-auto text-center">
        {/* Header */}
        <h1 className="text-[28px] font-bold text-white mb-12 leading-tight">
          You start with voice.<br />
          You end up with an OS.
        </h1>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-80 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="w-full bg-gradient-to-b from-[#37D67A] via-blue-500 to-purple-500 transition-all duration-2000 ease-out"
              style={{ 
                height: visiblePhases >= 3 ? '100%' : visiblePhases >= 2 ? '66%' : visiblePhases >= 1 ? '33%' : '0%'
              }}
            />
          </div>

          {/* Phase nodes */}
          <div className="space-y-16">
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`relative flex items-center transition-all duration-700 ${
                  visiblePhases > index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 500}ms` }}
              >
                {/* Phase dot */}
                <div 
                  className="w-6 h-6 rounded-full border-4 border-[#1F1F23] z-10 flex items-center justify-center text-xs"
                  style={{ backgroundColor: phase.color }}
                >
                  <span>{phase.icon}</span>
                </div>

                {/* Phase content */}
                <div className="ml-8 text-left">
                  <h3 className="text-white font-medium mb-1">{phase.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision statement */}
        {showVision && (
          <div className="mt-16 p-6 bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-3xl animate-fade-in">
            <p className="text-white text-lg font-medium leading-relaxed">
              AI becomes the interface for your digital life. The OS for how you live, think, and act.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FutureAsmiOSSection;
