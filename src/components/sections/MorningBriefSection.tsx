
import { useState, useEffect } from 'react';
import { Sunrise } from 'lucide-react';

const MorningBriefSection = () => {
  const [chatStep, setChatStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const chatFlow = [
    { type: 'user', text: "What's my day?", delay: 1000 },
    { type: 'typing', delay: 500 },
    { type: 'asmi', text: "You have 3 meetings today:", delay: 800 },
    { type: 'asmi', text: "• 9 AM: Board prep\n• 2 PM: 1:1 with Sarah\n• 4 PM: Investor call", delay: 1000 },
    { type: 'asmi', text: "Also, it's Ria's birthday! 🎂", delay: 800 }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (chatStep < chatFlow.length) {
        const currentMsg = chatFlow[chatStep];
        
        if (currentMsg.type === 'typing') {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            setChatStep(prev => prev + 1);
          }, 1000);
        } else {
          setChatStep(prev => prev + 1);
        }
      }
    }, chatFlow[chatStep]?.delay || 1000);

    return () => clearTimeout(timer);
  }, [chatStep]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1F1F23] via-gray-900 to-[#1F1F23] flex items-center justify-center px-4">
      <div className="max-w-sm mx-auto">
        {/* Header with LIVE badge */}
        <div className="text-center mb-8 relative">
          <div className="absolute -top-2 right-1/2 translate-x-6">
            <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium animate-pulse">
              LIVE
            </div>
          </div>
          <Sunrise className="text-[#37D67A] mx-auto mb-4 animate-pulse" size={32} />
          <h2 className="text-[18px] text-white font-medium">Start your day smart.</h2>
        </div>

        {/* Phone mockup */}
        <div className="bg-black/60 backdrop-blur-sm rounded-3xl border border-[#37D67A]/20 overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="bg-[#37D67A]/20 px-4 py-3 flex items-center space-x-3 border-b border-white/10">
            <div className="w-8 h-8 bg-gradient-to-r from-[#37D67A] to-[#2DD865] rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-xs">A</span>
            </div>
            <div>
              <h3 className="text-white font-medium text-sm">Asmi</h3>
              <p className="text-gray-400 text-xs">Morning briefing</p>
            </div>
            <div className="ml-auto">
              <div className="w-2 h-2 bg-[#37D67A] rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Messages */}
          <div className="p-4 space-y-4 bg-black min-h-[400px]">
            {/* User message */}
            {chatStep >= 1 && (
              <div className="flex justify-end animate-fade-in">
                <div className="bg-[#37D67A] px-4 py-3 rounded-2xl max-w-xs">
                  <span className="text-black text-sm font-medium">{chatFlow[0].text}</span>
                </div>
              </div>
            )}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-gray-800/80 px-4 py-3 rounded-2xl">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}

            {/* Asmi responses */}
            {chatStep >= 3 && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-gray-800/80 backdrop-blur-sm px-4 py-3 rounded-2xl text-white border border-white/10 max-w-sm">
                  <span className="text-sm font-light">{chatFlow[2].text}</span>
                </div>
              </div>
            )}

            {chatStep >= 4 && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-gray-800/80 backdrop-blur-sm px-4 py-3 rounded-2xl text-white border border-white/10 max-w-sm">
                  <pre className="text-sm font-light whitespace-pre-wrap">{chatFlow[3].text}</pre>
                </div>
              </div>
            )}

            {chatStep >= 5 && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-pink-900/30 border border-pink-400/30 px-4 py-3 rounded-2xl max-w-sm">
                  <span className="text-pink-200 text-sm font-light">{chatFlow[4].text}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MorningBriefSection;
