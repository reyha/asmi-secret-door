
import { useState, useEffect } from 'react';
import MobileOptimizedSection from './MobileOptimizedSection';

const AsmiIntroSection = () => {
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showPlatforms, setShowPlatforms] = useState(false);
  const [showTags, setShowTags] = useState(false);
  const [activeTags, setActiveTags] = useState<number[]>([]);

  const fullText = "Asmi is your smart Chief of Staff";
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
        }, 1000);
      }
    }, 80);

    return () => clearInterval(typeInterval);
  }, []);

  // Tag animation effect
  useEffect(() => {
    if (showTags) {
      tags.forEach((_, index) => {
        setTimeout(() => {
          setActiveTags(prev => [...prev, index]);
        }, index * 600);
      });
    }
  }, [showTags]);

  return (
    <MobileOptimizedSection maxWidth="md">
      <div className="space-y-16 text-center min-h-screen flex flex-col justify-center">
        {/* Main Text with Typewriter Effect */}
        <div className="space-y-12">
          <div className="text-4xl md:text-5xl font-thin text-white leading-tight min-h-[120px] flex items-center justify-center">
            <div className="font-extralight tracking-wide">
              {typedText}
              {isTyping && <span className="animate-pulse text-white">|</span>}
            </div>
          </div>

          {/* Platform Icons */}
          {showPlatforms && (
            <div className="flex items-center justify-center space-x-8 animate-fade-in">
              <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <span className="text-3xl">💬</span>
              </div>
              <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <span className="text-3xl">📱</span>
              </div>
            </div>
          )}
        </div>

        {/* Feature Tags */}
        {showTags && (
          <div className="flex items-center justify-center flex-wrap gap-4 pt-8">
            {tags.map((tag, index) => (
              <div
                key={tag}
                className={`px-8 py-4 rounded-full border transition-all duration-700 ${
                  activeTags.includes(index)
                    ? 'bg-white/10 border-white/30 text-white shadow-lg backdrop-blur-sm scale-105 opacity-100'
                    : 'bg-transparent border-white/5 text-gray-500 scale-95 opacity-0'
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
