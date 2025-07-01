
import { useState, useEffect } from 'react';
import { Brain, Calendar, Mic, Gift, MessageCircle, Zap } from 'lucide-react';

const WhatAsmiDoesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [showElements, setShowElements] = useState(false);

  const features = [
    {
      title: 'Daily Briefs',
      icon: <MessageCircle className="text-blue-400" size={24} />,
      color: 'from-blue-400 to-cyan-500',
      description: 'Contextual morning updates with what matters today'
    },
    {
      title: 'Pre-meeting Prep',
      icon: <Calendar className="text-green-400" size={24} />,
      color: 'from-green-400 to-emerald-500',
      description: 'Last conversation context + relevant background'
    },
    {
      title: 'Smart Follow-ups',
      icon: <Zap className="text-yellow-400" size={24} />,
      color: 'from-yellow-400 to-orange-500',
      description: 'Automatic reminders based on conversation context'
    },
    {
      title: 'Gift Nudges',
      icon: <Gift className="text-purple-400" size={24} />,
      color: 'from-purple-400 to-pink-500',
      description: 'Thoughtful suggestions based on relationships'
    },
    {
      title: 'Memory Recall',
      icon: <Brain className="text-indigo-400" size={24} />,
      color: 'from-indigo-400 to-purple-500',
      description: 'Instant access to any past conversation or context'
    },
    {
      title: 'Voice Processing',
      icon: <Mic className="text-red-400" size={24} />,
      color: 'from-red-400 to-pink-500',
      description: 'Natural voice commands converted to actions'
    }
  ];

  useEffect(() => {
    setShowElements(true);
    
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight leading-tight">
            Your brain, <span className="text-green-400 font-medium">outsourced</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 font-light">
            AI threads syncing across time and context
          </p>
        </div>

        {/* Scientific grid visualization */}
        <div className="relative">
          {/* Background neural network */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 800 600">
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
              {/* Neural connections */}
              <g stroke="url(#connectionGradient)" strokeWidth="1" fill="none" opacity="0.6">
                <path d="M100,150 Q400,100 700,200" className="animate-pulse" />
                <path d="M150,300 Q400,250 650,350" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                <path d="M200,450 Q500,400 750,500" className="animate-pulse" style={{ animationDelay: '1s' }} />
              </g>
            </svg>
          </div>

          {/* Feature grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`p-8 rounded-3xl border cursor-pointer transition-all duration-700 backdrop-blur-sm ${
                  activeFeature === index
                    ? 'bg-gradient-to-r from-green-400/20 to-green-500/10 border-green-400/30 scale-110 shadow-2xl shadow-green-400/20'
                    : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10'
                } ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ 
                  transitionDelay: `${index * 200}ms`,
                  transform: activeFeature === index ? 'scale(1.1) translateY(-10px)' : ''
                }}
              >
                <div className="text-center">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 shadow-lg ${
                    activeFeature === index ? 'animate-pulse' : ''
                  }`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-4">{feature.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed font-light">
                    {feature.description}
                  </p>
                  
                  {activeFeature === index && (
                    <div className="mt-4 flex items-center justify-center space-x-2 animate-fade-in">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-sm font-light">Active</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom insight */}
        <div className="text-center mt-16">
          <div className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-green-400/10 to-green-500/5 border border-green-400/20 rounded-3xl backdrop-blur-sm">
            <p className="text-xl md:text-2xl text-green-300 font-light mb-4">
              "AI that feels like magic because it knows you."
            </p>
            <p className="text-gray-400 font-light">
              Every interaction builds the context for the next
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatAsmiDoesSection;
