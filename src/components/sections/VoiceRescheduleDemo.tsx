import { useState, useEffect } from 'react';
import { Mic, Calendar, CheckSquare } from 'lucide-react';
import MobileOptimizedSection from './MobileOptimizedSection';

const VoiceRescheduleDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      id: 1,
      type: 'user',
      content: 'Hey Asmi, reschedule my 3 PM meeting to 4 PM',
      icon: <Mic className="text-blue-400" size={16} />,
      action: null
    },
    {
      id: 2,
      type: 'asmi',
      content: 'Got it! Checking everyone\'s availability for 4 PM...',
      icon: null,
      action: 'Checking calendar...'
    },
    {
      id: 3,
      type: 'asmi',
      content: 'Okay, I\'ve rescheduled the meeting to 4-5 PM. Calendar invites updated.',
      icon: <Calendar className="text-green-400" size={16} />,
      action: 'Rescheduled meeting'
    },
    {
      id: 4,
      type: 'asmi',
      content: 'Also, sent a quick note to everyone about the time change.',
      icon: <CheckSquare className="text-purple-400" size={16} />,
      action: 'Sent notifications'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <MobileOptimizedSection maxWidth="sm">
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
            <Mic className="text-orange-400" size={20} />
          </div>
          <h2 className="text-2xl font-bold text-white leading-tight">
            Just say. It's done!
          </h2>
        </div>

        {/* Phone Demo */}
        <div className="bg-gray-900 rounded-3xl p-4 mx-auto max-w-xs">
          {/* Status Bar */}
          <div className="flex justify-between items-center text-white text-xs mb-4">
            <span>9:41</span>
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
          </div>

          {/* Chat Bubbles */}
          <div className="space-y-3">
            {steps.slice(0, currentStep + 1).map((step, index) => (
              <div
                key={step.id}
                className={`flex ${step.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className={`max-w-xs px-4 py-3 rounded-2xl ${
                  step.type === 'user'
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-800 text-gray-100'
                }`}>
                  <div className="flex items-center gap-2 mb-1">
                    {step.icon}
                    <span className="text-sm">{step.content}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center space-x-2">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentStep ? 'bg-orange-400 w-6' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>

        <p className="text-gray-500 text-xs text-center">
          Automated with voice
        </p>
      </div>
    </MobileOptimizedSection>
  );
};

export default VoiceRescheduleDemo;
