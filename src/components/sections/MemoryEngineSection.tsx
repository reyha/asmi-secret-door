
import { useState, useEffect, useRef } from 'react';
import { Brain, Calendar, MessageSquare, FileText, Users, Phone, Mail } from 'lucide-react';

const MemoryEngineSection = () => {
  const [currentContext, setCurrentContext] = useState(0);
  const [visibleDots, setVisibleDots] = useState<number[]>([]);
  const [animatingDots, setAnimatingDots] = useState<number[]>([]);
  const [asmiScale, setAsmiScale] = useState(1);
  const sectionRef = useRef<HTMLDivElement>(null);

  const contexts = [
    {
      title: "Meeting Context",
      description: "Asmi remembers who you're meeting, their background, previous conversations, and relevant context for every interaction.",
      icon: <Users className="text-blue-400" size={20} />,
      position: { top: '20%', left: '15%' }
    },
    {
      title: "Communication History", 
      description: "Every email, message, and call is remembered and connected to build a complete picture of your relationships.",
      icon: <MessageSquare className="text-green-400" size={20} />,
      position: { top: '30%', right: '10%' }
    },
    {
      title: "Calendar Intelligence",
      description: "Your schedule patterns, preferences, and availability are learned to optimize future scheduling decisions.",
      icon: <Calendar className="text-purple-400" size={20} />,
      position: { bottom: '35%', left: '20%' }
    },
    {
      title: "Document Memory",
      description: "Important files, notes, and documents are indexed and recalled when relevant to current tasks or conversations.",
      icon: <FileText className="text-orange-400" size={20} />,
      position: { bottom: '20%', right: '15%' }
    },
    {
      title: "Contact Intelligence",
      description: "Deep understanding of your network - who they are, what they do, and how you prefer to communicate with them.",
      icon: <Phone className="text-red-400" size={20} />,
      position: { top: '50%', left: '5%' }
    },
    {
      title: "Email Patterns",
      description: "Your communication style, frequent recipients, and email habits are learned to draft better responses.",
      icon: <Mail className="text-cyan-400" size={20} />,
      position: { top: '60%', right: '8%' }
    }
  ];

  // Auto-cycle through contexts faster
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContext((prev) => (prev + 1) % contexts.length);
    }, 1500); // Changed from 3000 to 1500ms

    return () => clearInterval(interval);
  }, []);

  // Animate dots in sync with text changes
  useEffect(() => {
    // Show dot
    setVisibleDots(prev => [...prev, currentContext]);
    setAnimatingDots(prev => [...prev, currentContext]);
    
    // Animate data flow and scale Asmi
    setTimeout(() => {
      setAsmiScale(prev => Math.min(prev + 0.1, 1.6));
    }, 200);

    // Stop dot animation
    setTimeout(() => {
      setAnimatingDots(prev => prev.filter(dot => dot !== currentContext));
    }, 1000);
  }, [currentContext]);

  return (
    <div ref={sectionRef} className="min-h-screen bg-black py-16 flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-black to-purple-900/10" />
      
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-space font-bold text-white mb-6 leading-tight">
            Memory Engine
          </h2>
          <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
            Asmi builds a comprehensive understanding of your work, relationships, and preferences
          </p>
        </div>

        {/* Main Visualization */}
        <div className="relative h-96 mb-16">
          {/* Central Asmi Hub */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div 
              className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center border-4 border-white/20 shadow-2xl transition-transform duration-500"
              style={{ transform: `scale(${asmiScale})` }}
            >
              <span className="text-white font-bold text-lg font-space">Asmi</span>
            </div>
          </div>

          {/* Context Dots */}
          {contexts.map((context, index) => (
            <div
              key={index}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={context.position}
            >
              {/* Connection Line */}
              {visibleDots.includes(index) && (
                <svg 
                  className="absolute inset-0 w-full h-full pointer-events-none z-10" 
                  style={{ 
                    width: '400px', 
                    height: '300px',
                    left: '-200px',
                    top: '-150px'
                  }}
                >
                  <line
                    x1="200"
                    y1="150"
                    x2="200"
                    y2="150"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    className={`transition-all duration-1000 ${
                      animatingDots.includes(index) ? 'animate-pulse' : ''
                    }`}
                  >
                    <animate
                      attributeName="x2"
                      values="200;200"
                      dur="1s"
                      begin="0s"
                    />
                    <animate
                      attributeName="y2"
                      values="150;150"
                      dur="1s"
                      begin="0s"
                    />
                  </line>
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(34, 197, 94, 0.8)" />
                      <stop offset="100%" stopColor="rgba(59, 130, 246, 0.8)" />
                    </linearGradient>
                  </defs>
                </svg>
              )}

              {/* Dot */}
              <div 
                className={`w-16 h-16 rounded-full border-2 flex items-center justify-center transition-all duration-500 relative z-20 ${
                  visibleDots.includes(index)
                    ? 'bg-white/10 border-white/30 scale-100 opacity-100' 
                    : 'bg-transparent border-gray-700 scale-75 opacity-50'
                } ${
                  animatingDots.includes(index) ? 'animate-pulse shadow-lg shadow-green-400/50' : ''
                }`}
              >
                {context.icon}
                
                {/* Data particles */}
                {animatingDots.includes(index) && (
                  <>
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-green-400 rounded-full animate-ping"
                        style={{
                          top: `${20 + i * 10}%`,
                          left: `${20 + i * 10}%`,
                          animationDelay: `${i * 100}ms`,
                          animationDuration: '1s'
                        }}
                      />
                    ))}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Context Description - Made More Prominent */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="min-h-[120px] flex items-center justify-center">
            <div className="space-y-4">
              <h3 className="text-3xl font-space font-bold text-white transition-all duration-300">
                {contexts[currentContext].title}
              </h3>
              <p className="text-xl text-gray-300 font-light leading-relaxed transition-all duration-300">
                {contexts[currentContext].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoryEngineSection;
