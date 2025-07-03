
import { useState, useEffect } from 'react';
import { Mic, Phone } from 'lucide-react';
import PhoneStatusBar from './voice-reschedule-demo/PhoneStatusBar';
import ChatHeader from './voice-reschedule-demo/ChatHeader';
import VoiceMessage from './voice-reschedule-demo/VoiceMessage';
import ProcessingMessage from './voice-reschedule-demo/ProcessingMessage';
import MeetingDetails from './voice-reschedule-demo/MeetingDetails';
import TypingIndicator from './voice-reschedule-demo/TypingIndicator';

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
      delay: 500 // Faster
    },
    { 
      type: 'typing', 
      delay: 500 // Faster
    },
    { 
      type: 'processing', 
      text: 'Got it. Checking Eric\'s availability...',
      delay: 600 // Faster
    },
    { 
      type: 'typing', 
      delay: 500 // Faster
    },
    { 
      type: 'confirmation', 
      text: 'Done! Eric\'s team confirmed. Updated your calendar and sent new invite.',
      delay: 500 // Faster
    },
    { 
      type: 'details', 
      data: {
        original: '4:00 PM - 5:00 PM',
        new: '6:00 PM - 7:00 PM',
        attendees: 'You, Eric Chen, Sarah Kim'
      },
      delay: 400 // Faster
    }
  ];

  // Audio wave animation
  useEffect(() => {
    if (isRecording) {
      const interval = setInterval(() => {
        setAudioWaves(waves => waves.map(() => Math.random() * 4 + 1));
      }, 120); // Faster waves
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
      { threshold: 0.4 } // More sensitive for mobile
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
      setTimeout(() => setIsRecording(false), 1000); // Faster recording
    }

    const timer = setTimeout(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setIsComplete(true);
      }
    }, steps[currentStep]?.delay || 400);

    return () => clearTimeout(timer);
  }, [currentStep, hasStarted, isComplete]);

  return (
    <div id="voice-reschedule-demo" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4 py-12 sm:py-16">
      <div className="max-w-xs sm:max-w-sm mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="relative mb-3 sm:mb-4">
            <Mic className={`text-red-400 mx-auto transition-all duration-300 ${isRecording ? 'scale-110' : ''}`} size={28} />
            {isRecording && (
              <div className="absolute inset-0 rounded-full bg-red-400/20 animate-ping"></div>
            )}
          </div>
          <h2 className="text-xl sm:text-2xl font-light text-white mb-2 px-2">Just speak. It's done.</h2>
        </div>

        {/* Phone mockup - Fixed size */}
        <div className="bg-black/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-red-400/20 overflow-hidden shadow-2xl relative w-full max-w-[320px] mx-auto">
          <PhoneStatusBar isRecording={isRecording} />
          <ChatHeader isRecording={isRecording} />

          {/* Messages - Fixed height container */}
          <div className="p-3 sm:p-4 space-y-3 sm:space-y-4 bg-gradient-to-b from-gray-900 to-black h-[400px] sm:h-[450px] relative overflow-hidden">
            <VoiceMessage 
              text={steps[0].text}
              isRecording={isRecording}
              audioWaves={audioWaves}
              isVisible={currentStep >= 0}
            />

            <TypingIndicator isVisible={currentStep === 1} />

            <ProcessingMessage 
              type="processing"
              text={steps[2].text}
              isVisible={currentStep >= 2}
            />

            <TypingIndicator isVisible={currentStep === 3} />

            <ProcessingMessage 
              type="confirmation"
              text={steps[4].text}
              isVisible={currentStep >= 4}
            />

            <MeetingDetails 
              data={steps[5].data}
              isVisible={currentStep >= 5}
            />

            {/* Floating indicators */}
            {currentStep >= 2 && (
              <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 space-y-2">
                <div className="bg-blue-500/20 border border-blue-400/40 rounded-full p-1.5 sm:p-2">
                  <Phone size={10} className="text-blue-400 sm:w-3 sm:h-3" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom insight */}
        <div className="text-center mt-4 sm:mt-6 px-4">
          <span className="text-gray-400 text-xs sm:text-sm font-light">
            Voice → Understanding → Action in seconds
          </span>
        </div>
      </div>
    </div>
  );
};

export default VoiceRescheduleDemo;
