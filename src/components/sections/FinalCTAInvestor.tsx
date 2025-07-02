
import { useState, useEffect } from 'react';

const FinalCTAInvestor = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const reveals = [
    "$5–6M seed → Series A in 18 mo",
    "Founders: $300M GMV & Meta AI systems", 
    "Limited seats. Claim yours."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentStep < reveals.length) {
        setCurrentStep(prev => prev + 1);
      } else {
        setCurrentStep(0);
      }
    }, 2500);

    return () => clearInterval(timer);
  }, [currentStep]);

  const handleCTAClick = () => {
    window.location.href = 'mailto:investors@asmi.ai?subject=Investment Interest - Asmi AI&body=Hi, I\'m interested in learning more about investing in Asmi AI. Please send me the investor deck and next steps.';
  };

  return (
    <div className="min-h-screen bg-[#1F1F23] flex flex-col items-center justify-center px-4 relative">
      <div className="text-center max-w-sm mx-auto">
        <h1 className="text-[28px] font-bold text-white mb-12">
          Back the memory OS of the future.
        </h1>

        {/* Sequential reveals */}
        <div className="space-y-6 mb-12 min-h-[200px] flex flex-col justify-center">
          {reveals.slice(0, currentStep).map((reveal, index) => (
            <div 
              key={index}
              className="bg-black/40 backdrop-blur-sm rounded-3xl border border-white/10 p-4 animate-fade-in"
            >
              <p className="text-white font-medium text-sm leading-relaxed">
                {reveal}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="fixed bottom-8 left-4 right-4">
          <button
            onClick={handleCTAClick}
            className="w-full bg-gradient-to-r from-[#37D67A] to-green-500 px-8 py-4 rounded-full text-lg font-bold text-black hover:from-green-500 hover:to-green-600 transition-all duration-300 animate-pulse hover:scale-105 shadow-lg shadow-[#37D67A]/20"
          >
            I want in.
          </button>
        </div>

        {/* Subtle glow effect */}
        <div className="absolute bottom-8 left-4 right-4 bg-gradient-to-r from-[#37D67A] to-green-500 rounded-full blur-xl opacity-20 h-16 -z-10" />
      </div>
    </div>
  );
};

export default FinalCTAInvestor;
