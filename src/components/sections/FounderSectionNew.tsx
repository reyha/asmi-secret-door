
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Building, TrendingUp } from 'lucide-react';
import MobileOptimizedSection from './MobileOptimizedSection';

const FounderSectionNew = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const founderCards = [
    {
      title: "We have built companies",
      subtitle: "loved by millions",
      description: "scaled to hundreds of millions",
      founder: {
        name: "Rishi Rathore",
        role: "Co-Founder & CEO",
        avatar: "R",
        achievements: [
          "Built $400M+ Business",
          "Raised $75M from Tony Xu, Eric Yuan"
        ]
      }
    },
    {
      title: "Deep AI Experience",
      subtitle: "Meta AI Systems",
      description: "Enterprise-grade AI at scale",
      founder: {
        name: "Rishi Rathore", 
        role: "Technical Background",
        avatar: "R",
        achievements: [
          "Meta AI Infrastructure",
          "Scaled ML systems to billions"
        ]
      }
    }
  ];

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % founderCards.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + founderCards.length) % founderCards.length);
  };

  return (
    <MobileOptimizedSection maxWidth="sm">
      <div className="text-center space-y-6">
        {/* Header */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-white leading-tight">
            {founderCards[currentCard].title}
          </h2>
          <p className="text-lg text-gray-300 font-light">
            {founderCards[currentCard].subtitle}
          </p>
          <p className="text-base text-gray-400">
            {founderCards[currentCard].description}
          </p>
        </div>

        {/* Founder Card */}
        <div className="bg-gray-900/50 border border-white/20 rounded-2xl p-5 backdrop-blur-sm">
          <div className="flex flex-col items-center space-y-4">
            {/* Avatar */}
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">
                {founderCards[currentCard].founder.avatar}
              </span>
            </div>

            {/* Name & Role */}
            <div className="text-center">
              <h3 className="text-lg font-bold text-white">
                {founderCards[currentCard].founder.name}
              </h3>
              <p className="text-sm text-green-400 font-medium">
                {founderCards[currentCard].founder.role}
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-2 w-full">
              {founderCards[currentCard].founder.achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {achievement}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        {founderCards.length > 1 && (
          <div className="flex justify-between items-center">
            <button
              onClick={prevCard}
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors touch-target"
            >
              <ChevronLeft size={18} className="text-white" />
            </button>

            <div className="flex space-x-2">
              {founderCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCard(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentCard ? 'bg-green-400 w-6' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextCard}
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors touch-target"
            >
              <ChevronRight size={18} className="text-white" />
            </button>
          </div>
        )}
      </div>
    </MobileOptimizedSection>
  );
};

export default FounderSectionNew;
