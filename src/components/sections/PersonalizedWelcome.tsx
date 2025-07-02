
import { useState, useEffect, useRef } from 'react';
import { Brain, Sparkles, Eye, Target } from 'lucide-react';

const PersonalizedWelcome = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(true);
  const [showPersonalization, setShowPersonalization] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [showInsights, setShowInsights] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Mock AI analysis data - in real implementation, this would come from API
  const analysisSteps = [
    { text: "Analyzing LinkedIn profile...", duration: 1500 },
    { text: "Processing investment history...", duration: 1200 },
    { text: "Understanding portfolio patterns...", duration: 1000 },
    { text: "Generating personalized insights...", duration: 800 }
  ];

  const personalizedData = {
    name: "Alex",
    background: "Enterprise SaaS Investor",
    portfolio: "15+ B2B companies",
    focus: "AI-native platforms",
    insight: "Your recent investment in Notion shows you understand the future of productivity tools. Asmi is the next evolution - AI that doesn't just organize, but thinks alongside you."
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
      content: "Asmi complements your existing B2B SaaS investments",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Sparkles,
      title: "Market Timing",
      content: "Personal AI adoption accelerating faster than predicted",
      color: "from-green-500 to-green-600"
    }
  ];

  // Typewriter effect for main message
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
        setTimeout(() => setShowPersonalization(true), 800);
      }
    };

    const startDelay = setTimeout(processSteps, 1000);
    return () => clearTimeout(startDelay);
  }, []);

  if (isAnalyzing) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center relative">
        <div className="text-center">
          {/* AI Brain Animation */}
          <div className="relative mb-8">
            <div className="w-24 h-24 mx-auto relative">
              <Brain size={96} className="text-green-400 animate-pulse" />
              <div className="absolute inset-0 bg-green-400/20 rounded-full animate-ping"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-1 -left-2 w-4 h-4 bg-purple-500 rounded-full animate-bounce delay-200"></div>
              <div className="absolute top-1/2 -right-4 w-3 h-3 bg-yellow-500 rounded-full animate-bounce delay-100"></div>
            </div>
          </div>

          {/* Analysis Steps */}
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-green-400/20 min-w-[400px]">
            <h3 className="text-white font-space text-xl mb-4">Asmi is analyzing your profile...</h3>
            <div className="space-y-3">
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
                  <span className={`text-sm font-inter ${
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
      </div>
    );
  }

  return (
    <div ref={sectionRef} className="min-h-[60vh] flex items-center justify-center px-4 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Personalized Header */}
        {showPersonalization && (
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Eye className="text-green-400" size={32} />
              <h2 className="text-4xl md:text-5xl font-space font-bold text-white">
                Hello, <span className="text-green-400">{personalizedData.name}</span>
              </h2>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-green-400/20 mb-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-inter">AI Analysis Complete</span>
              </div>
              
              <p className="text-white text-lg font-inter leading-relaxed min-h-[3rem]">
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
          <div className="grid md:grid-cols-3 gap-6 animate-slide-up">
            {insightCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={index}
                  className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-green-400/30 transition-all duration-300 hover:transform hover:scale-105"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${card.color} flex items-center justify-center mb-4`}>
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h3 className="text-white font-space font-semibold mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-300 text-sm font-inter leading-relaxed">
                    {card.content}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {/* Call to Action */}
        {showInsights && (
          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '800ms' }}>
            <p className="text-gray-400 text-lg font-inter mb-6">
              Ready to see why Asmi is perfect for your portfolio?
            </p>
            <div className="inline-flex items-center space-x-2 px-8 py-3 bg-green-500/20 border border-green-400/30 rounded-full">
              <Sparkles size={20} className="text-green-400" />
              <span className="text-green-400 font-inter">Let's dive deeper</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonalizedWelcome;
