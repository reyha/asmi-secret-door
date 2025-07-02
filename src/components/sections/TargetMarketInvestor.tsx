
import { useState, useEffect } from 'react';

const TargetMarketInvestor = () => {
  const [currentPersona, setCurrentPersona] = useState(0);
  const [showTAM, setShowTAM] = useState(false);

  const personas = [
    {
      title: 'Founder',
      avatar: '👨‍💼',
      moment: 'Pitch tomorrow',
      color: '#37D67A'
    },
    {
      title: 'VC',
      avatar: '💼',
      moment: 'DD prep',
      color: '#3B82F6'
    },
    {
      title: 'Analyst',
      avatar: '📊',
      moment: 'Research deep-dive',
      color: '#8B5CF6'
    },
    {
      title: 'Creator',
      avatar: '🎨',
      moment: 'Content calendar',
      color: '#F59E0B'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentPersona < personas.length - 1) {
        setCurrentPersona(prev => prev + 1);
      } else {
        setShowTAM(true);
        setTimeout(() => {
          setCurrentPersona(0);
          setShowTAM(false);
        }, 3000);
      }
    }, 2000);

    return () => clearInterval(timer);
  }, [currentPersona]);

  const handlePersonaTap = (index: number) => {
    setCurrentPersona(index);
    setShowTAM(false);
  };

  if (showTAM) {
    return (
      <div className="min-h-screen bg-[#1F1F23] flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-sm mx-auto animate-fade-in">
          <h1 className="text-[28px] font-bold text-white mb-8">
            The numbers speak.
          </h1>
          
          <div className="space-y-6">
            <div className="bg-black/40 backdrop-blur-sm rounded-3xl border border-white/10 p-6">
              <div className="text-4xl font-bold text-[#37D67A] mb-2 animate-pulse">
                1B+
              </div>
              <div className="text-white font-medium">
                Professionals
              </div>
            </div>

            <div className="bg-black/40 backdrop-blur-sm rounded-3xl border border-white/10 p-6">
              <div className="text-4xl font-bold text-[#37D67A] mb-2 animate-pulse">
                $94B
              </div>
              <div className="text-white font-medium">
                TAM
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#37D67A]/20 to-green-500/20 border border-[#37D67A]/50 rounded-3xl p-4">
              <p className="text-[#37D67A] font-medium text-sm">
                Already asking to pay.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1F1F23] flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-sm mx-auto">
        <h1 className="text-[28px] font-bold text-white mb-8">
          Built for everyone.
        </h1>

        {/* Current persona */}
        <div className="bg-black/40 backdrop-blur-sm rounded-3xl border border-white/10 p-6 mb-6">
          <div 
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse"
            style={{ backgroundColor: `${personas[currentPersona].color}20` }}
          >
            <span className="text-3xl">{personas[currentPersona].avatar}</span>
          </div>
          
          <h3 className="text-white font-bold text-xl mb-3">
            {personas[currentPersona].title}
          </h3>
          
          <div 
            className="inline-block px-4 py-2 rounded-full text-black font-medium text-sm animate-bounce"
            style={{ backgroundColor: personas[currentPersona].color }}
          >
            {personas[currentPersona].moment}
          </div>
        </div>

        {/* Persona selector dots */}
        <div className="flex justify-center space-x-3 mb-6">
          {personas.map((persona, index) => (
            <button
              key={index}
              onClick={() => handlePersonaTap(index)}
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                index === currentPersona
                  ? 'border-white scale-110'
                  : 'border-gray-600 scale-100 opacity-60'
              }`}
            >
              <span className="text-lg">{persona.avatar}</span>
            </button>
          ))}
        </div>

        <p className="text-gray-400 text-xs">
          Tap personas to explore
        </p>
      </div>
    </div>
  );
};

export default TargetMarketInvestor;
