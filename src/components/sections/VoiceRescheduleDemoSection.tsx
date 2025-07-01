
import { useState, useEffect } from 'react';
import { Mic, Check } from 'lucide-react';

const VoiceRescheduleDemoSection = () => {
  const [showDemo, setShowDemo] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      type: 'voice',
      message: 'Reschedule my 4 PM with Eric to tomorrow same time',
      isUser: true
    },
    {
      type: 'response',
      message: 'Done! Moved your product review to tomorrow 4 PM.',
      isUser: false
    },
    {
      type: 'confirmation',
      message: 'Eric\'s team confirmed the new time. Calendar updated.',
      isUser: false
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
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-black to-green-900/20">
      <div className="max-w-sm mx-auto">
        <div className="bg-black/60 backdrop-blur-sm rounded-3xl border border-green-400/20 overflow-hidden shadow-2xl">
          <div className="bg-green-800/30 px-4 py-3 flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <div>
              <h3 className="text-white font-medium text-sm">Asmi</h3>
              <p className="text-green-300 text-xs">Voice Assistant</p>
            </div>
          </div>

          <div className="p-4 bg-black/90 min-h-[300px] space-y-4">
            {steps.slice(0, currentStep + 1).map((step, index) => (
              <div key={index} className="animate-fade-in">
                {step.isUser ? (
                  <div className="flex justify-end">
                    <div className="bg-green-600 px-4 py-3 rounded-2xl text-white max-w-xs">
                      <div className="flex items-center space-x-2">
                        <Mic size={16} />
                        <span className="text-sm font-light">{step.message}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-start">
                    <div className="bg-gray-800/80 backdrop-blur-sm px-4 py-3 rounded-2xl text-white border border-green-400/20 max-w-xs">
                      <div className="flex items-start space-x-2">
                        {step.type === 'confirmation' && <Check className="text-green-400 mt-1" size={16} />}
                        <span className="text-sm font-light">{step.message}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {currentStep >= 2 && (
          <div className="mt-6 p-4 bg-green-400/10 border border-green-400/20 rounded-2xl backdrop-blur-sm animate-fade-in">
            <p className="text-green-300 text-sm text-center font-light">
              Coordinated with Eric's calendar automatically
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VoiceRescheduleDemoSection;
