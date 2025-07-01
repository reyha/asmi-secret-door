
import { useEffect, useRef, useState } from 'react';
import { MessageCircle, Calendar, Bell, Mic, Clock } from 'lucide-react';

const InteractiveHeroSection = () => {
  const [showFloatingElements, setShowFloatingElements] = useState(false);
  const [currentPlatform, setCurrentPlatform] = useState('WhatsApp');
  const [currentMessage, setCurrentMessage] = useState(0);

  const platforms = ['WhatsApp', 'iMessage'];
  
  const demoMessages = [
    {
      type: 'user',
      text: 'Good morning Asmi',
      response: 'Good morning! Today: 3 meetings, 2 deadlines. Your 2 PM with Sarah moved to 3 PM. Weather is 72°F - perfect for lunch walk.'
    },
    {
      type: 'user', 
      text: 'Who am I meeting at 3?',
      response: 'Sarah Chen from Accel Partners. Last discussed user growth metrics. She asked about retention - I pulled your latest dashboard numbers.'
    },
    {
      type: 'voice',
      text: '🎤 Reschedule my 4 PM to tomorrow same time',
      response: 'Done! Moved your product review to tomorrow 4 PM. I updated the calendar and notified the team.'
    },
    {
      type: 'user',
      text: 'Quick brief before my call',
      response: 'Your 3 PM with Sarah: Key topics - Q4 metrics, user retention at 85%, new feature adoption. 3 talking points ready.'
    }
  ];

  useEffect(() => {
    setShowFloatingElements(true);
    
    // Platform cycling
    const platformInterval = setInterval(() => {
      setCurrentPlatform(prev => prev === 'WhatsApp' ? 'iMessage' : 'WhatsApp');
    }, 3000);

    // Message cycling
    const messageInterval = setInterval(() => {
      setCurrentMessage(prev => (prev + 1) % demoMessages.length);
    }, 6000);

    return () => {
      clearInterval(platformInterval);
      clearInterval(messageInterval);
    };
  }, []);

  const currentDemo = demoMessages[currentMessage];

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Faster animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '1s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '1.2s', animationDelay: '0.3s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '0.8s', animationDelay: '0.6s' }}></div>
        </div>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <div className="mb-8 opacity-0 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-400/20 to-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-6 py-3 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDuration: '1s' }}></div>
            <span className="text-sm text-green-300 font-light">AI Chief of Staff</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight opacity-0 animate-fade-in leading-tight" style={{ animationDelay: '0.5s' }}>
          The AI that gets things done — <span className="text-green-400 font-medium">before you even ask</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 font-light opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
          Lives on <span className={`font-medium transition-all duration-500 ${currentPlatform === 'WhatsApp' ? 'text-green-400' : 'text-blue-400'}`}>
            {currentPlatform}
          </span>. No app. No noise. Just results.
        </h2>

        {/* Real-time chat demo */}
        <div className="relative max-w-sm mx-auto mb-12 opacity-0 animate-scale-in" style={{ animationDelay: '1.5s' }}>
          <div className="bg-black/60 backdrop-blur-sm rounded-3xl border border-green-400/20 overflow-hidden shadow-2xl">
            {/* Phone header */}
            <div className={`px-4 py-3 flex items-center space-x-3 border-b ${
              currentPlatform === 'WhatsApp' ? 'bg-green-800/30' : 'bg-blue-800/30'
            } border-white/10`}>
              <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <div>
                <h3 className="text-white font-medium">Asmi</h3>
                <p className="text-gray-400 text-xs">Your AI Chief of Staff</p>
              </div>
              <div className="ml-auto">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Messages */}
            <div className="p-4 space-y-3 bg-black min-h-[200px]">
              {/* User message */}
              <div className="flex justify-end animate-fade-in">
                <div className={`max-w-xs px-4 py-3 rounded-2xl shadow-lg ${
                  currentPlatform === 'WhatsApp' 
                    ? 'bg-green-600' 
                    : 'bg-blue-600'
                }`}>
                  {currentDemo.type === 'voice' ? (
                    <div className="flex items-center space-x-2 text-white">
                      <Mic size={16} />
                      <span className="text-sm font-light">{currentDemo.text.replace('🎤 ', '')}</span>
                    </div>
                  ) : (
                    <span className="text-sm font-light text-white">{currentDemo.text}</span>
                  )}
                </div>
              </div>

              {/* Asmi response */}
              <div className="flex justify-start animate-fade-in" style={{ animationDelay: '1s' }}>
                <div className="max-w-sm bg-gray-800/80 backdrop-blur-sm px-4 py-3 rounded-2xl text-white border border-white/10">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-black">A</span>
                    </div>
                    <span className="text-xs text-green-400 font-light">Asmi</span>
                  </div>
                  <span className="text-sm font-light leading-relaxed">{currentDemo.response}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="group bg-gradient-to-r from-green-400 to-green-500 px-8 py-4 rounded-full text-lg font-medium hover:from-green-500 hover:to-green-600 transition-all duration-300 hover:scale-105 text-black shadow-lg shadow-green-400/25 opacity-0 animate-fade-in" style={{ animationDelay: '2s' }}>
          See how it works
          <div className="inline-block ml-2 group-hover:translate-y-1 transition-transform">↓</div>
        </button>
      </div>
    </div>
  );
};

export default InteractiveHeroSection;
