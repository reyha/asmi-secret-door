
import { useState, useEffect } from 'react';
import { User, Building, GraduationCap, Coffee } from 'lucide-react';

const PersonBackgroundDemo = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const messages = [
    { type: 'user', text: "Who's Karan again?", delay: 1000 },
    { type: 'typing', delay: 500 },
    { type: 'asmi', text: 'Karan Mehta - Partner at Lightspeed Ventures', delay: 1000 },
    { 
      type: 'profile', 
      name: 'Karan Mehta',
      title: 'Partner @ Lightspeed',
      details: [
        { icon: Building, text: 'Ex-Facebook, Stanford MBA', color: 'text-blue-400' },
        { icon: GraduationCap, text: 'AI/ML, Enterprise SaaS', color: 'text-purple-400' }
      ],
      lastInteraction: 'Coffee chat about Series A trends (2 weeks ago)',
      delay: 800
    },
    { 
      type: 'insight', 
      text: 'Prefers crisp, data-heavy decks. Usually asks about unit economics first.',
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
          <User className="text-purple-400 mx-auto mb-4" size={32} />
          <h2 className="text-2xl font-light text-white mb-2">Know who you're meeting.</h2>
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
              <p className="text-gray-400 text-xs">Quick lookup</p>
            </div>
            <div className="ml-auto">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
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

            {/* Basic info */}
            {currentMessage >= 3 && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-gray-800/80 backdrop-blur-sm px-4 py-3 rounded-2xl text-white border border-white/10 max-w-sm">
                  <span className="text-sm font-light">{messages[2].text}</span>
                </div>
              </div>
            )}

            {/* Profile card */}
            {currentMessage >= 4 && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-purple-900/30 border border-purple-400/30 px-4 py-3 rounded-2xl max-w-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-sm">K</span>
                    </div>
                    <div>
                      <h4 className="text-purple-200 font-medium text-sm">{messages[3].name}</h4>
                      <p className="text-purple-300 text-xs">{messages[3].title}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-3">
                    {messages[3].details.map((detail, index) => {
                      const IconComponent = detail.icon;
                      return (
                        <div key={index} className="flex items-center space-x-2">
                          <IconComponent size={14} className={detail.color} />
                          <span className="text-purple-200 text-xs">{detail.text}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="bg-purple-800/40 rounded-lg p-2">
                    <span className="text-purple-200 text-xs">
                      Last: {messages[3].lastInteraction}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Insight */}
            {currentMessage >= 5 && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-yellow-900/30 border border-yellow-400/30 px-4 py-3 rounded-2xl max-w-sm">
                  <span className="text-yellow-200 text-sm font-light">{messages[4].text}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom text */}
        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm font-light">
            Social graph + interaction history = perfect context
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonBackgroundDemo;
