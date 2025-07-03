
import { useState, useEffect } from 'react';
import { Search, User, Building, GraduationCap, Briefcase } from 'lucide-react';
import MobileOptimizedSection from './MobileOptimizedSection';

const PersonBackgroundDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const steps = [
    {
      title: "Know who you're meeting.",
      content: "search",
      icon: <User className="text-purple-400" size={20} />
    },
    {
      title: "Instant person lookup",
      content: "profile",
      icon: <User className="text-purple-400" size={20} />
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep(1);
        setIsAnimating(false);
      }, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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
          <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
            {steps[currentStep].icon}
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
          <div className="flex justify-between items-center text-white text-sm mb-4">
            <span>3:40</span>
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
          </div>

          {currentStep === 0 ? (
            // Search Step
            <div className="space-y-4">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-4">Quick lookup</h3>
              </div>
              
              <div className="bg-gray-800 rounded-xl p-3 flex items-center space-x-3">
                <Search size={16} className="text-gray-400" />
                <span className="text-gray-300 text-sm">Who's Karan again?</span>
              </div>

              <div className="bg-purple-600/20 border border-purple-500/30 rounded-xl p-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">A</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Asmi</p>
                    <p className="text-purple-300 text-xs">Person lookup</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-500 rounded-2xl p-3">
                <p className="text-white text-sm text-center">Who's Karan again?</p>
              </div>
            </div>
          ) : (
            // Profile Step
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-xl p-3">
                <p className="text-white text-sm">Karan Mehta - Partner at Lightspeed Ventures</p>
              </div>

              <div className="bg-purple-600/20 border border-purple-500/30 rounded-xl p-4">
                <div className="flex items-start space-x-3 mb-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">K</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-semibold text-sm">Karan Mehta</h4>
                    <p className="text-purple-300 text-xs">Partner @ Lightspeed</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <Building size={12} className="text-blue-400 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-300 text-xs">Ex-Facebook, Stanford MBA</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Briefcase size={12} className="text-green-400 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-300 text-xs">AI/ML, Enterprise SaaS</p>
                  </div>
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
                index === currentStep ? 'bg-purple-400 w-6' : 'bg-gray-600'
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

export default PersonBackgroundDemo;
