
import { useState, useEffect } from 'react';
import { ArrowRight, Zap, Crown } from 'lucide-react';
import MobileOptimizedSection from './MobileOptimizedSection';

const FinalCTASectionNew = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

  const cards = [
    {
      icon: <Crown className="w-6 h-6 text-yellow-400" />,
      title: "$5M seed - Series A in 6-8 months",
      description: "Join the round that's building the future of personal AI",
      color: "from-yellow-400/20 to-orange-400/20",
      borderColor: "border-yellow-400/30"
    },
    {
      icon: <Zap className="w-6 h-6 text-green-400" />,
      title: "Led by top 1% operator & AI researcher",
      description: "Proven track record of $400M+ in value creation",
      color: "from-green-400/20 to-blue-400/20", 
      borderColor: "border-green-400/30"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    const cardInterval = setInterval(() => {
      setActiveCard(prev => (prev + 1) % cards.length);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(cardInterval);
    };
  }, []);

  return (
    <MobileOptimizedSection>
      <div className={`text-center space-y-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}>
        
        {/* Main CTA */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Ready to be part of the
            <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              AI revolution?
            </span>
          </h1>
          
          <p className="text-gray-300 text-lg leading-relaxed max-w-md mx-auto">
            Join the waitlist for early access to Asmi and experience the future of personal AI.
          </p>
        </div>

        {/* Investment Opportunity Cards */}
        <div className="space-y-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl border backdrop-blur-sm transition-all duration-500 ${
                activeCard === index 
                  ? `bg-gradient-to-r ${card.color} ${card.borderColor} scale-105` 
                  : 'bg-black/40 border-white/10'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-full transition-all duration-300 ${
                  activeCard === index ? 'bg-black/20' : 'bg-white/10'
                }`}>
                  {card.icon}
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {card.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 pt-4">
          <button className="w-full bg-gradient-to-r from-green-400 to-blue-400 text-black font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-green-400/25 hover:scale-105">
            Get Early Access
            <ArrowRight className="inline ml-2 w-5 h-5" />
          </button>
          
          <button className="w-full border border-white/30 text-white font-medium py-4 px-8 rounded-2xl text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/50">
            Investor Deck
          </button>
        </div>

        {/* Bottom tagline */}
        <div className="pt-8 opacity-80">
          <p className="text-gray-400 text-sm">
            🚀 Building the future, one conversation at a time
          </p>
        </div>
      </div>
    </MobileOptimizedSection>
  );
};

export default FinalCTASectionNew;
