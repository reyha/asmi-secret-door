
import { useEffect, useState } from 'react';

const InvestorHero = () => {
  const [currentPlatform, setCurrentPlatform] = useState(0);
  const [chatStep, setChatStep] = useState(0);
  const platforms = ['WhatsApp', 'iMessage'];

  const chatFlow = [
    { type: 'user', text: "What's my day?", delay: 1000 },
    { type: 'typing', delay: 800 },
    { type: 'asmi', text: "3 meetings, 2 tasks, Ria's bday.", delay: 1200 }
  ];

  useEffect(() => {
    // Platform switching
    const platformInterval = setInterval(() => {
      setCurrentPlatform(prev => (prev + 1) % platforms.length);
    }, 2000);

    // Chat flow
    const chatTimer = setTimeout(() => {
      if (chatStep < chatFlow.length) {
        setChatStep(prev => prev + 1);
      } else {
        setChatStep(0); // Loop
      }
    }, chatFlow[chatStep]?.delay || 2000);

    return () => {
      clearInterval(platformInterval);
      clearTimeout(chatTimer);
    };
  }, [chatStep]);

  return (
    <div className="min-h-screen bg-[#1F1F23] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#37D67A]/10 via-transparent to-transparent" />
      
      <div className="relative z-10 text-center max-w-sm mx-auto">
        {/* Main headline */}
        <h1 className="text-[28px] font-medium text-white mb-8 leading-tight">
          Get things done.
        </h1>
        
        {/* Platform switcher */}
        <div className="mb-12">
          <p className="text-[18px] text-gray-300 mb-2">On</p>
          <div className="h-8 overflow-hidden">
            <div 
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateY(-${currentPlatform * 32}px)` }}
            >
              {platforms.map((platform, index) => (
                <div key={index} className="h-8 flex items-center justify-center">
                  <span className={`text-[18px] font-medium ${
                    platform === 'WhatsApp' ? 'text-[#37D67A]' : 'text-blue-400'
                  }`}>
                    {platform}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chat mockup */}
        <div className="bg-black/40 backdrop-blur-sm rounded-3xl border border-white/10 p-4 max-w-xs mx-auto">
          {/* Chat header */}
          <div className="flex items-center space-x-3 mb-4 pb-3 border-b border-white/10">
            <div className="w-8 h-8 bg-gradient-to-r from-[#37D67A] to-green-500 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-xs">A</span>
            </div>
            <div>
              <p className="text-white font-medium text-sm">Asmi</p>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-[#37D67A] rounded-full animate-pulse" />
                <span className="text-gray-400 text-xs">Active now</span>
              </div>
            </div>
          </div>

          {/* Chat messages */}
          <div className="space-y-3 min-h-[120px]">
            {/* User message */}
            {chatStep >= 1 && (
              <div className="flex justify-end animate-fade-in">
                <div className="bg-[#37D67A] px-3 py-2 rounded-2xl rounded-br-md max-w-[200px]">
                  <p className="text-black text-sm font-medium">{chatFlow[0].text}</p>
                </div>
              </div>
            )}

            {/* Typing indicator */}
            {chatStep === 2 && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-gray-700 px-3 py-2 rounded-2xl rounded-bl-md">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  </div>
                </div>
              </div>
            )}

            {/* Asmi response */}
            {chatStep >= 3 && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-gray-700 px-3 py-2 rounded-2xl rounded-bl-md max-w-[200px]">
                  <p className="text-white text-sm">{chatFlow[2].text}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-8 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorHero;
