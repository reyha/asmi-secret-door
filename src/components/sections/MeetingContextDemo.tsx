
import { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

const MeetingContextDemo = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const messages = [
    { type: 'user', text: 'Who am I meeting at 3?', delay: 500 },
    { 
      type: 'asmi', 
      text: 'Sarah Chen from Accel Partners. Last discussed user growth metrics. She asked about retention - I pulled your latest dashboard numbers.',
      delay: 2000 
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentMessage < messages.length) {
        if (messages[currentMessage].type === 'asmi') {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            setCurrentMessage(prev => prev + 1);
          }, 1500);
        } else {
          setCurrentMessage(prev => prev + 1);
        }
      }
    }, messages[currentMessage]?.delay || 1000);

    return () => clearTimeout(timer);
  }, [currentMessage]);

  useEffect(() => {
    const resetTimer = setTimeout(() => {
      setCurrentMessage(0);
      setIsTyping(false);
    }, 100);

    return () => clearTimeout(resetTimer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4">
      <div className="max-w-sm mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Calendar className="text-blue-400 mx-auto mb-4" size={32} />
          <h2 className="text-2xl font-light text-white mb-2">Win every meeting.</h2>
        </div>

        {/* Phone mockup */}
        <div className="bg-black/60 backdrop-blur-sm rounded-3xl border border-green-400/20 overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="bg-green-800/30 px-4 py-3 flex items-center space-x-3 border-b border-white/10">
            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-xs">A</span>
            </div>
            <div>
              <h3 className="text-white font-medium text-sm">Asmi</h3>
              <p className="text-gray-400 text-xs">Meeting context ready</p>
            </div>
            <div className="ml-auto">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Messages */}
          <div className="p-4 space-y-4 bg-black min-h-[300px]">
            {/* User message */}
            {currentMessage >= 1 && (
              <div className="flex justify-end animate-fade-in">
                <div className="bg-green-600 px-4 py-3 rounded-2xl max-w-xs">
                  <span className="text-white text-sm font-light">{messages[0].text}</span>
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
            {currentMessage >= 2 && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-gray-800/80 backdrop-blur-sm px-4 py-3 rounded-2xl text-white border border-white/10 max-w-sm">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-black">A</span>
                    </div>
                    <span className="text-xs text-blue-400 font-light">Asmi</span>
                  </div>
                  <span className="text-sm font-light leading-relaxed">{messages[1].text}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingContextDemo;
