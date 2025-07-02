
import { useEffect, useRef, useState } from 'react';

interface Node {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  connections: number[];
  isActive: boolean;
  pulseStartTime: number;
}

const NeuralBloomBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const [nodes, setNodes] = useState<Node[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Initialize nodes
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    // Create nodes
    const nodeCount = 40;
    const newNodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      newNodes.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        connections: [],
        isActive: false,
        pulseStartTime: 0
      });
    }

    // Create connections
    newNodes.forEach((node, i) => {
      const maxConnections = 3;
      let connectionCount = 0;
      
      for (let j = 0; j < newNodes.length && connectionCount < maxConnections; j++) {
        if (i !== j) {
          const distance = Math.sqrt(
            Math.pow(node.x - newNodes[j].x, 2) + 
            Math.pow(node.y - newNodes[j].y, 2)
          );
          
          if (distance < 150) {
            node.connections.push(j);
            connectionCount++;
          }
        }
      }
    });

    setNodes(newNodes);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  // Animation loop
  useEffect(() => {
    if (!nodes.length) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let lastFireTime = 0;

    const animate = (currentTime: number) => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      // Fire random nodes every 2-3 seconds
      if (currentTime - lastFireTime > 2000 + Math.random() * 1000) {
        const randomNode = nodes[Math.floor(Math.random() * nodes.length)];
        randomNode.isActive = true;
        randomNode.pulseStartTime = currentTime;
        lastFireTime = currentTime;
      }

      // Update and draw nodes
      nodes.forEach((node) => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Wrap around edges
        if (node.x < 0) node.x = dimensions.width;
        if (node.x > dimensions.width) node.x = 0;
        if (node.y < 0) node.y = dimensions.height;
        if (node.y > dimensions.height) node.y = 0;

        // Calculate pulse effect
        let pulseIntensity = 0.4;
        let nodeScale = 1;
        
        if (node.isActive) {
          const elapsed = currentTime - node.pulseStartTime;
          if (elapsed < 600) {
            const progress = elapsed / 600;
            pulseIntensity = 0.4 + (0.6 * (1 - progress));
            nodeScale = 1 + (0.3 * Math.sin(progress * Math.PI));
          } else {
            node.isActive = false;
          }
        }

        // Draw connections
        ctx.strokeStyle = `rgba(255, 255, 255, ${node.isActive ? 0.3 : 0.1})`;
        ctx.lineWidth = 1;
        
        node.connections.forEach((connectedId) => {
          const connectedNode = nodes[connectedId];
          if (connectedNode) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(connectedNode.x, connectedNode.y);
            ctx.stroke();
          }
        });

        // Draw node
        ctx.fillStyle = `rgba(166, 244, 217, ${pulseIntensity})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2 * nodeScale, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [nodes, dimensions]);

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    // Find nearest node and activate it
    let nearestNode: Node | null = null;
    let nearestDistance = Infinity;

    nodes.forEach((node) => {
      const distance = Math.sqrt(
        Math.pow(clickX - node.x, 2) + Math.pow(clickY - node.y, 2)
      );
      
      if (distance < nearestDistance && distance < 50) {
        nearestDistance = distance;
        nearestNode = node;
      }
    });

    if (nearestNode) {
      nearestNode.isActive = true;
      nearestNode.pulseStartTime = Date.now();
    }
  };

  return (
    <canvas
      ref={canvasRef}
      width={dimensions.width}
      height={dimensions.height}
      onClick={handleCanvasClick}
      className="absolute inset-0 pointer-events-auto cursor-pointer"
      style={{
        background: 'linear-gradient(135deg, #121214 0%, #1B1B1F 100%)'
      }}
    />
  );
};

export default NeuralBloomBackground;
