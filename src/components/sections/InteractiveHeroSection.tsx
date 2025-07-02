import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Mic, MessageSquare, Calendar, Zap } from 'lucide-react';
import PersonalizedWelcome from './PersonalizedWelcome';

const InteractiveHeroSection = () => {
  const [currentDemo, setCurrentDemo] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDemo(prev => (prev + 1) % demos.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="min-h-screen bg-black text-white relative overflow-hidden flex flex-col"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Header */}
      <div className="relative z-10 pt-12 pb-8">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-space font-light mb-6 tracking-tight leading-tight">
            Meet your AI <br />
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent font-medium">
              Chief of Staff
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 font-light mb-4">
            Built for investors, founders, and fast-moving teams
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-green-400">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-inter">Live on WhatsApp & iMessage</span>
          </div>
        </div>
      </div>

      {/* Personalized Welcome Section */}
      <PersonalizedWelcome />

      {/* Demo Carousel */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Demo preview */}
            <div className="order-2 lg:order-1">
              <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-green-400/20">
                <div className="flex items-center space-x-3 mb-6">
                  {demos[currentDemo].icon}
                  <h3 className="text-2xl font-space font-semibold text-white">
                    {demos[currentDemo].title}
                  </h3>
                </div>
                
                <p className="text-gray-300 text-lg font-inter mb-6">
                  {demos[currentDemo].description}
                </p>

                {/* Demo visualization */}
                <div className="bg-black/60 rounded-2xl p-6 border border-white/10">
                  <div className="space-y-4">
                    {currentDemo === 0 && (
                      <div className="animate-fade-in">
                        <div className="flex justify-end mb-3">
                          <div className="bg-green-600 px-4 py-2 rounded-2xl max-w-xs">
                            <span className="text-white text-sm">Good morning! What's on my agenda?</span>
                          </div>
                        </div>
                        <div className="flex justify-start">
                          <div className="bg-gray-800 px-4 py-2 rounded-2xl max-w-sm">
                            <span className="text-white text-sm">You have 3 meetings today. Sarah from Lightspeed at 2 PM - she invested in similar AI tools. I'll prep talking points.</span>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {currentDemo === 1 && (
                      <div className="animate-fade-in">
                        <div className="flex justify-end mb-3">
                          <div className="bg-green-600 px-4 py-2 rounded-2xl max-w-xs">
                            <span className="text-white text-sm">Who's John again?</span>
                          </div>
                        </div>
                        <div className="flex justify-start">
                          <div className="bg-gray-800 px-4 py-2 rounded-2xl max-w-sm">
                            <span className="text-white text-sm">John Martinez - Partner at Sequoia. Led your Series A at Notion. Prefers data-heavy presentations.</span>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {currentDemo === 2 && (
                      <div className="animate-fade-in">
                        <div className="flex items-center justify-center py-8">
                          <div className="text-center">
                            <Mic size={48} className="text-purple-400 mx-auto mb-4 animate-pulse" />
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
              <div className="space-y-6">
                {demos.map((demo, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentDemo(index)}
                    className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                      currentDemo === index
                        ? 'bg-green-500/10 border-green-400/50'
                        : 'bg-black/20 border-white/10 hover:border-green-400/30'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      {demo.icon}
                      <div>
                        <h4 className="text-white font-space font-semibold text-lg">
                          {demo.title}
                        </h4>
                        <p className="text-gray-400 font-inter text-sm">
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
      <div className="relative z-10 text-center pb-8">
        <ChevronDown className="text-green-400 mx-auto animate-bounce" size={24} />
      </div>
    </div>
  );
};

export default InteractiveHeroSection;
