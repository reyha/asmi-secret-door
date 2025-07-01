
import { useState, useEffect } from 'react';
import { Calendar, Gift } from 'lucide-react';

const MorningBriefDemoSection = () => {
  const [showDemo, setShowDemo] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      message: "Good morning! Here's your day:",
      details: "3 meetings scheduled"
    },
    {
      message: "Your 2 PM with Sarah moved to 3 PM",
      details: "Calendar updated automatically"
    },
    {
      message: "Reminder: It's Ria's birthday today 🎂",
      details: "Want me to send flowers?"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setShowDemo(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showDemo && currentStep < steps.length - 1) {
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showDemo, currentStep, steps.length]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-black to-gray-900">
      <div className="max-w-sm mx-auto">
        {/* Chat interface */}
        <div className="bg-black/60 backdrop-blur-sm rounded-3xl border border-green-400/20 overflow-hidden shadow-2xl">
          <div className="bg-green-800/30 px-4 py-3 flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <div>
              <h3 className="text-white font-medium text-sm">Asmi</h3>
              <p className="text-green-300 text-xs">Morning Brief</p>
            </div>
          </div>

          <div className="p-4 bg-black/90 min-h-[300px] space-y-4">
            {steps.slice(0, currentStep + 1).map((step, index) => (
              <div key={index} className="animate-fade-in">
                <div className="bg-gray-800/80 backdrop-blur-sm px-4 py-3 rounded-2xl text-white border border-green-400/20 mb-2">
                  <span className="text-sm font-light">{step.message}</span>
                </div>
                {index === 1 && (
                  <div className="flex items-center space-x-2 text-xs text-green-300 ml-2">
                    <Calendar size={12} />
                    <span>{step.details}</span>
                  </div>
                )}
                {index === 2 && (
                  <div className="flex items-center space-x-2 text-xs text-green-300 ml-2">
                    <Gift size={12} />
                    <span>{step.details}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Behind the scenes */}
        {currentStep >= 2 && (
          <div className="mt-6 p-4 bg-green-400/10 border border-green-400/20 rounded-2xl backdrop-blur-sm animate-fade-in">
            <p className="text-green-300 text-sm text-center font-light">
              Asmi remembered Ria's birthday from your voice note 3 weeks ago
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MorningBriefDemoSection;
