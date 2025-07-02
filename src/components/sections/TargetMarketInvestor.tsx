
import { useState } from 'react';
import { User, Briefcase, TrendingUp, Users } from 'lucide-react';

const TargetMarketInvestor = () => {
  const [activePersona, setActivePersona] = useState(0);

  const personas = [
    {
      icon: <User className="text-[#37D67A]" size={20} />,
      title: "Founder",
      moment: "Pitch tomorrow",
      description: "Drowning in context"
    },
    {
      icon: <Briefcase className="text-blue-400" size={20} />,
      title: "VC",
      moment: "Deal review",
      description: "Tracking everything"
    },
    {
      icon: <TrendingUp className="text-purple-400" size={20} />,
      title: "Analyst",
      moment: "Research deep-dive",
      description: "Processing data"
    },
    {
      icon: <Users className="text-yellow-400" size={20} />,
      title: "Creator",
      moment: "Content planning",
      description: "Managing ideas"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1F1F23] via-gray-900 to-[#1F1F23] flex items-center justify-center px-4">
      <div className="max-w-sm mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-[28px] font-medium text-white leading-tight">
            Built for people who move fast.
          </h2>
        </div>

        {/* Persona bubbles */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {personas.map((persona, index) => (
            <button
              key={index}
              onClick={() => setActivePersona(index)}
              className={`p-6 rounded-3xl border transition-all duration-300 text-left min-h-[120px] min-w-[140px] ${
                activePersona === index
                  ? 'bg-gradient-to-r from-[#37D67A]/20 to-[#2DD865]/10 border-[#37D67A]/30 scale-105'
                  : 'bg-black/40 border-white/10 hover:border-white/20'
              }`}
            >
              <div className="mb-3">
                {persona.icon}
              </div>
              <h3 className="text-white font-medium text-sm mb-1">
                {persona.title}
              </h3>
              <p className="text-gray-400 text-xs">
                {persona.moment}
              </p>
            </button>
          ))}
        </div>

        {/* Active persona description */}
        <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-6 border border-[#37D67A]/20 mb-8">
          <p className="text-white text-lg font-light">
            {personas[activePersona].description}
          </p>
        </div>

        {/* TAM reveal */}
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-[#37D67A]/30 to-[#2DD865]/20 border border-[#37D67A]/40 rounded-2xl p-6 backdrop-blur-sm">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#37D67A] mb-2">1B+</div>
              <div className="text-white text-sm">global professionals</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-400/30 to-blue-500/20 border border-blue-400/40 rounded-2xl p-6 backdrop-blur-sm">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">$94B</div>
              <div className="text-white text-sm">TAM</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-400/30 to-yellow-500/20 border border-yellow-400/40 rounded-2xl p-4 backdrop-blur-sm animate-pulse">
            <div className="text-center">
              <div className="text-yellow-400 text-sm font-medium">
                Already asking to pay.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetMarketInvestor;
