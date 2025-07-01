
import { useState, useEffect } from 'react';
import { MessageCircle, Calendar, CheckSquare, Users, Mic } from 'lucide-react';

const ProductSection = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      id: 1,
      type: 'user',
      content: 'Hey Asmi, schedule a meeting with the team for tomorrow at 2 PM',
      icon: <Mic size={16} className="text-blue-400" />,
      action: null
    },
    {
      id: 2,
      type: 'asmi',
      content: 'I\'ll schedule that for you. Checking everyone\'s availability...',
      icon: null,
      action: 'Scanning calendars...'
    },
    {
      id: 3,
      type: 'asmi',
      content: 'Perfect! Meeting scheduled for tomorrow 2-3 PM with Sarah, Mike, and Alex. Calendar invites sent.',
      icon: <Calendar size={16} className="text-green-400" />,
      action: 'Calendar event created'
    },
    {
      id: 4,
      type: 'user',
      content: 'Also remind me to review the Q4 budget before that meeting',
      icon: <Mic size={16} className="text-blue-400" />,
      action: null
    },
    {
      id: 5,
      type: 'asmi',
      content: 'Done! I\'ll remind you at 1 PM tomorrow to review the Q4 budget.',
      icon: <CheckSquare size={16} className="text-purple-400" />,
      action: 'Reminder set'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left side - Chat Interface */}
        <div className="space-y-8">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-light mb-4 tracking-tight">
              What we're <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-medium">building</span>
            </h2>
            <p className="text-xl text-gray-400">
              Your AI that remembers, understands, and acts
            </p>
          </div>

          {/* Chat mockup */}
          <div className="bg-black/60 backdrop-blur-sm rounded-3xl p-6 border border-white/10 max-w-md mx-auto lg:mx-0">
            <div className="flex items-center mb-4 pb-4 border-b border-white/10">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3 flex items-center justify-center">
                <span className="text-sm font-bold">A</span>
              </div>
              <div>
                <p className="font-medium">Asmi</p>
                <p className="text-xs text-green-400">Active now</p>
              </div>
            </div>

            <div className="space-y-4 h-80 overflow-hidden">
              {steps.slice(0, currentStep + 1).map((step, index) => (
                <div
                  key={step.id}
                  className={`flex ${step.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <div className={`max-w-xs px-4 py-3 rounded-2xl ${
                    step.type === 'user' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-800 text-gray-100'
                  }`}>
                    <div className="flex items-center gap-2 mb-1">
                      {step.icon}
                      <span className="text-sm">{step.content}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right side - Actions */}
        <div className="space-y-8">
          <h3 className="text-3xl font-light text-center lg:text-left">
            Asmi <span className="text-green-400">understands</span> and <span className="text-purple-400">executes</span>
          </h3>

          <div className="space-y-6">
            {steps.filter(step => step.action).map((step, index) => (
              <div
                key={step.id}
                className={`p-6 bg-gradient-to-r from-white/5 to-white/10 rounded-2xl border border-white/20 backdrop-blur-sm transition-all duration-500 ${
                  currentStep >= step.id - 1 ? 'opacity-100 scale-100' : 'opacity-30 scale-95'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">{step.action}</h4>
                    <p className="text-gray-400 text-sm">Executed automatically</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl border border-green-500/20">
            <p className="text-green-300 font-medium mb-2">✓ Context preserved</p>
            <p className="text-gray-300 text-sm">
              Asmi remembers your preferences, relationships, and ongoing projects across all conversations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
