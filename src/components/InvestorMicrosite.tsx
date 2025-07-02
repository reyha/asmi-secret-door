
import { useState, useEffect, useRef } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import InvestorHero from './sections/InvestorHero';
import MorningBriefSection from './sections/MorningBriefSection';
import MeetingPrepSection from './sections/MeetingPrepSection';
import PeopleContextSection from './sections/PeopleContextSection';
import VoiceRescheduleSection from './sections/VoiceRescheduleSection';
import MemoryEngineInvestor from './sections/MemoryEngineInvestor';
import MessagingToOSSection from './sections/MessagingToOSSection';
import TargetMarketInvestor from './sections/TargetMarketInvestor';
import TractionRoadmapSection from './sections/TractionRoadmapSection';
import FinalCTAInvestor from './sections/FinalCTAInvestor';

const InvestorMicrosite = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [isShaking, setIsShaking] = useState(false);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const sections = [
    { component: InvestorHero, title: 'Hero' },
    { component: MorningBriefSection, title: 'Morning Brief' },
    { component: MeetingPrepSection, title: 'Meeting Prep' },
    { component: PeopleContextSection, title: 'People Context' },
    { component: VoiceRescheduleSection, title: 'Voice Reschedule' },
    { component: MemoryEngineInvestor, title: 'Memory Engine' },
    { component: MessagingToOSSection, title: 'Messaging to OS' },
    { component: TargetMarketInvestor, title: 'Target Market' },
    { component: TractionRoadmapSection, title: 'Traction' },
    { component: FinalCTAInvestor, title: 'Final CTA' },
  ];

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'asmi2025' || password === 'investor') {
      setIsAuthenticated(true);
    } else {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 600);
    }
  };

  useEffect(() => {
    if (!isAuthenticated) return;

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
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#1F1F23] text-white relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#37D67A]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#37D67A]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>

        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
          {/* Glowing Asmi Icon */}
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-[#37D67A] to-[#2DD865] rounded-full flex items-center justify-center shadow-lg shadow-[#37D67A]/25 animate-pulse">
              <span className="text-black font-bold text-2xl">A</span>
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-medium mb-3 text-white">
              Private Investor Preview
            </h1>
            <p className="text-gray-400 text-lg">Password: asmi2025</p>
          </div>

          {/* Password Input */}
          <form onSubmit={handlePasswordSubmit} className="w-full max-w-sm">
            <div className={`relative transition-all duration-300 ${isShaking ? 'animate-bounce' : ''}`}>
              <div className="relative rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-sm hover:border-[#37D67A]/50 focus-within:border-[#37D67A]/50 transition-all">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full px-6 py-4 bg-transparent text-white placeholder-gray-400 focus:outline-none text-center rounded-full text-lg"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors p-1 min-w-[44px] min-h-[44px] flex items-center justify-center"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full py-4 bg-gradient-to-r from-[#37D67A] to-[#2DD865] rounded-full text-black font-medium hover:from-[#2DD865] hover:to-[#37D67A] transition-all duration-300 text-lg min-h-[44px]"
            >
              Enter Experience
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#1F1F23] text-white overflow-hidden" style={{ scrollSnapType: 'y mandatory' }}>
      {/* Progress Indicator */}
      <div className="fixed bottom-[10%] left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-black/80 backdrop-blur-sm rounded-full px-4 py-2 border border-[#37D67A]/20 flex items-center space-x-2">
          <span className="text-[#37D67A] text-sm font-medium">
            {currentSection + 1}/{sections.length}
          </span>
          <div className="flex space-x-1">
            {sections.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSection === index
                    ? 'bg-[#37D67A] scale-125'
                    : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

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

export default InvestorMicrosite;
