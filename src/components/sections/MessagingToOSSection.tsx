
import { useState, useEffect } from 'react';
import { Calendar, Mic, MessageSquare, ArrowRight } from 'lucide-react';

const MessagingToOSSection = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

  const cards = [
    {
      icon: <Calendar className="text-[#37D67A]" size={24} />,
      title: "Calendar & Contacts",
      subtitle: "Preps you before you ask.",
      color: "from-[#37D67A]/20 to-[#2DD865]/10",
      border: "border-[#37D67A]/30"
    },
    {
      icon: <Mic className="text-blue-400" size={24} />,
      title: "Voice Memory",
      subtitle: "Every word stored.",
      color: "from-blue-400/20 to-blue-500/10",
      border: "border-blue-400/30"
    },
    {
      icon: <MessageSquare className="text-purple-400" size={24} />,
      title: "iMessage Launch",
      subtitle: "iOS-native, no new app.",
      color: "from-purple-400/20 to-purple-500/10",
      border: "border-purple-400/30"
    }
  ];

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentCard < cards.length - 1) {
        setCurrentCard(prev => prev + 1);
      } else if (diff < 0 && currentCard > 0) {
        setCurrentCard(prev => prev - 1);
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard(prev => (prev + 1) % cards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1F1F23] via-gray-900 to-[#1F1F23] flex items-center justify-center px-4">
      <div className="max-w-sm mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-[28px] font-medium text-white leading-tight mb-4">
            From messages…<br />to memory OS.
          </h2>
        </div>

        {/* Swipeable carousel */}
        <div 
          className="relative overflow-hidden rounded-3xl"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentCard * 100}%)` }}
          >
            {cards.map((card, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className={`bg-gradient-to-r ${card.color} ${card.border} border backdrop-blur-sm rounded-3xl p-8 mx-2`}>
                  <div className="mb-6">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-medium text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {card.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentCard(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center ${
                currentCard === index
                  ? 'bg-[#37D67A] scale-125'
                  : 'bg-gray-600 hover:bg-[#37D67A]/50'
              }`}
            />
          ))}
        </div>

        {/* Swipe hint */}
        <div className="flex items-center justify-center space-x-2 mt-8 text-gray-400 text-sm">
          <ArrowRight size={16} />
          <span>Swipe to explore</span>
        </div>
      </div>
    </div>
  );
};

export default MessagingToOSSection;
