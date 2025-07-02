
import { useState } from 'react';
import { Calendar, Mic, MessageSquare, Brain } from 'lucide-react';

const RoadmapSection = () => {
  const [activeCard, setActiveCard] = useState(0);

  const roadmapItems = [
    {
      title: 'Calendar + Contact Memory',
      status: 'LIVE',
      icon: <Calendar className="text-green-400" size={24} />,
      description: 'Smart context from your meetings and contacts',
      features: ['Meeting prep', 'Contact insights', 'Relationship tracking'],
      color: 'from-green-400 to-green-500',
      bgColor: 'from-green-500/20 to-green-400/10',
      borderColor: 'border-green-400/30',
      isLive: true
    },
    {
      title: 'Voice Memory Engine',
      status: 'LIVE',
      icon: <Mic className="text-blue-400" size={24} />,
      description: 'Capture and recall everything you say',
      features: ['Voice notes', 'Auto transcription', 'Context linking'],
      color: 'from-blue-400 to-blue-500',
      bgColor: 'from-blue-500/20 to-blue-400/10',
      borderColor: 'border-blue-400/30',
      isLive: true
    },
    {
      title: 'iMessage Launch',
      status: 'Q3 2024',
      icon: <MessageSquare className="text-purple-400" size={24} />,
      description: 'Native iOS integration',
      features: ['Seamless iOS experience', 'Siri shortcuts', 'Widget support'],
      color: 'from-purple-400 to-purple-500',
      bgColor: 'from-purple-500/20 to-purple-400/10',
      borderColor: 'border-purple-400/30'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-light text-white mb-4">
            From messaging to <span className="text-green-400 font-medium">personal OS</span>
          </h1>
        </div>

        {/* Roadmap cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roadmapItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveCard(index)}
              className={`relative cursor-pointer transition-all duration-500 border rounded-3xl p-8 backdrop-blur-sm ${
                activeCard === index || item.isLive
                  ? `bg-gradient-to-r ${item.bgColor} ${item.borderColor} scale-105`
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              {item.isLive && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-500 text-black px-4 py-1 rounded-full text-xs font-medium animate-pulse">
                    LIVE
                  </div>
                </div>
              )}

              <div className="text-center">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${item.color} mb-6`}>
                  {item.icon}
                </div>
                
                <h3 className="text-xl font-medium text-white mb-2">{item.title}</h3>
                <div className="text-gray-400 text-sm mb-4">{item.status}</div>
                
                <p className="text-gray-300 text-sm font-light mb-6">{item.description}</p>

                {/* Features */}
                <div className="space-y-2">
                  {item.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm font-light">{feature}</span>
                    </div>
                  ))}
                </div>

                {item.isLive && (
                  <div className="mt-4 flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm font-medium">Active Now</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadmapSection;
