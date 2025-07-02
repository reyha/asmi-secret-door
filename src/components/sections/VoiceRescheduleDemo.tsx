
import { useState, useEffect } from 'react';
import { Mic, Calendar, CheckCircle, Phone } from 'lucide-react';

const VoiceRescheduleDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [audioWaves, setAudioWaves] = useState(Array(8).fill(0));

  const steps = [
    { 
      type: 'voice', 
      text: 'Move Eric call to 6PM',
      delay: 800
    },
    { 
      type: 'typing', 
      delay: 600
    },
    { 
      type: 'processing', 
      text: 'Got it. Checking Eric\'s availability...',
      delay: 1000
    },
    { 
      type: 'typing', 
      delay: 600
    },
    { 
      type: 'confirmation', 
      text: 'Done! Eric\'s team confirmed. Updated your calendar and sent new invite.',
      delay: 800
    },
    { 
      type: 'details', 
      data: {
        original: '4:00 PM - 5:00 PM',
        new: '6:00 PM - 7:00 PM',
        attendees: 'You, Eric Chen, Sarah Kim'
      },
      delay: 600
    }
  ];

  // Audio wave animation
  useEffect(() => {
    if (isRecording) {
      const interval = setInterval(() => {
        setAudioWaves(waves => waves.map(() => Math.random() * 4 + 1));
      }, 150);
      return () => clearInterval(interval);
    }
  }, [isRecording]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentElement = document.getElementById('voice-reschedule-demo');
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted || isComplete) return;

    if (currentStep === 0) {
      setIsRecording(true);
      setTimeout(() => setIsRecording(false), 1200);
    }

    const timer = setTimeout(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setIsComplete(true);
      }
    }, steps[currentStep]?.delay || 500);

    return () => clearTimeout(timer);
  }, [currentStep, hasStarted, isComplete]);

  return (
    <div id="voice-reschedule-demo" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4">
      <div className="max-w-sm mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="relative mb-4">
            <Mic className={`text-red-400 mx-auto transition-all duration-300 ${isRecording ? 'scale-110' : ''}`} size={32} />
            {isRecording && (
              <div className="absolute inset-0 rounded-full bg-red-400/20 animate-ping"></div>
            )}
          </div>
          <h2 className="text-2xl font-light text-white mb-2">Just speak. It's done.</h2>
        </div>

        {/* Phone mockup */}
        <div className="bg-black/80 backdrop-blur-sm rounded-3xl border border-red-400/20 overflow-hidden shadow-2xl relative">
          {/* Status bar */}
          <div className="bg-black px-4 py-2 flex justify-between items-center text-xs text-white/70">
            <span>2:47</span>
            <div className="flex items-center space-x-2">
              {isRecording && <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                <span className="text-red-400 text-xs">Recording</span>
              </div>}
              <div className="w-4 h-2 border border-white/50 rounded-sm">
                <div className="w-2/3 h-full bg-yellow-400 rounded-sm"></div>
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="bg-gradient-to-r from-red-800/40 to-red-900/40 px-4 py-4 flex items-center space-x-3 border-b border-white/10 backdrop-blur-sm">
            <div className="w-10 h-10 bg-gradient-to-r from-red-400 to-red-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-black font-bold text-sm">A</span>
            </div>
            <div className="flex-1">
              <h3 className="text-white font-medium text-sm">Asmi</h3>
              <div className="text-gray-400 text-xs flex items-center space-x-1">
                <Mic size={10} />
                <span>Voice assistant</span>
              </div>
            </div>
            {isRecording && (
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                <span className="text-red-400 text-xs">Listening</span>
              </div>
            )}
          </div>

          {/* Messages */}
          <div className="p-4 space-y-4 bg-gradient-to-b from-gray-900 to-black min-h-[450px] relative">
            {/* Voice message */}
            {currentStep >= 0 && (
              <div className="flex justify-end animate-slide-in-right">
                <div className="bg-gradient-to-r from-red-500/40 to-red-600/40 border border-red-400/60 px-4 py-4 rounded-2xl rounded-tr-sm max-w-xs shadow-lg backdrop-blur-sm">
                  <div className="flex items-center space-x-3 mb-2">
                    <Mic size={16} className={`text-red-400 ${isRecording ? 'animate-pulse' : ''}`} />
                    <span className="text-red-200 text-sm font-light">{steps[0].text}</span>
                  </div>
                  {isRecording && (
                    <div className="flex items-center space-x-1 mt-3">
                      {audioWaves.map((height, index) => (
                        <div
                          key={index}
                          className="w-1 bg-red-400 rounded transition-all duration-150"
                          style={{ height: `${height * 4}px` }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Typing indicator */}
            {(currentStep === 1 || currentStep === 3) && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-gray-800/90 backdrop-blur-sm px-4 py-3 rounded-2xl rounded-tl-sm border border-white/10">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}

            {/* Processing */}
            {currentStep >= 2 && (
              <div className="flex justify-start animate-scale-in">
                <div className="bg-blue-900/40 backdrop-blur-sm px-4 py-3 rounded-2xl rounded-tl-sm max-w-xs border border-blue-400/30 shadow-lg">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-3 h-3 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-blue-400 text-xs font-medium">Processing</span>
                  </div>
                  <span className="text-blue-200 text-sm font-light">{steps[2].text}</span>
                </div>
              </div>
            )}

            {/* Confirmation */}
            {currentStep >= 4 && (
              <div className="flex justify-start animate-scale-in">
                <div className="bg-gradient-to-r from-green-500/30 to-green-600/30 border border-green-400/40 px-4 py-3 rounded-2xl rounded-tl-sm max-w-xs shadow-lg backdrop-blur-sm">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle size={14} className="text-green-400" />
                    <span className="text-green-400 text-xs font-medium">Success</span>
                  </div>
                  <span className="text-green-200 text-sm font-light">{steps[4].text}</span>
                </div>
              </div>
            )}

            {/* Details */}
            {currentStep >= 5 && (
              <div className="flex justify-start animate-scale-in">
                <div className="bg-purple-900/30 border border-purple-400/30 px-4 py-4 rounded-2xl max-w-xs shadow-lg backdrop-blur-sm">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Calendar size={14} className="text-purple-400" />
                      <span className="text-purple-200 text-xs font-medium">Meeting Updated</span>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-400">Was:</span>
                        <span className="text-gray-400 line-through">{steps[5].data.original}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-purple-200">Now:</span>
                        <span className="text-purple-200 font-medium">{steps[5].data.new}</span>
                      </div>
                      <div className="pt-2 border-t border-purple-400/20">
                        <span className="text-purple-300 text-xs">{steps[5].data.attendees}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Floating indicators */}
            {currentStep >= 2 && (
              <div className="absolute bottom-4 right-4 space-y-2">
                <div className="bg-blue-500/20 border border-blue-400/40 rounded-full p-2">
                  <Phone size={12} className="text-blue-400" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom insight */}
        <div className="text-center mt-6">
          <span className="text-gray-400 text-sm font-light">
            Voice → Understanding → Action in seconds
          </span>
        </div>
      </div>
    </div>
  );
};

export default VoiceRescheduleDemo;
