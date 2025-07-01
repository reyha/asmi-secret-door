
import { useState, useEffect } from 'react';
import { Users, Brain, Clock } from 'lucide-react';

const MeetingContextDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showContext, setShowContext] = useState(false);

  const steps = [
    { 
      type: 'user', 
      text: 'Prep me for my call with Raj',
      delay: 0
    },
    { 
      type: 'asmi', 
      text: 'Your 2 PM with Raj from Accel:',
      delay: 1000
    },
    { 
      type: 'context', 
      items: [
        '💡 Last discussed: User retention metrics',
        '📊 He asked about monthly churn rates',
        '🎯 Follow up: API partnership timeline'
      ],
      delay: 2000
    },
    { 
      type: 'insight', 
      text: 'I pulled your latest retention dashboard - 92% monthly retention to share.',
      delay: 3500
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    }, steps[currentStep]?.delay || 1000);

    if (currentStep === 2) {
      setTimeout(() => setShowContext(true), 500);
    }

    return () => clearTimeout(timer);
  }, [currentStep]);

  useEffect(() => {
    const resetTimer = setTimeout(() => {
      setCurrentStep(0);
      setShowContext(false);
    }, 100);

    return () => clearTimeout(resetTimer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4">
      <div className="max-w-sm mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Users className="text-blue-400 mx-auto mb-4 animate-pulse" size={32} />
          <h2 className="text-2xl font-light text-white mb-2">Win every meeting.</h2>
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
              <p className="text-gray-400 text-xs">15 min until your call</p>
            </div>
          </div>

          {/* Messages */}
          <div className="p-4 space-y-4 bg-black min-h-[300px]">
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

            {/* Context items */}
            {currentStep >= 2 && showContext && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-blue-500/20 border border-blue-400/30 px-4 py-3 rounded-2xl max-w-xs">
                  <div className="space-y-2">
                    {steps[2].items.map((item, index) => (
                      <div 
                        key={index} 
                        className="animate-fade-in"
                        style={{ animationDelay: `${index * 400}ms` }}
                      >
                        <span className="text-blue-200 text-xs font-light">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Insight */}
            {currentStep >= 3 && (
              <div className="flex justify-start animate-scale-in">
                <div className="bg-green-500/20 border border-green-400/30 px-4 py-2 rounded-2xl max-w-xs">
                  <div className="flex items-center space-x-2 mb-1">
                    <Brain size={12} className="text-green-400" />
                    <span className="text-green-400 text-xs font-medium">Smart Brief</span>
                  </div>
                  <span className="text-green-200 text-xs font-light">{steps[3].text}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom insight */}
        <div className="text-center mt-6 animate-fade-in" style={{ animationDelay: '4s' }}>
          <p className="text-gray-400 text-sm font-light">
            Context from 3 weeks ago automatically surfaced
          </p>
        </div>
      </div>
    </div>
  );
};

export default MeetingContextDemo;
