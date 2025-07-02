
import { useState, useEffect } from 'react';
import { Brain, Mail, Calendar, MessageCircle, Mic, FileText, User } from 'lucide-react';

const MemoryEngineSection = () => {
  const [showDemo, setShowDemo] = useState(false);
  const [memoryPoints, setMemoryPoints] = useState([]);
  const [dataSources, setDataSources] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);

  const dataSourceIcons = [
    { icon: <Mic className="text-red-400" size={16} />, label: 'Voice Notes', color: 'text-red-400' },
    { icon: <Mail className="text-blue-400" size={16} />, label: 'Emails', color: 'text-blue-400' },
    { icon: <Calendar className="text-green-400" size={16} />, label: 'Calendar', color: 'text-green-400' },
    { icon: <MessageCircle className="text-purple-400" size={16} />, label: 'Messages', color: 'text-purple-400' },
    { icon: <FileText className="text-yellow-400" size={16} />, label: 'Documents', color: 'text-yellow-400' },
    { icon: <User className="text-pink-400" size={16} />, label: 'Contacts', color: 'text-pink-400' }
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDemo(true);
    }, 1000);

    // Generate memory points over time
    const pointInterval = setInterval(() => {
      setMemoryPoints(prev => {
        if (prev.length >= 25) return prev;
        return [...prev, {
          id: Date.now(),
          x: Math.random() * 100,
          y: Math.random() * 80 + 10,
          time: Date.now(),
          opacity: 1
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

    // Progress through steps
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
                  {memoryPoints.map((point, index) => (
                    <circle
                      key={point.id}
                      cx={40 + (point.x / 100) * 340}
                      cy={260 - (point.y / 100) * 240}
                      r="2"
                      fill="#10b981"
                      opacity={point.opacity}
                      className="animate-fade-in"
                    >
                      <animate
                        attributeName="r"
                        values="2;4;2"
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
                
                {/* Axis labels */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-400">
                  Time (Days)
                </div>
                <div className="absolute top-1/2 left-2 transform -translate-y-1/2 -rotate-90 text-xs text-gray-400 origin-center">
                  Contextual Intelligence
                </div>
              </div>

              {/* Data sources */}
              <div className="mt-6 border-t border-white/10 pt-6">
                <h4 className="text-sm font-medium mb-4 text-gray-300">Data Sources</h4>
                <div className="grid grid-cols-3 gap-3">
                  {dataSources.map((source, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 p-2 bg-white/5 rounded-lg animate-scale-in"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      {source.icon}
                      <span className={`text-xs ${source.color}`}>{source.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* How it works timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-light mb-8">How it works</h3>
            
            {steps.map((step, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  currentStep >= index ? 'opacity-100 translate-x-0' : 'opacity-30 translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 500}ms` }}
              >
                <div className={`p-6 bg-gradient-to-r ${step.color} border border-white/20 rounded-2xl backdrop-blur-sm`}>
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
                            <span className="text-gray-400 animate-fade-in" style={{ animationDelay: '300ms' }}>→</span>
                            <span className="font-medium text-white animate-fade-in" style={{ animationDelay: '600ms' }}>{step.title.split(' → ')[1]}</span>
                          </>
                        )}
                      </div>
                      
                      {/* Animated description */}
                      {currentStep >= index && (
                        <div className="space-y-2">
                          <p className="text-gray-300 text-sm font-light leading-relaxed animate-fade-in" style={{ animationDelay: '900ms' }}>
                            {step.description}
                          </p>
                          {step.subtext && (
                            <p className="text-gray-500 text-xs animate-fade-in" style={{ animationDelay: '1200ms' }}>
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

            {/* Key insight */}
            <div className={`transition-all duration-1000 delay-1500 ${showDemo ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="p-8 bg-gradient-to-r from-green-400/30 to-blue-400/20 border-2 border-green-400/40 rounded-3xl backdrop-blur-sm text-center">
                <h4 className="text-3xl font-bold mb-4 text-green-400">Compounding always wins!</h4>
                <p className="text-gray-200 text-lg font-light leading-relaxed">
                  It compounds each day to become super-intelligent, high agency version of yourself.
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
