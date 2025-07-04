
import { useState, useEffect } from 'react';
import MobileOptimizedSection from './MobileOptimizedSection';

const AsmiIntroSection = () => {
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showPlatforms, setShowPlatforms] = useState(false);
  const [currentPlatform, setCurrentPlatform] = useState(0);
  const [showTags, setShowTags] = useState(false);
  const [activeTags, setActiveTags] = useState<number[]>([]);

  const fullText = "Asmi is your smart Chief of Staff within ";
  const platforms = ["WhatsApp", "iMessage"];
  const tags = ["Calendar", "Meeting Preps", "Mails"];

  // Typewriter effect
  useEffect(() => {
    setIsTyping(true);
    let i = 0;
    
    const typeInterval = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.substring(0, i));
        i++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        setShowPlatforms(true);
        
        // Show tags after platforms are visible
        setTimeout(() => {
          setShowTags(true);
        }, 1500);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, []);

  // Platform scroll effect
  useEffect(() => {
    if (showPlatforms) {
      const platformInterval = setInterval(() => {
        setCurrentPlatform(prev => (prev + 1) % platforms.length);
      }, 2000);

      return () => clearInterval(platformInterval);
    }
  }, [showPlatforms]);

  // Tag animation effect
  useEffect(() => {
    if (showTags) {
      tags.forEach((_, index) => {
        setTimeout(() => {
          setActiveTags(prev => [...prev, index]);
        }, index * 500);
      });
    }
  }, [showTags]);

  return (
    <MobileOptimizedSection maxWidth="md">
      <div className="space-y-12 text-center">
        {/* Main Text with Typewriter Effect */}
        <div className="space-y-8">
          <div className="text-3xl md:text-4xl font-thin text-white leading-tight min-h-[120px] flex items-center justify-center">
            <div className="font-light tracking-wide">
              {typedText}
              {showPlatforms && (
                <span className="text-white relative inline-block min-w-[140px] text-left font-medium">
                  <span 
                    key={currentPlatform}
                    className="absolute left-0 top-0 animate-fade-in"
                  >
                    {platforms[currentPlatform]}
                  </span>
                </span>
              )}
              {isTyping && <span className="animate-pulse text-white">|</span>}
            </div>
          </div>

          {/* Visual Enhancement */}
          {showPlatforms && (
            <div className="flex items-center justify-center space-x-6 animate-fade-in">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <span className="text-2xl">💬</span>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <span className="text-2xl">📱</span>
              </div>
            </div>
          )}
        </div>

        {/* Feature Tags */}
        {showTags && (
          <div className="flex items-center justify-center space-x-3 pt-4">
            {tags.map((tag, index) => (
              <div
                key={tag}
                className={`px-6 py-3 rounded-full border transition-all duration-700 ${
                  activeTags.includes(index)
                    ? 'bg-white/10 border-white/30 text-white shadow-lg backdrop-blur-sm scale-105'
                    : 'bg-transparent border-white/10 text-gray-400 scale-95'
                }`}
              >
                <span className="text-sm font-light tracking-wide">{tag}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </MobileOptimizedSection>
  );
};

export default AsmiIntroSection;
