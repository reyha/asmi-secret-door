
import { useState, useEffect } from 'react';
import MobileOptimizedSection from './MobileOptimizedSection';

const MemoryEngineSection = () => {
  const [activeConnection, setActiveConnection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [centerScale, setCenterScale] = useState(1);

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

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveConnection(prev => {
        const newIndex = (prev + 1) % connections.length;
        // Gradually increase center scale as data accumulates
        setCenterScale(prevScale => Math.min(prevScale + 0.15, 1.5));
        return newIndex;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <MobileOptimizedSection maxWidth="sm">
      <div className="space-y-6 text-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-white leading-tight">
            Memory that scales.
          </h2>
          
          <p className="text-base text-gray-300 leading-relaxed px-2">
            Every conversation, meeting and mail - linked and pulling insights when you need it most.
          </p>
        </div>

        {/* Scientific Data Connection Visualization */}
        <div className="relative bg-black/40 rounded-2xl p-6 border border-white/10">
          <h3 className="text-sm font-semibold text-white mb-6">
            Neural Context Engine
          </h3>
          
          {/* Data Points Network */}
          <div className="relative h-48 mb-6">
            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
              <defs>
                {connections.map((conn, index) => (
                  <linearGradient key={index} id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#22c55e" stopOpacity={index === activeConnection ? "0.9" : "0.2"} />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity={index === activeConnection ? "0.9" : "0.2"} />
                  </linearGradient>
                ))}
                
                {/* Animated flow gradient */}
                <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#22c55e" stopOpacity="0">
                    <animate attributeName="stop-opacity" values="0;1;0" dur="1s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8">
                    <animate attributeName="stop-opacity" values="0.2;1;0.2" dur="1s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0">
                    <animate attributeName="stop-opacity" values="0;1;0" dur="1s" repeatCount="indefinite" />
                  </stop>
                </linearGradient>
              </defs>
              
              {/* Dynamic connections - connecting active dot to center with animated flow */}
              {dataPoints.map((point, index) => (
                <g key={index}>
                  {/* Base connection line */}
                  <line
                    x1={point.position.x}
                    y1={point.position.y}
                    x2="50"
                    y2="50"
                    stroke={`url(#gradient-${activeConnection})`}
                    strokeWidth={connections[activeConnection]?.dotIndex === index ? "2" : "1"}
                    className="transition-all duration-1000"
                  />
                  
                  {/* Animated flow line for active connection */}
                  {connections[activeConnection]?.dotIndex === index && (
                    <line
                      x1={point.position.x}
                      y1={point.position.y}
                      x2="50"
                      y2="50"
                      stroke="url(#flow-gradient)"
                      strokeWidth="3"
                      className="animate-pulse"
                    />
                  )}
                </g>
              ))}
            </svg>

            {/* Data Points with Labels */}
            {dataPoints.map((point, index) => (
              <div
                key={index}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                  connections[activeConnection]?.dotIndex === index 
                    ? 'animate-pulse scale-150 z-10' 
                    : 'scale-100 opacity-70'
                }`}
                style={{
                  left: `${point.position.x}%`,
                  top: `${point.position.y}%`
                }}
              >
                <div className={`w-4 h-4 ${point.color} rounded-full flex items-center justify-center relative shadow-lg`}>
                  {connections[activeConnection]?.dotIndex === index && (
                    <>
                      <div className={`absolute inset-0 rounded-full ${point.color} opacity-40 animate-ping scale-150`}></div>
                      <div className={`absolute inset-0 rounded-full ${point.color} opacity-60 animate-ping scale-125 animation-delay-200`}></div>
                    </>
                  )}
                </div>
                <div className="absolute top-5 left-1/2 transform -translate-x-1/2">
                  <span className={`text-xs whitespace-nowrap transition-all duration-300 ${
                    connections[activeConnection]?.dotIndex === index 
                      ? 'text-white font-semibold scale-110' 
                      : 'text-gray-400'
                  }`}>
                    {point.label}
                  </span>
                </div>
              </div>
            ))}

            {/* Center Asmi Node - Slowly Growing */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div 
                className="bg-white rounded-full flex items-center justify-center shadow-xl transition-all duration-[3000ms] ease-out"
                style={{
                  width: `${48 * centerScale}px`,
                  height: `${48 * centerScale}px`,
                  boxShadow: `0 0 ${20 * centerScale}px rgba(34, 197, 94, 0.3)`
                }}
              >
                <span 
                  className="text-black font-bold transition-all duration-[3000ms] ease-out"
                  style={{ fontSize: `${14 * Math.min(centerScale, 1.2)}px` }}
                >
                  Asmi
                </span>
              </div>
            </div>
          </div>

          {/* Active Connection Description - More Prominent */}
          <div className="p-4 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm">
            <p className="text-lg text-white font-medium leading-relaxed">
              {connections[activeConnection].description}
            </p>
          </div>
        </div>
      </div>
    </MobileOptimizedSection>
  );
};

export default MemoryEngineSection;
