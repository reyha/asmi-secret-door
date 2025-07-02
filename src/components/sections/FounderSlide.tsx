
import { useState } from 'react';

const FounderSlide = () => {
  const [activeFounder, setActiveFounder] = useState<number | null>(null);

  const founders = [
    {
      name: 'Rishi',
      avatar: 'R',
      gradient: 'from-blue-500 to-purple-600',
      tags: ['$400M GMV', '$75M raised', 'Tony Xu', 'Eric Yuan'],
      logos: ['DoorDash', 'Zoom', 'Flipkart']
    },
    {
      name: 'Satwik',
      avatar: 'S',
      gradient: 'from-purple-500 to-pink-600',
      tags: ['PhD CMU', 'Meta AI', '25+ papers', 'Meta Glasses'],
      logos: ['CMU', 'Meta']
    }
  ];

  return (
    <div className="min-h-screen bg-[#1F1F23] flex flex-col items-center justify-center px-4 relative">
      {/* LIVE badge */}
      <div className="absolute top-8 right-8">
        <div className="bg-[#37D67A]/20 border border-[#37D67A]/50 rounded-full px-3 py-1 animate-pulse">
          <span className="text-[#37D67A] text-xs font-medium">Veteran Builders</span>
        </div>
      </div>

      <div className="text-center max-w-md mx-auto">
        {/* Header */}
        <h1 className="text-[28px] font-bold text-white mb-4 leading-tight">
          Been there. Built that. Now building Asmi.
        </h1>
        
        {/* Microcopy */}
        <div className="mb-8 space-y-2">
          <p className="text-[18px] text-[#37D67A]">
            Rishi → Scaled Arzooo to $400M GMV, raised $75M from top VCs and founders like Tony Xu (Doordash) and Eric Yuan (Zoom)
          </p>
          <p className="text-[18px] text-[#37D67A]">
            Satwik → PhD CMU, 6 yrs Meta AI, 25+ papers
          </p>
        </div>

        {/* Founder portraits */}
        <div className="flex justify-center space-x-8 mb-8">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="relative"
              onClick={() => setActiveFounder(activeFounder === index ? null : index)}
            >
              {/* Portrait */}
              <div className={`w-20 h-20 bg-gradient-to-r ${founder.gradient} rounded-full flex items-center justify-center text-2xl font-bold text-white cursor-pointer transition-transform hover:scale-110 ${
                activeFounder === index ? 'scale-110 ring-4 ring-[#37D67A]/50' : ''
              }`}>
                {founder.avatar}
              </div>

              {/* Animated tag cloud */}
              {activeFounder === index && (
                <div className="absolute -top-16 -left-16 w-32 h-32 pointer-events-none">
                  {founder.tags.map((tag, tagIndex) => (
                    <div
                      key={tagIndex}
                      className="absolute bg-black/80 backdrop-blur-sm border border-[#37D67A]/30 rounded-full px-2 py-1 animate-scale-in"
                      style={{
                        top: `${Math.sin(tagIndex * Math.PI / 2) * 40 + 50}%`,
                        left: `${Math.cos(tagIndex * Math.PI / 2) * 40 + 50}%`,
                        transform: 'translate(-50%, -50%)',
                        animationDelay: `${tagIndex * 100}ms`
                      }}
                    >
                      <span className="text-[#37D67A] text-xs font-medium whitespace-nowrap">
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Background logos */}
              {activeFounder === index && (
                <div className="absolute inset-0 -z-10 opacity-20">
                  {founder.logos.map((logo, logoIndex) => (
                    <div
                      key={logoIndex}
                      className="absolute text-white/30 text-xs animate-fade-in"
                      style={{
                        top: `${logoIndex * 30 + 10}%`,
                        left: `${logoIndex * 25 + 10}%`,
                        animationDelay: `${logoIndex * 200 + 300}ms`
                      }}
                    >
                      {logo}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Tap hint */}
        <p className="text-gray-400 text-sm mb-8">
          Tap portraits to see credentials
        </p>
      </div>
    </div>
  );
};

export default FounderSlide;
