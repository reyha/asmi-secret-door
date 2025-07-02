
import { useState, useEffect } from 'react';

const TractionRoadmapSection = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [currentCard, setCurrentCard] = useState(0);

  const stats = [
    { label: 'Early Adopters', value: 500, suffix: '+' },
    { label: 'Active Users', value: 30, suffix: '+' },
    { label: 'iMessage Beta', value: 1, suffix: '' }
  ];

  const roadmapCards = [
    { title: 'Calendar Memory', status: 'Live', color: '#37D67A' },
    { title: 'iMessage β', status: 'Testing', color: '#3B82F6' },
    { title: 'AI Summaries', status: 'Next', color: '#8B5CF6' },
    { title: 'Scale to 1K', status: 'Q2', color: '#F59E0B' }
  ];

  const testimonial = "This is exactly what I've been looking for. Asmi actually gets things done without me having to think about it.";

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStat(prev => (prev + 1) % stats.length);
      setCurrentCard(prev => (prev + 1) % roadmapCards.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#1F1F23] flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-sm mx-auto">
        <h1 className="text-[28px] font-bold text-white text-center mb-8">
          Built. Shipped. Growing.
        </h1>

        <div className="grid grid-cols-1 gap-6">
          {/* Stats Section */}
          <div className="bg-black/40 backdrop-blur-sm rounded-3xl border border-white/10 p-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#37D67A] mb-2">
                {stats[currentStat].value}{stats[currentStat].suffix}
              </div>
              <div className="text-white font-medium">
                {stats[currentStat].label}
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-3xl border border-white/10 p-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0" />
              <div className="flex-1">
                <p className="text-white text-sm leading-relaxed">
                  "{testimonial}"
                </p>
                <p className="text-gray-400 text-xs mt-2">— Beta User</p>
              </div>
            </div>
          </div>

          {/* Roadmap Cards */}
          <div className="space-y-3">
            <h3 className="text-white font-medium text-center">Next 100 Days</h3>
            <div className="bg-black/40 backdrop-blur-sm rounded-3xl border border-white/10 p-4">
              <div 
                className="rounded-2xl p-4 transition-all duration-500"
                style={{ backgroundColor: `${roadmapCards[currentCard].color}20` }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">
                    {roadmapCards[currentCard].title}
                  </span>
                  <span 
                    className="text-xs px-2 py-1 rounded-full font-medium"
                    style={{ 
                      backgroundColor: roadmapCards[currentCard].color,
                      color: '#000'
                    }}
                  >
                    {roadmapCards[currentCard].status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TractionRoadmapSection;
