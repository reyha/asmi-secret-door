
import { useState, useEffect } from 'react';
import { Brain } from 'lucide-react';

const MemoryEngineInvestor = () => {
  const [memoryCount, setMemoryCount] = useState(0);
  const [nodes, setNodes] = useState<Array<{ id: number; x: number; y: number; opacity: number }>>([]);

  useEffect(() => {
    // Count up animation
    const countInterval = setInterval(() => {
      setMemoryCount(prev => {
        if (prev >= 42) return 42;
        return prev + 1;
      });
    }, 50);

    // Add memory nodes
    const nodeInterval = setInterval(() => {
      setNodes(prev => {
        if (prev.length >= 15) return prev;
        return [...prev, {
          id: Date.now(),
          x: Math.random() * 300,
          y: Math.random() * 200,
          opacity: Math.random() * 0.8 + 0.2
        }];
      });
    }, 300);

    return () => {
      clearInterval(countInterval);
      clearInterval(nodeInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1F1F23] via-gray-900 to-[#1F1F23] flex items-center justify-center px-4">
      <div className="max-w-md mx-auto text-center">
        {/* Memory counter */}
        <div className="absolute top-8 right-8 bg-black/60 backdrop-blur-sm rounded-2xl px-4 py-2 border border-[#37D67A]/20">
          <div className="text-[#37D67A] text-sm font-medium">
            Memories captured: {memoryCount}
          </div>
        </div>

        {/* Header */}
        <div className="mb-12">
          <Brain className="text-[#37D67A] mx-auto mb-4 animate-pulse" size={40} />
          <h2 className="text-[28px] font-medium text-white leading-tight">
            Asmi remembers everything.
          </h2>
        </div>

        {/* Animated memory graph */}
        <div className="bg-black/60 backdrop-blur-sm rounded-3xl border border-[#37D67A]/20 p-8 mb-8">
          <div className="relative w-full h-64">
            <svg className="w-full h-full" viewBox="0 0 300 200">
              {/* Grid background */}
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(55, 214, 122, 0.1)" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="300" height="200" fill="url(#grid)" />
              
              {/* Connection lines */}
              {nodes.map((node, index) => (
                nodes.slice(index + 1, index + 3).map((connectedNode, connIndex) => (
                  <line
                    key={`${node.id}-${connectedNode.id}`}
                    x1={node.x}
                    y1={node.y}
                    x2={connectedNode.x}
                    y2={connectedNode.y}
                    stroke="#37D67A"
                    strokeWidth="1"
                    opacity="0.3"
                    className="animate-fade-in"
                  />
                ))
              ))}
              
              {/* Memory nodes */}
              {nodes.map((node) => (
                <circle
                  key={node.id}
                  cx={node.x}
                  cy={node.y}
                  r="3"
                  fill="#37D67A"
                  opacity={node.opacity}
                  className="animate-scale-in"
                >
                  <animate
                    attributeName="r"
                    values="3;5;3"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
              ))}
            </svg>
          </div>
          
          <div className="text-gray-400 text-sm mt-4">
            Context compounds. Intelligence scales.
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoryEngineInvestor;
