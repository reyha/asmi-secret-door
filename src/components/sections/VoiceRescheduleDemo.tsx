
import { useState, useEffect } from 'react';
import { Mic, CheckCircle, Calendar } from 'lucide-react';
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
      isVoice: true
    },
    {
      id: 2,
      type: 'asmi-processing',
      content: 'Got it. Checking Eric\'s availability...',
      icon: null,
      status: 'processing'
    },
    {
      id: 3,
      type: 'asmi-success',
      content: 'Done! Eric\'s team confirmed. Updated your calendar and sent new invite.',
      icon: <CheckCircle className="text-green-400" size={16} />,
      status: 'success'
    },
    {
      id: 4,
      type: 'meeting-details',
      content: null,
      icon: null,
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
        <div className="bg-gray-900/90 rounded-3xl p-0 mx-auto max-w-xs border border-gray-700 backdrop-blur-sm">
          {/* Status Bar */}
          <div className="flex justify-between items-center text-white text-xs px-4 py-2 bg-black rounded-t-3xl">
            <span>2:47</span>
            <div className="flex space-x-1">
              <div className="w-4 h-2 bg-yellow-400 rounded-sm"></div>
            </div>
          </div>

          {/* Asmi Header */}
          <div className="bg-gradient-to-r from-red-800 to-red-900 p-4 flex items-center space-x-3">
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
          <div className="space-y-4 p-4 bg-gray-900">
            {currentStep >= 1 && (
              <div className="flex justify-end animate-fade-in">
                <div className="bg-red-600/80 text-white px-4 py-4 rounded-2xl rounded-tr-sm max-w-xs flex items-center space-x-3 border border-red-500/50">
                  <Mic className="text-red-200" size={16} />
                  <span className="text-sm font-medium">Move Eric call to 6PM</span>
                </div>
              </div>
            )}

            {currentStep >= 2 && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-blue-800/80 text-white px-4 py-4 rounded-2xl rounded-tl-sm max-w-xs border border-blue-600/50">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-blue-300 text-xs font-semibold">Processing</span>
                  </div>
                  <p className="text-sm">Got it. Checking Eric's availability...</p>
                </div>
              </div>
            )}

            {currentStep >= 3 && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-green-800/80 text-white px-4 py-4 rounded-2xl rounded-tl-sm max-w-xs border border-green-600/50">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="text-green-400" size={16} />
                    <span className="text-green-300 text-xs font-semibold">Success</span>
                  </div>
                  <p className="text-sm">Done! Eric's team confirmed. Updated your calendar and sent new invite.</p>
                </div>
              </div>
            )}

            {currentStep >= 4 && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-purple-800/80 text-white px-4 py-4 rounded-2xl rounded-tl-sm max-w-xs border border-purple-600/50">
                  <div className="flex items-center space-x-2 mb-3">
                    <Calendar className="text-purple-300" size={16} />
                    <span className="text-purple-300 text-xs font-semibold">Meeting Updated</span>
                  </div>
                  <div className="text-sm space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-300">Was:</span>
                      <span className="text-gray-400 line-through">4:00 PM - 5:00 PM</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-medium">Now:</span>
                      <span className="text-white font-semibold">6:00 PM - 7:00 PM</span>
                    </div>
                    <p className="text-purple-200 text-sm mt-2">You, Eric Chen, Sarah Kim</p>
                  </div>
                </div>
              </div>
            )}
          </div>
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
