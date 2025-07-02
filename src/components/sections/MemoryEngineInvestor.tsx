
import { useState, useEffect } from 'react';

const MemoryEngineInvestor = () => {
  const [nodesVisible, setNodesVisible] = useState(0);
  const [memoryCount, setMemoryCount] = useState(0);

  const nodes = [
    { id: 1, x: 20, y: 30, label: 'Meetings' },
    { id: 2, x: 60, y: 20, label: 'People' },
    { id: 3, x: 80, y: 60, label: 'Tasks' },
    { id: 4, x: 40, y: 70, label: 'Events' },
    { id: 5, x: 10, y: 80, label: 'Notes' },
    { id: 6, x: 70, y: 40, label: 'Context' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (nodesVisible < nodes.length) {
        setNodesVisible(prev => prev + 1);
        setMemoryCount(prev => prev + 7);
      } else {
        setNodesVisible(0);
        setMemoryCount(0);
      }
    }, 800);

    return () => clearInterval(timer);
  }, [nodesVisible]);

  return (
    <div className="min-h-screen bg-[#1F1F23] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Memory counter */}
      <div className="absolute top-8 right-8">
        <div className="bg-[#37D67A]/20 border border-[#37D67A]/50 rounded-full px-3 py-1">
          <span className="text-[#37D67A] text-xs font-medium">
            Memories: {memoryCount}
          </span>
        </div>
      </div>

      <div className="text-center max-w-sm mx-auto">
        <h1 className="text-[28px] font-bold text-white mb-8">
          Asmi remembers everything.
        </h1>

        {/* Memory graph visualization */}
        <div className="relative w-80 h-80 mx-auto">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            {/* Draw connections between nodes */}
            {nodesVisible > 1 && (
              <>
                <line x1="20" y1="30" x2="60" y2="20" stroke="#37D67A" strokeWidth="0.5" opacity="0.6" className="animate-fade-in" />
                <line x1="60" y1="20" x2="80" y2="60" stroke="#37D67A" strokeWidth="0.5" opacity="0.6" className="animate-fade-in" />
                <line x1="80" y1="60" x2="40" y2="70" stroke="#37D67A" strokeWidth="0.5" opacity="0.6" className="animate-fade-in" />
                <line x1="40" y1="70" x2="10" y2="80" stroke="#37D67A" strokeWidth="0.5" opacity="0.6" className="animate-fade-in" />
                <line x1="70" y1="40" x2="60" y2="20" stroke="#37D67A" strokeWidth="0.5" opacity="0.6" className="animate-fade-in" />
              </>
            )}

            {/* Draw nodes */}
            {nodes.slice(0, nodesVisible).map((node, index) => (
              <g key={node.id} className="animate-fade-in">
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="3"
                  fill="#37D67A"
                  className="animate-pulse"
                />
                <text
                  x={node.x}
                  y={node.y - 6}
                  textAnchor="middle"
                  className="text-[4px] fill-white font-medium"
                >
                  {node.label}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MemoryEngineInvestor;
