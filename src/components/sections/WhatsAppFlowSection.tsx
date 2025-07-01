
import { useState, useEffect } from 'react';
import { Clock, Coffee, Calendar, Mic2, Moon, Zap, Send } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-tight">
            A day with <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-medium">Asmi</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Your AI companion on the platforms you already use
          </p>
          
          {/* Platform toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <button
              onClick={() => setShowMobileUI(true)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                showMobileUI 
                  ? 'bg-green-500 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              WhatsApp
            </button>
            <button
              onClick={() => setShowMobileUI(false)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                !showMobileUI 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              iMessage
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mobile UI */}
          <div className="flex justify-center">
            <div className="relative">
              <div className={`w-80 h-[600px] rounded-[3rem] border-8 ${
                showMobileUI ? 'border-green-500' : 'border-blue-500'
              } bg-black overflow-hidden shadow-2xl`}>
                
                {/* Status bar */}
                <div className="bg-black px-6 py-3 flex justify-between items-center text-white text-sm">
                  <span className="font-medium">9:41</span>
                  <div className="flex space-x-1">
                    <div className="w-4 h-2 bg-white rounded-sm"></div>
                    <div className="w-4 h-2 bg-white rounded-sm"></div>
                    <div className="w-4 h-2 bg-white rounded-sm"></div>
                  </div>
                </div>

                {/* Chat header */}
                <div className={`${showMobileUI ? 'bg-green-600' : 'bg-blue-600'} px-4 py-3 flex items-center space-x-3`}>
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">A</span>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Asmi</h3>
                    <p className="text-green-200 text-xs">Your AI Chief of Staff</p>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 bg-gray-900 p-4 space-y-4">
                  {/* Time indicator */}
                  <div className="text-center">
                    <span className="bg-gray-700 px-3 py-1 rounded-full text-xs text-gray-300">
                      {currentBlock.time}
                    </span>
                  </div>

                  {/* User message */}
                  {currentBlock.userMessage && (
                    <div className="flex justify-end">
                      <div className={`max-w-xs px-4 py-3 rounded-2xl ${
                        showMobileUI ? 'bg-green-500' : 'bg-blue-500'
                      } text-white`}>
                        {currentBlock.userMessage.includes('🎤') ? (
                          <div className="flex items-center space-x-2">
                            <Mic2 size={16} />
                            <span className="text-sm">{currentBlock.userMessage.replace('🎤 ', '')}</span>
                          </div>
                        ) : (
                          <span className="text-sm">{currentBlock.userMessage}</span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Asmi response */}
                  <div className="flex justify-start">
                    <div className="max-w-xs bg-gray-800 px-4 py-3 rounded-2xl text-white">
                      <span className="text-sm">{currentBlock.asmiResponse}</span>
                    </div>
                  </div>
                </div>

                {/* Input area */}
                <div className={`${showMobileUI ? 'bg-gray-800' : 'bg-gray-800'} p-4 flex items-center space-x-3`}>
                  <div className="flex-1 bg-gray-700 rounded-full px-4 py-2">
                    <span className="text-gray-400 text-sm">Message Asmi...</span>
                  </div>
                  <button className={`w-10 h-10 ${
                    showMobileUI ? 'bg-green-500' : 'bg-blue-500'
                  } rounded-full flex items-center justify-center`}>
                    <Send size={16} className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-medium mb-8">Throughout your day</h3>
            
            {timeBlocks.map((block, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl border transition-all duration-500 ${
                  currentTimeBlock === index
                    ? 'bg-gradient-to-r from-white/10 to-white/5 border-white/20 scale-105'
                    : 'bg-white/5 border-white/10 opacity-60'
                }`}
              >
                <div className="flex items-center space-x-4 mb-3">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${block.color}`}>
                    {block.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">{block.title}</h4>
                    <p className="text-gray-400 text-sm">{block.time}</p>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {block.asmiResponse}
                </p>

                {currentTimeBlock === index && (
                  <div className="mt-4 flex items-center space-x-2 text-green-400">
                    <Zap size={16} />
                    <span className="text-sm">Active now</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
            <Clock className="text-blue-400" size={20} />
            <span className="text-lg">No app downloads. No behavior change. Just speak.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppFlowSection;
