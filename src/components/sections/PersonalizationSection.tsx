
import { useState, useEffect } from 'react';
import { Brain, User, Calendar, MessageCircle, Gift, Clock } from 'lucide-react';

const PersonalizationSection = () => {
  const [showContextCards, setShowContextCards] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

  const contextCards = [
    {
      title: 'Mood & Energy',
      icon: <User className="text-pink-400" size={20} />,
      data: 'Prefers morning meetings, low energy after 4 PM, works best with 25-min focus blocks',
      color: 'from-pink-400 to-rose-500'
    },
    {
      title: 'Communication Style',
      icon: <MessageCircle className="text-blue-400" size={20} />,
      data: 'Direct communicator, likes bullet points, responds faster to voice messages',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      title: 'Past Conversations',
      icon: <Clock className="text-green-400" size={20} />,
      data: 'Mentioned hiring concerns 3x this month, excited about Q4 product launch, worried about competition',
      color: 'from-green-400 to-emerald-500'
    },
    {
      title: 'Personal Preferences',
      icon: <Gift className="text-yellow-400" size={20} />,
      data: 'Loves coffee (Blue Bottle preferred), vegetarian, birthday March 15th, has 2 cats',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Work Patterns',
      icon: <Calendar className="text-purple-400" size={20} />,
      data: 'Deep work: 9-11 AM, meetings: 2-4 PM, planning: Friday afternoons, vacation: always in August',
      color: 'from-purple-400 to-indigo-500'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContextCards(true);
    }, 1000);

    const cardInterval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % contextCards.length);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(cardInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-tight">
            Deep <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent font-medium">personalization</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Our moat: Asmi learns you completely
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Chat interface */}
          <div className="bg-black/60 backdrop-blur-sm rounded-3xl p-6 border border-white/10">
            <div className="flex items-center mb-4 pb-4 border-b border-white/10">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3 flex items-center justify-center">
                <span className="text-sm font-bold">A</span>
              </div>
              <div>
                <p className="font-medium">Asmi</p>
                <p className="text-xs text-green-400">Learning about you...</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-end">
                <div className="bg-blue-500 px-4 py-3 rounded-2xl max-w-xs">
                  <p className="text-sm text-white">How should I prepare for tomorrow's board meeting?</p>
                </div>
              </div>

              <div className="flex justify-start">
                <div className="bg-gray-800 px-4 py-3 rounded-2xl max-w-sm">
                  <p className="text-sm text-gray-100 mb-2">
                    Based on your past board meetings, I know you prefer:
                  </p>
                  <ul className="text-xs text-gray-300 space-y-1">
                    <li>• Bullet-point summaries (not long paragraphs)</li>
                    <li>• Key metrics prepared in advance</li>
                    <li>• Potential concerns identified</li>
                  </ul>
                  <p className="text-sm text-gray-100 mt-2">
                    I've prepared your deck focusing on user growth (your strongest metric) and addressed the churn concerns from last quarter.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center text-gray-400 text-xs">
              <Brain className="mr-2" size={12} />
              <span>Drawing from 847 past interactions...</span>
            </div>
          </div>

          {/* Context cards */}
          <div className="relative">
            <h3 className="text-2xl font-medium mb-8 text-center lg:text-left">
              What Asmi remembers about you
            </h3>
            
            <div className="space-y-4 relative">
              {contextCards.map((card, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-2xl border backdrop-blur-sm transition-all duration-500 ${
                    showContextCards
                      ? `opacity-100 translate-x-0 ${
                          activeCard === index
                            ? `bg-gradient-to-r ${card.color.replace('from-', 'from-').replace('to-', 'to-')}/20 border-white/30 scale-105`
                            : 'bg-white/5 border-white/10'
                        }`
                      : 'opacity-0 translate-x-8'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 200}ms`,
                    transform: activeCard === index ? 'scale(1.05) translateX(0)' : showContextCards ? 'scale(1) translateX(0)' : 'scale(1) translateX(32px)'
                  }}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${card.color} flex-shrink-0`}>
                      {card.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-white mb-1">{card.title}</h4>
                      <p className="text-sm text-gray-300 leading-relaxed">{card.data}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Memory graph visualization */}
            <div className="mt-12 p-6 bg-gradient-to-r from-white/5 to-white/10 rounded-2xl border border-white/10">
              <h4 className="text-lg font-medium mb-4 flex items-center">
                <Brain className="mr-2 text-purple-400" size={20} />
                Memory Timeline
              </h4>
              <div className="h-32 relative">
                {/* Simplified timeline visualization */}
                <svg className="w-full h-full">
                  <defs>
                    <linearGradient id="memoryGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="50%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                  <path 
                    d="M0,80 Q100,60 200,70 T400,50 T600,60" 
                    stroke="url(#memoryGradient)" 
                    strokeWidth="3" 
                    fill="none"
                    className="animate-pulse"
                  />
                  {/* Data points */}
                  {[0, 1, 2, 3, 4].map((point) => (
                    <circle
                      key={point}
                      cx={point * 150 + 50}
                      cy={70 - point * 5}
                      r="4"
                      fill="url(#memoryGradient)"
                      className="animate-pulse"
                      style={{ animationDelay: `${point * 0.5}s` }}
                    />
                  ))}
                </svg>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Continuous learning from every interaction, building your personal knowledge graph
              </p>
            </div>
          </div>
        </div>

        {/* Bottom comparison */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-red-500/10 border border-red-500/20 rounded-3xl">
            <h3 className="text-2xl font-bold text-red-400 mb-4">Generic AI Tools</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span>Start from scratch every time</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span>No context about your preferences</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span>One-size-fits-all responses</span>
              </li>
            </ul>
          </div>

          <div className="p-8 bg-green-500/10 border border-green-500/20 rounded-3xl">
            <h3 className="text-2xl font-bold text-green-400 mb-4">Asmi AI</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Builds on every past interaction</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Learns your unique patterns & preferences</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Deeply personalized responses</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalizationSection;
