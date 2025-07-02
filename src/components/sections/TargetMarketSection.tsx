
import { Users, TrendingUp, Zap } from 'lucide-react';

const TargetMarketSection = () => {
  const targetSegments = [
    {
      title: 'Fast-moving Startup Teams',
      size: '2.5M+',
      description: 'Founders, executives, early employees',
      icon: <TrendingUp className="text-green-400" size={24} />,
      color: 'from-green-400/20 to-green-500/10'
    },
    {
      title: 'Knowledge Workers',
      size: '50M+',
      description: 'Consultants, analysts, researchers',
      icon: <Users className="text-blue-400" size={24} />,
      color: 'from-blue-400/20 to-blue-500/10'
    }
  ];

  const evolutionSteps = [
    {
      phase: 'Phase 1',
      title: 'Memory Assistant',
      description: 'AI that remembers everything you tell it',
      status: 'Now',
      color: 'text-green-400'
    },
    {
      phase: 'Phase 2',
      title: 'Personal OS',
      description: 'Single interface for all your digital tools',
      status: '2025',
      color: 'text-blue-400'
    },
    {
      phase: 'Phase 3',
      title: 'Decision Layer',
      description: 'AI that makes decisions on your behalf',
      status: '2026',
      color: 'text-purple-400'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Target Market */}
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-white mb-8">Target Market</h2>
            <div className="space-y-6">
              {targetSegments.map((segment, index) => (
                <div
                  key={index}
                  className={`p-6 bg-gradient-to-r ${segment.color} border border-white/20 rounded-2xl backdrop-blur-sm`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-white/10 rounded-xl">
                      {segment.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-medium text-white">{segment.title}</h3>
                        <span className="bg-white/20 text-white px-2 py-1 rounded-lg text-sm font-medium">
                          {segment.size}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm font-light">{segment.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Future Evolution */}
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-white mb-8">Future: Asmi OS</h2>
            <div className="space-y-6">
              {evolutionSteps.map((step, index) => (
                <div
                  key={index}
                  className="relative p-6 bg-gradient-to-r from-white/5 to-white/10 border border-white/20 rounded-2xl backdrop-blur-sm"
                >
                  {/* Timeline connector */}
                  {index < evolutionSteps.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-8 bg-gradient-to-b from-white/20 to-transparent"></div>
                  )}
                  
                  <div className="flex items-start space-x-4">
                    <div className={`w-4 h-4 rounded-full ${step.color.replace('text-', 'bg-')} flex-shrink-0 mt-2`}></div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-gray-400 text-sm">{step.phase}</span>
                        <span className={`${step.color} text-sm font-medium`}>{step.status}</span>
                      </div>
                      <h3 className="text-lg font-medium text-white mb-2">{step.title}</h3>
                      <p className="text-gray-300 text-sm font-light">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-purple-500/20 to-purple-400/10 border border-purple-400/20 rounded-2xl backdrop-blur-sm">
              <div className="flex items-center space-x-3 mb-3">
                <Zap className="text-purple-400" size={20} />
                <h4 className="text-lg font-medium text-white">The Vision</h4>
              </div>
              <p className="text-gray-300 text-sm font-light leading-relaxed">
                Single interface for AI-native life. Your AI becomes the layer between you and every digital decision, tool, and interaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetMarketSection;
