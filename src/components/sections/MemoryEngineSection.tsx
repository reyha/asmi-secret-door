import { useState, useEffect, useRef } from 'react';

const MemoryEngineSection = () => {
  const [visibleNodes, setVisibleNodes] = useState<number[]>([]);
  const [connectionProgress, setConnectionProgress] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const fullText = "Your memory, working for you. Every conversation, meeting, and thought—connected and accessible when you need it most.";

  const memoryNodes = [
    { id: 1, x: 20, y: 30, label: 'Meetings', color: 'bg-green-400' },
    { id: 2, x: 70, y: 20, label: 'People', color: 'bg-blue-400' },
    { id: 3, x: 15, y: 70, label: 'Ideas', color: 'bg-purple-400' },
    { id: 4, x: 60, y: 75, label: 'Tasks', color: 'bg-orange-400' },
    { id: 5, x: 45, y: 45, label: 'Context', color: 'bg-pink-400' },
    { id: 6, x: 85, y: 60, label: 'Notes', color: 'bg-cyan-400' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (!isVisible) return;
    
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [isVisible, fullText]);

  useEffect(() => {
    if (!isVisible) return;
    
    const intervals: NodeJS.Timeout[] = [];
    
    memoryNodes.forEach((_, index) => {
      const timeout = setTimeout(() => {
        setVisibleNodes(prev => [...prev, index]);
      }, index * 300);
      intervals.push(timeout);
    });

    const connectionTimeout = setTimeout(() => {
      const progressInterval = setInterval(() => {
        setConnectionProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + 2;
        });
      }, 50);
      intervals.push(progressInterval);
    }, memoryNodes.length * 300 + 500);

    return () => intervals.forEach(clearTimeout);
  }, [isVisible]);

  return (
    <div ref={sectionRef} className="min-h-screen bg-black py-20 flex items-center">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-space font-bold text-white mb-8 leading-tight">
              Memory that scales.
            </h2>
            
            <p className="text-xl text-gray-300 font-inter leading-relaxed mb-8 min-h-[4rem]">
              {typedText}
              {typedText.length < fullText.length && <span className="animate-pulse text-green-400">|</span>}
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300 font-inter">Real-time context awareness</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span className="text-gray-300 font-inter">Intelligent connection mapping</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <span className="text-gray-300 font-inter">Predictive assistance</span>
              </div>
            </div>
          </div>

          {/* Right: Memory Graph Visualization */}
          <div className="relative h-96 bg-black/50 rounded-3xl border border-white/10 overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#333" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            {/* Memory nodes */}
            {memoryNodes.map((node, index) => (
              <div
                key={node.id}
                className={`absolute transition-all duration-700 ${
                  visibleNodes.includes(index) ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                }`}
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  transform: 'translate(-50%, -50%)',
                  animationDelay: `${index * 200}ms`
                }}
              >
                <div className={`${node.color} rounded-full p-3 shadow-lg relative animate-pulse`}>
                  <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white font-medium whitespace-nowrap">
                    {node.label}
                  </div>
                </div>
              </div>
            ))}

            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4"/>
                </linearGradient>
              </defs>
              
              {visibleNodes.length > 1 && memoryNodes.slice(0, visibleNodes.length).map((node, index) => 
                memoryNodes.slice(index + 1, visibleNodes.length).map((targetNode) => (
                  <line
                    key={`${node.id}-${targetNode.id}`}
                    x1={`${node.x}%`}
                    y1={`${node.y}%`}
                    x2={`${targetNode.x}%`}
                    y2={`${targetNode.y}%`}
                    stroke="url(#connectionGradient)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    opacity={connectionProgress / 100}
                    className="animate-pulse"
                    style={{
                      strokeDashoffset: `${20 - (connectionProgress / 5)}`,
                      transition: 'all 0.5s ease-in-out'
                    }}
                  />
                ))
              )}
            </svg>

            {/* Central pulse effect */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-20 h-20 bg-green-400/10 rounded-full animate-ping"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-green-400/20 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoryEngineSection;
