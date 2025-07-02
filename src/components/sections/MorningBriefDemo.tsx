
import { useState, useEffect } from 'react';
import { MessageCircle, Calendar, User, Gift, Play, Pause } from 'lucide-react';

const MorningBriefDemo = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const messages = [
    { type: 'user', text: 'Good morning Asmi', delay: 1000 },
    { type: 'typing', delay: 800 },
    { type: 'asmi', text: 'Good morning! Here\'s your day:', delay: 1200 },
    { type: 'typing', delay: 600 },
    { 
      type: 'schedule', 
      items: [
        { icon: Calendar, text: '9 AM: Board meeting prep', color: 'text-blue-400' },
        { icon: User, text: '2 PM: 1:1 with Sarah', color: 'text-green-400' },
        { icon: Calendar, text: '4 PM: Investor call', color: 'text-purple-400' }
      ],
      delay: 1000
    },
    { type: 'typing', delay: 800 },
    { 
      type: 'birthday', 
      text: 'Also, it\'s Ria\'s birthday today! 🎂',
      delay: 1500
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const startTimer = setTimeout(() => {
      setHasStarted(true);
    }, 500);
    return () => clearTimeout(startTimer);
  }, [isPlaying]);

  useEffect(() => {
    if (!hasStarted || !isPlaying) return;

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
      } else {
        // Reset after completion
        setTimeout(() => {
          setCurrentMessage(0);
          setHasStarted(false);
          setIsTyping(false);
        }, 2000);
      }
    }, messages[currentMessage]?.delay || 1000);

    return () => clearTimeout(timer);
  }, [currentMessage, hasStarted, isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      setHasStarted(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4">
      <div className="max-w-sm mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-yellow-400 mx-auto mb-4 text-4xl animate-pulse">☀️</div>
          <h2 className="text-2xl font-light text-white mb-2">Start your day smart.</h2>
          
          {/* Play/Pause Control */}
          <button
            onClick={handlePlayPause}
            className="mt-4 flex items-center space-x-2 mx-auto px-4 py-2 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            <span className="text-sm font-light">{isPlaying ? 'Pause' : 'Play'} Demo</span>
          </button>
        </div>

        {/* Phone mockup */}
        <div className="bg-black/80 backdrop-blur-sm rounded-3xl border border-green-400/30 overflow-hidden shadow-2xl relative">
          {/* Status bar */}
          <div className="bg-black px-4 py-2 flex justify-between items-center text-xs text-white/70">
            <span>9:41</span>
            <div className="flex space-x-1">
              <div className="w-4 h-2 border border-white/50 rounded-sm">
                <div className="w-3/4 h-full bg-green-400 rounded-sm"></div>
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="bg-gradient-to-r from-green-800/40 to-green-900/40 px-4 py-4 flex items-center space-x-3 border-b border-white/10 backdrop-blur-sm">
            <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-black font-bold text-sm">A</span>
            </div>
            <div className="flex-1">
              <h3 className="text-white font-medium text-sm">Asmi</h3>
              <p className="text-gray-400 text-xs flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Your AI Chief of Staff</span>
              </p>
            </div>
            {isTyping && (
              <div className="text-gray-400 text-xs animate-pulse">typing...</div>
            )}
          </div>

          {/* Messages */}
          <div className="p-4 space-y-4 bg-gradient-to-b from-gray-900 to-black min-h-[450px] relative">
            {/* User message */}
            {currentMessage >= 1 && (
              <div className="flex justify-end animate-slide-in-right">
                <div className="bg-gradient-to-r from-green-500 to-green-600 px-4 py-3 rounded-2xl rounded-tr-sm max-w-xs shadow-lg">
                  <span className="text-white text-sm font-light">{messages[0].text}</span>
                </div>
              </div>
            )}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-gray-800/90 backdrop-blur-sm px-4 py-3 rounded-2xl rounded-tl-sm border border-white/10">
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
              <div className="flex justify-start animate-scale-in">
                <div className="bg-gray-800/90 backdrop-blur-sm px-4 py-3 rounded-2xl rounded-tl-sm text-white border border-white/10 max-w-sm shadow-lg">
                  <span className="text-sm font-light">{messages[2].text}</span>
                </div>
              </div>
            )}

            {/* Schedule items */}
            {currentMessage >= 5 && (
              <div className="flex justify-start animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="bg-blue-900/40 backdrop-blur-sm px-4 py-4 rounded-2xl text-white border border-blue-400/30 max-w-sm shadow-lg">
                  <div className="space-y-3">
                    {messages[4].items.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <div key={index} className="flex items-center space-x-3 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                          <div className="p-1.5 rounded-lg bg-black/30">
                            <IconComponent size={14} className={item.color} />
                          </div>
                          <span className="text-sm font-light text-white">{item.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Birthday message */}
            {currentMessage >= 7 && (
              <div className="flex justify-start animate-scale-in">
                <div className="bg-gradient-to-r from-red-900/40 to-pink-900/40 border border-red-400/40 px-4 py-3 rounded-2xl max-w-sm shadow-lg backdrop-blur-sm">
                  <div className="flex items-center space-x-2 mb-2">
                    <Gift size={14} className="text-red-400" />
                    <span className="text-red-400 text-xs font-medium">Birthday Reminder</span>
                  </div>
                  <span className="text-red-200 text-sm font-light">{messages[6].text}</span>
                </div>
              </div>
            )}

            {/* Floating action indicators */}
            {currentMessage >= 3 && (
              <div className="absolute bottom-4 right-4 space-y-2">
                <div className="bg-green-500/20 border border-green-400/40 rounded-full p-2 animate-pulse">
                  <MessageCircle size={12} className="text-green-400" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom text */}
        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm font-light animate-fade-in">
            Asmi remembered Ria's birthday from last month's conversation
          </p>
          <div className="flex justify-center space-x-1 mt-3">
            {Array.from({ length: 5 }, (_, i) => (
              <div 
                key={i} 
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i <= Math.floor((currentMessage / messages.length) * 4) ? 'bg-green-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MorningBriefDemo;
