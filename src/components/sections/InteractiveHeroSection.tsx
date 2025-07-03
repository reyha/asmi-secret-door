
import { useState, useEffect } from 'react';
import { MessageCircle, Calendar, User } from 'lucide-react';

const InteractiveHeroSection = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const messages = [
    { type: 'user', text: 'Good morning Asmi', delay: 300 },
    { type: 'typing', delay: 400 },
    { type: 'asmi', text: 'Good morning! Here\'s your day:', delay: 400 },
    { type: 'typing', delay: 400 },
    { 
      type: 'schedule', 
      items: [
        { icon: Calendar, text: '9 AM: Board meeting prep', color: 'text-blue-400' },
        { icon: User, text: '2 PM: 1:1 with Sarah', color: 'text-green-400' },
        { icon: Calendar, text: '4 PM: Investor call', color: 'text-purple-400' }
      ],
      delay: 300
    },
    { type: 'typing', delay: 400 },
    { 
      type: 'birthday', 
      text: 'Also, it\'s Ria\'s birthday today! 🎂',
      delay: 400
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('hero-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

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
          }, 600);
        } else {
          setCurrentMessage(prev => prev + 1);
        }
      }
    }, messages[currentMessage]?.delay || 300);

    return () => clearTimeout(timer);
  }, [currentMessage, hasStarted]);

  return (
    <div id="hero-section" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4 py-8">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-space font-bold text-white mb-4 leading-tight">
            Welcome, <span className="text-green-400">Alex</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-inter">
            Your AI companion for a more productive day
          </p>
        </div>

        {/* Phone mockup */}
        <div className="max-w-sm mx-auto">
          <div className="bg-black/80 backdrop-blur-sm rounded-2xl border border-green-400/30 overflow-hidden shadow-2xl">
            {/* Phone header */}
            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-3 border-b border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white text-sm font-inter">Asmi</span>
                </div>
                {isTyping && (
                  <div className="text-xs text-gray-400 font-inter">typing...</div>
                )}
              </div>
            </div>

            {/* Messages */}
            <div className="p-4 space-y-3 bg-gradient-to-b from-gray-900 to-black h-96 overflow-hidden">
              {/* User message */}
              {currentMessage >= 1 && (
                <div className="flex justify-end animate-fade-in">
                  <div className="bg-green-500 text-white px-4 py-2 rounded-xl rounded-br-sm max-w-xs">
                    <p className="text-sm font-inter">{messages[0].text}</p>
                  </div>
                </div>
              )}

              {/* Typing indicator */}
              {isTyping && currentMessage >= 1 && currentMessage < 3 && (
                <div className="flex justify-start animate-fade-in">
                  <div className="bg-gray-800/90 px-4 py-3 rounded-xl rounded-tl-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              )}

              {/* Asmi response */}
              {currentMessage >= 3 && (
                <div className="flex justify-start animate-fade-in">
                  <div className="bg-gray-800/90 text-white px-4 py-2 rounded-xl rounded-tl-sm max-w-xs">
                    <p className="text-sm font-inter">{messages[2].text}</p>
                  </div>
                </div>
              )}

              {/* Schedule card */}
              {currentMessage >= 5 && (
                <div className="flex justify-start animate-fade-in">
                  <div className="bg-gradient-to-r from-gray-800/90 to-gray-700/90 border border-white/20 rounded-xl p-3 max-w-xs">
                    <div className="space-y-2">
                      {messages[4].items.map((item, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <item.icon size={14} className={item.color} />
                          <span className="text-xs text-white font-inter">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Birthday message */}
              {currentMessage >= 7 && (
                <div className="flex justify-start animate-fade-in">
                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-xl p-3 max-w-xs">
                    <p className="text-sm text-white font-inter">{messages[6].text}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <span className="text-gray-400 text-sm font-inter">
            Asmi remembered Ria's birthday from last month's conversation
          </span>
        </div>
      </div>
    </div>
  );
};

export default InteractiveHeroSection;
