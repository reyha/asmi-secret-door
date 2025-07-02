
import { useState, useEffect } from 'react';

const MorningBriefSection = () => {
  const [chatStep, setChatStep] = useState(0);

  const chatFlow = [
    { type: 'user', text: "What's my day?", delay: 1000 },
    { type: 'typing', delay: 800 },
    { type: 'asmi', text: "You have 3 meetings today:\n\n• 9 AM: Board meeting prep\n• 2 PM: 1:1 with Sarah\n• 4 PM: Investor call\n\nAlso, it's Ria's birthday! 🎂", delay: 1500 }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (chatStep < chatFlow.length) {
        setChatStep(prev => prev + 1);
      } else {
        setChatStep(0); // Loop
      }
    }, chatFlow[chatStep]?.delay || 3000);

    return () => clearTimeout(timer);
  }, [chatStep]);

  return (
    <div className="min-h-screen bg-[#1F1F23] flex flex-col items-center justify-center px-4 relative">
      {/* LIVE badge */}
      <div className="absolute top-8 right-8">
        <div className="bg-[#37D67A]/20 border border-[#37D67A]/50 rounded-full px-3 py-1 animate-pulse">
          <span className="text-[#37D67A] text-xs font-medium">LIVE</span>
        </div>
      </div>

      <div className="text-center max-w-sm mx-auto">
        {/* Overlay text */}
        <h1 className="text-[28px] font-bold text-white mb-8">
          Start your day smart.
        </h1>

        {/* Phone mockup */}
        <div className="bg-black/40 backdrop-blur-sm rounded-3xl border border-white/10 p-4">
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
          <div className="space-y-3 min-h-[200px]">
            {/* User message */}
            {chatStep >= 1 && (
              <div className="flex justify-end animate-fade-in">
                <div className="bg-[#37D67A] px-3 py-2 rounded-2xl rounded-br-md">
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
                <div className="bg-gray-700 px-3 py-2 rounded-2xl rounded-bl-md max-w-[280px]">
                  <p className="text-white text-sm whitespace-pre-line leading-relaxed">{chatFlow[2].text}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tap to advance hint */}
        <p className="text-gray-400 text-xs mt-4">Tap to advance chat</p>
      </div>
    </div>
  );
};

export default MorningBriefSection;
