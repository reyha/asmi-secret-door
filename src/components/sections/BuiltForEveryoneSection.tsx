
import { useState } from 'react';
import { User, Briefcase, TrendingUp, Users } from 'lucide-react';

const BuiltForEveryoneSection = () => {
  const [selectedPersona, setSelectedPersona] = useState(0);

  const personas = [
    {
      icon: <User className="text-white" size={24} />,
      title: "Founder",
      summary: "Investor readiness",
      example: "Asmi prepares detailed investor updates from scattered voice notes, tracks key metrics across conversations, and reminds you of follow-ups with potential backers."
    },
    {
      icon: <Briefcase className="text-white" size={24} />,
      title: "VP Sales",
      summary: "Deal intelligence",
      example: "Asmi analyzes every client interaction, surfaces buying signals from emails and calls, and provides context before each prospect meeting to close more deals."
    },
    {
      icon: <TrendingUp className="text-white" size={24} />,
      title: "Investor",
      summary: "Portfolio insights",
      example: "Asmi tracks portfolio company progress from updates, flags red flags early, and prepares briefings before board meetings with key insights and action items."
    },
    {
      icon: <Users className="text-white" size={24} />,
      title: "Consultant",
      summary: "Client context",
      example: "Asmi maintains deep client history, surfaces relevant past work and insights, and ensures you're always prepared with the right context for every client interaction."
    }
  ];

  return (
    <div className="min-h-screen bg-black py-20 flex items-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-space font-bold text-white mb-16">
          Built for everyone.
        </h2>

        {/* Main selected persona */}
        <div className="bg-black border border-white/20 rounded-3xl p-8 mb-8">
          <div className="w-20 h-20 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
            {personas[selectedPersona].icon}
          </div>
          
          <h3 className="text-2xl font-space font-bold text-white mb-4">
            {personas[selectedPersona].title}
          </h3>
          
          <div className="text-gray-300 font-inter mb-6">
            {personas[selectedPersona].summary}
          </div>

          <p className="text-gray-400 font-inter leading-relaxed">
            {personas[selectedPersona].example}
          </p>
        </div>

        {/* Persona selector */}
        <div className="flex justify-center space-x-4">
          {personas.map((persona, index) => (
            <button
              key={index}
              onClick={() => setSelectedPersona(index)}
              className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                selectedPersona === index 
                  ? 'bg-green-400 border-2 border-green-400' 
                  : 'bg-gray-800 border-2 border-gray-600 hover:border-gray-400'
              }`}
            >
              {persona.icon}
            </button>
          ))}
        </div>

        <p className="text-gray-500 text-sm mt-4 font-inter">
          Tap personas to explore
        </p>
      </div>
    </div>
  );
};

export default BuiltForEveryoneSection;
