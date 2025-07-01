
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
    
    if (password === 'asmi2025' || password === 'investor') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Not quite. Try again or contact us.');
      setIsShaking(true);
      // Apple-like bounce animation
      setTimeout(() => {
        setIsShaking(false);
      }, 600);
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
          {/* Main heading */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-tight">
              Asmi is not for <span className="text-gray-500">everyone</span>.
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 font-light">
              But if you're here, <span className="text-white">welcome</span>.
            </p>
          </div>

          {/* Password Input */}
          <form onSubmit={handleSubmit} className="mb-12">
            <div className={`relative max-w-md mx-auto transition-all duration-300 ${
              isShaking ? 'animate-bounce' : ''
            }`}>
              <div className={`relative rounded-full border-2 transition-all duration-300 backdrop-blur-sm ${
                error 
                  ? 'border-red-500/50 bg-red-500/5 animate-pulse' 
                  : 'border-white/20 bg-white/5 hover:border-white/30 focus-within:border-blue-500/50'
              }`}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError('');
                  }}
                  placeholder="Enter password"
                  className="w-full px-6 py-4 bg-transparent text-white placeholder-gray-400 focus:outline-none text-center rounded-full text-lg"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors p-1"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              
              {error && (
                <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-2xl animate-fade-in">
                  <p className="text-red-400 text-sm">
                    {error}
                  </p>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="mt-8 px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 text-lg"
            >
              Enter Experience
            </button>
          </form>

          {/* Contact */}
          <div className="text-gray-500">
            <p className="mb-2">If you're here without a password, reach out to</p>
            <a 
              href="mailto:rishi@asmi.ai" 
              className="text-blue-400 hover:text-blue-300 transition-colors text-lg hover:underline"
            >
              rishi@asmi.ai
            </a>
          </div>
        </div>

        {/* Minimal footer */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Asmi
          </div>
          <p className="text-gray-600 text-sm">Your AI Chief of Staff</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
