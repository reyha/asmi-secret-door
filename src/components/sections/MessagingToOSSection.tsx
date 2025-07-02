
import { useState, useEffect, useRef } from 'react';
import { Calendar, Mic, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const MessagingToOSSection = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const cards = [
    {
      icon: <Calendar className="text-white" size={32} />,
      title: "Calendar Memory",
      microcopy: "Knows who you meet. Preps you before you ask.",
      color: "from-green-400 to-green-600"
    },
    {
      icon: <Mic className="text-white" size={32} />,
      title: "Voice Memory",
      microcopy: "Every word stored. Every idea captured.",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <MessageCircle className="text-white" size={32} />,
      title: "iMessage Native",
      microcopy: "Native iOS. No new app.",
      color: "from-purple-400 to-purple-600"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div 
      ref={sectionRef} 
      className={`min-h-screen py-20 flex items-center transition-all duration-1000 ${
        currentCard === 0 ? 'bg-gradient-to-br from-green-900/20 to-black' :
        currentCard === 1 ? 'bg-gradient-to-br from-blue-900/20 to-black' :
        'bg-gradient-to-br from-purple-900/20 to-black'
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-space font-bold text-white mb-16 leading-tight">
          From messages... to<br />memory OS.
        </h2>

        {isVisible && (
          <div className="relative">
            {/* Navigation buttons */}
            <button
              onClick={prevCard}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextCard}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            {/* Card Display */}
            <div className="bg-black/80 border border-white/20 rounded-3xl p-8 animate-fade-in min-h-[300px] flex flex-col justify-center">
              <div className={`bg-gradient-to-r ${cards[currentCard].color} rounded-3xl p-6 mb-6 w-20 h-20 mx-auto flex items-center justify-center`}>
                {cards[currentCard].icon}
              </div>
              
              <h3 className="text-2xl font-space font-bold text-white mb-4">
                {cards[currentCard].title}
              </h3>
              
              <div className="flex items-center justify-center mb-4">
                <div className="bg-green-400 text-black px-3 py-1 rounded-full text-sm font-medium">
                  Live
                </div>
              </div>

              <p className="text-gray-300 font-inter text-lg">
                {cards[currentCard].microcopy}
              </p>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {cards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCard(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentCard === index ? 'bg-green-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <p className="text-gray-500 text-sm mt-4 font-inter">
              Swipe cards to explore
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessagingToOSSection;
