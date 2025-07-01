import { useState, useEffect } from 'react';
import { Brain, Clock, User, MessageCircle, Mic } from 'lucide-react';

const MemoryEngineSection = () => {
  const [showDemo, setShowDemo] = useState(false);
  const [memoryPoints, setMemoryPoints] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDemo(true);
    }, 1000);

    // Generate memory points over time
    const pointInterval = setInterval(() => {
      setMemoryPoints(prev => {
        if (prev.length >= 20) return prev;
        return [...prev, {
          id: Date.now(),
          x: Math.random() * 100,
          y: Math.random() * 80 + 10,
          time: Date.now(),
          opacity: 1
        }];
      });
    }, 300);

    return () => {
      clearTimeout(timer);
      clearInterval(pointInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight leading-tight">
            The only assistant that <span className="text-green-400 font-medium">remembers everything</span> that matters
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 font-light">
            Context compounding over time
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Memory visualization */}
          <div className="relative">
            <div className="bg-black/60 backdrop-blur-sm rounded-3xl border border-green-400/20 p-8 h-96 overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-medium">Memory Graph</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm">Building context</span>
                </div>
              </div>
              
              {/* Scientific graph */}
              <div className="relative w-full h-64">
                <svg className="w-full h-full" viewBox="0 0 400 200">
                  {/* Grid lines */}
                  <defs>
                    <pattern id="grid" width="40" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 20" fill="none" stroke="rgba(16, 185, 129, 0.1)" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="400" height="200" fill="url(#grid)" />
                  
                  {/* Axes */}
                  <line x1="40" y1="180" x2="360" y2="180" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="2" />
                  <line x1="40" y1="180" x2="40" y2="20" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="2" />
                  
                  {/* Curve showing memory building */}
                  <path d="M 40 160 Q 120 140 200 100 T 360 40" 
                        fill="none" 
                        stroke="url(#memoryGradient)" 
                        strokeWidth="3"
                        className="animate-pulse" />
                  
                  {/* Memory points */}
                  {memoryPoints.map((point, index) => (
                    <circle
                      key={point.id}
                      cx={40 + (point.x / 100) * 320}
                      cy={180 - (point.y / 100) * 160}
                      r="3"
                      fill="#10b981"
                      opacity={point.opacity}
                      className="animate-fade-in"
                    >
                      <animate
                        attributeName="r"
                        values="3;5;3"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  ))}
                  
                  <defs>
                    <linearGradient id="memoryGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Labels */}
                <div className="absolute bottom-0 left-0 text-xs text-gray-500">Time</div>
                <div className="absolute top-0 left-0 text-xs text-gray-500 transform -rotate-90 origin-left">Context Intelligence</div>
              </div>
            </div>
          </div>

          {/* Demo flow */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-light mb-8">How it works</h3>
            
            {/* Step 1 */}
            <div className={`transition-all duration-1000 ${showDemo ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="flex items-start space-x-4 p-6 bg-green-400/10 border border-green-400/20 rounded-2xl">
                <div className="p-2 bg-green-400/20 rounded-xl">
                  <Mic className="text-green-400" size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-2">Voice note → Stored</h4>
                  <p className="text-gray-300 text-sm font-light">
                    "Had a great call with Raj about the partnership. He's interested in the API integration."
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className={`transition-all duration-1000 delay-500 ${showDemo ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="flex items-start space-x-4 p-6 bg-blue-400/10 border border-blue-400/20 rounded-2xl">
                <div className="p-2 bg-blue-400/20 rounded-xl">
                  <Brain className="text-blue-400" size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-2">Context linked</h4>
                  <p className="text-gray-300 text-sm font-light">
                    Asmi connects: Raj → Partnership → API → Your roadmap → Previous technical discussions
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className={`transition-all duration-1000 delay-1000 ${showDemo ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="flex items-start space-x-4 p-6 bg-purple-400/10 border border-purple-400/20 rounded-2xl">
                <div className="p-2 bg-purple-400/20 rounded-xl">
                  <MessageCircle className="text-purple-400" size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-2">Instant recall</h4>
                  <p className="text-gray-300 text-sm font-light mb-3">
                    "What did I discuss with Raj last month?"
                  </p>
                  <div className="bg-black/40 rounded-xl p-3 text-xs">
                    <span className="text-purple-400">Asmi:</span> "In your March call, Raj mentioned interest in API integration for their mobile app. You discussed technical requirements and next steps."
                  </div>
                </div>
              </div>
            </div>

            {/* Key insight */}
            <div className={`transition-all duration-1000 delay-1500 ${showDemo ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="p-6 bg-gradient-to-r from-green-400/20 to-blue-400/20 border border-green-400/30 rounded-2xl backdrop-blur-sm">
                <h4 className="font-medium mb-2 text-green-400">Memory compounding = increasing productivity</h4>
                <p className="text-gray-300 text-sm font-light">
                  Every conversation, note, and context builds your AI's understanding. The longer you use it, the more valuable it becomes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-green-400/10 to-green-500/5 border border-green-400/20 rounded-3xl backdrop-blur-sm">
            <p className="text-xl md:text-2xl text-green-300 font-light mb-4">
              "This is the core IP — the memory engine that makes personal AI actually personal."
            </p>
            <p className="text-gray-400 font-light">
              Context doesn't die when you close the tab
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoryEngineSection;
