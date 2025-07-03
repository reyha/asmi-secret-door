
import { useState, useEffect } from 'react';
import { Shield, Lock, Unlock } from 'lucide-react';

interface VaultTransitionProps {
  onComplete: () => void;
}

const VaultTransition = ({ onComplete }: VaultTransitionProps) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 300),
      setTimeout(() => setStage(2), 800),
      setTimeout(() => setStage(3), 1300),
      setTimeout(() => onComplete(), 2000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Vault animation */}
        <div className="relative mb-8">
          <div className={`w-32 h-32 border-4 rounded-2xl transition-all duration-500 ${
            stage >= 1 ? 'border-green-400 shadow-lg shadow-green-400/20' : 'border-white/20'
          }`}>
            <div className="absolute inset-0 flex items-center justify-center">
              {stage === 0 && <Lock className="text-white/60" size={48} />}
              {stage === 1 && <Lock className="text-green-400 animate-pulse" size={48} />}
              {stage >= 2 && <Unlock className="text-green-400" size={48} />}
            </div>
            
            {/* Lock mechanism animation */}
            {stage >= 2 && (
              <div className="absolute inset-2 border-2 border-green-400/30 rounded-lg animate-pulse">
                <div className="absolute inset-1 bg-gradient-to-br from-green-400/10 to-green-500/5 rounded animate-fade-in">
                  <Shield className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-green-400" size={24} />
                </div>
              </div>
            )}
          </div>
          
          {/* Glowing effect */}
          {stage >= 1 && (
            <div className="absolute inset-0 rounded-2xl bg-green-400/5 animate-pulse"></div>
          )}
        </div>

        {/* Text animation */}
        <div className={`transition-all duration-500 ${stage >= 1 ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-green-400 text-lg font-light mb-2">
            {stage === 1 && 'Accessing secure vault...'}
            {stage === 2 && 'Vault unlocked'}
            {stage >= 3 && 'Welcome to the future'}
          </p>
          
          {stage >= 2 && (
            <div className="flex justify-center space-x-1 mt-4">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-green-400 rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 200}ms` }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VaultTransition;
