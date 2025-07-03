
import { useState, useEffect } from 'react';
import { ChevronDown, ArrowUp } from 'lucide-react';
import NeuralBloomBackground from '../NeuralBloomBackground';

const InteractiveHeroSection = () => {
  const [showWelcome, setShowWelcome] = useState(false);
  const [showInsights, setShowInsights] = useState(false);
  const [currentInsight, setCurrentInsight] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCTA, setShowCTA] = useState(false);

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

  // Initial welcome sequence
  useEffect(() => {
    console.log('Starting welcome sequence');
    const timer = setTimeout(() => {
      setShowWelcome(true);
      setTimeout(() => {
        console.log('Starting insights sequence');
        setShowInsights(true);
      }, 1500);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Handle typewriter effect for current insight
  useEffect(() => {
    if (!showInsights || currentInsight >= personalizedData.insights.length) {
      return;
    }

    console.log(`Starting typewriter for insight ${currentInsight}`);
    const insight = personalizedData.insights[currentInsight];
    
    // Reset state for new insight
    setTypedText('');
    setIsTyping(true);
    
    let charIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (charIndex <= insight.length) {
        setTypedText(insight.slice(0, charIndex));
        charIndex++;
      } else {
        // Finished typing this insight
        clearInterval(typingInterval);
        setIsTyping(false);
        console.log(`Finished typing insight ${currentInsight}`);
        
        // Wait before moving to next insight
        setTimeout(() => {
          if (currentInsight < personalizedData.insights.length - 1) {
            setCurrentInsight(prev => prev + 1);
          } else {
            // All insights done, show CTA
            console.log('All insights completed, showing CTA');
            setTimeout(() => setShowCTA(true), 1000);
          }
        }, 1500);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [showInsights, currentInsight, personalizedData.insights.length]);

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Neural Bloom Background */}
      <NeuralBloomBackground />

      <div className="relative z-10 min-h-screen flex flex-col px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-space font-light mb-3 tracking-tight leading-tight text-white">
            Get Things Done
          </h1>
          
          <p className="text-base text-gray-300 font-light mb-3">
            Built for investors, founders, and fast-moving teams
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-green-400">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-inter">Live on WhatsApp & iMessage</span>
          </div>
        </div>

        {/* Personalized Welcome Section */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center max-w-sm mx-auto">
            {/* Welcome Message */}
            {showWelcome && (
              <div className="mb-8 animate-fade-in">
                <div className="flex items-center justify-center mb-6">
                  {/* Investor Avatar */}
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center text-black font-space font-bold text-xl">
                      {personalizedData.initials}
                    </div>
                    <div className="absolute inset-0 rounded-full bg-green-400/20 animate-ping"></div>
                  </div>
                </div>
                
                <h2 className="text-2xl font-space font-light text-white mb-4">
                  Welcome back, <span className="font-medium">{personalizedData.name}</span>.
                </h2>
              </div>
            )}

            {/* Insights Reveal - Simplified without background box */}
            {showInsights && (
              <div className="mb-8">
                <div className="min-h-[3rem] flex items-center justify-center">
                  <div className="text-center">
                    {/* Typing indicator when starting new insight */}
                    {isTyping && typedText === '' && (
                      <div className="flex items-center justify-center space-x-1 mb-4">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce delay-200"></div>
                      </div>
                    )}
                    
                    {/* Typed text */}
                    {typedText && (
                      <p className="text-lg text-green-400 font-inter font-medium">
                        {typedText}
                        {isTyping && (
                          <span className="animate-pulse">|</span>
                        )}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Final CTA */}
            {showCTA && (
              <div className="animate-fade-in" style={{ animationDelay: '500ms' }}>
                <p className="text-xl text-white font-space font-light mb-8">
                  We know you. Now, <span className="font-medium">time to know us!</span>
                </p>
                
                <div className="flex flex-col items-center">
                  <div className="flex items-center space-x-2 text-green-400 animate-pulse">
                    <ArrowUp size={20} className="transform rotate-180" />
                    <span className="text-base font-inter">
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
          <div className="text-center">
            <ChevronDown className="text-green-400 mx-auto animate-bounce" size={20} />
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveHeroSection;
