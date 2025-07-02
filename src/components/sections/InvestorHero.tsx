
import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const InvestorHero = () => {
  const [currentPlatform, setCurrentPlatform] = useState(0);
  const [chatStep, setChatStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  
  const platforms = ['WhatsApp', 'iMessage'];
  const chatFlow = [
    { type: 'user', text: "What's my day?", delay: 1000 },
    { type: 'typing', delay: 800 },
    { type: 'asmi', text: "3 meetings, 2 tasks, Ria's bday.", delay: 1500 }
  ];

  useEffect(() => {
    const platformInterval = setInterval(() => {
      setCurrentPlatform(prev => (prev + 1) % platforms.length);
    }, 2500);

    return () => clearInterval(platformInterval);
  }, []);

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
      } else {
        // Reset chat flow
        setTimeout(() => {
          setChatStep(0);
          setIsTyping(false);
        }, 2000);
      }
    }, chatFlow[chatStep]?.delay || 1000);

    return () => clearTimeout(timer);
  }, [chatStep]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1F1F23] via-gray-900 to-[#1F1F23] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#37D67A]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#37D67A]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.8s' }}></div>
      </div>

      <div className="relative z-10 text-center max-w-sm mx-auto">
        {/* Header */}
        <h1 className="text-[28px] font-medium mb-8 leading-tight">
          The AI that gets things done—<br />before you even ask.
        </h1>

        {/* Platform switcher */}
        <div className="mb-12">
          <div className="text-2xl text-gray-300 mb-4">On</div>
          <div className="relative h-12 overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateY(-${currentPlatform * 100}%)` }}
            >
              {platforms.map((platform, index) => (
                <div key={index} className="w-full flex-shrink-0 h-12 flex items-center justify-center">
                  <span className={`text-3xl font-medium ${
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
        <div className="bg-black/60 backdrop-blur-sm rounded-3xl border border-[#37D67A]/20 overflow-hidden shadow-2xl mb-8">
          {/* Chat header */}
          <div className="bg-[#37D67A]/20 px-4 py-3 flex items-center space-x-3 border-b border-white/10">
            <div className="w-8 h-8 bg-gradient-to-r from-[#37D67A] to-[#2DD865] rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-xs">A</span>
            </div>
            <div>
              <h3 className="text-white font-medium text-sm">Asmi</h3>
              <p className="text-gray-400 text-xs">Your AI Chief of Staff</p>
            </div>
            <div className="ml-auto">
              <div className="w-2 h-2 bg-[#37D67A] rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Chat messages */}
          <div className="p-4 space-y-4 bg-black min-h-[200px] flex flex-col justify-end">
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

            {/* Asmi response */}
            {chatStep >= 3 && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-gray-800/80 backdrop-blur-sm px-4 py-3 rounded-2xl text-white border border-white/10 max-w-xs">
                  <span className="text-sm font-light">{chatFlow[2].text}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Swipe hint */}
        <div className="text-gray-400 text-sm animate-pulse">
          Swipe up to experience Asmi
        </div>
      </div>
    </div>
  );
};

export default InvestorHero;
