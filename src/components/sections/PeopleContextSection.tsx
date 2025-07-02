
import { useState, useEffect } from 'react';
import { User } from 'lucide-react';

const PeopleContextSection = () => {
  const [chatStep, setChatStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const chatFlow = [
    { type: 'user', text: "Who's this person?", delay: 1000 },
    { type: 'typing', delay: 500 },
    { type: 'asmi', text: "Karan: VC @ Zoom.", delay: 800 },
    { type: 'asmi', text: "Ex-Facebook, Stanford MBA. Focuses on AI/ML and Enterprise SaaS.", delay: 1000 }
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
          <User className="text-purple-400 mx-auto mb-4" size={32} />
          <h2 className="text-[18px] text-white font-medium">Know who you meet.</h2>
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
              <p className="text-gray-400 text-xs">Quick lookup</p>
            </div>
            <div className="ml-auto">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
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
                <div className="bg-purple-900/30 border border-purple-400/30 px-4 py-3 rounded-2xl max-w-sm">
                  <span className="text-purple-200 text-sm font-light">{chatFlow[3].text}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleContextSection;
