
import { useState, useEffect, useRef } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import InvestorHero from './sections/InvestorHero';
import MorningBriefSection from './sections/MorningBriefSection';
import MeetingPrepSection from './sections/MeetingPrepSection';
import PeopleContextSection from './sections/PeopleContextSection';
import VoiceRescheduleSection from './sections/VoiceRescheduleSection';
import MemoryEngineInvestor from './sections/MemoryEngineInvestor';
import FounderSlide from './sections/FounderSlide';
import TractionRoadmapSection from './sections/TractionRoadmapSection';
import MessagingToOSSection from './sections/MessagingToOSSection';
import FutureAsmiOSSection from './sections/FutureAsmiOSSection';
import TargetMarketInvestor from './sections/TargetMarketInvestor';
import FinalCTAInvestor from './sections/FinalCTAInvestor';

const InvestorMicrosite = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [currentSection, setCurrentSection] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const sections = [
    { component: InvestorHero, title: 'Hero', id: 'hero' },
    { component: MorningBriefSection, title: 'Morning Brief', id: 'morning-brief' },
    { component: MeetingPrepSection, title: 'Meeting Prep', id: 'meeting-prep' },
    { component: PeopleContextSection, title: 'People Context', id: 'people-context' },
    { component: VoiceRescheduleSection, title: 'Voice Reschedule', id: 'voice-reschedule' },
    { component: MemoryEngineInvestor, title: 'Memory Engine', id: 'memory-engine' },
    { component: FounderSlide, title: 'Founders', id: 'founders' },
    { component: TractionRoadmapSection, title: 'Traction', id: 'traction' },
    { component: MessagingToOSSection, title: 'Messaging to OS', id: 'messaging-to-os' },
    { component: FutureAsmiOSSection, title: 'Future OS', id: 'future-os' },
    { component: TargetMarketInvestor, title: 'Target Market', id: 'target-market' },
    { component: FinalCTAInvestor, title: 'Final CTA', id: 'final-cta' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === 'asmi2025' || password === 'investor') {
      setIsAuthenticated(true);
      setError('');
      // Add haptic-style flourish
      if (navigator.vibrate) {
        navigator.vibrate([50, 100, 50]);
      }
    } else {
      setError('Try again');
      setTimeout(() => setError(''), 2000);
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
      <div className="min-h-screen bg-[#1F1F23] text-white flex items-center justify-center px-4">
        <div className="w-full max-w-sm mx-auto text-center">
          {/* Glowing Asmi icon */}
          <div className="mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-[#37D67A] to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
              <span className="text-black font-bold text-2xl">A</span>
            </div>
            <h1 className="text-2xl font-medium mb-2">Private Investor Preview</h1>
            <p className="text-gray-400 text-sm">Password: asmi2025</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError('');
                }}
                placeholder="Enter password"
                className="w-full px-6 py-4 bg-white/5 text-white placeholder-gray-400 focus:outline-none text-center rounded-full border border-white/10 focus:border-[#37D67A]/50"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            
            {error && (
              <p className="text-red-400 text-sm animate-fade-in">{error}</p>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#37D67A] to-green-500 px-8 py-4 rounded-full text-lg font-medium text-black hover:from-green-500 hover:to-green-600 transition-all duration-300 hover:scale-105"
            >
              Enter
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#1F1F23] text-white overflow-hidden" style={{ scrollSnapType: 'y mandatory' }}>
      {/* Progress dots - fixed at bottom */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex space-x-2 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
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

      {/* Sections */}
      {sections.map((Section, index) => (
        <div
          key={index}
          ref={(el) => (sectionRefs.current[index] = el)}
          className="min-h-screen w-full"
          style={{ scrollSnapAlign: 'start' }}
        >
          <Section.component />
        </div>
      ))}
    </div>
  );
};

export default InvestorMicrosite;
