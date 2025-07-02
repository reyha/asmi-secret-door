
import { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';

const FinalCTAInvestor = () => {
  const [currentFadeIn, setCurrentFadeIn] = useState(0);

  const fadeInItems = [
    "$5–6M seed → Series A in 18 mo",
    "Founders: $300M GMV & Meta AI systems",
    "Limited seats. Claim yours."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFadeIn(prev => {
        if (prev >= fadeInItems.length - 1) return prev;
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1F1F23] via-gray-900 to-[#1F1F23] flex items-center justify-center px-4">
      <div className="max-w-sm mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-[28px] font-medium text-white leading-tight mb-8">
            Back the memory OS<br />of the future.
          </h1>
        </div>

        {/* Sequential fade-ins */}
        <div className="space-y-6 mb-12">
          {fadeInItems.map((item, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                currentFadeIn >= index 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-6 border border-[#37D67A]/20">
                <p className="text-white font-light text-lg">
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mb-8">
          <a
            href="mailto:rishi@asmi.ai?subject=Investment Interest - Asmi AI&body=Hi Rishi,%0A%0AI'm interested in learning more about investing in Asmi AI.%0A%0ABest regards"
            className="group inline-flex items-center space-x-3 bg-gradient-to-r from-[#37D67A] to-[#2DD865] px-8 py-4 rounded-full text-black font-medium hover:from-[#2DD865] hover:to-[#37D67A] transition-all duration-300 hover:scale-105 shadow-lg shadow-[#37D67A]/25 animate-pulse min-h-[44px]"
          >
            <Mail size={20} />
            <span className="text-lg">I want in.</span>
          </a>
        </div>

        {/* Final warning */}
        <div className="text-gray-400 text-sm animate-fade-in" style={{ animationDelay: '3s' }}>
          You won't get a second chance.
        </div>
      </div>
    </div>
  );
};

export default FinalCTAInvestor;
