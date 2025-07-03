
import { useState, useEffect, useRef } from 'react';
import { TrendingUp, Building, Users, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const InteractiveFOMOSection = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [countUpValues, setCountUpValues] = useState<number[]>([0, 0, 0]);
  const [activeTimelineNode, setActiveTimelineNode] = useState(0);
  const [revealedPoints, setRevealedPoints] = useState<number[]>([]);
  const [showCTA, setShowCTA] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const fomoCards = [
    {
      title: "50–100× ROI Potential",
      stat: "100×",
      subtitle: "Personal OS = $50B market",
      icon: <TrendingUp size={24} />,
      insight: "You backed Stripe at $1B → 95× exit",
      color: "from-green-400/20 to-emerald-500/20",
      targetValue: 100
    },
    {
      title: "$100B+ Category",
      stat: "$100B+",
      subtitle: "First-mover in AI OS infra",
      icon: <Building size={24} />,
      insight: "You led OpenAI's Series A → $157B valuation",
      color: "from-blue-400/20 to-cyan-500/20",
      targetValue: 100
    },
    {
      title: "100M+ Power Users",
      stat: "100M+",
      subtitle: "Knowledge workers as users",
      icon: <Users size={24} />,
      insight: "You invested in Notion early → 10B+ users",
      color: "from-purple-400/20 to-pink-500/20",
      targetValue: 100
    }
  ];

  const timelineCompanies = [
    { name: "OpenAI", year: "2019", valuation: "$100M", current: "$157B", multiple: "1570×" },
    { name: "Anthropic", year: "2021", valuation: "$4.1B", current: "$60B+", multiple: "15×+" },
    { name: "Perplexity", year: "2022", valuation: "$26M", current: "$9B", multiple: "346×" },
    { name: "Mistral", year: "2023", valuation: "$260M", current: "$6B", multiple: "23×" },
    { name: "Character.AI", year: "2022", valuation: "$1B", current: "$5B", multiple: "5×" }
  ];

  const finalPoints = [
    "$8–10M seed → Series A in 18 mo",
    "Founders built $300M GMV + Meta AI systems", 
    "Limited seats—claim yours"
  ];

  // Count-up animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCountUpValues(prev => prev.map((val, idx) => {
        const target = fomoCards[idx].targetValue;
        if (val < target) {
          return Math.min(val + Math.ceil(target / 50), target);
        }
        return val;
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Auto-advance cards
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard(prev => (prev + 1) % fomoCards.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Timeline auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTimelineNode(prev => (prev + 1) % timelineCompanies.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Progressive reveal
  useEffect(() => {
    const timer1 = setTimeout(() => setRevealedPoints([0]), 1000);
    const timer2 = setTimeout(() => setRevealedPoints([0, 1]), 2000);
    const timer3 = setTimeout(() => setRevealedPoints([0, 1, 2]), 3000);
    const timer4 = setTimeout(() => setShowCTA(true), 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const handleCardFlip = (index: number) => {
    if (!flippedCards.includes(index)) {
      setFlippedCards(prev => [...prev, index]);
    }
  };

  const handleTimelineClick = (index: number) => {
    setActiveTimelineNode(index);
  };

  return (
    <div className="section-miss" style={{ backgroundColor: 'var(--bg-primary)' }} ref={sectionRef}>
      <div className="min-h-screen overflow-y-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-alert mb-2">What You'll Miss</h2>
          <p className="text-secondary text-base">The cost of missing the Personal OS revolution</p>
        </div>

        {/* Card Carousel */}
        <div className="relative">
          <div className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-4 pb-4">
            {fomoCards.map((card, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-80 p-5 rounded-2xl border border-white/10 snap-center cursor-pointer transition-all duration-500 ${
                  index === currentCard ? 'scale-105' : 'scale-95 opacity-70'
                }`}
                style={{ 
                  backgroundColor: 'var(--bg-surface)',
                  background: flippedCards.includes(index) 
                    ? `linear-gradient(135deg, var(--bg-surface) 0%, var(--accent-positive)20 100%)`
                    : 'var(--bg-surface)'
                }}
                onClick={() => handleCardFlip(index)}
              >
                {!flippedCards.includes(index) ? (
                  <div className="text-center">
                    <div className="flex justify-center mb-4 text-white">
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-bold text-high mb-2">{card.title}</h3>
                    <div className="text-3xl font-bold text-alert mb-2 animate-count-up">
                      {index === 0 ? `${countUpValues[index]}×` : card.stat}
                    </div>
                    <p className="text-sm text-secondary">{card.subtitle}</p>
                  </div>
                ) : (
                  <div className="text-center animate-fade-in">
                    <div className="w-12 h-12 rounded-full bg-green-400/20 flex items-center justify-center mx-auto mb-4">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    <p className="text-lg font-medium text-high">{card.insight}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Card indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {fomoCards.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentCard ? 'bg-green-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Timeline Slider */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-alert text-center mb-6">Remember These Misses?</h3>
          
          <div className="relative bg-surface rounded-2xl p-6 overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => setActiveTimelineNode(Math.max(0, activeTimelineNode - 1))}
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex-1 mx-4">
                <div className="relative h-2 bg-gray-700 rounded-full">
                  <div 
                    className="absolute top-0 left-0 h-2 bg-green-400 rounded-full transition-all duration-500"
                    style={{ width: `${((activeTimelineNode + 1) / timelineCompanies.length) * 100}%` }}
                  />
                  {timelineCompanies.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleTimelineClick(index)}
                      className={`absolute top-1/2 w-4 h-4 rounded-full border-2 transform -translate-y-1/2 transition-all duration-300 ${
                        index === activeTimelineNode 
                          ? 'bg-green-400 border-green-400 scale-125' 
                          : 'bg-gray-700 border-gray-600 hover:border-gray-500'
                      }`}
                      style={{ left: `${(index / (timelineCompanies.length - 1)) * 100}%` }}
                    />
                  ))}
                </div>
              </div>
              
              <button
                onClick={() => setActiveTimelineNode(Math.min(timelineCompanies.length - 1, activeTimelineNode + 1))}
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
            <div className="text-center animate-fade-in">
              <h4 className="text-xl font-bold text-high mb-1">
                {timelineCompanies[activeTimelineNode].name}
              </h4>
              <p className="text-secondary text-sm mb-2">
                {timelineCompanies[activeTimelineNode].year}: {timelineCompanies[activeTimelineNode].valuation}
              </p>
              <p className="text-2xl font-bold accent-positive">
                → {timelineCompanies[activeTimelineNode].current} ({timelineCompanies[activeTimelineNode].multiple})
              </p>
            </div>
          </div>
        </div>

        {/* FOMO Bar */}
        <div className="mt-12">
          <div 
            className="w-full rounded-2xl p-6 text-center animate-gradient-wave"
            style={{ 
              background: 'linear-gradient(270deg, var(--bg-primary), var(--bg-surface), var(--bg-primary))',
              backgroundSize: '200% 200%'
            }}
          >
            <p className="text-xl font-bold text-alert mb-2 animate-pulse">
              Don't repeat history.
            </p>
            <p className="text-secondary">
              Asmi is building the infrastructure for human-AI collaboration.
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-high mb-8">
            Back the memory OS of the future.
          </h2>
          
          <div className="space-y-4 mb-8">
            {finalPoints.map((point, index) => (
              <div
                key={index}
                className={`p-4 rounded-2xl border border-white/10 transition-all duration-500 ${
                  revealedPoints.includes(index) 
                    ? 'opacity-100 transform scale-100 bg-white/5' 
                    : 'opacity-50 transform scale-95'
                }`}
                style={{ backgroundColor: 'var(--bg-surface)' }}
              >
                <p className="text-base font-medium text-high">{point}</p>
              </div>
            ))}
          </div>

          {showCTA && (
            <div className="space-y-4 animate-fade-in">
              <button className="button-primary w-full max-w-sm mx-auto block animate-pulse">
                Lead our $8M seed <ArrowRight className="inline ml-2" size={20} />
              </button>
              
              <button className="button-secondary w-full max-w-sm mx-auto block">
                Back to overview
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InteractiveFOMOSection;
