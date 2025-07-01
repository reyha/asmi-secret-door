
import { useState, useEffect } from 'react';
import { Sun, Calendar, Bell, MessageCircle, Moon, Mic, Send } from 'lucide-react';

const OneInterfaceSection = () => {
  const [currentTimeBlock, setCurrentTimeBlock] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const timeBlocks = [
    {
      time: '7:00 AM',
      title: 'Morning Brief',
      icon: <Sun className="text-yellow-400" size={20} />,
      color: 'from-yellow-400 to-orange-500',
      userMessage: 'Good morning Asmi',
      asmiResponse: 'Good morning! Today: 3 meetings, 2 deadlines. Your investor call moved to 3 PM. Weather is perfect for lunch outside.'
    },
    {
      time: '10:30 AM',
      title: 'Meeting Prep',
      icon: <Calendar className="text-blue-400" size={20} />,
      color: 'from-blue-400 to-cyan-500',
      userMessage: 'Prep me for the investor call',
      asmiResponse: 'Your 3 PM with Sarah from Accel: Last discussion was user growth. I pulled your retention metrics and 3 key talking points.'
    },
    {
      time: '3:30 PM',
      title: 'Smart Nudges',
      icon: <Bell className="text-green-400" size={20} />,
      color: 'from-green-400 to-emerald-500',
      userMessage: '',
      asmiResponse: 'Quick reminder: Follow up with Eric about the partnership discussion. I found his assistant\'s email if you want to schedule.'
    },
    {
      time: '6:00 PM',
      title: 'Task Reminders',
      icon: <Mic className="text-purple-400" size={20} />,
      color: 'from-purple-400 to-pink-500',
      userMessage: '🎤 Block 2 hours tomorrow for roadmap work',
      asmiResponse: 'Done! Blocked 9-11 AM for deep work. I moved your standup and cleared notifications during this time.'
    },
    {
      time: '8:00 PM',
      title: 'End-of-Day Summary',
      icon: <Moon className="text-indigo-400" size={20} />,
      color: 'from-indigo-400 to-purple-500',
      userMessage: '',
      asmiResponse: 'Day recap: ✅ Crushed investor call ✅ Shipped feature ✅ 23 tasks done. Tomorrow: roadmap deep work. Rest well!'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTimeBlock((prev) => (prev + 1) % timeBlocks.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentBlock = timeBlocks[currentTimeBlock];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight leading-tight">
            One Interface to <span className="text-green-400 font-medium">Run Your Day</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 font-light">
            On the platforms you already use
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Mobile phone mockup */}
          <div className="flex justify-center lg:sticky lg:top-8">
            <div className="relative">
              <div className="w-80 h-[640px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-gray-700 bg-black">
                
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
                <div className="px-4 py-4 flex items-center space-x-3 bg-green-800/30 border-b border-white/10">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-sm">A</span>
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
                <div className="flex-1 bg-black p-4 space-y-4 h-[480px] overflow-y-auto">
                  {/* Time indicator */}
                  <div className="text-center">
                    <span className="bg-white/10 px-3 py-1 rounded-full text-xs text-gray-300 font-light">
                      {currentBlock.time}
                    </span>
                  </div>

                  {/* User message */}
                  {currentBlock.userMessage && (
                    <div className="flex justify-end animate-fade-in">
                      <div className="max-w-xs px-4 py-3 rounded-2xl bg-green-600 text-white shadow-lg">
                        {currentBlock.userMessage.includes('🎤') ? (
                          <div className="flex items-center space-x-2">
                            <Mic size={16} />
                            <span className="text-sm font-light">{currentBlock.userMessage.replace('🎤 ', '')}</span>
                          </div>
                        ) : (
                          <span className="text-sm font-light">{currentBlock.userMessage}</span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Asmi response */}
                  <div className="flex justify-start animate-fade-in">
                    <div className="max-w-xs bg-gray-800/80 backdrop-blur-sm px-4 py-3 rounded-2xl text-white border border-white/10">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-black">A</span>
                        </div>
                        <span className="text-xs text-green-400 font-light">Asmi</span>
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
                  <button className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                    <Send size={18} className="text-black" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-light mb-8 text-center lg:text-left">Throughout your day</h3>
            
            {timeBlocks.map((block, index) => (
              <div
                key={index}
                onClick={() => {
                  setCurrentTimeBlock(index);
                  setIsAutoPlaying(false);
                }}
                className={`p-6 rounded-3xl border cursor-pointer transition-all duration-500 backdrop-blur-sm ${
                  currentTimeBlock === index
                    ? 'bg-gradient-to-r from-green-400/10 to-green-500/5 border-green-400/30 scale-105 shadow-xl'
                    : 'bg-white/5 border-white/10 opacity-70 hover:opacity-90 hover:border-white/20'
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
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm font-light">Live</span>
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

        {/* Bottom emphasis */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-green-400/20 to-green-500/20 rounded-full border border-green-400/30 backdrop-blur-sm">
            <MessageCircle className="text-green-400" size={20} />
            <span className="text-lg font-light">No app downloads. No behavior change. Just speak.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneInterfaceSection;
