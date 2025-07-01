
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import InvestorSite from '../components/InvestorSite';

const Index = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [isShaking, setIsShaking] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple password check - in production, this would be more secure
    if (password === 'asmi2025' || password === 'investor') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Not quite. Try again or contact us.');
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  if (isAuthenticated) {
    return <InvestorSite />;
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-2xl mx-auto">
          {/* Hero Section */}
          <h1 className="text-5xl md:text-7xl font-light mb-4 tracking-tight">
            Access <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-medium">Asmi</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-400 mb-4 font-light">
            Your AI Chief of Staff
          </h2>
          
          <p className="text-gray-500 mb-12 text-lg">
            Private early access. Built for high-speed minds.
          </p>

          {/* Password Input */}
          <form onSubmit={handleSubmit} className="mb-8">
            <div className={`relative max-w-md mx-auto transition-all duration-300 ${isShaking ? 'animate-pulse' : ''}`}>
              <div className={`relative rounded-full border-2 transition-all duration-300 ${
                error ? 'border-red-500/50 bg-red-500/5' : 'border-white/20 bg-white/5'
              } backdrop-blur-sm`}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError('');
                  }}
                  placeholder="Enter password"
                  className="w-full px-6 py-4 bg-transparent text-white placeholder-gray-400 focus:outline-none text-center rounded-full"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              
              {error && (
                <p className="text-red-400 text-sm mt-3 animate-fade-in">
                  {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
            >
              Enter
            </button>
          </form>

          {/* Contact Info */}
          <div className="text-gray-500 text-sm">
            <p>If you're here without a password, reach out to</p>
            <a href="mailto:rishi@asmi.ai" className="text-blue-400 hover:text-blue-300 transition-colors">
              rishi@asmi.ai
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Asmi
          </div>
          <p className="text-gray-600 text-sm">© 2025 Asmi AI</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
