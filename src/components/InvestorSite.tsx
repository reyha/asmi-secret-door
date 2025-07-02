
import { useState, useEffect, useRef } from 'react';
import InteractiveHeroSection from './sections/InteractiveHeroSection';
import MorningBriefDemo from './sections/MorningBriefDemo';
import MeetingContextDemo from './sections/MeetingContextDemo';
import PersonBackgroundDemo from './sections/PersonBackgroundDemo';
import VoiceRescheduleDemo from './sections/VoiceRescheduleDemo';
import MemoryEngineSection from './sections/MemoryEngineSection';
import TeamSection from './sections/TeamSection';
import TractionSection from './sections/TractionSection';
import RoadmapSection from './sections/RoadmapSection';
import TargetMarketSection from './sections/TargetMarketSection';
import FinalCTASection from './sections/FinalCTASection';

const InvestorSite = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const sections = [
    { component: InteractiveHeroSection, title: 'Hero' },
    { component: MorningBriefDemo, title: 'Morning Brief' },
    { component: MeetingContextDemo, title: 'Meeting Context' },
    { component: PersonBackgroundDemo, title: 'Person Background' },
    { component: VoiceRescheduleDemo, title: 'Voice Reschedule' },
    { component: MemoryEngineSection, title: 'Memory Engine' },
    { component: TeamSection, title: 'Team' },
    { component: TractionSection, title: 'Traction' },
    { component: RoadmapSection, title: 'Roadmap' },
    { component: TargetMarketSection, title: 'Target Market' },
    { component: FinalCTASection, title: 'CTA' },
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
      { threshold: 0.6 }
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
    <div className="bg-black text-white overflow-x-hidden" style={{ scrollSnapType: 'y mandatory' }}>
      {/* Progress indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-green-400 to-green-500 transition-all duration-500"
          style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
        />
      </div>

      {/* Mobile navigation dots */}
      <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-black/80 backdrop-blur-sm rounded-full p-2 border border-green-500/20 flex space-x-2">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSection === index
                  ? 'bg-green-400 scale-125'
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
          style={{ scrollSnapAlign: 'start' }}
        >
          <Section.component />
        </div>
      ))}
    </div>
  );
};

export default InvestorSite;
