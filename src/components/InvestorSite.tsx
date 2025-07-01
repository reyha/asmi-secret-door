
import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Play, Users, Calendar, MessageCircle, Zap, Target, TrendingUp } from 'lucide-react';
import HeroSection from './sections/HeroSection';
import ProblemSection from './sections/ProblemSection';
import ProductSection from './sections/ProductSection';
import DayWithAsmiSection from './sections/DayWithAsmiSection';
import WhyPlatformSection from './sections/WhyPlatformSection';
import DifferentiatorSection from './sections/DifferentiatorSection';
import TargetAudienceSection from './sections/TargetAudienceSection';
import TractionSection from './sections/TractionSection';
import RoadmapSection from './sections/RoadmapSection';
import WhyNowSection from './sections/WhyNowSection';
import BusinessModelSection from './sections/BusinessModelSection';
import TeamSection from './sections/TeamSection';
import FundingSection from './sections/FundingSection';
import ClosingSection from './sections/ClosingSection';

const InvestorSite = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const sections = [
    { component: HeroSection, title: 'Hero' },
    { component: ProblemSection, title: 'Problem' },
    { component: ProductSection, title: 'Solution' },
    { component: DayWithAsmiSection, title: 'Experience' },
    { component: WhyPlatformSection, title: 'Platform' },
    { component: DifferentiatorSection, title: 'Differentiators' },
    { component: TargetAudienceSection, title: 'Market' },
    { component: TractionSection, title: 'Traction' },
    { component: RoadmapSection, title: 'Roadmap' },
    { component: WhyNowSection, title: 'Timing' },
    { component: BusinessModelSection, title: 'Business' },
    { component: TeamSection, title: 'Team' },
    { component: FundingSection, title: 'Investment' },
    { component: ClosingSection, title: 'Vision' },
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
      {/* Navigation */}
      <nav className="fixed top-0 right-0 z-50 p-6">
        <div className="bg-black/80 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
          <div className="flex flex-col space-y-2">
            {sections.map((section, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(index)}
                className={`text-xs px-3 py-2 rounded-lg transition-all duration-300 text-left ${
                  currentSection === index
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
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
