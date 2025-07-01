
import { useState, useEffect } from 'react';
import { Clock, User } from 'lucide-react';

const MeetingPrepDemoSection = () => {
  const [showDemo, setShowDemo] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      message: "Your call with Raj starts in 15 minutes",
      type: "notification"
    },
    {
      message: "Last time you discussed API integration for their mobile app",
      type: "context"
    },
    {
      message: "He mentioned timeline concerns. Here are your notes:",
      type: "prep",
      notes: "• Q4 launch target\n• Technical requirements doc\n• Next steps: architecture review"
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
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [showDemo, currentStep, steps.length]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-sm mx-auto">
        <div className="bg-black/60 backdrop-blur-sm rounded-3xl border border-blue-400/20 overflow-hidden shadow-2xl">
          <div className="bg-blue-800/30 px-4 py-3 flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <div>
              <h3 className="text-white font-medium text-sm">Asmi</h3>
              <p className="text-blue-300 text-xs">Meeting Prep</p>
            </div>
          </div>

          <div className="p-4 bg-black/90 min-h-[300px] space-y-4">
            {steps.slice(0, currentStep + 1).map((step, index) => (
              <div key={index} className="animate-fade-in">
                <div className="bg-gray-800/80 backdrop-blur-sm px-4 py-3 rounded-2xl text-white border border-blue-400/20">
                  <div className="flex items-start space-x-2">
                    {step.type === 'notification' && <Clock className="text-blue-400 mt-1" size={16} />}
                    {step.type === 'context' && <User className="text-blue-400 mt-1" size={16} />}
                    <span className="text-sm font-light">{step.message}</span>
                  </div>
                  {step.notes && (
                    <div className="mt-3 p-3 bg-black/40 rounded-xl text-xs text-gray-300 whitespace-pre-line">
                      {step.notes}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {currentStep >= 2 && (
          <div className="mt-6 p-4 bg-blue-400/10 border border-blue-400/20 rounded-2xl backdrop-blur-sm animate-fade-in">
            <p className="text-blue-300 text-sm text-center font-light">
              Context from your March conversation with Raj
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MeetingPrepDemoSection;
