
import { useState } from 'react';
import { User, Briefcase, TrendingUp, Users } from 'lucide-react';
import MobileOptimizedSection from './MobileOptimizedSection';

const BuiltForEveryoneSection = () => {
  const [selectedPersona, setSelectedPersona] = useState(0);

  const personas = [
    {
      icon: <User className="text-white" size={20} />,
      title: "Founders",
      summary: "Meeting intelligence",
      example: "Asmi tracks every investor conversation, remembers what each VC cares about, and briefs you before each meeting with their preferences, past discussions, and follow-up items from your calendar and emails."
    },
    {
      icon: <Briefcase className="text-white" size={20} />,
      title: "Sales Teams", 
      summary: "Pipeline context",
      example: "Asmi analyzes all client emails and meeting notes, surfaces buying signals from conversations, and provides complete prospect history before each call to help close more deals."
    },
    {
      icon: <TrendingUp className="text-white" size={20} />,
      title: "Fast Growing Startups",
      summary: "Team coordination",
      example: "Asmi keeps track of all team conversations and meetings, ensures nothing falls through cracks, and provides context on every project and client interaction across your growing organization."
    },
    {
      icon: <Users className="text-white" size={20} />,
      title: "Knowledge Workers", 
      summary: "Information flow",
      example: "Asmi maintains deep context from all your meetings and email threads, surfaces relevant past discussions, and ensures you're always prepared with the right information for every interaction."
    }
  ];

  return (
    <MobileOptimizedSection>
      <div className="text-center space-y-8">
        <h2 className="text-3xl font-bold text-white">
          Built for fast moving people.
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
