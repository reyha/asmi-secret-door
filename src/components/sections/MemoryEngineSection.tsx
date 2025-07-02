
import { useState, useEffect } from 'react';
import { Brain, Mail, Calendar, MessageCircle, Mic, FileText, User } from 'lucide-react';

const MemoryEngineSection = () => {
  const [showDemo, setShowDemo] = useState(false);
  const [memoryPoints, setMemoryPoints] = useState([]);
  const [dataSources, setDataSources] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedDataSource, setSelectedDataSource] = useState(null);
  const [typedText, setTypedText] = useState('');

  const dataSourceIcons = [
    { icon: <Mic className="text-red-400" size={16} />, label: 'Voice Notes', color: '#f87171', bgColor: 'bg-red-500/20', borderColor: 'border-red-400/30' },
    { icon: <Mail className="text-blue-400" size={16} />, label: 'Emails', color: '#60a5fa', bgColor: 'bg-blue-500/20', borderColor: 'border-blue-400/30' },
    { icon: <Calendar className="text-green-400" size={16} />, label: 'Calendar', color: '#4ade80', bgColor: 'bg-green-500/20', borderColor: 'border-green-400/30' },
    { icon: <MessageCircle className="text-purple-400" size={16} />, label: 'Messages', color: '#c084fc', bgColor: 'bg-purple-500/20', borderColor: 'border-purple-400/30' },
    { icon: <FileText className="text-yellow-400" size={16} />, label: 'Documents', color: '#facc15', bgColor: 'bg-yellow-500/20', borderColor: 'border-yellow-400/30' },
    { icon: <User className="text-pink-400" size={16} />, label: 'Contacts', color: '#f472b6', bgColor: 'bg-pink-500/20', borderColor: 'border-pink-400/30' }
  ];

  const steps = [
    {
      title: 'Voice note → Stored',
      description: '"Had a great call with Raj about the partnership. He\'s interested in the API integration."',
      icon: <Mic className="text-green-400" size={20} />,
      color: 'from-green-400/20 to-green-500/10'
    },
    {
      title: 'Context linked',
      description: 'Asmi connects: Raj → Partnership → API → Your roadmap → Previous technical discussions + Email thread about API specs + Calendar meetings with Raj',
      icon: <Brain className="text-blue-400" size={20} />,
      color: 'from-blue-400/20 to-blue-500/10'
    },
    {
      title: 'Deep insights generated',
      description: 'Raj (CTO at TechCorp) → Met 3x this quarter → Always asks about scalability → Prefers technical demos → Decision maker for $50K+ deals → Best contact time: 2-4 PM → Responds well to data-driven pitches',
      subtext: 'Context from: Voice notes (5), Email threads (12), Calendar meetings (3), LinkedIn profile',
      icon: <MessageCircle className="text-purple-400" size={20} />,
      color: 'from-purple-400/20 to-purple-500/10'
    }
  ];

  const highlightText = "Compounding always wins!";

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDemo(true);
    }, 1000);

    // Generate memory points with random colors
    const pointInterval = setInterval(() => {
      setMemoryPoints(prev => {
        if (prev.length >= 25) return prev;
        const randomDataSource = dataSourceIcons[Math.floor(Math.random() * dataSourceIcons.length)];
        return [...prev, {
          id: Date.now(),
          x: Math.random() * 100,
          y: Math.random() * 80 + 10,
          time: Date.now(),
          opacity: 1,
          color: randomDataSource.color,
          sourceIndex: dataSourceIcons.indexOf(randomDataSource)
        }];
      });
    }, 200);

    // Show data sources progressively
    const sourceInterval = setInterval(() => {
      setDataSources(prev => {
        if (prev.length >= dataSourceIcons.length) return prev;
        return [...prev, dataSourceIcons[prev.length]];
      });
    }, 800);

    // Progress through steps with smoother animation
    const stepInterval = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % steps.length);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearInterval(pointInterval);
      clearInterval(sourceInterval);
      clearInterval(stepInterval);
    };
  }, []);

  // Typewriter effect for highlight text
  useEffect(() => {
    if (currentStep === 2 && showDemo) {
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i < highlightText.length) {
          setTypedText(highlightText.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typeInterval);
        }
      }, 80);
      return () => clearInterval(typeInterval);
    }
  }, [currentStep, showDemo]);

  const handleDataSourceClick = (index) => {
    setSelectedDataSource(selectedDataSource === index ? null : index);
  };

  const filteredMemoryPoints = selectedDataSource !== null 
    ? memoryPoints.filter(point => point.sourceIndex === selectedDataSource)
    : memoryPoints;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight leading-tight">
            Asmi doesn't forget.
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 font-light">
            Context compounds. Intelligence scales.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Memory visualization */}
          <div className="relative">
            <div className="bg-black/60 backdrop-blur-sm rounded-3xl border border-green-400/20 p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-medium">Contextual Intelligence Graph</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm">Learning</span>
                </div>
              </div>
              
              {/* Scientific graph */}
              <div className="relative w-full h-80">
                <svg className="w-full h-full" viewBox="0 0 400 300">
                  {/* Grid lines */}
                  <defs>
                    <pattern id="grid" width="40" height="30" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 30" fill="none" stroke="rgba(16, 185, 129, 0.05)" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="400" height="300" fill="url(#grid)" />
                  
                  {/* Axes */}
                  <line x1="40" y1="260" x2="380" y2="260" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="2" />
                  <line x1="40" y1="260" x2="40" y2="20" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="2" />
                  
                  {/* Exponential curve */}
                  <path d="M 40 240 Q 120 200 200 120 T 380 40" 
                        fill="none" 
                        stroke="url(#memoryGradient)" 
                        strokeWidth="3"
                        className="animate-pulse" />
                  
                  {/* Memory points */}
                  {filteredMemoryPoints.map((point, index) => (
                    <circle
                      key={point.id}
                      cx={40 + (point.x / 100) * 340}
                      cy={260 - (point.y / 100) * 240}
                      r="3"
                      fill={point.color}
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
                      <stop offset="50%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Axis labels - Fixed positioning */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-400">
                  Time (Days)
                </div>
                <div className="absolute top-1/2 left-1 transform -translate-y-1/2 -rotate-90 text-xs text-gray-400 origin-center">
                  Contextual Intelligence
                </div>
              </div>

              {/* Interactive data sources */}
              <div className="mt-6 border-t border-white/10 pt-6">
                <h4 className="text-sm font-medium mb-4 text-gray-300">Data Sources</h4>
                <div className="grid grid-cols-3 gap-3">
                  {dataSources.map((source, index) => (
                    <button
                      key={index}
                      onClick={() => handleDataSourceClick(index)}
                      className={`flex items-center space-x-2 p-2 rounded-lg animate-scale-in transition-all duration-300 ${
                        selectedDataSource === index 
                          ? `${source.bgColor} ${source.borderColor} border-2 scale-105` 
                          : 'bg-white/5 hover:bg-white/10 border border-transparent'
                      }`}
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      {source.icon}
                      <span className={`text-xs ${selectedDataSource === index ? 'text-white font-medium' : source.color}`}>
                        {source.label}
                      </span>
                    </button>
                  ))}
                </div>
                {selectedDataSource !== null && (
                  <div className="mt-3 text-xs text-gray-400">
                    Showing {filteredMemoryPoints.length} memories from {dataSourceIcons[selectedDataSource].label}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* How it works timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-light mb-8">How it works</h3>
            
            {steps.map((step, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ease-out ${
                  currentStep >= index ? 'opacity-100 translate-x-0 scale-100' : 'opacity-40 translate-x-4 scale-95'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`p-6 bg-gradient-to-r ${step.color} border border-white/20 rounded-2xl backdrop-blur-sm transform transition-all duration-500`}>
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-white/10 rounded-xl flex-shrink-0">
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      {/* Animated title */}
                      <div className="flex items-center space-x-3 mb-3">
                        {currentStep >= index && (
                          <>
                            <span className="font-medium text-white animate-fade-in">{step.title.split(' → ')[0]}</span>
                            <span className="text-gray-400 animate-fade-in" style={{ animationDelay: '200ms' }}>→</span>
                            <span className="font-medium text-white animate-fade-in" style={{ animationDelay: '400ms' }}>{step.title.split(' → ')[1]}</span>
                          </>
                        )}
                      </div>
                      
                      {/* Animated description */}
                      {currentStep >= index && (
                        <div className="space-y-2">
                          <p className="text-gray-300 text-sm font-light leading-relaxed animate-fade-in" style={{ animationDelay: '600ms' }}>
                            {step.description}
                          </p>
                          {step.subtext && (
                            <p className="text-gray-500 text-xs animate-fade-in" style={{ animationDelay: '800ms' }}>
                              {step.subtext}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Key insight with typewriter effect */}
            <div className={`transition-all duration-1000 delay-1000 ${showDemo ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="p-8 bg-gradient-to-r from-green-400/40 to-blue-400/30 border-2 border-green-400/50 rounded-3xl backdrop-blur-sm text-center shadow-2xl shadow-green-400/20">
                <h4 className="text-4xl font-bold mb-4 text-green-400 min-h-[3rem] flex items-center justify-center">
                  {typedText}
                  {typedText.length < highlightText.length && (
                    <span className="animate-pulse">|</span>
                  )}
                </h4>
                <p className="text-gray-300 text-base font-light leading-relaxed">
                  Asmi compounds each day to become super-intelligent, high agency version of yourself.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoryEngineSection;
