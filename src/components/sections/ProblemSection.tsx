
import { useEffect, useRef } from 'react';
import { MessageSquare, Calendar, Mail, Slack, Bell } from 'lucide-react';

const ProblemSection = () => {
  const iconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = iconsRef.current;
    if (!container) return;

    const icons = container.querySelectorAll('.floating-icon');
    
    icons.forEach((icon, index) => {
      const element = icon as HTMLElement;
      const delay = index * 200;
      
      setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0) rotate(0deg)';
      }, delay);

      // Add continuous floating animation
      setInterval(() => {
        element.style.transform = `translateY(${Math.sin(Date.now() * 0.001 + index) * 10}px) rotate(${Math.sin(Date.now() * 0.002 + index) * 5}deg)`;
      }, 50);
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-black to-gray-900">
      <div className="absolute inset-0 overflow-hidden">
        <div ref={iconsRef} className="absolute inset-0">
          {/* Floating notification icons */}
          <div className="floating-icon absolute top-20 left-20 opacity-0 transform translate-y-10 rotate-12 transition-all duration-1000">
            <MessageSquare size={40} className="text-red-400" />
          </div>
          <div className="floating-icon absolute top-32 right-32 opacity-0 transform translate-y-10 rotate-45 transition-all duration-1000">
            <Mail size={35} className="text-yellow-400" />
          </div>
          <div className="floating-icon absolute top-1/3 left-1/4 opacity-0 transform translate-y-10 -rotate-12 transition-all duration-1000">
            <Calendar size={45} className="text-blue-400" />
          </div>
          <div className="floating-icon absolute bottom-1/3 right-1/4 opacity-0 transform translate-y-10 rotate-30 transition-all duration-1000">
            <Slack size={38} className="text-purple-400" />
          </div>
          <div className="floating-icon absolute bottom-20 left-1/3 opacity-0 transform translate-y-10 -rotate-45 transition-all duration-1000">
            <Bell size={42} className="text-green-400" />
          </div>
          <div className="floating-icon absolute top-1/2 right-20 opacity-0 transform translate-y-10 rotate-60 transition-all duration-1000">
            <MessageSquare size={36} className="text-pink-400" />
          </div>
        </div>

        {/* Chaos lines connecting icons */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <linearGradient id="chaosGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <path 
            d="M100,200 Q300,100 500,300 T900,200" 
            stroke="url(#chaosGradient)" 
            strokeWidth="2" 
            fill="none"
            className="animate-pulse"
          />
          <path 
            d="M200,500 Q600,300 800,600 T1200,400" 
            stroke="url(#chaosGradient)" 
            strokeWidth="1.5" 
            fill="none"
            className="animate-pulse delay-500"
          />
        </svg>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h2 className="text-5xl md:text-7xl font-light mb-8 tracking-tight">
          Too much <span className="text-red-400 font-medium">noise</span>.
        </h2>
        <h3 className="text-4xl md:text-6xl font-light mb-12 tracking-tight">
          No <span className="text-gray-500 line-through">memory</span>.
        </h3>
        
        <div className="space-y-6 text-xl text-gray-300 max-w-2xl mx-auto">
          <p className="opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
            We switch between 47 apps daily
          </p>
          <p className="opacity-0 animate-fade-in" style={{ animationDelay: '1.5s' }}>
            Context dies with every tab close
          </p>
          <p className="opacity-0 animate-fade-in" style={{ animationDelay: '2s' }}>
            Your digital life has no memory
          </p>
        </div>

        <div className="mt-16 p-8 bg-red-500/10 border border-red-500/20 rounded-3xl backdrop-blur-sm">
          <p className="text-2xl text-red-300 font-light">
            "Where did I put that note? What was that person's name? When is my next meeting?"
          </p>
          <p className="text-gray-400 mt-4">
            — Every knowledge worker, every day
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProblemSection;
