
import { useState, useEffect } from 'react';
import { Brain, Calendar, Mic, Gift, MessageCircle, Zap, Play, Pause } from 'lucide-react';

const UseCasesSection = () => {
  const [activeUseCase, setActiveUseCase] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const useCases = [
    {
      title: 'Memory & Recall',
      description: 'Never lose context again',
      icon: <Brain className="text-blue-400" size={24} />,
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'from-blue-500/20 to-cyan-500/10',
      demo: {
        userMessage: 'What did Sarah mention about the budget last week?',
        asmiResponse: 'In your call on March 8th, Sarah mentioned concerns about Q2 marketing spend exceeding 40% of revenue. She suggested reallocating $50K from events to digital ads.'
      },
      stat: '100%',
      statLabel: 'Context retention'
    },
    {
      title: 'Meeting Prep',
      description: 'Walk into every meeting prepared',
      icon: <Calendar className="text-green-400" size={24} />,
      color: 'from-green-400 to-emerald-500',
      bgColor: 'from-green-500/20 to-emerald-500/10',
      demo: {
        userMessage: 'Prep me for the investor call in 30 mins',
        asmiResponse: 'Your call with Andreessen Horowitz: Last discussion was user growth metrics. They asked about retention rates. Here are your latest numbers and 3 key talking points.'
      },
      stat: '85%',
      statLabel: 'Better meeting outcomes'
    },
    {
      title: 'Voice to Action',
      description: 'Think out loud, get things done',
      icon: <Mic className="text-purple-400" size={24} />,
      color: 'from-purple-400 to-pink-500',
      bgColor: 'from-purple-500/20 to-pink-500/10',
      demo: {
        userMessage: '🎤 I need to follow up on the partnership discussion with Stripe',
        asmiResponse: 'Added to your follow-up list. I found the contact info for their BD team and drafted a follow-up email. Want me to send it?'
      },
      stat: '3x',
      statLabel: 'Faster task completion'
    },
    {
      title: 'Personal Assistant',
      description: 'Life admin that actually works',
      icon: <Gift className="text-yellow-400" size={24} />,
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'from-yellow-500/20 to-orange-500/10',
      demo: {
        userMessage: '',
        asmiResponse: 'Reminder: It\'s Alex\'s birthday tomorrow. Based on your past conversations, they love specialty coffee. I found 3 local roasters that deliver same-day.'
      },
      stat: '0',
      statLabel: 'Forgotten birthdays'
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setActiveUseCase((prev) => (prev + 1) % useCases.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const currentUseCase = useCases[activeUseCase];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight leading-tight">
            What Asmi <span className="text-blue-400 font-medium">does</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 font-light">
            Real use cases from real users
          </p>
          
          <div className="flex items-center justify-center space-x-4 mb-8">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center space-x-2 px-6 py-3 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              <span className="text-sm font-light">{isPlaying ? 'Pause' : 'Play'} Demo</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Use case selector - Mobile optimized */}
          <div className="space-y-4">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                onClick={() => {
                  setActiveUseCase(index);
                  setIsPlaying(false);
                }}
                className={`p-6 rounded-3xl border cursor-pointer transition-all duration-500 backdrop-blur-sm ${
                  activeUseCase === index
                    ? `bg-gradient-to-r ${useCase.bgColor} border-white/30 scale-105 shadow-xl`
                    : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${useCase.color} shadow-lg`}>
                    {useCase.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium mb-1">{useCase.title}</h3>
                    <p className="text-gray-400 text-sm font-light">{useCase.description}</p>
                  </div>
                  {activeUseCase === index && (
                    <div className="flex items-center space-x-2 text-green-400">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm font-light">Active</span>
                    </div>
                  )}
                </div>

                {/* Stat display */}
                <div className="flex items-baseline space-x-2">
                  <div className={`text-3xl font-bold bg-gradient-to-r ${useCase.color} bg-clip-text text-transparent`}>
                    {useCase.stat}
                  </div>
                  <div className="text-gray-400 text-sm font-light">{useCase.statLabel}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Demo area */}
          <div className="sticky top-8">
            <div className="bg-black/60 backdrop-blur-sm rounded-3xl border border-white/20 overflow-hidden shadow-2xl">
              {/* Phone header */}
              <div className="bg-gray-900 px-4 py-3 flex items-center space-x-3 border-b border-white/10">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <div>
                  <h3 className="text-white font-medium">Asmi</h3>
                  <p className="text-gray-400 text-xs">Your AI Chief of Staff</p>
                </div>
                <div className="ml-auto">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
              </div>

              {/* Messages */}
              <div className="p-6 space-y-4 min-h-[300px] bg-black">
                {/* Use case title */}
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${currentUseCase.bgColor} border border-white/20 rounded-full backdrop-blur-sm`}>
                    {currentUseCase.icon}
                    <span className="text-sm font-light">{currentUseCase.title}</span>
                  </div>
                </div>

                {/* User message (if exists) */}
                {currentUseCase.demo.userMessage && (
                  <div className="flex justify-end animate-fade-in">
                    <div className="max-w-xs px-4 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg">
                      {currentUseCase.demo.userMessage.includes('🎤') ? (
                        <div className="flex items-center space-x-2">
                          <Mic size={16} />
                          <span className="text-sm font-light">{currentUseCase.demo.userMessage.replace('🎤 ', '')}</span>
                        </div>
                      ) : (
                        <span className="text-sm font-light">{currentUseCase.demo.userMessage}</span>
                      )}
                    </div>
                  </div>
                )}

                {/* Asmi response */}
                <div className="flex justify-start animate-fade-in" style={{ animationDelay: '1s' }}>
                  <div className="max-w-sm bg-white/10 backdrop-blur-sm px-4 py-3 rounded-2xl text-white border border-white/10">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold">A</span>
                      </div>
                      <span className="text-xs text-gray-400 font-light">Asmi</span>
                    </div>
                    <span className="text-sm font-light leading-relaxed">{currentUseCase.demo.asmiResponse}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom stats */}
            <div className="mt-6 text-center">
              <div className={`inline-flex items-center space-x-4 px-6 py-3 bg-gradient-to-r ${currentUseCase.bgColor} border border-white/20 rounded-full backdrop-blur-sm`}>
                <Zap className="text-yellow-400" size={16} />
                <span className="text-sm font-light">Real user feedback</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCasesSection;
