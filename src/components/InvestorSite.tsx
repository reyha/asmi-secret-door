import { useState, useEffect, Suspense, lazy } from "react";
import SwipeableContainer from "./SwipeableContainer";

// ✅ Lazy load all sections
const InteractiveHeroSection = lazy(
  () => import("./sections/InteractiveHeroSection")
);
const AsmiIntroSection = lazy(() => import("./sections/AsmiIntroSection"));
const MorningBriefDemo = lazy(() => import("./sections/MorningBriefDemo"));
const MeetingContextDemo = lazy(() => import("./sections/MeetingContextDemo"));
const PersonBackgroundDemo = lazy(
  () => import("./sections/PersonBackgroundDemo")
);
const VoiceRescheduleDemo = lazy(
  () => import("./sections/VoiceRescheduleDemo")
);
const MemoryEngineSection = lazy(
  () => import("./sections/MemoryEngineSection")
);
const TimelineHowItWorks = lazy(() => import("./sections/TimelineHowItWorks"));
const FounderSectionNew = lazy(() => import("./sections/FounderSectionNew"));
const TractionSectionNew = lazy(() => import("./sections/TractionSectionNew"));
const VoiceToOSSection = lazy(() => import("./sections/VoiceToOSSection"));
const BuiltForEveryoneSection = lazy(
  () => import("./sections/BuiltForEveryoneSection")
);
const FinalCTASectionNew = lazy(() => import("./sections/FinalCTASectionNew"));

const InvestorSite = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showSwipeTilt, setShowSwipeTilt] = useState(false);

  // 👇 List of sections with components and titles
  const sections = [
    { component: InteractiveHeroSection, title: "Hero" },
    { component: AsmiIntroSection, title: "Asmi Intro" },
    { component: MorningBriefDemo, title: "Morning Brief" },
    { component: MeetingContextDemo, title: "Meeting Context" },
    { component: PersonBackgroundDemo, title: "Person Background" },
    { component: VoiceRescheduleDemo, title: "Voice Reschedule" },
    { component: MemoryEngineSection, title: "Memory Engine" },
    { component: TimelineHowItWorks, title: "How It Works" },
    { component: FounderSectionNew, title: "Founders" },
    { component: TractionSectionNew, title: "Traction" },
    { component: VoiceToOSSection, title: "Voice to OS" },
    { component: BuiltForEveryoneSection, title: "Built for Everyone" },
    { component: FinalCTASectionNew, title: "CTA" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleSectionChange = (index: number) => {
    setCurrentSection(index);
  };

  return (
    <div
      className={`bg-black text-white overflow-x-hidden overflow-y-auto font-inter transition-all duration-1000 ${
        isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
    >
      {/* Smooth entrance overlay */}
      <div
        className={`fixed inset-0 bg-gradient-to-br from-green-900/20 via-black to-purple-900/20 z-50 transition-all duration-1000 pointer-events-none ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-2 border-green-400 rounded-full animate-spin mb-4 mx-auto"></div>
            <p className="text-green-400 text-lg font-light">
              Entering the future...
            </p>
          </div>
        </div>
      </div>

      {/* Main swipe-based container */}
      <SwipeableContainer onSectionChange={handleSectionChange} showSwipeTilt={showSwipeTilt}>
        {sections.map((Section, index) => {
          const isVisible = Math.abs(currentSection - index) <= 1;

          return (
            <div key={index} className="w-full h-full">
              {isVisible && (
                <Suspense
                  fallback={
                    <div className="text-center py-10 text-white">
                      Loading...
                    </div>
                  }
                >
                  <Section.component isActive={index === currentSection} setShowSwipeTilt={setShowSwipeTilt} />
                </Suspense>
              )}
            </div>
          );
        })}
      </SwipeableContainer>
    </div>
  );
};

export default InvestorSite;
