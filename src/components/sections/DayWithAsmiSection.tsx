
import { useState, useEffect } from 'react';
import { Clock, Coffee, Calendar, Mic2, Moon, Zap } from 'lucide-react';

const DayWithAsmiSection = () => {
  const [activeTimeBlock, setActiveTimeBlock] = useState(0);

  const timeBlocks = [
    {
      time: '7:00 AM',
      title: 'Daily Brief',
      description: 'Good morning! Here\'s what\'s ahead: 3 meetings, 2 deadlines, weather is 72°F.',
      icon: <Coffee className="text-yellow-400" size={20} />,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      time: '10:00 AM',
      title: 'Meeting Prep',
      description: 'Your investor call is in 30 mins. Here\'s the context: last discussion points, their portfolio...',
      icon: <Calendar className="text-blue-400" size={20} />,
      color: 'from-blue-400 to-cyan-500'
    },
    {
      time: '3:00 PM',
      title: 'Voice Task',
      description: '"Asmi, block 2 hours tomorrow for deep work" → Calendar updated, notifications blocked.',
      icon: <Mic2 className="text-purple-400" size={20} />,
      color: 'from-purple-400 to-pink-500'
    },
    {
      time: '8:00 PM',
      title: 'Win Recap',
      description: 'Today you completed 3 key tasks, made progress on the product roadmap. Tomorrow: focus on...',
      icon: <Moon className="text-indigo-400" size={20} />,
      color: 'from-indigo-400 to-purple-500'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTimeBlock((prev) => (prev + 1) % timeBlocks.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 sm:mb-6 tracking-tight">
            A day with <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-medium">Asmi</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400">
            Your AI companion that evolves with your rhythm
          </p>
        </div>

        {/* Mobile-optimized timeline */}
        <div className="space-y-6 sm:space-y-8 md:space-y-12">
          {timeBlocks.map((block, index) => (
            <div
              key={index}
              className={`relative transition-all duration-1000 ${
                activeTimeBlock === index 
                  ? 'scale-100 opacity-100' 
                  : 'scale-95 opacity-60'
              }`}
            >
              {/* Content card */}
              <div className="w-full max-w-lg mx-auto">
                <div className={`p-4 sm:p-6 bg-gradient-to-r ${
                  activeTimeBlock === index 
                    ? 'from-white/20 to-white/10 border-white/30' 
                    : 'from-white/5 to-white/5 border-white/10'
                } rounded-xl sm:rounded-2xl border backdrop-blur-sm transition-all duration-500`}>
                  
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className={`p-2 sm:p-3 rounded-xl bg-gradient-to-r ${block.color}`}>
                      {block.icon}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-medium">{block.title}</h3>
                      <p className="text-gray-400 text-sm sm:text-base">{block.time}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    {block.description}
                  </p>

                  {activeTimeBlock === index && (
                    <div className="mt-3 sm:mt-4 flex items-center gap-2 text-green-400 animate-fade-in">
                      <Zap size={16} />
                      <span className="text-sm">Active now</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom summary */}
        <div className="mt-12 sm:mt-16 md:mt-20 text-center">
          <div className="inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
            <Clock className="text-blue-400" size={18} />
            <span className="text-base sm:text-lg">24/7 contextual awareness, zero effort required</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayWithAsmiSection;
