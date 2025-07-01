
import { useState, useEffect } from 'react';

const MinimalFoundersSection = () => {
  const [showLogos, setShowLogos] = useState(false);

  const logos = [
    { name: 'DoorDash', color: 'text-red-400' },
    { name: 'Zoom', color: 'text-blue-400' },
    { name: 'Meta', color: 'text-blue-500' },
    { name: 'CMU', color: 'text-red-500' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setShowLogos(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-black to-blue-900/20">
      <div className="text-center max-w-md mx-auto">
        {/* Founder credentials */}
        <div className="space-y-6 mb-8">
          <div className="opacity-0 animate-fade-in">
            <div className="text-2xl font-bold text-green-400 mb-2">$300M GMV</div>
            <div className="text-2xl font-bold text-green-400 mb-2">$75M raised</div>
            <p className="text-gray-400 text-sm">Rishi - Co-founder & CEO</p>
          </div>
          
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="text-2xl font-bold text-blue-400 mb-2">Meta AI</div>
            <div className="text-2xl font-bold text-blue-400 mb-2">PhD CMU</div>
            <p className="text-gray-400 text-sm">Satwik - Co-founder & CTO</p>
          </div>
        </div>

        {/* Logo trail */}
        {showLogos && (
          <div className="flex justify-center items-center space-x-4 flex-wrap">
            {logos.map((logo, index) => (
              <div
                key={logo.name}
                className={`px-4 py-2 ${logo.color} font-bold text-lg opacity-0 animate-fade-in`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {logo.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MinimalFoundersSection;
