
import { useState, useEffect } from 'react';
import { Building, GraduationCap, TrendingUp } from 'lucide-react';

const TeamSection = () => {
  const [showLogos, setShowLogos] = useState(false);

  const companies = [
    { name: 'Meta', color: 'text-blue-400' },
    { name: 'Deepmind', color: 'text-red-400' },
    { name: 'Flipkart', color: 'text-orange-400' },
    { name: 'Arzooo', color: 'text-green-400' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogos(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4 py-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main headline */}
        <div className="mb-16">
          <h1 className="text-3xl md:text-5xl font-light text-white mb-8 leading-tight">
            We have built companies - loved by millions - scaled to hundreds of millions (GMV)
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-green-400 mb-6">
            Pouring this learning into next BIG thing now
          </h2>
        </div>

        {/* Founders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Rishi */}
          <div className="bg-gradient-to-r from-green-500/10 to-green-400/5 border border-green-400/20 rounded-3xl p-8 backdrop-blur-sm animate-fade-in">
            <div className="flex items-center space-x-6">
              {/* Founder GIF placeholder */}
              <div className="w-32 h-40 bg-gradient-to-r from-green-400 to-green-500 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="w-20 h-20 bg-black/20 rounded-full flex items-center justify-center animate-pulse">
                  <span className="text-black font-bold text-2xl">R</span>
                </div>
                {/* Animated standing effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent animate-pulse"></div>
              </div>
              
              {/* Founder details */}
              <div className="flex-1 text-left">
                <h3 className="text-2xl font-medium text-white mb-4">Rishi Rathore</h3>
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-orange-500/20 to-orange-400/10 p-3 rounded-xl border border-orange-400/20">
                    <div className="text-orange-400 font-bold text-lg">Built Arzooo</div>
                    <div className="text-orange-300 text-sm">Vertical ecomm → $400M GMV</div>
                  </div>
                  <div className="bg-gradient-to-r from-green-500/20 to-green-400/10 p-3 rounded-xl border border-green-400/20">
                    <div className="text-green-400 font-bold">$75M raised</div>
                    <div className="text-green-300 text-sm">Top VCs & founders</div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500/20 to-blue-400/10 p-3 rounded-xl border border-blue-400/20">
                    <div className="text-blue-400 text-sm">Tony Xu (DoorDash) • Eric Yuan (Zoom)</div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500/20 to-purple-400/10 p-3 rounded-xl border border-purple-400/20">
                    <div className="text-purple-400 text-sm">"I've built consumer products for millions. Now I am building a single interface to Get Things Done"</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Satwik */}
          <div className="bg-gradient-to-r from-blue-500/10 to-blue-400/5 border border-blue-400/20 rounded-3xl p-8 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center space-x-6">
              {/* Founder GIF placeholder */}
              <div className="w-32 h-40 bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="w-20 h-20 bg-black/20 rounded-full flex items-center justify-center animate-pulse">
                  <span className="text-black font-bold text-2xl">S</span>
                </div>
                {/* Animated standing effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent animate-pulse"></div>
              </div>
              
              {/* Founder details */}
              <div className="flex-1 text-left">
                <h3 className="text-2xl font-medium text-white mb-4">Satwik Kottur</h3>
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-red-500/20 to-red-400/10 p-3 rounded-xl border border-red-400/20">
                    <div className="text-red-400 font-bold">Meta AI</div>
                    <div className="text-red-300 text-sm">Scaled ML for billions</div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500/20 to-purple-400/10 p-3 rounded-xl border border-purple-400/20">
                    <div className="text-purple-400 font-bold">Deepmind</div>
                    <div className="text-purple-300 text-sm">Advanced AI research</div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500/20 to-blue-400/10 p-3 rounded-xl border border-blue-400/20">
                    <div className="text-blue-400 text-sm">PhD CMU • 25+ papers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company logos */}
        {showLogos && (
          <div className="animate-fade-in mb-12">
            <p className="text-gray-500 text-sm mb-6 font-light">Previously built at</p>
            <div className="flex flex-wrap justify-center items-center gap-12">
              {companies.map((company, index) => (
                <div
                  key={company.name}
                  className={`text-3xl font-bold ${company.color} animate-fade-in opacity-70 hover:opacity-100 transition-opacity`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {company.name}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom tagline */}
        <div className="animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <div className="bg-gradient-to-r from-white/5 to-white/10 border border-white/20 rounded-3xl p-8 backdrop-blur-sm">
            <p className="text-2xl text-green-400 font-light">
              Serial entrepreneur meets cracked scientist
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
