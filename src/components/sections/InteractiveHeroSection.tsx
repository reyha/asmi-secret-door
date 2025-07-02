
import { useEffect, useState } from 'react';

const InteractiveHeroSection = () => {
  const [currentPlatform, setCurrentPlatform] = useState(0);
  const platforms = ['WhatsApp', 'iMessage'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlatform(prev => (prev + 1) % platforms.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '1s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '1.2s', animationDelay: '0.3s' }}></div>
        </div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Badge */}
        <div className="mb-12 opacity-0 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-400/20 to-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-green-300 font-light">Your AI Chief of Staff</span>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-12 tracking-tight opacity-0 animate-fade-in text-green-400" style={{ animationDelay: '0.5s' }}>
          Get Things Done.
        </h1>
        
        {/* Platform switcher */}
        <div className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-16 font-light opacity-0 animate-fade-in h-12 flex items-center justify-center" style={{ animationDelay: '1s' }}>
          <span>On </span>
          <div className="mx-2 relative w-40 overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateY(-${currentPlatform * 100}%)` }}
            >
              {platforms.map((platform, index) => (
                <div key={index} className="w-full flex-shrink-0 h-12 flex items-center justify-center">
                  <span className={`font-medium ${
                    platform === 'WhatsApp' ? 'text-green-400' : 'text-blue-400'
                  }`}>
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
