
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
          <PhoneStatusBar isRecording={isRecording} />
          <ChatHeader isRecording={isRecording} />

          {/* Messages */}
          <div className="p-4 space-y-4 bg-gradient-to-b from-gray-900 to-black min-h-[450px] relative">
            <VoiceMessage 
              text={steps[0].text}
              isRecording={isRecording}
              audioWaves={audioWaves}
              isVisible={currentStep >= 0}
            />

            <TypingIndicator isVisible={(currentStep === 1 || currentStep === 3)} />

            <ProcessingMessage 
              type="processing"
              text={steps[2].text}
              isVisible={currentStep >= 2}
            />

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
