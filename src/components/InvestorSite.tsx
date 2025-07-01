
import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Play, Users, Calendar, MessageCircle, Zap, Target, TrendingUp } from 'lucide-react';
import InteractiveHeroSection from './sections/InteractiveHeroSection';
import InteractiveProblemSection from './sections/InteractiveProblemSection';
import OneInterfaceSection from './sections/OneInterfaceSection';
import WhatAsmiDoesSection from './sections/WhatAsmiDoesSection';
import MemoryEngineSection from './sections/MemoryEngineSection';
import FounderSection from './sections/FounderSection';
import TractionTimelineSection from './sections/TractionTimelineSection';
import RoadAheadSection from './sections/RoadAheadSection';
import ClosingCTASection from './sections/ClosingCTASection';

const InvestorSite = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const sections = [
    { component: InteractiveHeroSection, title: 'Hero' },
    { component: InteractiveProblemSection, title: 'Problem' },
    { component: OneInterfaceSection, title: 'Interface' },
    { component: WhatAsmiDoesSection, title: 'Features' },
    { component: MemoryEngineSection, title: 'Memory' },
    { component: FounderSection, title: 'Founders' },
    { component: TractionTimelineSection, title: 'Traction' },
    { component: RoadAheadSection, title: 'Roadmap' },
    { component: ClosingCTASection, title: 'CTA' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex(ref => ref === entry.target);
            if (index !== -1) {
              setCurrentSection(index);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Progress indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-green-400 to-green-500 transition-all duration-300"
          style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
        />
      </div>

      {/* Mobile-first navigation */}
      <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 md:top-6 md:right-6 md:left-auto md:transform-none">
        <div className="bg-black/80 backdrop-blur-sm rounded-full p-2 border border-green-500/20 flex md:flex-col space-x-2 md:space-x-0 md:space-y-2">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSection === index
                  ? 'bg-green-400 scale-125 shadow-lg shadow-green-400/50'
                  : 'bg-gray-600 hover:bg-green-500/50'
              }`}
              aria-label={section.title}
            />
          ))}
        </div>
      </nav>

      {/* Sections */}
      {sections.map((Section, index) => (
        <div
          key={index}
          ref={(el) => (sectionRefs.current[index] = el)}
          className="min-h-screen"
        >
          <Section.component />
        </div>
      ))}
    </div>
  );
};

export default InvestorSite;
