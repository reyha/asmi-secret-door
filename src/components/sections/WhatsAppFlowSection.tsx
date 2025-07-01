
import { useState, useEffect } from 'react';
import { Clock, Coffee, Calendar, Mic2, Moon, Zap, Send, MessageCircle } from 'lucide-react';

const WhatsAppFlowSection = () => {
  const [currentTimeBlock, setCurrentTimeBlock] = useState(0);
  const [showMobileUI, setShowMobileUI] = useState(true);

  const timeBlocks = [
    {
      time: '7:00 AM',
      title: 'Morning Brief',
      userMessage: 'Good morning Asmi',
      asmiResponse: 'Good morning! Here\'s your day: 3 meetings, 2 deadlines. Important: Investor call moved to 3 PM. Weather is 72°F - perfect for your lunch walk.',
      icon: <Coffee className="text-yellow-400" size={20} />,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      time: '10:30 AM',
      title: 'Meeting Prep',
      userMessage: 'Prep me for the investor call',
      asmiResponse: 'Your call with Accel Partners: Last discussion was about user acquisition. They asked about CAC trends. I\'ve pulled your latest metrics and Sarah\'s feedback on product-market fit.',
      icon: <Calendar className="text-blue-400" size={20} />,
      color: 'from-blue-400 to-cyan-500'
    },
    {
      time: '3:00 PM',
      title: 'Voice Task',
      userMessage: '🎤 Block 2 hours tomorrow for deep work on the roadmap',
      asmiResponse: 'Done! Blocked 9-11 AM tomorrow for roadmap deep work. I\'ve also suggested postponing your 10 AM standup and cleared your calendar notifications during this time.',
      icon: <Mic2 className="text-purple-400" size={20} />,
      color: 'from-purple-400 to-pink-500'
    },
    {
      time: '8:00 PM',
      title: 'Day Recap',
      userMessage: '',
      asmiResponse: 'Your day recap: ✅ Crushed the investor call ✅ Shipped the feature ✅ Cleared 23 tasks. Tomorrow\'s focus: roadmap deep work. You mentioned being tired - I\'ve moved your 8 AM to 9 AM.',
      icon: <Moon className="text-indigo-400" size={20} />,
      color: 'from-indigo-400 to-purple-500'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTimeBlock((prev) => (prev + 1) % timeBlocks.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentBlock = timeBlocks[currentTimeBlock];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight leading-tight">
            A day with <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-medium">Asmi</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 font-light">
            Your AI companion on the platforms you already use
          </p>
          
          {/* Platform toggle with better mobile design */}
          <div className="flex items-center justify-center space-x-2 mb-8 p-1 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm max-w-xs mx-auto">
            <button
              onClick={() => setShowMobileUI(true)}
              className={`px-6 py-3 rounded-full transition-all duration-300 text-sm font-medium ${
                showMobileUI 
                  ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              WhatsApp
            </button>
            <button
              onClick={() => setShowMobileUI(false)}
              className={`px-6 py-3 rounded-full transition-all duration-300 text-sm font-medium ${
                !showMobileUI 
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              iMessage
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Mobile UI with cleaner design */}
          <div className="flex justify-center lg:sticky lg:top-8">
            <div className="relative">
              <div className={`w-80 h-[640px] rounded-[3rem] overflow-hidden shadow-2xl border-4 ${
                showMobileUI ? 'border-white/20' : 'border-white/20'
              } bg-black`}>
                
                {/* Status bar */}
                <div className="bg-black px-6 py-3 flex justify-between items-center text-white text-sm">
                  <span className="font-medium">9:41</span>
                  <div className="flex items-center space-x-1">
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                    <div className="ml-2 text-xs">100%</div>
                  </div>
                </div>

                {/* Chat header */}
                <div className={`px-4 py-4 flex items-center space-x-3 ${
                  showMobileUI ? 'bg-gray-800' : 'bg-gray-800'
                } border-b border-white/10`}>
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">A</span>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Asmi</h3>
                    <p className="text-gray-400 text-xs">Your AI Chief of Staff</p>
                  </div>
                  <div className="ml-auto">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 bg-black p-4 space-y-4 h-[480px] overflow-y-auto">
                  {/* Time indicator */}
                  <div className="text-center">
                    <span className="bg-white/10 px-3 py-1 rounded-full text-xs text-gray-300 font-light">
                      {currentBlock.time}
                    </span>
                  </div>

                  {/* User message */}
                  {currentBlock.userMessage && (
                    <div className="flex justify-end">
                      <div className="max-w-xs px-4 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg">
                        {currentBlock.userMessage.includes('🎤') ? (
                          <div className="flex items-center space-x-2">
                            <Mic2 size={16} />
                            <span className="text-sm font-light">{currentBlock.userMessage.replace('🎤 ', '')}</span>
                          </div>
                        ) : (
                          <span className="text-sm font-light">{currentBlock.userMessage}</span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Asmi response */}
                  <div className="flex justify-start">
                    <div className="max-w-xs bg-white/10 backdrop-blur-sm px-4 py-3 rounded-2xl text-white border border-white/10">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold">A</span>
                        </div>
                        <span className="text-xs text-gray-400 font-light">Asmi</span>
                      </div>
                      <span className="text-sm font-light leading-relaxed">{currentBlock.asmiResponse}</span>
                    </div>
                  </div>
                </div>

                {/* Input area */}
                <div className="bg-gray-900 p-4 flex items-center space-x-3 border-t border-white/10">
                  <div className="flex-1 bg-white/10 rounded-full px-4 py-3 border border-white/10">
                    <span className="text-gray-400 text-sm font-light">Message Asmi...</span>
                  </div>
                  <button className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <Send size={18} className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline with better mobile design */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-light mb-8 text-center lg:text-left">Throughout your day</h3>
            
            {timeBlocks.map((block, index) => (
              <div
                key={index}
                className={`p-6 rounded-3xl border transition-all duration-500 backdrop-blur-sm ${
                  currentTimeBlock === index
                    ? 'bg-gradient-to-r from-white/10 to-white/5 border-white/30 scale-105 shadow-xl'
                    : 'bg-white/5 border-white/10 opacity-70 hover:opacity-90'
                }`}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${block.color} shadow-lg`}>
                    {block.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">{block.title}</h4>
                    <p className="text-gray-400 text-sm font-light">{block.time}</p>
                  </div>
                  {currentTimeBlock === index && (
                    <div className="ml-auto flex items-center space-x-2 text-green-400">
                      <Zap size={16} />
                      <span className="text-sm font-light">Active now</span>
                    </div>
                  )}
                </div>

                <p className="text-gray-300 text-sm leading-relaxed font-light">
                  {block.asmiResponse}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
            <MessageCircle className="text-blue-400" size={20} />
            <span className="text-lg font-light">No app downloads. No behavior change. Just speak.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppFlowSection;
