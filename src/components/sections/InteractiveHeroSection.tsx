
import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Mic, MessageSquare, Calendar, Eye, Target, Brain, Sparkles } from 'lucide-react';

const InteractiveHeroSection = () => {
  const [currentDemo, setCurrentDemo] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(true);
  const [showPersonalization, setShowPersonalization] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [showInsights, setShowInsights] = useState(false);
  const [showCTA, setShowCTA] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Analysis steps
  const analysisSteps = [
    { text: "Analyzing LinkedIn profile...", duration: 1200 },
    { text: "Processing investment history...", duration: 1000 },
    { text: "Understanding portfolio patterns...", duration: 800 },
    { text: "Generating insights...", duration: 600 }
  ];

  const [currentStep, setCurrentStep] = useState(0);

  // Personalized data
  const personalizedData = {
    name: "Alex",
    insight: "Your recent investment in Notion shows you understand the future of productivity tools. We're building the next evolution - AI that doesn't just organize, but thinks alongside you."
  };

  const insightCards = [
    {
      icon: Target,
      title: "Your Investment Thesis",
      content: "AI-first productivity tools that scale with user growth",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Brain,
      title: "Portfolio Alignment", 
      content: "Complements your existing B2B SaaS investments",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Sparkles,
      title: "Market Timing",
      content: "Personal AI adoption accelerating faster than predicted",
      color: "from-green-500 to-green-600"
    }
  ];

  const demos = [
    {
      icon: <MessageSquare className="text-green-400" size={20} />,
      title: "Start your day smart",
      description: "Get personalized morning briefs before you even ask"
    },
    {
      icon: <Calendar className="text-blue-400" size={20} />,
      title: "Win every meeting", 
      description: "Know who you're meeting and what matters to them"
    },
    {
      icon: <Mic className="text-purple-400" size={20} />,
      title: "Just speak",
      description: "Your voice becomes your interface to everything"
    }
  ];

  // Typewriter effect
  const fullMessage = personalizedData.insight;
  
  useEffect(() => {
    if (!showPersonalization) return;
    
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullMessage.length) {
        setTypedText(fullMessage.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowInsights(true), 500);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [showPersonalization, fullMessage]);

  // Analysis sequence
  useEffect(() => {
    let stepIndex = 0;
    const processSteps = () => {
      if (stepIndex < analysisSteps.length) {
        setCurrentStep(stepIndex);
        setTimeout(() => {
          stepIndex++;
          processSteps();
        }, analysisSteps[stepIndex].duration);
      } else {
        setIsAnalyzing(false);
        setTimeout(() => setShowPersonalization(true), 600);
      }
    };

    const startDelay = setTimeout(processSteps, 800);
    return () => clearTimeout(startDelay);
  }, []);

  // Show CTA after insights
  useEffect(() => {
    if (showInsights) {
      setTimeout(() => setShowCTA(true), 1000);
    }
  }, [showInsights]);

  // Demo carousel
  useEffect(() => {
    if (!showCTA) return;
    
    const interval = setInterval(() => {
      setCurrentDemo(prev => (prev + 1) % demos.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [showCTA]);

  return (
    <div 
      ref={sectionRef}
      className="min-h-screen bg-black text-white relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <div className="pt-8 md:pt-12 pb-8 px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-space font-light mb-4 md:mb-6 tracking-tight leading-tight">
              Get Things Done
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 font-light mb-3 md:mb-4">
              Built for investors, founders, and fast-moving teams
            </p>
            
            <div className="flex items-center justify-center space-x-2 text-green-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-inter">Live on WhatsApp & iMessage</span>
            </div>
          </div>
        </div>

        {/* Personalized Welcome Section */}
        <div className="flex-1 flex items-center justify-center px-4">
          {isAnalyzing ? (
            <div className="text-center max-w-sm mx-auto">
              {/* AI Brain Animation */}
              <div className="relative mb-6 md:mb-8">
                <div className="w-16 h-16 md:w-24 md:h-24 mx-auto relative">
                  <Brain size={64} className="md:w-24 md:h-24 text-green-400 animate-pulse" />
                  <div className="absolute inset-0 bg-green-400/20 rounded-full animate-ping"></div>
                  <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-4 h-4 md:w-6 md:h-6 bg-blue-500 rounded-full animate-bounce"></div>
                  <div className="absolute -bottom-1 -left-1 md:-bottom-1 md:-left-2 w-3 h-3 md:w-4 md:h-4 bg-purple-500 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>

              {/* Analysis Steps */}
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-green-400/20">
                <h3 className="text-white font-space text-lg md:text-xl mb-3 md:mb-4">Analyzing your profile...</h3>
                <div className="space-y-2 md:space-y-3">
                  {analysisSteps.map((step, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-3 transition-all duration-500 ${
                        index <= currentStep ? 'opacity-100' : 'opacity-30'
                      }`}
                    >
                      <div className={`w-2 h-2 rounded-full ${
                        index < currentStep ? 'bg-green-400' : 
                        index === currentStep ? 'bg-green-400 animate-pulse' : 'bg-gray-600'
                      }`} />
                      <span className={`text-xs md:text-sm font-inter ${
                        index <= currentStep ? 'text-white' : 'text-gray-500'
                      }`}>
                        {step.text}
                      </span>
                      {index === currentStep && (
                        <div className="flex space-x-1">
                          <div className="w-1 h-1 bg-green-400 rounded-full animate-bounce"></div>
                          <div className="w-1 h-1 bg-green-400 rounded-full animate-bounce delay-100"></div>
                          <div className="w-1 h-1 bg-green-400 rounded-full animate-bounce delay-200"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-5xl mx-auto w-full">
              {/* Personalized Header */}
              {showPersonalization && (
                <div className="text-center mb-8 md:mb-12 animate-fade-in">
                  <div className="flex items-center justify-center space-x-2 md:space-x-3 mb-4 md:mb-6">
                    <Eye className="text-green-400" size={28} />
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-space font-bold text-white">
                      Hello, <span className="text-green-400">{personalizedData.name}</span>
                    </h2>
                  </div>
                  
                  <div className="bg-black/40 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-8 border border-green-400/20 mb-6 md:mb-8 max-w-4xl mx-auto">
                    <div className="flex items-center justify-center space-x-2 mb-3 md:mb-4">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-sm font-inter">AI Analysis Complete</span>
                    </div>
                    
                    <p className="text-white text-base md:text-lg font-inter leading-relaxed min-h-[2rem] md:min-h-[3rem]">
                      {typedText}
                      {typedText.length < fullMessage.length && (
                        <span className="animate-pulse">|</span>
                      )}
                    </p>
                  </div>
                </div>
              )}

              {/* Insight Cards */}
              {showInsights && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12 animate-slide-up">
                  {insightCards.map((card, index) => {
                    const IconComponent = card.icon;
                    return (
                      <div
                        key={index}
                        className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/10 hover:border-green-400/30 transition-all duration-300"
                        style={{ animationDelay: `${index * 200}ms` }}
                      >
                        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-r ${card.color} flex items-center justify-center mb-3 md:mb-4`}>
                          <IconComponent size={20} className="md:w-6 md:h-6 text-white" />
                        </div>
                        <h3 className="text-white font-space font-semibold mb-2 md:mb-3 text-sm md:text-base">
                          {card.title}
                        </h3>
                        <p className="text-gray-300 text-xs md:text-sm font-inter leading-relaxed">
                          {card.content}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Call to Action */}
              {showCTA && (
                <div className="text-center animate-fade-in" style={{ animationDelay: '800ms' }}>
                  <p className="text-gray-400 text-base md:text-lg font-inter mb-4 md:mb-6">
                    Let's dive deeper into Asmi
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Demo Carousel - Only show after CTA */}
        {showCTA && (
          <>
            <div className="relative z-10 px-4 pb-8 md:pb-12">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                  {/* Left side - Demo preview */}
                  <div className="order-2 lg:order-1">
                    <div className="bg-black/40 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-8 border border-green-400/20">
                      <div className="flex items-center space-x-3 mb-4 md:mb-6">
                        {demos[currentDemo].icon}
                        <h3 className="text-xl md:text-2xl font-space font-semibold text-white">
                          {demos[currentDemo].title}
                        </h3>
                      </div>
                      
                      <p className="text-gray-300 text-base md:text-lg font-inter mb-4 md:mb-6">
                        {demos[currentDemo].description}
                      </p>

                      {/* Demo visualization */}
                      <div className="bg-black/60 rounded-2xl p-4 md:p-6 border border-white/10">
                        <div className="space-y-3 md:space-y-4">
                          {currentDemo === 0 && (
                            <div className="animate-fade-in">
                              <div className="flex justify-end mb-3">
                                <div className="bg-green-600 px-3 md:px-4 py-2 rounded-2xl max-w-xs">
                                  <span className="text-white text-xs md:text-sm">Good morning! What's on my agenda?</span>
                                </div>
                              </div>
                              <div className="flex justify-start">
                                <div className="bg-gray-800 px-3 md:px-4 py-2 rounded-2xl max-w-sm">
                                  <span className="text-white text-xs md:text-sm">You have 3 meetings today. Sarah from Lightspeed at 2 PM - she invested in similar AI tools. I'll prep talking points.</span>
                                </div>
                              </div>
                            </div>
                          )}
                          
                          {currentDemo === 1 && (
                            <div className="animate-fade-in">
                              <div className="flex justify-end mb-3">
                                <div className="bg-green-600 px-3 md:px-4 py-2 rounded-2xl max-w-xs">
                                  <span className="text-white text-xs md:text-sm">Who's John again?</span>
                                </div>
                              </div>
                              <div className="flex justify-start">
                                <div className="bg-gray-800 px-3 md:px-4 py-2 rounded-2xl max-w-sm">
                                  <span className="text-white text-xs md:text-sm">John Martinez - Partner at Sequoia. Led your Series A at Notion. Prefers data-heavy presentations.</span>
                                </div>
                              </div>
                            </div>
                          )}
                          
                          {currentDemo === 2 && (
                            <div className="animate-fade-in">
                              <div className="flex items-center justify-center py-6 md:py-8">
                                <div className="text-center">
                                  <Mic size={40} className="md:w-12 md:h-12 text-purple-400 mx-auto mb-4 animate-pulse" />
                                  <p className="text-purple-400 text-sm">Listening...</p>
                                  <p className="text-gray-300 text-xs mt-2">"Schedule lunch with the team tomorrow"</p>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right side - Navigation */}
                  <div className="order-1 lg:order-2">
                    <div className="space-y-4 md:space-y-6">
                      {demos.map((demo, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentDemo(index)}
                          className={`w-full text-left p-4 md:p-6 rounded-2xl border transition-all duration-300 ${
                            currentDemo === index
                              ? 'bg-green-500/10 border-green-400/50'
                              : 'bg-black/20 border-white/10 hover:border-green-400/30'
                          }`}
                        >
                          <div className="flex items-center space-x-3 md:space-x-4">
                            {demo.icon}
                            <div>
                              <h4 className="text-white font-space font-semibold text-base md:text-lg">
                                {demo.title}
                              </h4>
                              <p className="text-gray-400 font-inter text-xs md:text-sm">
                                {demo.description}
                              </p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="relative z-10 text-center pb-6 md:pb-8">
              <ChevronDown className="text-green-400 mx-auto animate-bounce" size={24} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default InteractiveHeroSection;
