
import { useState, useEffect } from 'react';
import { User, Building, Briefcase } from 'lucide-react';

const PersonBackgroundDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { 
      type: 'user', 
      text: 'Who\'s Karan again?',
      delay: 0
    },
    { 
      type: 'asmi', 
      text: 'Karan Mehta - Partner at Lightspeed Ventures',
      delay: 1000
    },
    { 
      type: 'profile', 
      data: {
        name: 'Karan Mehta',
        role: 'Partner @ Lightspeed',
        background: 'Ex-Facebook, Stanford MBA',
        interests: 'AI/ML, Enterprise SaaS',
        lastInteraction: 'Coffee chat about Series A trends (2 weeks ago)'
      },
      delay: 2000
    },
    { 
      type: 'insight', 
      text: 'Prefers crisp, data-heavy decks. Usually asks about unit economics first.',
      delay: 3500
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    }, steps[currentStep]?.delay || 1000);

    return () => clearTimeout(timer);
  }, [currentStep]);

  useEffect(() => {
    const resetTimer = setTimeout(() => {
      setCurrentStep(0);
    }, 100);

    return () => clearTimeout(resetTimer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4">
      <div className="max-w-sm mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <User className="text-purple-400 mx-auto mb-4 animate-pulse" size={32} />
          <h2 className="text-2xl font-light text-white mb-2">Know who you're meeting.</h2>
        </div>

        {/* Phone mockup */}
        <div className="bg-black/60 backdrop-blur-sm rounded-3xl border border-green-400/20 overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="bg-green-800/30 px-4 py-3 flex items-center space-x-3 border-b border-white/10">
            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-xs">A</span>
            </div>
            <div>
              <h3 className="text-white font-medium text-sm">Asmi</h3>
              <p className="text-gray-400 text-xs">Quick lookup</p>
            </div>
          </div>

          {/* Messages */}
          <div className="p-4 space-y-4 bg-black min-h-[350px]">
            {/* User message */}
            {currentStep >= 0 && (
              <div className="flex justify-end animate-fade-in">
                <div className="bg-green-600 px-4 py-2 rounded-2xl max-w-xs">
                  <span className="text-white text-sm font-light">{steps[0].text}</span>
                </div>
              </div>
            )}

            {/* Asmi response */}
            {currentStep >= 1 && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-gray-800/80 px-4 py-2 rounded-2xl max-w-xs border border-white/10">
                  <span className="text-white text-sm font-light">{steps[1].text}</span>
                </div>
              </div>
            )}

            {/* Profile card */}
            {currentStep >= 2 && (
              <div className="flex justify-start animate-scale-in">
                <div className="bg-purple-500/20 border border-purple-400/30 px-4 py-3 rounded-2xl max-w-xs">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center">
                        <span className="text-black font-bold text-xs">K</span>
                      </div>
                      <div>
                        <div className="text-white text-sm font-medium">{steps[2].data.name}</div>
                        <div className="text-purple-200 text-xs">{steps[2].data.role}</div>
                      </div>
                    </div>
                    
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center space-x-2">
                        <Building size={10} className="text-purple-400" />
                        <span className="text-purple-200">{steps[2].data.background}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Briefcase size={10} className="text-purple-400" />
                        <span className="text-purple-200">{steps[2].data.interests}</span>
                      </div>
                    </div>
                    
                    <div className="bg-purple-400/20 rounded-lg p-2 mt-2">
                      <span className="text-purple-100 text-xs font-light">
                        Last: {steps[2].data.lastInteraction}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Insight */}
            {currentStep >= 3 && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-yellow-500/20 border border-yellow-400/30 px-4 py-2 rounded-2xl max-w-xs">
                  <div className="text-yellow-200 text-xs font-light">{steps[3].text}</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom insight */}
        <div className="text-center mt-6 animate-fade-in" style={{ animationDelay: '4s' }}>
          <p className="text-gray-400 text-sm font-light">
            Social graph + interaction history = perfect context
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonBackgroundDemo;
