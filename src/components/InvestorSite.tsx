
import { useState, useEffect, useRef } from 'react';
import InteractiveHeroSection from './sections/InteractiveHeroSection';
import MorningBriefDemo from './sections/MorningBriefDemo';
import MeetingContextDemo from './sections/MeetingContextDemo';
import PersonBackgroundDemo from './sections/PersonBackgroundDemo';
import VoiceRescheduleDemo from './sections/VoiceRescheduleDemo';
import MemoryEngineSection from './sections/MemoryEngineSection';
import TimelineHowItWorks from './sections/TimelineHowItWorks';
import FounderSectionNew from './sections/FounderSectionNew';
import TractionSectionNew from './sections/TractionSectionNew';
import MessagingToOSSection from './sections/MessagingToOSSection';
import VoiceToOSSection from './sections/VoiceToOSSection';
import BuiltForEveryoneSection from './sections/BuiltForEveryoneSection';
import FinalCTASectionNew from './sections/FinalCTASectionNew';

const InvestorSite = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const sections = [
    { component: InteractiveHeroSection, title: 'Hero' },
    { component: MorningBriefDemo, title: 'Morning Brief' },
    { component: MeetingContextDemo, title: 'Meeting Context' },
    { component: PersonBackgroundDemo, title: 'Person Background' },
    { component: VoiceRescheduleDemo, title: 'Voice Reschedule' },
    { component: MemoryEngineSection, title: 'Memory Engine' },
    { component: TimelineHowItWorks, title: 'How It Works' },
    { component: FounderSectionNew, title: 'Founders' },
    { component: TractionSectionNew, title: 'Traction' },
    { component: MessagingToOSSection, title: 'Messaging to OS' },
    { component: VoiceToOSSection, title: 'Voice to OS' },
    { component: BuiltForEveryoneSection, title: 'Built for Everyone' },
    { component: FinalCTASectionNew, title: 'CTA' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

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

  return (
    <div className={`bg-black text-white overflow-x-hidden font-inter transition-all duration-1000 ${
      isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
    }`}>
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
