
import { useState } from 'react';
import { Calendar, Users, Brain } from 'lucide-react';

const RoadmapSection = () => {
  const [activeMilestone, setActiveMilestone] = useState(0);

  const milestones = [
    {
      title: 'Calendar + Contacts Memory',
      quarter: 'Live Now',
      icon: <Calendar className="text-green-400" size={20} />,
      description: 'Deep integration with your calendar and contact history for contextual awareness',
      status: 'active',
      color: 'from-green-400 to-green-500',
      bgColor: 'from-green-500/20 to-green-400/10'
    },
    {
      title: 'iMessage Launch',
      quarter: 'Q3 2024',
      icon: <Users className="text-blue-400" size={20} />,
      description: 'Native iMessage integration for seamless iOS experience',
      status: 'next',
      color: 'from-blue-400 to-blue-500',
      bgColor: 'from-blue-500/20 to-blue-400/10'
    },
    {
      title: 'Voice Memory + Summaries',
      quarter: 'Q4 2024',
      icon: <Brain className="text-purple-400" size={20} />,
      description: 'Passive voice capture with intelligent daily/weekly summaries',
      status: 'planned',
      color: 'from-purple-400 to-purple-500',
      bgColor: 'from-purple-500/20 to-purple-400/10'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-light text-white mb-4">
            From messaging to <span className="text-green-400 font-medium">memory OS</span>.
          </h1>
        </div>

        {/* Milestone cards */}
        <div className="space-y-6">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              onClick={() => setActiveMilestone(index)}
              className={`cursor-pointer transition-all duration-500 border rounded-3xl p-6 backdrop-blur-sm ${
                activeMilestone === index
                  ? `bg-gradient-to-r ${milestone.bgColor} border-white/30 scale-105`
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${milestone.color}`}>
                    {milestone.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white">{milestone.title}</h3>
                    <p className="text-gray-400 text-sm">{milestone.quarter}</p>
                  </div>
                </div>
                
                {milestone.status === 'active' && (
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm font-medium">Live</span>
                  </div>
                )}
                
                {milestone.status === 'next' && (
                  <div className="bg-blue-500/20 border border-blue-400/30 rounded-full px-3 py-1">
                    <span className="text-blue-300 text-xs font-medium">Next</span>
                  </div>
                )}
              </div>

              {activeMilestone === index && (
                <div className="animate-fade-in">
                  <p className="text-gray-300 font-light leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom insight */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-white/5 to-white/10 border border-white/20 rounded-3xl p-6 backdrop-blur-sm">
            <p className="text-xl text-white font-light">
              Each milestone compounds the memory advantage
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapSection;
