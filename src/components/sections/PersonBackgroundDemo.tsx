
import { useState, useEffect } from 'react';
import { Search, User, Building, Award, TrendingUp } from 'lucide-react';
import MobileOptimizedSection from './MobileOptimizedSection';

const PersonBackgroundDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Know who you're meeting.",
      content: "search",
      icon: <User className="text-purple-400" size={20} />
    },
    {
      title: "Know who you're meeting.",
      content: "profile",
      icon: <User className="text-purple-400" size={20} />
    }
  ];

  const handleCardTap = () => {
    setCurrentStep(currentStep === 0 ? 1 : 0);
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
                <span className="text-gray-300 text-sm">Who's Sarah Chen again?</span>
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
                <p className="text-white text-sm text-center">Who's Sarah Chen again?</p>
              </div>
            </div>
          ) : (
            // Profile Step - Rich founder profile
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-xl p-3">
                <p className="text-white text-sm">Sarah Chen - CEO at CloudFlow Technologies</p>
              </div>

              <div className="bg-purple-600/20 border border-purple-500/30 rounded-xl p-4">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">S</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-semibold text-sm">Sarah Chen</h4>
                    <p className="text-purple-300 text-xs">CEO @ CloudFlow Technologies</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Building size={12} className="text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300 text-xs font-medium">Background</p>
                      <p className="text-gray-400 text-xs">Ex-Google PM, Stanford CS, 2nd-time founder</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <TrendingUp size={12} className="text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300 text-xs font-medium">Company Traction</p>
                      <p className="text-gray-400 text-xs">$2M ARR, 40% MoM growth, 50+ enterprise clients</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Award size={12} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300 text-xs font-medium">Secret Sauce</p>
                      <p className="text-gray-400 text-xs">Built proprietary ML model that reduces cloud costs by 60%</p>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-2 mt-3">
                    <p className="text-yellow-300 text-xs font-medium">💡 Inside Intel</p>
                    <p className="text-gray-300 text-xs">Raised Series A at 3x revenue multiple. Rumored to be courting Google Cloud for strategic partnership.</p>
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
