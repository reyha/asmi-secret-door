
import { useState, useEffect } from 'react';
import { Users, Lightbulb, BarChart, Target, Clock } from 'lucide-react';

const MeetingContextDemo = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const messages = [
    { type: 'user', text: 'Prep me for my call with Raj', delay: 600 },
    { type: 'typing', delay: 800 },
    { type: 'asmi', text: 'Your 2 PM with Raj from Accel:', delay: 700 },
    { type: 'typing', delay: 800 },
    { 
      type: 'context', 
      items: [
        { icon: Lightbulb, text: 'Last discussed: User retention metrics', color: 'text-yellow-400', date: '3 weeks ago' },
        { icon: BarChart, text: 'He asked about monthly churn rates', color: 'text-blue-400', date: '3 weeks ago' },
        { icon: Target, text: 'Follow up: API partnership timeline', color: 'text-red-400', date: '2 weeks ago' }
      ],
      delay: 600
    },
    { type: 'typing', delay: 800 },
    { 
      type: 'smart-brief', 
      text: 'I pulled your latest retention dashboard - 92% monthly retention to share.',
      delay: 700
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
      { threshold: 0.5 }
    );

    const currentElement = document.getElementById('meeting-context-demo');
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted || isComplete) return;

    const timer = setTimeout(() => {
      if (currentMessage < messages.length) {
        const currentMsg = messages[currentMessage];
        
        if (currentMsg.type === 'typing') {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            setCurrentMessage(prev => prev + 1);
          }, 1000);
        } else {
          setCurrentMessage(prev => prev + 1);
        }
      } else {
        setIsComplete(true);
      }
    }, messages[currentMessage]?.delay || 500);

    return () => clearTimeout(timer);
  }, [currentMessage, hasStarted, isComplete]);

  return (
    <div id="meeting-context-demo" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4">
      <div className="max-w-sm mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Users className="text-blue-400 mx-auto mb-4" size={32} />
          <h2 className="text-2xl font-light text-white mb-2">Win every meeting.</h2>
        </div>

        {/* Phone mockup */}
        <div className="bg-black/80 backdrop-blur-sm rounded-3xl border border-blue-400/20 overflow-hidden shadow-2xl relative">
          {/* Status bar */}
          <div className="bg-black px-4 py-2 flex justify-between items-center text-xs text-white/70">
            <span>1:45</span>
            <div className="flex items-center space-x-2">
              <Clock size={10} className="text-blue-400" />
              <span className="text-blue-400 text-xs">15 min until call</span>
            </div>
          </div>

          {/* Header */}
          <div className="bg-gradient-to-r from-blue-800/40 to-blue-900/40 px-4 py-4 flex items-center space-x-3 border-b border-white/10 backdrop-blur-sm">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-black font-bold text-sm">A</span>
            </div>
            <div className="flex-1">
              <h3 className="text-white font-medium text-sm">Asmi</h3>
              <div className="text-gray-400 text-xs flex items-center space-x-1">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Meeting prep assistant</span>
              </div>
            </div>
            {isTyping && (
              <div className="text-gray-400 text-xs animate-pulse">analyzing...</div>
            )}
          </div>

          {/* Messages */}
          <div className="p-4 space-y-4 bg-gradient-to-b from-gray-900 to-black min-h-[450px] relative">
            {/* User message */}
            {currentMessage >= 1 && (
              <div className="flex justify-end animate-slide-in-right">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-3 rounded-2xl rounded-tr-sm max-w-xs shadow-lg">
                  <span className="text-white text-sm font-light">{messages[0].text}</span>
                </div>
              </div>
            )}

            {/* Typing indicator */}
            {isTyping && currentMessage >= 1 && currentMessage < 3 && (
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

            {/* Meeting info */}
            {currentMessage >= 3 && (
              <div className="flex justify-start animate-scale-in">
                <div className="bg-gray-800/90 backdrop-blur-sm px-4 py-3 rounded-2xl rounded-tl-sm text-white border border-white/10 max-w-sm shadow-lg">
                  <span className="text-sm font-light">{messages[2].text}</span>
                </div>
              </div>
            )}

            {/* Typing indicator for context */}
            {isTyping && currentMessage >= 3 && currentMessage < 5 && (
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

            {/* Context items */}
            {currentMessage >= 5 && (
              <div className="flex justify-start animate-scale-in">
                <div className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 backdrop-blur-sm px-4 py-4 rounded-2xl text-white border border-purple-400/30 max-w-sm shadow-lg">
                  <div className="space-y-3">
                    {messages[4].items.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <div key={index}>
                          <div className="flex items-start space-x-3 p-2 rounded-lg bg-black/20">
                            <div className="p-1.5 rounded-lg bg-black/30 flex-shrink-0">
                              <IconComponent size={14} className={item.color} />
                            </div>
                            <div className="flex-1">
                              <span className="text-sm font-light text-white block">{item.text}</span>
                              <span className="text-xs text-gray-400 mt-1">{item.date}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Typing indicator for smart brief */}
            {isTyping && currentMessage >= 5 && currentMessage < 7 && (
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

            {/* Smart brief */}
            {currentMessage >= 7 && (
              <div className="flex justify-start animate-scale-in">
                <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 border border-green-400/40 px-4 py-3 rounded-2xl max-w-sm shadow-lg backdrop-blur-sm">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-green-400 text-xs font-medium">Smart Brief Ready</span>
                  </div>
                  <span className="text-green-200 text-sm font-light">{messages[6].text}</span>
                </div>
              </div>
            )}

            {/* Floating context indicator */}
            {currentMessage >= 5 && (
              <div className="absolute bottom-4 right-4 space-y-2">
                <div className="bg-purple-500/20 border border-purple-400/40 rounded-full p-2">
                  <BarChart size={12} className="text-purple-400" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom text */}
        <div className="text-center mt-6">
          <span className="text-gray-400 text-sm font-light">
            Context from 3 weeks ago automatically surfaced
          </span>
        </div>
      </div>
    </div>
  );
};

export default MeetingContextDemo;
