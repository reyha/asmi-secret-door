
import { useState, useEffect } from 'react';
import { Users, MessageCircle, Brain, Zap, Calendar } from 'lucide-react';

const RoadAheadSection = () => {
  const [activeMilestone, setActiveMilestone] = useState(0);
  const [showMilestones, setShowMilestones] = useState(false);

  const milestones = [
    {
      title: 'Scale Users',
      timeframe: 'Next 30 days',
      icon: <Users className="text-blue-400" size={24} />,
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'from-blue-500/20 to-cyan-500/10',
      description: '1000+ power users on WhatsApp & iMessage',
      status: 'active'
    },
    {
      title: 'Memory Timeline',
      timeframe: 'Next 60 days', 
      icon: <Brain className="text-green-400" size={24} />,
      color: 'from-green-400 to-emerald-500',
      bgColor: 'from-green-500/20 to-emerald-500/10',
      description: 'Visual timeline of your context and conversations',
      status: 'planned'
    },
    {
      title: 'Smart Summaries',
      timeframe: 'Next 90 days',
      icon: <MessageCircle className="text-purple-400" size={24} />,
      color: 'from-purple-400 to-pink-500', 
      bgColor: 'from-purple-500/20 to-pink-500/10',
      description: 'Daily/weekly intelligent summaries of your activity',
      status: 'planned'
    },
    {
      title: 'Action Engine',
      timeframe: 'Next 100 days',
      icon: <Zap className="text-yellow-400" size={24} />,
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'from-yellow-500/20 to-orange-500/10', 
      description: 'Proactive task management and follow-up automation',
      status: 'planned'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMilestones(true);
    }, 500);

    const interval = setInterval(() => {
      setActiveMilestone((prev) => (prev + 1) % milestones.length);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight leading-tight">
            What's Next — In the Next <span className="text-green-400 font-medium">100 Days</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 font-light">
            The immediate roadmap to personal AI dominance
          </p>
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="md:hidden space-y-6 mb-16">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`p-6 rounded-3xl border transition-all duration-1000 ${
                showMilestones ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${
                milestone.status === 'active' 
                  ? `bg-gradient-to-r ${milestone.bgColor} border-green-400/30` 
                  : 'bg-white/5 border-white/10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${milestone.color}`}>
                  {milestone.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium mb-1">{milestone.title}</h3>
                  <p className="text-gray-400 text-sm">{milestone.timeframe}</p>
                </div>
                {milestone.status === 'active' && (
                  <div className="flex items-center space-x-2 text-green-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-light">In Progress</span>
                  </div>
                )}
              </div>
              <p className="text-gray-300 font-light">{milestone.description}</p>
            </div>
          ))}
        </div>

        {/* Desktop: Interactive cards */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              onClick={() => setActiveMilestone(index)}
              className={`p-6 rounded-3xl border cursor-pointer transition-all duration-700 ${
                showMilestones ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${
                activeMilestone === index
                  ? `bg-gradient-to-r ${milestone.bgColor} border-green-400/30 scale-110 shadow-2xl`
                  : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="text-center">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${milestone.color} mb-4 ${
                  activeMilestone === index ? 'animate-pulse' : ''
                }`}>
                  {milestone.icon}
                </div>
                <h3 className="text-lg font-medium mb-2">{milestone.title}</h3>
                <p className="text-green-400 text-sm mb-3 font-medium">{milestone.timeframe}</p>
                <p className="text-gray-300 text-sm font-light leading-relaxed">
                  {milestone.description}
                </p>
                
                {milestone.status === 'active' && (
                  <div className="mt-4 flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-xs font-light">In Progress</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Progress visualization */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-light mb-8 text-center">100-Day Sprint</h3>
            
            <div className="relative">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-400">Day 1</span>
                <span className="text-sm text-gray-400">Day 100</span>
              </div>
              
              {/* Progress bar */}
              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full transition-all duration-2000 ease-out"
                  style={{ width: '25%' }}
                ></div>
              </div>
              
              {/* Milestone markers */}
              <div className="flex justify-between mt-2">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className={`w-3 h-3 rounded-full ${
                      index === 0 ? 'bg-green-400' : 'bg-gray-600'
                    } mb-2`}></div>
                    <span className="text-xs text-gray-400 text-center">
                      {milestone.timeframe.split(' ')[1]} {milestone.timeframe.split(' ')[2]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom emphasis */}
        <div className="text-center">
          <div className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-green-400/10 to-green-500/5 border border-green-400/20 rounded-3xl backdrop-blur-sm">
            <p className="text-xl md:text-2xl text-green-300 font-light mb-4">
              "Move fast, build the memory OS, capture the market."
            </p>
            <p className="text-gray-400 font-light">
              Every day counts in the race to personal AI
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadAheadSection;
