
import { useState } from 'react';
import { User, Briefcase, TrendingUp, Users } from 'lucide-react';
import MobileOptimizedSection from './MobileOptimizedSection';

const BuiltForEveryoneSection = () => {
  const [selectedPersona, setSelectedPersona] = useState(0);

  const personas = [
    {
      icon: <User className="text-white" size={20} />,
      title: "Founder",
      summary: "Investor readiness",
      example: "Asmi prepares detailed investor updates from scattered voice notes, tracks key metrics across conversations, and reminds you of follow-ups with potential backers."
    },
    {
      icon: <Briefcase className="text-white" size={20} />,
      title: "VP Sales",
      summary: "Deal intelligence", 
      example: "Asmi analyzes every client interaction, surfaces buying signals from emails and calls, and provides context before each prospect meeting to close more deals."
    },
    {
      icon: <TrendingUp className="text-white" size={20} />,
      title: "Investor",
      summary: "Portfolio insights",
      example: "Asmi tracks portfolio company progress from updates, flags red flags early, and prepares briefings before board meetings with key insights and action items."
    },
    {
      icon: <Users className="text-white" size={20} />,
      title: "Consultant", 
      summary: "Client context",
      example: "Asmi maintains deep client history, surfaces relevant past work and insights, and ensures you're always prepared with the right context for every client interaction."
    }
  ];

  return (
    <MobileOptimizedSection>
      <div className="text-center space-y-8">
        <h2 className="text-3xl font-bold text-white">
          Built for everyone.
        </h2>

        {/* Main selected persona */}
        <div className="bg-gray-900/50 border border-white/20 rounded-2xl p-6 backdrop-blur-sm">
          <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
            {personas[selectedPersona].icon}
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2">
            {personas[selectedPersona].title}
          </h3>
          
          <div className="text-green-400 font-medium mb-4 text-sm">
            {personas[selectedPersona].summary}
          </div>

          <p className="text-gray-300 text-sm leading-relaxed">
            {personas[selectedPersona].example}
          </p>
        </div>

        {/* Persona selector */}
        <div className="flex justify-center space-x-3">
          {personas.map((persona, index) => (
            <button
              key={index}
              onClick={() => setSelectedPersona(index)}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 touch-target ${
                selectedPersona === index 
                  ? 'bg-green-400 border-2 border-green-400 scale-110' 
                  : 'bg-gray-800 border-2 border-gray-600 hover:border-gray-400'
              }`}
            >
              {persona.icon}
            </button>
          ))}
        </div>

        <p className="text-gray-500 text-xs">
          Tap personas to explore
        </p>
      </div>
    </MobileOptimizedSection>
  );
};

export default BuiltForEveryoneSection;
