
import { useState, useEffect } from 'react';

const MemoryGraphSection = () => {
  const [memoryNodes, setMemoryNodes] = useState([]);
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    // Animate memory nodes appearing
    const nodeTimer = setInterval(() => {
      setMemoryNodes(prev => {
        if (prev.length >= 12) return prev;
        return [...prev, {
          id: Date.now(),
          x: Math.random() * 80 + 10,
          y: Math.random() * 70 + 15,
          size: Math.random() * 6 + 4,
          opacity: 0
        }];
      });
    }, 400);

    // Animate connections
    const connectionTimer = setInterval(() => {
      setConnections(prev => {
        if (prev.length >= 8) return prev;
        return [...prev, {
          id: Date.now(),
          x1: Math.random() * 80 + 10,
          y1: Math.random() * 70 + 15,
          x2: Math.random() * 80 + 10,
          y2: Math.random() * 70 + 15,
          opacity: 0
        }];
      });
    }, 800);

    return () => {
      clearInterval(nodeTimer);
      clearInterval(connectionTimer);
    };
  }, []);

  // Animate opacity for nodes and connections
  useEffect(() => {
    const timer = setTimeout(() => {
      setMemoryNodes(prev => 
        prev.map(node => ({ ...node, opacity: 1 }))
      );
      setConnections(prev => 
        prev.map(conn => ({ ...conn, opacity: 0.6 }))
      );
    }, 100);

    return () => clearTimeout(timer);
  }, [memoryNodes.length, connections.length]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-black to-gray-900 relative overflow-hidden">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-light mb-4 opacity-0 animate-fade-in">
          Asmi doesn't forget.
        </h2>
      </div>

      {/* Memory visualization */}
      <div className="relative w-full max-w-md h-80 bg-black/40 backdrop-blur-sm rounded-3xl border border-green-400/20 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          {/* Background grid */}
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(16, 185, 129, 0.1)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
          
          {/* Connections */}
          {connections.map((conn) => (
            <line
              key={conn.id}
              x1={conn.x1}
              y1={conn.y1}
              x2={conn.x2}
              y2={conn.y2}
              stroke="rgba(16, 185, 129, 0.6)"
              strokeWidth="0.5"
              opacity={conn.opacity}
              className="transition-opacity duration-1000"
            />
          ))}
          
          {/* Memory nodes */}
          {memoryNodes.map((node) => (
            <circle
              key={node.id}
              cx={node.x}
              cy={node.y}
              r={node.size / 10}
              fill="#10b981"
              opacity={node.opacity}
              className="transition-all duration-1000"
            >
              <animate
                attributeName="r"
                values={`${node.size / 10};${node.size / 8};${node.size / 10}`}
                dur="3s"
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </svg>
      </div>

      <div className="text-center mt-8 opacity-0 animate-fade-in" style={{ animationDelay: '2s' }}>
        <p className="text-xl text-green-300 font-light">
          Context compounds.
        </p>
      </div>
    </div>
  );
};

export default MemoryGraphSection;
