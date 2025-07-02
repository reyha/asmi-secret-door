
import { useState, useEffect } from 'react';

const MessagingToOSSection = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const cards = [
    {
      title: 'Calendar & Contacts',
      subtitle: 'Preps you before you ask.',
      icon: '📅',
      gradient: 'from-[#37D67A] to-green-500'
    },
    {
      title: 'Voice Memory',
      subtitle: 'Every word stored.',
      icon: '🗣️',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      title: 'iMessage Launch',
      subtitle: 'iOS-native, no new app.',
      icon: '💬',
      gradient: 'from-purple-500 to-purple-600'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCard(prev => (prev + 1) % cards.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const handleCardTap = (index: number) => {
    setCurrentCard(index);
  };

  return (
    <div className="min-h-screen bg-[#1F1F23] flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-sm mx-auto">
        <h1 className="text-[28px] font-bold text-white text-center mb-8">
          From messages… to memory OS.
        </h1>

        {/* Card carousel */}
        <div className="relative">
          <div className="flex space-x-4 overflow-hidden">
            {cards.map((card, index) => (
              <div
                key={index}
                onClick={() => handleCardTap(index)}
                className={`min-w-full bg-black/40 backdrop-blur-sm rounded-3xl border border-white/10 p-6 transition-all duration-500 cursor-pointer ${
                  index === currentCard ? 'scale-100 opacity-100' : 'scale-95 opacity-50'
                }`}
                style={{
                  transform: `translateX(-${currentCard * 100}%)`
                }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${card.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-2xl">{card.icon}</span>
                </div>
                
                <h3 className="text-white font-bold text-lg text-center mb-2">
                  {card.title}
                </h3>
                
                <p className="text-gray-300 text-sm text-center leading-relaxed">
                  {card.subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => handleCardTap(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentCard
                    ? 'bg-[#37D67A] scale-125'
                    : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Swipe hint */}
        <p className="text-gray-400 text-xs text-center mt-4">
          Tap cards to explore
        </p>
      </div>
    </div>
  );
};

export default MessagingToOSSection;
