
import { useState, useEffect } from 'react';
import { Sun, Calendar, Users, Gift } from 'lucide-react';

const MorningBriefDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showReminder, setShowReminder] = useState(false);

  const steps = [
    { 
      type: 'user', 
      text: 'Good morning Asmi',
      delay: 0
    },
    { 
      type: 'asmi', 
      text: 'Good morning! Here\'s your day:',
      delay: 1000
    },
    { 
      type: 'agenda', 
      items: [
        { icon: <Calendar size={16} className="text-blue-400" />, text: '9 AM: Board meeting prep' },
        { icon: <Users size={16} className="text-green-400" />, text: '2 PM: 1:1 with Sarah' },
        { icon: <Calendar size={16} className="text-purple-400" />, text: '4 PM: Investor call' }
      ],
      delay: 2000
    },
    { 
      type: 'reminder', 
      text: 'Also, it\'s Ria\'s birthday today! 🎂',
      icon: <Gift size={16} className="text-pink-400" />,
      delay: 3500
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    }, steps[currentStep]?.delay || 1000);

    if (currentStep === 3) {
      setTimeout(() => setShowReminder(true), 500);
    }

    return () => clearTimeout(timer);
  }, [currentStep]);

  useEffect(() => {
    // Reset animation when component comes into view
    const resetTimer = setTimeout(() => {
      setCurrentStep(0);
      setShowReminder(false);
    }, 100);

    return () => clearTimeout(resetTimer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4">
      <div className="max-w-sm mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Sun className="text-yellow-400 mx-auto mb-4 animate-pulse" size={32} />
          <h2 className="text-2xl font-light text-white mb-2">Start your day smart.</h2>
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
              <p className="text-gray-400 text-xs">Your AI Chief of Staff</p>
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

            {/* Asmi greeting */}
            {currentStep >= 1 && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-gray-800/80 px-4 py-2 rounded-2xl max-w-xs border border-white/10">
                  <span className="text-white text-sm font-light">{steps[1].text}</span>
                </div>
              </div>
            )}

            {/* Agenda items */}
            {currentStep >= 2 && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-gray-800/80 px-4 py-3 rounded-2xl max-w-xs border border-white/10">
                  <div className="space-y-2">
                    {steps[2].items.map((item, index) => (
                      <div 
                        key={index} 
                        className="flex items-center space-x-2 animate-fade-in"
                        style={{ animationDelay: `${index * 300}ms` }}
                      >
                        {item.icon}
                        <span className="text-white text-xs font-light">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Birthday reminder */}
            {currentStep >= 3 && showReminder && (
              <div className="flex justify-start animate-scale-in">
                <div className="bg-pink-500/20 border border-pink-400/30 px-4 py-2 rounded-2xl max-w-xs">
                  <div className="flex items-center space-x-2">
                    {steps[3].icon}
                    <span className="text-pink-300 text-sm font-light">{steps[3].text}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom insight */}
        <div className="text-center mt-6 animate-fade-in" style={{ animationDelay: '4s' }}>
          <p className="text-gray-400 text-sm font-light">
            Asmi remembered Ria's birthday from last month's conversation
          </p>
        </div>
      </div>
    </div>
  );
};

export default MorningBriefDemo;
