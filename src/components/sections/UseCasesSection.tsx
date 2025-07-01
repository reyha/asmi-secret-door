
import { useState } from 'react';
import { Brain, Calendar, Mic2, Gift, Clock, Zap, Play } from 'lucide-react';

const UseCasesSection = () => {
  const [activeUseCase, setActiveUseCase] = useState(0);

  const useCases = [
    {
      title: 'Memory & Recall',
      icon: <Brain className="text-blue-400" size={24} />,
      description: 'What happened on last week\'s call?',
      demoText: 'Last Tuesday with Eric: He mentioned concerns about user retention, wants to see cohort analysis by Friday. Also, his daughter starts Stanford in fall - he seemed excited about that.',
      gradient: 'from-blue-400 to-cyan-500',
      bgGradient: 'from-blue-500/20 to-cyan-500/10'
    },
    {
      title: 'Meeting Prep & Follow-ups',
      icon: <Calendar className="text-green-400" size={24} />,
      description: 'Seamless context for every conversation',
      demoText: 'Your 3 PM with Sarah: Last time you discussed Q4 roadmap priorities. She\'s still waiting on the mobile timeline. Her key concerns: iOS release timeline and Android parity.',
      gradient: 'from-green-400 to-emerald-500',
      bgGradient: 'from-green-500/20 to-emerald-500/10'
    },
    {
      title: 'Voice Journal → Actions',
      icon: <Mic2 className="text-purple-400" size={24} />,
      description: 'Speak thoughts, get organized outcomes',
      demoText: '"Thinking about expanding to enterprise... need to hire sales, maybe reach out to John at Salesforce..." → Task created: Research enterprise pricing, Contact John Peterson, Draft sales hiring plan',
      gradient: 'from-purple-400 to-pink-500',
      bgGradient: 'from-purple-500/20 to-pink-500/10'
    },
    {
      title: 'Personal Nudges',
      icon: <Gift className="text-yellow-400" size={24} />,
      description: 'Birthdays, errands, life management',
      demoText: 'Tomorrow is Sarah\'s birthday! Based on her recent mentions of wanting to learn guitar, here are 3 gift ideas: Fender acoustic starter kit, guitar lessons with local instructor, or a vintage songbook collection.',
      gradient: 'from-yellow-400 to-orange-500',
      bgGradient: 'from-yellow-500/20 to-orange-500/10'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-tight">
            Core <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-medium">use cases</span>
          </h2>
          <p className="text-xl text-gray-400">
            Click to see Asmi in action
          </p>
        </div>

        {/* Mobile: Stacked layout */}
        <div className="md:hidden space-y-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              onClick={() => setActiveUseCase(index)}
              className={`p-6 rounded-3xl border cursor-pointer transition-all duration-300 ${
                activeUseCase === index
                  ? `bg-gradient-to-r ${useCase.bgGradient} border-white/30 scale-105`
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${useCase.gradient}`}>
                  {useCase.icon}
                </div>
                <div>
                  <h3 className="text-xl font-medium">{useCase.title}</h3>
                  <p className="text-gray-400 text-sm">{useCase.description}</p>
                </div>
              </div>
              
              {activeUseCase === index && (
                <div className="mt-4 p-4 bg-black/40 rounded-xl backdrop-blur-sm animate-fade-in">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {useCase.demoText}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {/* Use case cards */}
          <div className="space-y-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                onClick={() => setActiveUseCase(index)}
                className={`p-6 rounded-3xl border cursor-pointer transition-all duration-300 ${
                  activeUseCase === index
                    ? `bg-gradient-to-r ${useCase.bgGradient} border-white/30 scale-105`
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${useCase.gradient}`}>
                    {useCase.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">{useCase.title}</h3>
                    <p className="text-gray-400 text-sm">{useCase.description}</p>
                  </div>
                  {activeUseCase === index && (
                    <Zap className="text-green-400 ml-auto" size={20} />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Demo area */}
          <div className="bg-gradient-to-r from-white/10 to-white/5 rounded-3xl p-8 border border-white/20 sticky top-8">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-2xl font-medium">Live Demo</h4>
              <div className="flex items-center space-x-2 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Active</span>
              </div>
            </div>

            <div className={`p-6 bg-gradient-to-r ${useCases[activeUseCase].bgGradient} rounded-2xl border border-white/20 backdrop-blur-sm`}>
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${useCases[activeUseCase].gradient}`}>
                  {useCases[activeUseCase].icon}
                </div>
                <span className="font-medium">{useCases[activeUseCase].title}</span>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                {useCases[activeUseCase].demoText}
              </p>
            </div>

            <div className="mt-6 text-center">
              <button className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105">
                <Play size={16} />
                <span>See full interaction</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gradient-to-b from-white/10 to-white/5 rounded-2xl border border-white/10">
            <div className="text-4xl font-bold text-blue-400 mb-2">10x</div>
            <p className="text-gray-300">Faster context switching</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-b from-white/10 to-white/5 rounded-2xl border border-white/10">
            <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
            <p className="text-gray-300">Context retention</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-b from-white/10 to-white/5 rounded-2xl border border-white/10">
            <div className="text-4xl font-bold text-purple-400 mb-2">0</div>
            <p className="text-gray-300">Apps to learn</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCasesSection;
