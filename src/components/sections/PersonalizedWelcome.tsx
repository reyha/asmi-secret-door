
import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

const PersonalizedWelcome = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [showSparkles, setShowSparkles] = useState(false);

  const welcomeText = "Welcome, Alex";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i <= welcomeText.length) {
          setTypedText(welcomeText.substring(0, i));
          i++;
        } else {
          clearInterval(typeInterval);
          setShowSparkles(true);
        }
      }, 80);
      return () => clearInterval(typeInterval);
    }
  }, [isVisible]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4 py-8">
      <div className="text-center max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative mb-8">
            {showSparkles && (
              <div className="absolute -top-4 -right-4">
                <Sparkles className="text-green-400 animate-pulse" size={24} />
              </div>
            )}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-space font-light mb-4 tracking-tight leading-tight">
              <span className="text-green-400 font-medium">
                {typedText}
                {isVisible && typedText.length < welcomeText.length && (
                  <span className="animate-pulse text-green-400">|</span>
                )}
              </span>
            </h1>
          </div>
          
          <div className={`transition-all duration-1000 delay-500 ${
            showSparkles ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light mb-8 leading-relaxed">
              Your AI-first future starts here.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-500 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalizedWelcome;
