
import { useState, useEffect } from 'react';
import { TrendingUp, Building, Users, ArrowRight, ArrowLeft } from 'lucide-react';
import MobileOptimizedSection from './MobileOptimizedSection';

const InteractiveFOMOSection = ({setShowFOMO}) => {
  const [currentCard, setCurrentCard] = useState(0);
  const [showCTA, setShowCTA] = useState(false);

  const missedOpportunities = [
    {
      company: "Stripe",
      year: "2011",
      initialValue: "$1B",
      currentValue: "$95B", 
      multiple: "95×",
      icon: <TrendingUp size={32} className="text-green-400" />,
      insight: "You backed Stripe at $1B → 95× exit",
      color: "from-green-400/20 to-emerald-500/20"
    },
    {
      company: "OpenAI", 
      year: "2019",
      initialValue: "$100M",
      currentValue: "$157B",
      multiple: "1570×", 
      icon: <Building size={32} className="text-blue-400" />,
      insight: "You led OpenAI's Series A → $157B valuation", 
      color: "from-blue-400/20 to-cyan-500/20"
    },
    {
      company: "Notion",
      year: "2020", 
      initialValue: "$800M",
      currentValue: "$10B+",
      multiple: "12×+",
      icon: <Users size={32} className="text-purple-400" />,
      insight: "You invested in Notion early → 10B+ users",
      color: "from-purple-400/20 to-pink-500/20"
    }
  ];

  // Auto-advance cards
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard(prev => {
        const next = (prev + 1) % missedOpportunities.length;
        if (next === 0 && prev === missedOpportunities.length - 1) {
          // Completed full cycle, show CTA after a delay
          setTimeout(() => setShowCTA(true), 1000);
        }
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleCardTap = (index: number) => {
    setCurrentCard(index);
  };

  const handleBackClick = () => {
    // This will be handled by parent component
    // window.history.back();
    setShowFOMO(false)
  };

  return (
    <MobileOptimizedSection maxWidth="sm" className='overflow-auto'>
      <div className="space-y-8 text-center">
        {/* Back Button */}
        {/* <div className="flex justify-start">
          <button
            onClick={handleBackClick}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            <span className="text-sm">Back to Personal OS</span>
          </button>
        </div> */}

        {/* Header */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-red-400 leading-tight">
            What You'll Miss
          </h2>
          {/* <p className="text-base text-gray-400">
            The cost of missing the Personal OS revolution
          </p> */}
        </div>

        {/* Auto-swiping Cards */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentCard * 100}%)` }}
            >
              {missedOpportunities.map((opportunity, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 p-6"
                  onClick={() => handleCardTap(index)}
                >
                  <div className={`bg-gradient-to-br ${opportunity.color} border border-white/10 rounded-2xl p-6 backdrop-blur-sm cursor-pointer hover:scale-105 transition-transform`}>
                    <div className="space-y-4">
                      {/* Icon */}
                      <div className="flex justify-center">
                        {opportunity.icon}
                      </div>

                      {/* Company and Year */}
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {opportunity.company}
                        </h3>
                        <p className="text-gray-300 text-sm">{opportunity.year}</p>
                      </div>

                      {/* Values */}
                      <div className="space-y-2">
                        <div className="text-center">
                          <p className="text-gray-400 text-sm">{opportunity.initialValue}</p>
                          <div className="flex items-center justify-center space-x-2 my-2">
                            <div className="h-px bg-gray-500 flex-1"></div>
                            <ArrowRight size={16} className="text-gray-500" />
                            <div className="h-px bg-gray-500 flex-1"></div>
                          </div>
                          <p className="text-white font-semibold text-lg">{opportunity.currentValue}</p>
                        </div>
                        
                        <div className="bg-black/30 rounded-xl p-3">
                          <p className="text-2xl font-bold text-green-400">
                            {opportunity.multiple} return
                          </p>
                        </div>
                      </div>

                      {/* Insight */}
                      <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                        <p className="text-sm text-gray-300 italic">
                          {opportunity.insight}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {missedOpportunities.map((_, index) => (
              <button
                key={index}
                onClick={() => handleCardTap(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentCard ? 'bg-red-400 w-6' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* FOMO Message - Always visible */}
        <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-400/30 rounded-2xl p-4">
          <p className="text-lg font-bold text-red-400 mb-2 animate-pulse">
            Don't repeat history.
          </p>
          <p className="text-gray-300 text-sm">
            Asmi is building the infrastructure for human-AI collaboration.
          </p>
        </div>

        {/* CTA */}
        {showCTA && (
          <div className="space-y-4 animate-fade-in">
            {/*<h3 className="text-xl font-bold text-white">*/}
            {/*  Back the memory OS of the future.*/}
            {/*</h3>*/}
            
            {/*<div className="space-y-3">*/}
            {/*  <div className="bg-white/5 rounded-xl p-3 border border-white/10">*/}
            {/*    <p className="text-sm font-medium text-white">$5-6M seed → Series A in 18 mo</p>*/}
            {/*  </div>*/}
            {/*  <div className="bg-white/5 rounded-xl p-3 border border-white/10">*/}
            {/*    <p className="text-sm font-medium text-white">Founders: $300M GMV & Meta AI systems</p>*/}
            {/*  </div>*/}
            {/*  <div className="bg-white/5 rounded-xl p-3 border border-white/10">*/}
            {/*    <p className="text-sm font-medium text-white">Limited seats. Claim yours.</p>*/}
            {/*  </div>*/}
            {/*</div>*/}

            <button className="w-full bg-green-400 hover:bg-green-500 text-black font-bold py-3 px-6 rounded-full transition-colors animate-pulse">
              Lead our $5M seed <ArrowRight className="inline ml-2" size={16} />
            </button>
          </div>
        )}
      </div>
    </MobileOptimizedSection>
  );
};

export default InteractiveFOMOSection;
