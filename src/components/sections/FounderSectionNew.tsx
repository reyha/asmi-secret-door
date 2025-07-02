
import { useState, useEffect, useRef } from 'react';

const FounderSectionNew = () => {
  const [typedLines, setTypedLines] = useState<string[]>(['']);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const lines = [
    'We have built companies',
    'loved by millions',
    'scaled to hundreds of millions'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setIsTyping(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isTyping || !isVisible || currentLineIndex >= lines.length) return;

    const currentLine = lines[currentLineIndex];
    const currentTypedLine = typedLines[currentLineIndex] || '';

    if (currentTypedLine.length < currentLine.length) {
      const timer = setTimeout(() => {
        const newTypedLines = [...typedLines];
        newTypedLines[currentLineIndex] = currentLine.substring(0, currentTypedLine.length + 1);
        setTypedLines(newTypedLines);
      }, 50);

      return () => clearTimeout(timer);
    } else if (currentLineIndex < lines.length - 1) {
      const timer = setTimeout(() => {
        setCurrentLineIndex(prev => prev + 1);
        setTypedLines(prev => [...prev, '']);
      }, 500);

      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
    }
  }, [typedLines, currentLineIndex, isTyping, isVisible]);

  return (
    <div ref={sectionRef} className="min-h-screen bg-black py-20 flex items-center">
      <div className="max-w-6xl mx-auto px-6">
        {/* Typing Animation Section */}
        <div className="text-center mb-20">
          <div className="space-y-2">
            {typedLines.map((line, index) => (
              <div key={index} className="min-h-[3rem] flex items-center justify-center">
                <h2 className={`font-space ${
                  index === 0 
                    ? 'text-4xl md:text-5xl font-bold text-white' 
                    : 'text-2xl md:text-3xl font-medium text-gray-300'
                }`}>
                  {line}
                  {index === currentLineIndex && isTyping && (
                    <span className="animate-pulse text-green-400">|</span>
                  )}
                </h2>
              </div>
            ))}
          </div>
        </div>

        {/* Founder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Rishi */}
          <div className="bg-black rounded-3xl p-8 border border-white/10">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                R
              </div>
              <h3 className="text-2xl font-space font-bold text-white">Rishi Patel</h3>
              <p className="text-green-400 font-inter">Co-Founder & CEO</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-white font-inter">Built $400M+ Business</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-white font-inter">Raised $75M from Tony Xu, Eric Yuan</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-white font-inter">Ex-Flipkart, Consumer Scale Expert</span>
              </div>
            </div>

            <blockquote className="text-gray-300 italic mt-6 border-l-4 border-green-400/50 pl-4 font-inter">
              "I've built consumer products for millions. Now I want to build the OS for human memory."
            </blockquote>
          </div>

          {/* Satwik */}
          <div className="bg-black rounded-3xl p-8 border border-white/10">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                S
              </div>
              <h3 className="text-2xl font-space font-bold text-white">Satwik Kolhe</h3>
              <p className="text-green-400 font-inter">Co-Founder & CTO</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-white font-inter">PhD CMU Machine Learning</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-white font-inter">6 Years Meta AI, 25+ Papers</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-white font-inter">Meta Glasses Pioneer</span>
              </div>
            </div>

            <blockquote className="text-gray-300 italic mt-6 border-l-4 border-green-400/50 pl-4 font-inter">
              "AI that truly understands context requires deep technical innovation. We're building the memory layer that doesn't exist yet."
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderSectionNew;
