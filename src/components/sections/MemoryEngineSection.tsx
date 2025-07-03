
import { useState, useEffect } from 'react';
import MobileOptimizedSection from './MobileOptimizedSection';

const MemoryEngineSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const features = [
    {
      title: "Real-time context awareness",
      color: "bg-green-400",
      description: "Every interaction mapped and accessible"
    },
    {
      title: "Intelligent connection mapping", 
      color: "bg-blue-400",
      description: "Understanding relationships that matter"
    },
    {
      title: "Predictive assistance",
      color: "bg-purple-400", 
      description: "Anticipating what you need, when you need it"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % features.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <MobileOptimizedSection maxWidth="sm">
      <div className="space-y-8 text-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-white leading-tight">
            Memory that scales.
          </h2>
          
          <p className="text-base text-gray-300 leading-relaxed px-2">
            Your memory, working for you. Every conversation, meeting, and thought—connected and accessible when you need it most.
          </p>
        </div>

        {/* Feature List */}
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-500 ${
                index === activeFeature ? 'bg-white/10' : 'bg-transparent'
              }`}
            >
              <div className={`w-3 h-3 rounded-full ${feature.color} flex-shrink-0 ${
                index === activeFeature ? 'animate-pulse' : ''
              }`}></div>
              <div className="text-left">
                <p className="text-white font-medium text-sm">{feature.title}</p>
                {index === activeFeature && (
                  <p className="text-gray-400 text-xs mt-1 animate-fade-in">
                    {feature.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Network Visualization */}
        <div className="relative bg-black/40 rounded-2xl p-6 border border-white/10">
          <div className="relative h-32 flex items-center justify-center">
            {/* Connecting lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 100">
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#a855f7" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <path 
                d="M60,50 Q100,20 140,50 M60,50 Q100,80 140,50 M100,30 Q120,50 100,70" 
                stroke="url(#connectionGradient)" 
                strokeWidth="1" 
                fill="none"
                className="animate-pulse"
              />
            </svg>

            {/* Network nodes */}
            <div className="absolute left-6 top-1/2 transform -translate-y-1/2">
              <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                <span className="text-black text-xs font-bold">M</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">Meetings</p>
            </div>

            <div className="absolute right-6 top-6">
              <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                <span className="text-black text-xs font-bold">P</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">People</p>
            </div>

            <div className="absolute right-6 bottom-6">
              <div className="w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center">
                <span className="text-black text-xs font-bold">I</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">Ideas</p>
            </div>
          </div>
        </div>
      </div>
    </MobileOptimizedSection>
  );
};

export default MemoryEngineSection;
