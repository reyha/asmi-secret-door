
import { useState, useEffect } from 'react';
import { User, Building, GraduationCap, Coffee, Search } from 'lucide-react';

const PersonBackgroundDemo = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const messages = [
    { type: 'user', text: "Who's Karan again?", delay: 500 },
    { type: 'typing', delay: 400 },
    { type: 'asmi', text: 'Karan Mehta - Partner at Lightspeed Ventures', delay: 600 },
    { type: 'typing', delay: 300 },
    { 
      type: 'profile', 
      name: 'Karan Mehta',
      title: 'Partner @ Lightspeed',
      details: [
        { icon: Building, text: 'Ex-Facebook, Stanford MBA', color: 'text-blue-400' },
        { icon: GraduationCap, text: 'AI/ML, Enterprise SaaS', color: 'text-purple-400' }
      ],
      lastInteraction: 'Coffee chat about Series A trends (2 weeks ago)',
      delay: 500
    },
    { type: 'typing', delay: 400 },
    { 
      type: 'insight', 
      text: 'Prefers crisp, data-heavy decks. Usually asks about unit economics first.',
      delay: 600
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

    const currentElement = document.getElementById('person-background-demo');
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted || isComplete) return;

    // Simulate typing the search query
    if (currentMessage === 0) {
      let i = 0;
      const query = "Who's Karan again?";
      const typeInterval = setInterval(() => {
        if (i < query.length) {
          setSearchQuery(query.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typeInterval);
        }
      }, 80);
    }

    const timer = setTimeout(() => {
      if (currentMessage < messages.length) {
        const currentMsg = messages[currentMessage];
        
        if (currentMsg.type === 'typing') {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            setCurrentMessage(prev => prev + 1);
          }, 800);
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
    <div id="person-background-demo" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4">
      <div className="max-w-sm mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <User className="text-purple-400 mx-auto mb-4" size={32} />
          <h2 className="text-2xl font-light text-white mb-2">Know who you're meeting.</h2>
        </div>

        {/* Phone mockup */}
        <div className="bg-black/80 backdrop-blur-sm rounded-3xl border border-purple-400/20 overflow-hidden shadow-2xl relative">
          {/* Status bar */}
          <div className="bg-black px-4 py-2 flex justify-between items-center text-xs text-white/70">
            <span>3:22</span>
            <div className="flex items-center space-x-2">
              <Search size={10} className="text-purple-400" />
              <span className="text-purple-400 text-xs">Quick lookup</span>
            </div>
          </div>

          {/* Search bar */}
          <div className="bg-gray-900/80 px-4 py-3 border-b border-white/10">
            <div className="flex items-center space-x-2 bg-gray-800/60 rounded-full px-4 py-2">
              <Search size={16} className="text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                readOnly
                placeholder="Ask about anyone..."
                className="bg-transparent text-white text-sm flex-1 outline-none placeholder-gray-500"
              />
            </div>
          </div>

          {/* Header */}
          <div className="bg-gradient-to-r from-purple-800/40 to-purple-900/40 px-4 py-4 flex items-center space-x-3 border-b border-white/10 backdrop-blur-sm">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-black font-bold text-sm">A</span>
            </div>
            <div className="flex-1">
              <h3 className="text-white font-medium text-sm">Asmi</h3>
              <div className="text-gray-400 text-xs flex items-center space-x-1">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Person lookup</span>
              </div>
            </div>
            {isTyping && (
              <div className="text-gray-400 text-xs animate-pulse">searching...</div>
            )}
          </div>

          {/* Messages */}
          <div className="p-4 space-y-4 bg-gradient-to-b from-gray-900 to-black min-h-[450px] relative">
            {/* User message */}
            {currentMessage >= 1 && (
              <div className="flex justify-end animate-slide-in-right">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 px-4 py-3 rounded-2xl rounded-tr-sm max-w-xs shadow-lg">
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

            {/* Basic info */}
            {currentMessage >= 3 && (
              <div className="flex justify-start animate-scale-in">
                <div className="bg-gray-800/90 backdrop-blur-sm px-4 py-3 rounded-2xl rounded-tl-sm text-white border border-white/10 max-w-sm shadow-lg">
                  <span className="text-sm font-light">{messages[2].text}</span>
                </div>
              </div>
            )}

            {/* Profile card */}
            {currentMessage >= 5 && (
              <div className="flex justify-start animate-scale-in">
                <div className="bg-gradient-to-br from-purple-900/40 to-indigo-900/40 border border-purple-400/40 px-4 py-4 rounded-2xl max-w-sm shadow-lg backdrop-blur-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-black font-bold text-base">K</span>
                    </div>
                    <div>
                      <h4 className="text-purple-200 font-medium text-base">{messages[4].name}</h4>
                      <span className="text-purple-300 text-sm">{messages[4].title}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    {messages[4].details.map((detail, index) => {
                      const IconComponent = detail.icon;
                      return (
                        <div key={index} className="flex items-center space-x-3 p-2 rounded-lg bg-black/20">
                          <div className="p-1.5 rounded-lg bg-black/30">
                            <IconComponent size={14} className={detail.color} />
                          </div>
                          <span className="text-purple-200 text-sm">{detail.text}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="bg-purple-800/40 rounded-lg p-3 border border-purple-400/20">
                    <div className="flex items-center space-x-2 mb-1">
                      <Coffee size={12} className="text-purple-400" />
                      <span className="text-purple-400 text-xs font-medium">Last Interaction</span>
                    </div>
                    <span className="text-purple-200 text-sm">
                      {messages[4].lastInteraction}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Insight */}
            {currentMessage >= 7 && (
              <div className="flex justify-start animate-scale-in">
                <div className="bg-gradient-to-r from-yellow-900/40 to-orange-900/40 border border-yellow-400/40 px-4 py-3 rounded-2xl max-w-sm shadow-lg backdrop-blur-sm">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <span className="text-yellow-400 text-xs font-medium">AI Insight</span>
                  </div>
                  <span className="text-yellow-200 text-sm font-light">{messages[6].text}</span>
                </div>
              </div>
            )}

            {/* Floating search indicator */}
            {currentMessage >= 3 && (
              <div className="absolute bottom-4 right-4">
                <div className="bg-purple-500/20 border border-purple-400/40 rounded-full p-2">
                  <User size={12} className="text-purple-400" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom text */}
        <div className="text-center mt-6">
          <span className="text-gray-400 text-sm font-light">
            Social graph + interaction history = perfect context
          </span>
        </div>
      </div>
    </div>
  );
};

export default PersonBackgroundDemo;
