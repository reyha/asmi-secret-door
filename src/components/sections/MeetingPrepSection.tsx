
import { useState, useEffect } from 'react';
import { Users } from 'lucide-react';

const MeetingPrepSection = () => {
  const [chatStep, setChatStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const chatFlow = [
    { type: 'user', text: "Prep Raj call in 10", delay: 1000 },
    { type: 'typing', delay: 500 },
    { type: 'asmi', text: "Last time you discussed user retention metrics.", delay: 1000 },
    { type: 'asmi', text: "He asked about monthly churn rates. I pulled your latest dashboard - 92% retention to share.", delay: 1200 }
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
        {/* Header */}
        <div className="text-center mb-8">
          <Users className="text-blue-400 mx-auto mb-4" size={32} />
          <h2 className="text-[18px] text-white font-medium">Win every meeting.</h2>
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
              <p className="text-gray-400 text-xs">Meeting prep</p>
            </div>
            <div className="ml-auto">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
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
                <div className="bg-[#37D67A]/20 border border-[#37D67A]/30 px-4 py-3 rounded-2xl max-w-sm">
                  <span className="text-[#37D67A] text-sm font-light">{chatFlow[3].text}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingPrepSection;
