
import { useEffect, useState } from 'react';

const InteractiveHeroSection = () => {
  const [showMessages, setShowMessages] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(-1);
  const [platformIndex, setPlatformIndex] = useState(0);

  const platforms = ['WhatsApp', 'iMessage'];
  const messages = [
    { text: "Good morning! Quick update before your day starts.", sender: 'asmi' },
    { text: "3 meetings today. Sarah's call moved to 3 PM.", sender: 'asmi' },
    { text: "Also - it's Ria's birthday. Want me to send flowers?", sender: 'asmi' },
  ];

  useEffect(() => {
    // Platform switching
    const platformTimer = setInterval(() => {
      setPlatformIndex(prev => (prev + 1) % platforms.length);
    }, 2000);

    // Start showing messages after 1 second
    const startTimer = setTimeout(() => {
      setShowMessages(true);
    }, 1000);

    return () => {
      clearInterval(platformTimer);
      clearTimeout(startTimer);
    };
  }, []);

  useEffect(() => {
    if (showMessages && currentMessage < messages.length - 1) {
      const timer = setTimeout(() => {
        setCurrentMessage(prev => prev + 1);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [showMessages, currentMessage, messages.length]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-green-500/5 blur-3xl"></div>
      
      <div className="relative z-10 text-center">
        {/* Main headline */}
        <h1 className="text-4xl md:text-5xl font-light mb-4 opacity-0 animate-fade-in">
          Gets things done.
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-light mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          On <span className={`font-medium transition-colors duration-500 ${
            platforms[platformIndex] === 'WhatsApp' ? 'text-green-400' : 'text-blue-400'
          }`}>
            {platforms[platformIndex]}
          </span> & <span className={`font-medium transition-colors duration-500 ${
            platforms[platformIndex] === 'iMessage' ? 'text-blue-400' : 'text-green-400'
          }`}>
            {platforms[platformIndex] === 'WhatsApp' ? 'iMessage' : 'WhatsApp'}
          </span>.
        </h2>

        {/* Phone mockup */}
        <div className="max-w-sm mx-auto opacity-0 animate-scale-in" style={{ animationDelay: '1s' }}>
          <div className="bg-black/80 backdrop-blur-sm rounded-3xl border border-green-400/20 overflow-hidden shadow-2xl">
            {/* Phone header */}
            <div className="bg-green-800/30 px-4 py-3 flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <div>
                <h3 className="text-white font-medium text-sm">Asmi</h3>
                <p className="text-green-300 text-xs">online</p>
              </div>
            </div>

            {/* Messages */}
            <div className="p-4 bg-black/90 min-h-[200px] space-y-3">
              {messages.slice(0, currentMessage + 1).map((message, index) => (
                <div
                  key={index}
                  className="flex justify-start animate-fade-in"
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <div className="max-w-xs bg-gray-800/80 backdrop-blur-sm px-4 py-3 rounded-2xl text-white border border-green-400/20">
                    <span className="text-sm font-light">{message.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-8 opacity-0 animate-fade-in" style={{ animationDelay: '3s' }}>
          <div className="w-6 h-10 border-2 border-green-400/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveHeroSection;
