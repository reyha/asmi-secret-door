
import { useState, useEffect } from 'react';
import { Users, Zap, Smartphone } from 'lucide-react';

const MomentumSection = () => {
  const [currentStat, setCurrentStat] = useState(-1);

  const stats = [
    { icon: <Users className="text-green-400" size={24} />, number: '500+', label: 'Waitlist' },
    { icon: <Zap className="text-blue-400" size={24} />, number: '30+', label: 'Active users' },
    { icon: <Smartphone className="text-purple-400" size={24} />, number: 'Live', label: 'Launching iMessage' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStat(prev => {
        if (prev >= stats.length - 1) return prev;
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [stats.length]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-black to-green-900/20">
      <div className="text-center max-w-md mx-auto">
        <div className="space-y-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                index <= currentStat 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
            >
              <div className="flex flex-col items-center space-y-2">
                <div className="p-4 bg-white/5 rounded-full backdrop-blur-sm border border-white/10">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white">{stat.number}</div>
                <div className="text-gray-400 font-light">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MomentumSection;
