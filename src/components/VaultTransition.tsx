
import { useState, useEffect } from 'react';
import { Vault } from 'lucide-react';

interface VaultTransitionProps {
  onComplete: () => void;
}

const VaultTransition = ({ onComplete }: VaultTransitionProps) => {
  const [stage, setStage] = useState<'closed' | 'opening' | 'open'>('closed');

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setStage('opening');
    }, 300);

    const timer2 = setTimeout(() => {
      setStage('open');
    }, 1200);

    const timer3 = setTimeout(() => {
      onComplete();
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-green-900/20" />
      
      {/* Vault animation */}
      <div className="relative">
        {/* Vault body */}
        <div className="relative w-48 h-48 md:w-64 md:h-64">
          {/* Back panel */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl border-4 border-gray-600 shadow-2xl">
            {/* Inner glow when opening */}
            {stage !== 'closed' && (
              <div className="absolute inset-4 bg-gradient-to-br from-green-400/20 to-green-600/30 rounded-xl animate-pulse" />
            )}
          </div>
          
          {/* Left door */}
          <div 
            className={`absolute left-0 top-0 w-1/2 h-full bg-gradient-to-br from-gray-600 to-gray-800 rounded-l-2xl border-4 border-r-2 border-gray-500 shadow-xl transition-all duration-1000 origin-left ${
              stage === 'opening' ? 'transform -rotate-y-90' : stage === 'open' ? 'transform -rotate-y-180' : ''
            }`}
            style={{ 
              transformStyle: 'preserve-3d',
              transform: stage === 'opening' ? 'perspective(800px) rotateY(-45deg)' : 
                         stage === 'open' ? 'perspective(800px) rotateY(-90deg)' : 'perspective(800px) rotateY(0deg)'
            }}
          >
            {/* Door handle */}
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-8 bg-yellow-600 rounded-full shadow-md" />
            {/* Door details */}
            <div className="absolute inset-2 border-2 border-gray-500/50 rounded-l-lg" />
          </div>
          
          {/* Right door */}
          <div 
            className={`absolute right-0 top-0 w-1/2 h-full bg-gradient-to-br from-gray-600 to-gray-800 rounded-r-2xl border-4 border-l-2 border-gray-500 shadow-xl transition-all duration-1000 origin-right ${
              stage === 'opening' ? 'transform rotate-y-90' : stage === 'open' ? 'transform rotate-y-180' : ''
            }`}
            style={{ 
              transformStyle: 'preserve-3d',
              transform: stage === 'opening' ? 'perspective(800px) rotateY(45deg)' : 
                         stage === 'open' ? 'perspective(800px) rotateY(90deg)' : 'perspective(800px) rotateY(0deg)'
            }}
          >
            {/* Door handle */}
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-3 h-8 bg-yellow-600 rounded-full shadow-md" />
            {/* Door details */}
            <div className="absolute inset-2 border-2 border-gray-500/50 rounded-r-lg" />
          </div>
          
          {/* Center vault icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Vault 
              size={stage === 'open' ? 64 : 48} 
              className={`transition-all duration-1000 ${
                stage === 'open' ? 'text-green-400' : 'text-gray-400'
              }`} 
            />
          </div>
        </div>
        
        {/* Light rays when opening */}
        {stage !== 'closed' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 bg-gradient-radial from-green-400/20 via-green-400/10 to-transparent rounded-full animate-pulse" />
          </div>
        )}
      </div>
      
      {/* Text */}
      <div className="absolute bottom-20 text-center">
        <p className="text-green-400 text-lg font-light animate-pulse">
          {stage === 'closed' ? 'Accessing vault...' : 
           stage === 'opening' ? 'Opening secure chamber...' : 
           'Welcome to the future'}
        </p>
      </div>
    </div>
  );
};

export default VaultTransition;
