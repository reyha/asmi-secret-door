
import { useState, useEffect } from 'react';
import { MessageCircle, Calendar, User, Gift } from 'lucide-react';

const MorningBriefDemo = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const messages = [
    { type: 'user', text: 'Good morning Asmi', delay: 1000 },
    { type: 'typing', delay: 500 },
    { type: 'asmi', text: 'Good morning! Here\'s your day:', delay: 1000 },
    { 
      type: 'schedule', 
      items: [
        { icon: Calendar, text: '9 AM: Board meeting prep', color: 'text-blue-400' },
        { icon: User, text: '2 PM: 1:1 with Sarah', color: 'text-green-400' },
        { icon: Calendar, text: '4 PM: Investor call', color: 'text-purple-400' }
      ],
      delay: 800
    },
    { 
      type: 'birthday', 
      text: 'Also, it\'s Ria\'s birthday today! 🎂',
      delay: 1200
    }
  ];

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setHasStarted(true);
    }, 500);
    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const timer = setTimeout(() => {
      if (currentMessage < messages.length) {
        const currentMsg = messages[currentMessage];
        
        if (currentMsg.type === 'typing') {
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
  }, [currentMessage, hasStarted]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4">
      <div className="max-w-sm mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-yellow-400 mx-auto mb-4 text-4xl">☀️</div>
          <h2 className="text-2xl font-light text-white mb-2">Start your day smart.</h2>
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
              <p className="text-gray-400 text-xs">Your AI Chief of Staff</p>
            </div>
            <div className="ml-auto">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Messages */}
          <div className="p-4 space-y-4 bg-black min-h-[400px]">
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

            {/* Asmi greeting */}
            {currentMessage >= 3 && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-gray-800/80 backdrop-blur-sm px-4 py-3 rounded-2xl text-white border border-white/10 max-w-sm">
                  <span className="text-sm font-light">{messages[2].text}</span>
                </div>
              </div>
            )}

            {/* Schedule items */}
            {currentMessage >= 4 && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-gray-800/80 backdrop-blur-sm px-4 py-3 rounded-2xl text-white border border-white/10 max-w-sm">
                  <div className="space-y-3">
                    {messages[3].items.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <div key={index} className="flex items-center space-x-3">
                          <IconComponent size={16} className={item.color} />
                          <span className="text-sm font-light text-white">{item.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Birthday message */}
            {currentMessage >= 5 && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-red-900/30 border border-red-400/30 px-4 py-3 rounded-2xl max-w-sm">
                  <div className="flex items-center space-x-2 mb-1">
                    <Gift size={12} className="text-red-400" />
                    <span className="text-red-400 text-xs font-medium">Birthday Reminder</span>
                  </div>
                  <span className="text-red-200 text-sm font-light">{messages[4].text}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom text */}
        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm font-light">
            Asmi remembered Ria's birthday from last month's conversation
          </p>
        </div>
      </div>
    </div>
  );
};

export default MorningBriefDemo;
