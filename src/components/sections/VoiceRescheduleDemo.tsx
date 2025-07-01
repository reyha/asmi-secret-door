
import { useState, useEffect } from 'react';
import { Mic, Calendar, CheckCircle } from 'lucide-react';

const VoiceRescheduleDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isRecording, setIsRecording] = useState(false);

  const steps = [
    { 
      type: 'voice', 
      text: 'Move Eric call to 6PM',
      delay: 0
    },
    { 
      type: 'processing', 
      text: 'Got it. Checking Eric\'s availability...',
      delay: 2000
    },
    { 
      type: 'confirmation', 
      text: 'Done! Eric\'s team confirmed. Updated your calendar and sent new invite.',
      delay: 3500
    },
    { 
      type: 'details', 
      data: {
        original: '4:00 PM - 5:00 PM',
        new: '6:00 PM - 7:00 PM',
        attendees: 'You, Eric Chen, Sarah Kim'
      },
      delay: 4500
    }
  ];

  useEffect(() => {
    if (currentStep === 0) {
      setIsRecording(true);
      setTimeout(() => setIsRecording(false), 1500);
    }

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
      setIsRecording(false);
    }, 100);

    return () => clearTimeout(resetTimer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4">
      <div className="max-w-sm mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Mic className="text-red-400 mx-auto mb-4 animate-pulse" size={32} />
          <h2 className="text-2xl font-light text-white mb-2">Just speak. It's done.</h2>
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
              <p className="text-gray-400 text-xs">Voice assistant</p>
            </div>
            {isRecording && (
              <div className="ml-auto">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
              </div>
            )}
          </div>

          {/* Messages */}
          <div className="p-4 space-y-4 bg-black min-h-[320px]">
            {/* Voice message */}
            {currentStep >= 0 && (
              <div className="flex justify-end animate-fade-in">
                <div className="bg-red-500/30 border border-red-400/50 px-4 py-3 rounded-2xl max-w-xs">
                  <div className="flex items-center space-x-2">
                    <Mic size={16} className={`text-red-400 ${isRecording ? 'animate-pulse' : ''}`} />
                    <span className="text-red-200 text-sm font-light">{steps[0].text}</span>
                  </div>
                  {isRecording && (
                    <div className="mt-2 flex space-x-1">
                      <div className="w-1 h-4 bg-red-400 rounded animate-pulse" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-1 h-6 bg-red-400 rounded animate-pulse" style={{ animationDelay: '100ms' }}></div>
                      <div className="w-1 h-3 bg-red-400 rounded animate-pulse" style={{ animationDelay: '200ms' }}></div>
                      <div className="w-1 h-5 bg-red-400 rounded animate-pulse" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Processing */}
            {currentStep >= 1 && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-gray-800/80 px-4 py-2 rounded-2xl max-w-xs border border-white/10">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-white text-sm font-light">{steps[1].text}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Confirmation */}
            {currentStep >= 2 && (
              <div className="flex justify-start animate-scale-in">
                <div className="bg-green-500/20 border border-green-400/30 px-4 py-2 rounded-2xl max-w-xs">
                  <div className="flex items-center space-x-2 mb-1">
                    <CheckCircle size={12} className="text-green-400" />
                    <span className="text-green-400 text-xs font-medium">Success</span>
                  </div>
                  <span className="text-green-200 text-sm font-light">{steps[2].text}</span>
                </div>
              </div>
            )}

            {/* Details */}
            {currentStep >= 3 && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-blue-500/20 border border-blue-400/30 px-4 py-3 rounded-2xl max-w-xs">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Calendar size={12} className="text-blue-400" />
                      <span className="text-blue-200 text-xs font-medium">Meeting Updated</span>
                    </div>
                    <div className="space-y-1 text-xs">
                      <div className="text-gray-400 line-through">{steps[3].data.original}</div>
                      <div className="text-blue-200 font-medium">{steps[3].data.new}</div>
                      <div className="text-blue-300">{steps[3].data.attendees}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom insight */}
        <div className="text-center mt-6 animate-fade-in" style={{ animationDelay: '5s' }}>
          <p className="text-gray-400 text-sm font-light">
            Voice → Understanding → Action in seconds
          </p>
        </div>
      </div>
    </div>
  );
};

export default VoiceRescheduleDemo;
