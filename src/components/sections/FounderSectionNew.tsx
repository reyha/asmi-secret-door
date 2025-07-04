
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Building, TrendingUp, Award, Users, Zap, Star } from 'lucide-react';
import MobileOptimizedSection from './MobileOptimizedSection';

const FounderSectionNew = () => {
  const [activeFounder, setActiveFounder] = useState(0);
  const [showAchievements, setShowAchievements] = useState(false);

  const founders = [
    {
      name: "Rishi Rathore",
      role: "Co-Founder & CEO",
      title: "Serial Entrepreneur",
      image: "/lovable-uploads/3a0a6200-86d3-4ef6-89ac-4b39a0518b26.png", // Using the uploaded image as reference
      avatar: "R",
      description: "Serial entrepreneur who raised $75M from top investors, including Tony Xu (DoorDash) & Eric Yuan (Zoom). Scaled Arzoo to $300M in sales, creating India's largest consumer electronics retail network (400+ cities).",
      keyStats: [
        { label: "$300M", sublabel: "Sales Revenue", icon: TrendingUp },
        { label: "$75M", sublabel: "Funds Raised", icon: Building },
        { label: "400+", sublabel: "Cities", icon: Users }
      ],
      companies: ["Arzoo", "GoStor", "NU"],
      achievements: [
        "Forbes 30 Under 30 Asia 2020",
        "HURUN #9 among top 150 entrepreneurs under 35 in India, 2024"
      ],
      backgroundColor: "from-blue-600 to-purple-700",
      accentColor: "text-blue-400"
    },
    {
      name: "Satwik Kottur",
      role: "Co-Founder & CTO", 
      title: "Cracked Scientist",
      avatar: "S",
      description: "Ph.D. from Carnegie Mellon and B.Tech from IIT Bombay (AI India Rank-6), a leading AI researcher with 6 years at Meta AI, specialising in foundation models, NLP and vision-language systems.",
      keyStats: [
        { label: "25+", sublabel: "Research Papers", icon: Award },
        { label: "6 Yrs", sublabel: "Meta AI", icon: Zap },
        { label: "PhD", sublabel: "Carnegie Mellon", icon: Star }
      ],
      companies: ["Meta AI", "Google DeepMind", "CMU", "IIT Bombay"],
      achievements: [
        "A.G. Milnes Award - For highest quality PhD thesis",
        "Snap Inc. Research Fellowship"
      ],
      backgroundColor: "from-green-600 to-teal-700",
      accentColor: "text-green-400"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAchievements(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const switchFounder = (index: number) => {
    setActiveFounder(index);
    setShowAchievements(false);
    setTimeout(() => setShowAchievements(true), 300);
  };

  const currentFounder = founders[activeFounder];

  return (
    <MobileOptimizedSection maxWidth="sm">
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-white leading-tight">
            Serial Founder meets Cracked Scientist
          </h2>
          <p className="text-gray-400 text-sm">
            $400M+ combined track record in building & scaling
          </p>
        </div>

        {/* Founder Switcher Tabs */}
        <div className="flex bg-gray-900/50 rounded-full p-1 border border-white/10">
          {founders.map((founder, index) => (
            <button
              key={index}
              onClick={() => switchFounder(index)}
              className={`flex-1 py-3 px-4 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFounder === index
                  ? 'bg-white text-black shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {founder.title}
            </button>
          ))}
        </div>

        {/* Active Founder Card */}
        <div className={`bg-gradient-to-br ${currentFounder.backgroundColor} rounded-2xl p-6 shadow-2xl transform transition-all duration-500 ${showAchievements ? 'scale-100 opacity-100' : 'scale-95 opacity-80'}`}>
          {/* Founder Header */}
          <div className="flex items-start space-x-4 mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl font-bold text-gray-800">
                {currentFounder.avatar}
              </span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-1">
                {currentFounder.name}
              </h3>
              <p className="text-white/80 text-sm font-medium">
                {currentFounder.role}
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-white/90 text-sm leading-relaxed mb-6">
            {currentFounder.description}
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {currentFounder.keyStats.map((stat, index) => (
              <div
                key={index}
                className={`bg-white/10 rounded-xl p-3 text-center backdrop-blur-sm transform transition-all duration-500 delay-${index * 100}`}
                style={{
                  animationDelay: showAchievements ? `${index * 100}ms` : '0ms'
                }}
              >
                <stat.icon className="w-5 h-5 text-white mb-1 mx-auto" />
                <div className="text-lg font-bold text-white">
                  {stat.label}
                </div>
                <div className="text-xs text-white/70">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </div>

          {/* Companies/Logos */}
          <div className="mb-6">
            <p className="text-white/60 text-xs mb-3 uppercase tracking-wide">
              Companies & Institutions
            </p>
            <div className="flex flex-wrap gap-2">
              {currentFounder.companies.map((company, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/20 rounded-full text-xs text-white font-medium backdrop-blur-sm"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className={`space-y-2 transition-all duration-700 ${showAchievements ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
            <p className="text-white/60 text-xs mb-3 uppercase tracking-wide">
              Key Achievements
            </p>
            {currentFounder.achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-start space-x-2 p-3 bg-white/10 rounded-xl backdrop-blur-sm"
              >
                <Award className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                <p className="text-white/90 text-xs leading-relaxed">
                  {achievement}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-3">
          {founders.map((_, index) => (
            <button
              key={index}
              onClick={() => switchFounder(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeFounder 
                  ? 'bg-white scale-125' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Bottom Impact Statement */}
        <div className="text-center p-4 bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-xl border border-white/10">
          <p className="text-white font-semibold text-sm">
            🚀 Combined: $400M+ in value creation
          </p>
          <p className="text-gray-400 text-xs mt-1">
            Building the future of personal AI systems
          </p>
        </div>
      </div>
    </MobileOptimizedSection>
  );
};

export default FounderSectionNew;
