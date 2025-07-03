
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import InvestorSite from '../components/InvestorSite';
import NeuralBloomBackground from '../components/NeuralBloomBackground';

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
      setTimeout(() => {
        setIsShaking(false);
      }, 600);
    }
  };

  if (isAuthenticated) {
    return <InvestorSite />;
  }

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Neural Bloom Background */}
      <NeuralBloomBackground />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-2xl mx-auto">
          {/* Main heading */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-space font-light mb-6 tracking-tight leading-tight text-white">
              Asmi is not for <span className="text-gray-500">everyone</span>.
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light">
              But if you're here, <span className="text-white font-medium">welcome</span>.
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
                  : 'border-white/20 bg-white/5 hover:border-white/30 focus-within:border-green-500/50'
              }`}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError('');
                  }}
                  placeholder="Password"
                  className="w-full px-6 py-4 bg-transparent text-white placeholder-gray-400 focus:outline-none text-center rounded-full text-lg font-light font-inter"
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
                  <p className="text-red-400 text-sm font-light font-inter">
                    {error}
                  </p>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="mt-8 px-12 py-4 bg-green-500 rounded-full text-white font-medium hover:bg-green-600 transition-all duration-300 hover:scale-105 text-lg font-inter shadow-lg"
            >
              Enter our world
            </button>
          </form>

          {/* Contact */}
          <div className="text-gray-500">
            <p className="mb-2 font-light font-inter text-sm">If you're here without a password, reach out to</p>
            <a 
              href="mailto:rishi@asmi.ai" 
              className="text-green-400 hover:text-green-300 transition-colors text-lg hover:underline font-medium font-inter"
            >
              rishi@asmi.ai
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
