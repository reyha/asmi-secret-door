
import { useState, useEffect } from 'react';
import { Brain, Mail, Calendar, MessageCircle, Mic, FileText, User } from 'lucide-react';

const MemoryEngineSection = () => {
  const [memoryPoints, setMemoryPoints] = useState([]);
  const [dataSources, setDataSources] = useState([]);
  const [selectedDataSource, setSelectedDataSource] = useState(null);
  const [graphProgress, setGraphProgress] = useState(0);

  const dataSourceIcons = [
    { icon: <Mic className="text-red-400" size={16} />, label: 'Voice Notes', color: '#f87171', bgColor: 'bg-red-500/20', borderColor: 'border-red-400/30' },
    { icon: <Mail className="text-blue-400" size={16} />, label: 'Emails', color: '#60a5fa', bgColor: 'bg-blue-500/20', borderColor: 'border-blue-400/30' },
    { icon: <Calendar className="text-green-400" size={16} />, label: 'Calendar', color: '#4ade80', bgColor: 'bg-green-500/20', borderColor: 'border-green-400/30' },
    { icon: <MessageCircle className="text-purple-400" size={16} />, label: 'Messages', color: '#c084fc', bgColor: 'bg-purple-500/20', borderColor: 'border-purple-400/30' },
    { icon: <FileText className="text-yellow-400" size={16} />, label: 'Documents', color: '#facc15', bgColor: 'bg-yellow-500/20', borderColor: 'border-yellow-400/30' },
    { icon: <User className="text-pink-400" size={16} />, label: 'Contacts', color: '#f472b6', bgColor: 'bg-pink-500/20', borderColor: 'border-pink-400/30' }
  ];

  useEffect(() => {
    // Animate graph progress
    const progressInterval = setInterval(() => {
      setGraphProgress(prev => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 50);

    // Add memory points progressively
    const pointInterval = setInterval(() => {
      setMemoryPoints(prev => {
        if (prev.length >= 30) return prev;
        const randomDataSource = dataSourceIcons[Math.floor(Math.random() * dataSourceIcons.length)];
        return [...prev, {
          id: Date.now(),
          x: Math.random() * 90 + 5,
          y: Math.random() * 70 + 15,
          time: Date.now(),
          color: randomDataSource.color,
          sourceIndex: dataSourceIcons.indexOf(randomDataSource)
        }];
      });
    }, 150);

    // Show data sources
    const sourceInterval = setInterval(() => {
      setDataSources(prev => {
        if (prev.length >= dataSourceIcons.length) return prev;
        return [...prev, dataSourceIcons[prev.length]];
      });
    }, 600);

    return () => {
      clearInterval(progressInterval);
      clearInterval(pointInterval);
      clearInterval(sourceInterval);
    };
  }, []);

  const handleDataSourceClick = (index) => {
    setSelectedDataSource(selectedDataSource === index ? null : index);
  };

  const filteredMemoryPoints = selectedDataSource !== null 
    ? memoryPoints.filter(point => point.sourceIndex === selectedDataSource)
    : memoryPoints;

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6 text-white">
            Asmi doesn't forget.
          </h2>
          <p className="text-xl text-gray-400 font-inter">
            Context compounds. Intelligence scales.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Memory Graph */}
          <div className="dark-card rounded-3xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-space font-semibold text-white">Contextual Intelligence Graph</h3>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full live-indicator"></div>
                <span className="text-green-400 text-sm font-inter">Learning</span>
              </div>
            </div>
            
            <div className="relative w-full h-80">
              <svg className="w-full h-full" viewBox="0 0 400 300">
                {/* Grid */}
                <defs>
                  <pattern id="grid" width="40" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 30" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="400" height="300" fill="url(#grid)" />
                
                {/* Axes */}
                <line x1="50" y1="250" x2="380" y2="250" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="2" />
                <line x1="50" y1="250" x2="50" y2="30" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="2" />
                
                {/* Dynamic curve */}
                <path 
                  d={`M 50 230 Q ${50 + (graphProgress * 1.5)} ${230 - (graphProgress * 1.2)} ${50 + (graphProgress * 3)} ${230 - (graphProgress * 1.8)} T ${50 + (graphProgress * 3.3)} ${50 + (100 - graphProgress) * 0.8}`}
                  fill="none" 
                  stroke="url(#memoryGradient)" 
                  strokeWidth="3"
                  style={{ 
                    strokeDasharray: graphProgress * 10,
                    strokeDashoffset: (100 - graphProgress) * 5
                  }}
                />
                
                {/* Memory points */}
                {filteredMemoryPoints.map((point, index) => (
                  <circle
                    key={point.id}
                    cx={50 + (point.x / 100) * 330}
                    cy={250 - (point.y / 100) * 220}
                    r="4"
                    fill={point.color}
                    className="memory-dot"
                    style={{ animationDelay: `${index * 100}ms` }}
                  />
                ))}
                
                <defs>
                  <linearGradient id="memoryGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Axis labels */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 font-inter">
                Time (Days)
              </div>
              <div className="absolute top-1/2 left-2 transform -translate-y-1/2 -rotate-90 text-xs text-gray-400 font-inter origin-center">
                Contextual Intelligence
              </div>
            </div>

            {/* Data Sources */}
            <div className="mt-6 border-t border-white/10 pt-6">
              <h4 className="text-sm font-inter font-medium mb-4 text-gray-300">Data Sources</h4>
              <div className="grid grid-cols-3 gap-3">
                {dataSources.map((source, index) => (
                  <button
                    key={index}
                    onClick={() => handleDataSourceClick(index)}
                    className={`flex items-center space-x-2 p-3 rounded-xl transition-all duration-300 dark-card-hover ${
                      selectedDataSource === index 
                        ? `${source.bgColor} ${source.borderColor} border-2` 
                        : 'dark-card border-transparent'
                    }`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {source.icon}
                    <span className={`text-xs font-inter ${selectedDataSource === index ? 'text-white font-medium' : 'text-gray-300'}`}>
                      {source.label}
                    </span>
                  </button>
                ))}
              </div>
              {selectedDataSource !== null && (
                <div className="mt-3 text-xs text-gray-400 font-inter">
                  Showing {filteredMemoryPoints.length} memories from {dataSourceIcons[selectedDataSource].label}
                </div>
              )}
            </div>
          </div>

          {/* Right side content can be added here */}
          <div className="space-y-8">
            <div className="dark-card rounded-3xl p-8">
              <h3 className="text-2xl font-space font-bold text-white mb-4">
                Memory that scales
              </h3>
              <p className="text-gray-300 font-inter leading-relaxed">
                Every conversation, every document, every voice note becomes part of your expanding intelligence network. 
                The more you use Asmi, the smarter it becomes about you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoryEngineSection;
