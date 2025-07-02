
import { useState, useEffect } from 'react';
import { Users, Lightbulb, BarChart, Target } from 'lucide-react';

const MeetingContextDemo = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const messages = [
    { type: 'user', text: 'Prep me for my call with Raj', delay: 1000 },
    { type: 'typing', delay: 500 },
    { type: 'asmi', text: 'Your 2 PM with Raj from Accel:', delay: 1000 },
    { 
      type: 'context', 
      items: [
        { icon: Lightbulb, text: 'Last discussed: User retention metrics', color: 'text-yellow-400' },
        { icon: BarChart, text: 'He asked about monthly churn rates', color: 'text-blue-400' },
        { icon: Target, text: 'Follow up: API partnership timeline', color: 'text-red-400' }
      ],
      delay: 800
    },
    { 
      type: 'smart-brief', 
      text: 'I pulled your latest retention dashboard - 92% monthly retention to share.',
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
          <Users className="text-blue-400 mx-auto mb-4" size={32} />
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
              <p className="text-gray-400 text-xs">15 min until your call</p>
            </div>
            <div className="ml-auto">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
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

            {/* Meeting info */}
            {currentMessage >= 3 && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-gray-800/80 backdrop-blur-sm px-4 py-3 rounded-2xl text-white border border-white/10 max-w-sm">
                  <span className="text-sm font-light">{messages[2].text}</span>
                </div>
              </div>
            )}

            {/* Context items */}
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

            {/* Smart brief */}
            {currentMessage >= 5 && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-green-900/30 border border-green-400/30 px-4 py-3 rounded-2xl max-w-sm">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-xs font-medium">Smart Brief</span>
                  </div>
                  <span className="text-green-200 text-sm font-light">{messages[4].text}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom text */}
        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm font-light">
            Context from 3 weeks ago automatically surfaced
          </p>
          <div className="flex justify-center space-x-1 mt-2">
            {Array.from({ length: 11 }, (_, i) => (
              <div 
                key={i} 
                className={`w-2 h-2 rounded-full ${i === 2 ? 'bg-green-400' : 'bg-gray-600'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingContextDemo;
