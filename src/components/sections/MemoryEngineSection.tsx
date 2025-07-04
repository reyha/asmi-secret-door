
import { useState, useEffect } from 'react';
import MobileOptimizedSection from './MobileOptimizedSection';

const MemoryEngineSection = () => {
  const [activeConnection, setActiveConnection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const connections = [
    {
      source: "Email",
      target: "Meeting",
      description: "Connect meeting prep to recent email threads",
      color: "from-green-400 to-blue-400",
      dotIndex: 0
    },
    {
      source: "Calendar", 
      target: "Person",
      description: "Link past interactions with upcoming meetings",
      color: "from-blue-400 to-purple-400",
      dotIndex: 1
    },
    {
      source: "Conversation",
      target: "Context",
      description: "Transform scattered chats into actionable insights",
      color: "from-purple-400 to-green-400",
      dotIndex: 2
    }
  ];

  const dataPoints = [
    { type: "Emails", position: { x: 20, y: 30 }, color: "bg-green-400", label: "Emails" },
    { type: "Calendar", position: { x: 80, y: 20 }, color: "bg-blue-400", label: "Calendar" },
    { type: "Meetings", position: { x: 70, y: 70 }, color: "bg-purple-400", label: "Meetings" },
    { type: "Conversations", position: { x: 30, y: 80 }, color: "bg-yellow-400", label: "Conversations" }
  ];

  const processSteps = [
    { label: "Capture", color: "bg-green-400" },
    { label: "Connect", color: "bg-blue-400" },
    { label: "Context", color: "bg-purple-400" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveConnection(prev => (prev + 1) % connections.length);
    }, 3000);

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
            Every conversation, meeting, and thought—connected and accessible when you need it most.
          </p>
        </div>

        {/* Scientific Data Connection Visualization */}
        <div className="relative bg-black/40 rounded-2xl p-6 border border-white/10">
          <h3 className="text-sm font-semibold text-white mb-4">
            Neural Context Engine
          </h3>
          
          {/* Data Points Network */}
          <div className="relative h-40">
            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
              <defs>
                {connections.map((conn, index) => (
                  <linearGradient key={index} id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#22c55e" stopOpacity={index === activeConnection ? "0.8" : "0.3"} />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity={index === activeConnection ? "0.8" : "0.3"} />
                  </linearGradient>
                ))}
              </defs>
              
              {/* Dynamic connections - connecting all dots to center */}
              {dataPoints.map((point, index) => (
                <line
                  key={index}
                  x1={point.position.x}
                  y1={point.position.y}
                  x2="50"
                  y2="50"
                  stroke={`url(#gradient-${activeConnection})`}
                  strokeWidth="1"
                  className="transition-all duration-1000"
                />
              ))}
            </svg>

            {/* Data Points with Labels */}
            {dataPoints.map((point, index) => (
              <div
                key={index}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${
                  connections[activeConnection]?.dotIndex === index ? 'animate-pulse scale-125' : ''
                }`}
                style={{
                  left: `${point.position.x}%`,
                  top: `${point.position.y}%`
                }}
              >
                <div className={`w-3 h-3 ${point.color} rounded-full flex items-center justify-center relative`}>
                  {connections[activeConnection]?.dotIndex === index && (
                    <div className={`absolute inset-0 rounded-full ${point.color} opacity-30 animate-ping`}></div>
                  )}
                </div>
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                  <span className="text-xs text-gray-300 whitespace-nowrap">{point.label}</span>
                </div>
              </div>
            ))}

            {/* Center Processing Node */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center animate-pulse">
                <span className="text-black text-xs font-bold">AI</span>
              </div>
            </div>
          </div>

          {/* Active Connection Description */}
          <div className="mt-4 p-3 bg-white/5 rounded-xl border border-white/10">
            <p className="text-xs text-gray-300">
              {connections[activeConnection].description}
            </p>
          </div>
        </div>

        {/* Connection Process Steps with Dynamic Lines */}
        <div className="relative">
          <div className="grid grid-cols-3 gap-2 text-xs relative">
            {/* Connecting lines between steps */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-800 transform -translate-y-1/2 z-0">
              <div className="h-full bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 opacity-50 animate-pulse"></div>
            </div>
            
            {processSteps.map((step, index) => (
              <div key={index} className="p-3 bg-white/5 rounded-xl relative z-10">
                <div className={`w-2 h-2 ${step.color} rounded-full mx-auto mb-2`}></div>
                <p className="text-gray-300">{step.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MobileOptimizedSection>
  );
};

export default MemoryEngineSection;
