
import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Eye, ArrowUp } from 'lucide-react';
import NeuralBloomBackground from '../NeuralBloomBackground';

const InteractiveHeroSection = () => {
  const [currentInsight, setCurrentInsight] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [showWelcome, setShowWelcome] = useState(false);
  const [showInsights, setShowInsights] = useState(false);
  const [showCTA, setShowCTA] = useState(false);
  const [allInsightsShown, setAllInsightsShown] = useState(false);

  // Personalized data
  const personalizedData = {
    name: "Alex",
    initials: "AS",
    insights: [
      "Backed Notion at Series A → 5× exit.",
      "Early bet on consumer AI: Anthropic.",
      "Advised on $50M deal with Lightspeed.",
      "Published on AI trends in TechCrunch."
    ]
  };

  // Show welcome message first
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(true);
      setTimeout(() => setShowInsights(true), 1500);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Handle insight typing animation
  useEffect(() => {
    if (!showInsights || currentInsight >= personalizedData.insights.length) {
      if (currentInsight >= personalizedData.insights.length && !allInsightsShown) {
        setAllInsightsShown(true);
        setTimeout(() => setShowCTA(true), 1000);
      }
      return;
    }

    const insight = personalizedData.insights[currentInsight];
    let charIndex = 0;
    setIsTyping(true);
    setTypedText('');

    // Typing animation
    const typingInterval = setInterval(() => {
      if (charIndex <= insight.length) {
        setTypedText(insight.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
        
        // Move to next insight after pause
        setTimeout(() => {
          setCurrentInsight(prev => prev + 1);
        }, 1500);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [showInsights, currentInsight, personalizedData.insights, allInsightsShown]);

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Neural Bloom Background */}
      <NeuralBloomBackground />

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <div className="pt-8 md:pt-12 pb-8 px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-space font-light mb-4 md:mb-6 tracking-tight leading-tight text-white">
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
          <div className="text-center max-w-3xl mx-auto">
            {/* Welcome Message */}
            {showWelcome && (
              <div className="mb-8 md:mb-12 animate-fade-in">
                <div className="flex items-center justify-center mb-6 md:mb-8">
                  {/* Investor Avatar */}
                  <div className="relative">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center text-black font-space font-bold text-xl md:text-2xl">
                      {personalizedData.initials}
                    </div>
                    <div className="absolute inset-0 rounded-full bg-green-400/20 animate-ping"></div>
                  </div>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-space font-light text-white mb-2">
                  Welcome back, <span className="font-medium">{personalizedData.name}</span>.
                </h2>
              </div>
            )}

            {/* Insights Reveal */}
            {showInsights && (
              <div className="mb-8 md:mb-12">
                <div className="bg-black/40 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 border border-green-400/20 max-w-2xl mx-auto">
                  <div className="min-h-[4rem] md:min-h-[5rem] flex items-center justify-center">
                    <div className="text-center">
                      {/* Typing indicator */}
                      {isTyping && typedText === '' && (
                        <div className="flex items-center justify-center space-x-1 mb-4">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce delay-100"></div>
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce delay-200"></div>
                        </div>
                      )}
                      
                      {/* Typed text */}
                      <p className="text-lg md:text-xl text-green-400 font-inter font-medium">
                        {typedText}
                        {isTyping && typedText !== '' && (
                          <span className="animate-pulse">|</span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Final CTA */}
            {showCTA && (
              <div className="animate-fade-in" style={{ animationDelay: '500ms' }}>
                <p className="text-xl md:text-2xl text-white font-space font-light mb-8 md:mb-12">
                  We know you. Now, <span className="font-medium">experience Asmi</span>.
                </p>
                
                <div className="flex flex-col items-center">
                  <div className="flex items-center space-x-2 text-green-400 animate-pulse">
                    <ArrowUp size={24} className="transform rotate-180" />
                    <span className="text-base md:text-lg font-inter">
                      Swipe up to know more about Asmi
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Scroll indicator */}
        {showCTA && (
          <div className="relative z-10 text-center pb-6 md:pb-8">
            <ChevronDown className="text-green-400 mx-auto animate-bounce" size={24} />
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveHeroSection;
