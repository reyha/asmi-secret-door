
import { useState, useEffect } from 'react';
import { Users, Zap, Smartphone } from 'lucide-react';

const TractionSection = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [animatedNumbers, setAnimatedNumbers] = useState([0, 0, 0]);

  const stats = [
    {
      icon: <Users className="text-green-400" size={24} />,
      number: 500,
      label: 'Waitlist signups',
      subtitle: 'via referrals only',
      color: 'from-green-400 to-green-500',
      bgColor: 'from-green-500/20 to-green-400/10'
    },
    {
      icon: <Zap className="text-blue-400" size={24} />,
      number: 30,
      label: 'Power users',
      subtitle: 'founders, VCs, execs',
      color: 'from-blue-400 to-blue-500',
      bgColor: 'from-blue-500/20 to-blue-400/10'
    },
    {
      icon: <Smartphone className="text-purple-400" size={24} />,
      number: 1,
      label: 'iMessage launch',
      subtitle: 'rolling out now',
      color: 'from-purple-400 to-purple-500',
      bgColor: 'from-purple-500/20 to-purple-400/10'
    }
  ];

  useEffect(() => {
    // Animate numbers
    stats.forEach((stat, index) => {
      let start = 0;
      const increment = stat.number / 30;
      const timer = setInterval(() => {
        start += increment;
        if (start >= stat.number) {
          start = stat.number;
          clearInterval(timer);
        }
        setAnimatedNumbers(prev => {
          const newNumbers = [...prev];
          newNumbers[index] = Math.floor(start);
          return newNumbers;
        });
      }, 50);
    });

    // Cycle through stats
    const statInterval = setInterval(() => {
      setCurrentStat(prev => (prev + 1) % stats.length);
    }, 2000);

    return () => clearInterval(statInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-light text-white mb-4">
            From zero to <span className="text-green-400 font-medium">breakout</span>.
          </h1>
        </div>

        {/* Stats timeline */}
        <div className="space-y-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                currentStat >= index
                  ? `opacity-100 scale-100 bg-gradient-to-r ${stat.bgColor} border-white/30`
                  : 'opacity-40 scale-95 bg-white/5 border-white/10'
              } border rounded-3xl p-8 backdrop-blur-sm`}
            >
              <div className="flex items-center justify-center space-x-6">
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${stat.color}`}>
                  {stat.icon}
                </div>
                
                <div className="text-left">
                  <div className="text-4xl md:text-6xl font-light text-white mb-2">
                    {index === 2 ? '✓' : `${animatedNumbers[index]}${index === 0 ? '+' : '+'}`}
                  </div>
                  <div className="text-xl text-white font-medium mb-1">
                    {stat.label}
                  </div>
                  <div className="text-gray-400 text-sm font-light">
                    {stat.subtitle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Testimonial preview */}
        <div className="mt-16 animate-fade-in" style={{ animationDelay: '3s' }}>
          <div className="bg-gradient-to-r from-white/5 to-white/10 border border-white/20 rounded-3xl p-6 backdrop-blur-sm max-w-2xl mx-auto">
            <p className="text-lg text-gray-300 font-light italic mb-4">
              "This is what I've been waiting for. An AI that actually gets things done."
            </p>
            <p className="text-gray-500 text-sm">
              — Sarah Chen, Partner @ Accel
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TractionSection;
