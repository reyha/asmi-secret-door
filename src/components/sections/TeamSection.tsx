
import { useState, useEffect } from 'react';
import { Building, GraduationCap, TrendingUp } from 'lucide-react';

const TeamSection = () => {
  const [showLogos, setShowLogos] = useState(false);

  const companies = [
    { name: 'Flipkart', color: 'text-orange-400' },
    { name: 'Meta', color: 'text-blue-400' },
    { name: 'Zoom', color: 'text-blue-500' },
    { name: 'DoorDash', color: 'text-red-400' },
    { name: 'CMU', color: 'text-red-500' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogos(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main headline */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-light text-white mb-4 leading-tight">
            We've built companies to scale.
          </h1>
          <h2 className="text-2xl md:text-4xl font-light text-white mb-6">
            And scaled AI at Meta.
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 font-light">
            Now we're building the OS for life.
          </p>
        </div>

        {/* Founders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Rishi */}
          <div className="bg-gradient-to-r from-green-500/10 to-green-400/5 border border-green-400/20 rounded-3xl p-8 backdrop-blur-sm animate-fade-in">
            <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-black font-bold text-2xl">R</span>
            </div>
            <h3 className="text-xl font-medium text-white mb-2">Rishi</h3>
            <div className="space-y-2 text-green-300">
              <div className="flex items-center justify-center space-x-2">
                <TrendingUp size={16} />
                <span className="text-sm">$300M GMV built</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Building size={16} />
                <span className="text-sm">$75M raised</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-4 font-light">
              Serial entrepreneur, scaled marketplaces from 0→$300M
            </p>
          </div>

          {/* Satwik */}
          <div className="bg-gradient-to-r from-blue-500/10 to-blue-400/5 border border-blue-400/20 rounded-3xl p-8 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-black font-bold text-2xl">S</span>
            </div>
            <h3 className="text-xl font-medium text-white mb-2">Satwik</h3>
            <div className="space-y-2 text-blue-300">
              <div className="flex items-center justify-center space-x-2">
                <GraduationCap size={16} />
                <span className="text-sm">PhD CMU</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Building size={16} />
                <span className="text-sm">Meta AI</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-4 font-light">
              AI researcher, 25+ papers, scaled ML systems for billions
            </p>
          </div>
        </div>

        {/* Company logos */}
        {showLogos && (
          <div className="animate-fade-in">
            <p className="text-gray-500 text-sm mb-6 font-light">Previously built at</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {companies.map((company, index) => (
                <div
                  key={company.name}
                  className={`text-2xl font-bold ${company.color} animate-fade-in opacity-70 hover:opacity-100 transition-opacity`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {company.name}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <div className="bg-gradient-to-r from-white/5 to-white/10 border border-white/20 rounded-3xl p-6 backdrop-blur-sm">
            <p className="text-xl text-white font-light">
              Not first-time founders. Not first-time builders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
