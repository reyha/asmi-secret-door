
import { useState, useEffect, useRef } from 'react';
import InteractiveHeroSection from './sections/InteractiveHeroSection';
import MorningBriefDemoSection from './sections/MorningBriefDemoSection';
import MeetingPrepDemoSection from './sections/MeetingPrepDemoSection';
import PersonBackgroundDemoSection from './sections/PersonBackgroundDemoSection';
import VoiceRescheduleDemoSection from './sections/VoiceRescheduleDemoSection';
import MemoryGraphSection from './sections/MemoryGraphSection';
import MinimalFoundersSection from './sections/MinimalFoundersSection';
import MomentumSection from './sections/MomentumSection';
import FinalCTASection from './sections/FinalCTASection';

const InvestorSite = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const sections = [
    { component: InteractiveHeroSection, title: 'Intro' },
    { component: MorningBriefDemoSection, title: 'Morning Brief' },
    { component: MeetingPrepDemoSection, title: 'Meeting Prep' },
    { component: PersonBackgroundDemoSection, title: 'Background' },
    { component: VoiceRescheduleDemoSection, title: 'Voice Reschedule' },
    { component: MemoryGraphSection, title: 'Memory' },
    { component: MinimalFoundersSection, title: 'Founders' },
    { component: MomentumSection, title: 'Momentum' },
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
      { threshold: 0.7 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden snap-y snap-mandatory h-screen overflow-y-scroll">
      {/* Minimal progress indicator */}
      <div className="fixed top-4 right-4 z-50 flex space-x-1">
        {sections.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSection === index ? 'bg-green-400' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>

      {/* Sections with scroll snap */}
      {sections.map((Section, index) => (
        <div
          key={index}
          ref={(el) => (sectionRefs.current[index] = el)}
          className="min-h-screen snap-start"
        >
          <Section.component />
        </div>
      ))}
    </div>
  );
};

export default InvestorSite;
