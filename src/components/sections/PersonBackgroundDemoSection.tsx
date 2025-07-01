
import { useState, useEffect } from 'react';
import { Building, Award } from 'lucide-react';

const PersonBackgroundDemoSection = () => {
  const [showDemo, setShowDemo] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowDemo(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showDemo) {
      const timer = setTimeout(() => setShowBackground(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [showDemo]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-black to-purple-900/20">
      <div className="max-w-sm mx-auto">
        <div className="bg-black/60 backdrop-blur-sm rounded-3xl border border-purple-400/20 overflow-hidden shadow-2xl">
          <div className="bg-purple-800/30 px-4 py-3 flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <div>
              <h3 className="text-white font-medium text-sm">Asmi</h3>
              <p className="text-purple-300 text-xs">Background Intel</p>
            </div>
          </div>

          <div className="p-4 bg-black/90 min-h-[300px] space-y-4">
            {showDemo && (
              <div className="animate-fade-in">
                <div className="bg-blue-600 px-4 py-3 rounded-2xl text-white ml-auto max-w-xs">
                  <span className="text-sm font-light">Who is Karan again?</span>
                </div>
              </div>
            )}

            {showBackground && (
              <div className="animate-fade-in">
                <div className="bg-gray-800/80 backdrop-blur-sm px-4 py-3 rounded-2xl text-white border border-purple-400/20">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Building className="text-purple-400" size={16} />
                      <span className="text-sm font-light">Partner at Accel Ventures</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="text-purple-400" size={16} />
                      <span className="text-sm font-light">Likes crisp, data-driven decks</span>
                    </div>
                    <div className="p-3 bg-black/40 rounded-xl text-xs text-gray-300">
                      Last meeting: Asked about user retention metrics and monetization timeline
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {showBackground && (
          <div className="mt-6 p-4 bg-purple-400/10 border border-purple-400/20 rounded-2xl backdrop-blur-sm animate-fade-in">
            <p className="text-purple-300 text-sm text-center font-light">
              Compiled from your LinkedIn research and past meeting notes
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonBackgroundDemoSection;
