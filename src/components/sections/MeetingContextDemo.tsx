
import { useState, useEffect } from 'react';
import { Clock, User } from 'lucide-react';
import MobileOptimizedSection from './MobileOptimizedSection';

const MeetingContextDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [typedText, setTypedText] = useState('');

  const steps = [
    {
      title: "Win every meeting.",
      content: "prep",
      message: "Prep me for my call with Raj"
    },
    {
      title: "Context delivered instantly",
      content: "context",
      message: ""
    }
  ];

  const contextData = {
    meeting: "Your 2 PM with Raj from Accel:",
    insights: [
      { icon: "💡", text: "Last discussed: User retention metrics", time: "3 weeks ago" },
      { icon: "📊", text: "He asked about monthly churn rates", time: "3 weeks ago" },
      { icon: "🎯", text: "Follow up: API partnership timeline", time: "2 weeks ago" }
    ]
  };

  useEffect(() => {
    if (currentStep === 0) {
      const message = steps[0].message;
      let i = 0;
      setTypedText('');
      
      const typeInterval = setInterval(() => {
        if (i < message.length) {
          setTypedText(message.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => setCurrentStep(1), 1000);
        }
      }, 50);

      return () => clearInterval(typeInterval);
    }
  }, [currentStep]);

  const handleCardTap = () => {
    if (currentStep === 0) {
      setCurrentStep(1);
    } else {
      setCurrentStep(0);
    }
  };

  return (
    <MobileOptimizedSection maxWidth="sm">
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
            <Clock className="text-blue-400" size={20} />
          </div>
          <h2 className="text-2xl font-bold text-white leading-tight">
            {steps[currentStep].title}
          </h2>
        </div>

        {/* Phone Demo */}
        <div 
          className="bg-gray-900 rounded-3xl p-4 mx-auto max-w-xs cursor-pointer transition-transform hover:scale-105"
          onClick={handleCardTap}
        >
          {/* Status Bar */}
          <div className="flex justify-between items-center text-white text-xs mb-4">
            <span>1:45</span>
            <div className="text-blue-400 text-xs">
              <Clock size={12} className="inline mr-1" />
              15 min until call
            </div>
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
          </div>

          {currentStep === 0 ? (
            // Message Input Step
            <div className="space-y-4">
              <div className="bg-blue-600/20 border border-blue-500/30 rounded-xl p-3">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">A</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Asmi</p>
                    <p className="text-blue-300 text-xs">Meeting prep assistant</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-500 rounded-2xl p-3">
                <p className="text-white text-sm">
                  {typedText}
                  {typedText.length < steps[0].message.length && <span className="animate-pulse">|</span>}
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-3">
                <p className="text-gray-300 text-sm">{contextData.meeting}</p>
              </div>
            </div>
          ) : (
            // Context Step
            <div className="space-y-3">
              <div className="bg-gray-800 rounded-xl p-3">
                <p className="text-white text-xs font-medium mb-2">{contextData.meeting}</p>
              </div>

              <div className="bg-blue-600/20 border border-blue-500/30 rounded-xl p-3 space-y-2">
                {contextData.insights.map((insight, index) => (
                  <div key={index} className="flex items-start space-x-2 p-2 bg-white/5 rounded-lg">
                    <span className="text-xs">{insight.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-xs font-medium leading-tight mb-1">
                        {insight.text}
                      </p>
                      <p className="text-blue-300 text-xs">{insight.time}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-green-600/20 border border-green-500/30 rounded-xl p-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <p className="text-green-300 text-xs font-medium">Smart Brief Ready</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center space-x-2">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentStep ? 'bg-blue-400 w-6' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>

        <p className="text-gray-500 text-xs text-center">
          Tap demo to interact
        </p>
      </div>
    </MobileOptimizedSection>
  );
};

export default MeetingContextDemo;
