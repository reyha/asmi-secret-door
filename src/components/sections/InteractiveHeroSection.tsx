
import { useEffect, useState } from 'react';

const InteractiveHeroSection = () => {
  const [currentPlatform, setCurrentPlatform] = useState(0);
  const platforms = ['WhatsApp', 'iMessage'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlatform(prev => (prev + 1) % platforms.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[40vh] flex items-center justify-center relative overflow-hidden">
      {/* Minimal background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '3s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        </div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-space font-bold mb-8 tracking-tight opacity-0 animate-fade-in leading-tight" style={{ animationDelay: '0.3s' }}>
          <span className="text-green-400">Get Things Done.</span>
        </h1>
        
        {/* Platform switcher with smooth animation */}
        <div className="text-xl md:text-2xl lg:text-3xl text-white mb-8 font-inter font-light opacity-0 animate-fade-in h-10 flex items-center justify-center" style={{ animationDelay: '0.6s' }}>
          <span className="mr-3">On </span>
          <div className="relative w-32 overflow-hidden">
            <div 
              className="flex transition-all duration-700 ease-in-out"
              style={{ transform: `translateY(-${currentPlatform * 100}%)` }}
            >
              {platforms.map((platform, index) => (
                <div key={index} className="w-full flex-shrink-0 h-10 flex items-center justify-center">
                  <span className="font-medium text-white">
                    {platform}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveHeroSection;
