
import { useState, useEffect } from 'react';
import { Brain, Mic, MessageCircle } from 'lucide-react';

const TimelineHowItWorks = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const steps = [
    {
      icon: <Mic className="text-green-400" size={24} />,
      title: 'Voice note → Stored',
      description: '"Had a great call with Raj about the partnership. He\'s interested in the API integration."',
      color: 'border-green-400'
    },
    {
      icon: <Brain className="text-blue-400" size={24} />,
      title: 'Context linked',
      description: 'Asmi connects: Raj → Partnership → API → Your roadmap → Previous technical discussions + Email thread about API specs + Calendar meetings with Raj',
      color: 'border-blue-400'
    },
    {
      icon: <MessageCircle className="text-purple-400" size={24} />,
      title: 'Deep insights generated',
      description: 'Raj (CTO at TechCorp) → Met 3x this quarter → Always asks about scalability → Prefers technical demos → Decision maker for $50K+ deals → Best contact time: 2-4 PM → Responds well to data-driven pitches',
      color: 'border-purple-400'
    }
  ];

  const highlightText = "Compounding Always Wins!";

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % steps.length);
    }, 4000);

    return () => clearInterval(stepInterval);
  }, []);

  useEffect(() => {
    if (currentStep === 2) {
      setIsTyping(true);
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i < highlightText.length) {
          setTypedText(highlightText.substring(0, i + 1));
          i++;
        } else {
          setIsTyping(false);
          clearInterval(typeInterval);
        }
      }, 60);
      return () => clearInterval(typeInterval);
    }
  }, [currentStep]);

  return (
    <div className="min-h-screen bg-black py-20 flex items-center">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center min-h-[60vh]">
          {/* Timeline */}
          <div className="flex flex-col items-center mr-12 relative">
            <div className="w-1 h-96 bg-gray-800 relative">
              <div 
                className="w-1 bg-gradient-to-b from-green-400 via-blue-400 to-purple-400 absolute top-0 transition-all duration-1000"
                style={{ height: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>
            
            {steps.map((step, index) => (
              <div
                key={index}
                className={`absolute w-6 h-6 rounded-full border-2 bg-black transition-all duration-500 ${
                  index <= currentStep ? step.color : 'border-gray-600'
                }`}
                style={{ top: `${(index / (steps.length - 1)) * 384 - 12}px` }}
              >
                <div className="w-full h-full rounded-full flex items-center justify-center">
                  {index <= currentStep && (
                    <div className="w-2 h-2 rounded-full bg-current animate-pulse" />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  currentStep >= index ? 'opacity-100 translate-x-0' : 'opacity-30 translate-x-8'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 dark-card rounded-xl flex-shrink-0">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-space font-semibold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 font-inter leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Highlight Card */}
            {currentStep >= 2 && (
              <div className="mt-12 p-8 dark-card rounded-3xl border-2 border-green-400/30 animate-fade-in">
                <h2 className="text-3xl font-space font-bold text-green-400 mb-4">
                  {typedText}
                  {isTyping && <span className="animate-pulse">|</span>}
                </h2>
                <p className="text-lg text-gray-300 font-inter">
                  Asmi compounds each day to become super-intelligent, high agency version of yourself.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineHowItWorks;
