
import { useState, useEffect } from 'react';
import { Mic, Calendar, CheckSquare } from 'lucide-react';
import MobileOptimizedSection from './MobileOptimizedSection';

const VoiceRescheduleDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showVoiceAnimation, setShowVoiceAnimation] = useState(false);

  const steps = [
    {
      id: 1,
      type: 'user-voice',
      content: 'Move Eric call to 6PM',
      icon: <Mic className="text-red-400" size={16} />,
      action: null,
      isVoice: true
    },
    {
      id: 2,
      type: 'asmi-processing',
      content: 'Got it. Checking Eric\'s availability...',
      icon: null,
      action: 'Processing',
      status: 'processing'
    },
    {
      id: 3,
      type: 'asmi-success',
      content: 'Done! Eric\'s team confirmed. Updated your calendar and sent new invite.',
      icon: <CheckSquare className="text-green-400" size={16} />,
      action: 'Success',
      status: 'success'
    },
    {
      id: 4,
      type: 'meeting-details',
      content: null,
      icon: null,
      action: 'Meeting Updated',
      status: 'details'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentStep === 0) {
        setShowVoiceAnimation(true);
        setTimeout(() => {
          setCurrentStep(1);
          setShowVoiceAnimation(false);
        }, 2000);
      } else {
        setCurrentStep((prev) => (prev + 1) % steps.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentStep]);

  return (
    <MobileOptimizedSection maxWidth="sm">
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-3 relative">
            <Mic className="text-red-400" size={20} />
            {showVoiceAnimation && (
              <div className="absolute inset-0 rounded-full bg-red-400/30 animate-ping"></div>
            )}
          </div>
          <h2 className="text-2xl font-bold text-white leading-tight">
            Just speak. It's done.
          </h2>
        </div>

        {/* Phone Demo */}
        <div className="bg-gray-900 rounded-3xl p-4 mx-auto max-w-xs">
          {/* Status Bar */}
          <div className="flex justify-between items-center text-white text-xs mb-4">
            <span>2:47</span>
            <div className="flex space-x-1">
              <div className="w-4 h-2 bg-yellow-400 rounded-sm"></div>
            </div>
          </div>

          {/* Asmi Header */}
          <div className="bg-red-600/80 rounded-t-3xl p-3 mb-4 flex items-center space-x-3">
            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <div>
              <h3 className="text-white font-semibold">Asmi</h3>
              <p className="text-red-200 text-xs flex items-center space-x-1">
                <Mic size={12} />
                <span>Voice assistant</span>
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="space-y-3">
            {currentStep >= 1 && (
              <div className="flex justify-end animate-fade-in">
                <div className="bg-red-600 text-white px-4 py-3 rounded-2xl rounded-tr-md max-w-xs flex items-center space-x-2">
                  {showVoiceAnimation ? (
                    <div className="flex items-center space-x-1">
                      <div className="w-1 h-3 bg-white rounded-full animate-bounce"></div>
                      <div className="w-1 h-4 bg-white rounded-full animate-bounce delay-100"></div>
                      <div className="w-1 h-2 bg-white rounded-full animate-bounce delay-200"></div>
                    </div>
                  ) : (
                    <>
                      <Mic className="text-white" size={16} />
                      <span className="text-sm">Move Eric call to 6PM</span>
                    </>
                  )}
                </div>
              </div>
            )}

            {currentStep >= 2 && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-blue-600 text-white px-4 py-3 rounded-2xl max-w-xs">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-4 h-4 bg-blue-400 rounded-full flex items-center justify-center">
                      <span className="text-xs">C</span>
                    </div>
                    <span className="text-xs font-semibold">Processing</span>
                  </div>
                  <p className="text-sm">Got it. Checking Eric's availability...</p>
                </div>
              </div>
            )}

            {currentStep >= 3 && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-green-600 text-white px-4 py-3 rounded-2xl max-w-xs">
                  <div className="flex items-center space-x-2 mb-1">
                    <CheckSquare className="text-white" size={16} />
                    <span className="text-xs font-semibold">Success</span>
                  </div>
                  <p className="text-sm">Done! Eric's team confirmed. Updated your calendar and sent new invite.</p>
                </div>
              </div>
            )}

            {currentStep >= 4 && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-purple-700 text-white px-4 py-3 rounded-2xl max-w-xs">
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="text-white" size={16} />
                    <span className="text-xs font-semibold">Meeting Updated</span>
                  </div>
                  <div className="text-xs space-y-1">
                    <p><span className="text-purple-200">Was:</span> 4:00 PM - 5:00 PM</p>
                    <p><span className="text-white font-semibold">Now:</span> 6:00 PM - 7:00 PM</p>
                    <p className="text-purple-200 mt-2">You, Eric Chen, Sarah Kim</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center space-x-2">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentStep ? 'bg-red-400 w-6' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>

        {/* Bottom Text */}
        <p className="text-center text-gray-400 text-sm">
          Voice → Understanding → Action in seconds
        </p>
      </div>
    </MobileOptimizedSection>
  );
};

export default VoiceRescheduleDemo;
