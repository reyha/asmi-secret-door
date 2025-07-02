
import { useState, useEffect, useRef } from 'react';
import { Calendar } from 'lucide-react';

const MessagingToOSSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen bg-black py-20 flex items-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-space font-bold text-white mb-16 leading-tight">
          From messages... to<br />memory OS.
        </h2>

        {isVisible && (
          <div className="bg-black/80 border border-white/20 rounded-3xl p-8 animate-fade-in">
            <div className="bg-green-400 rounded-3xl p-6 mb-6 w-20 h-20 mx-auto flex items-center justify-center">
              <Calendar className="text-white" size={32} />
            </div>
            
            <h3 className="text-2xl font-space font-bold text-white mb-4">
              Calendar & Contacts
            </h3>
            
            <p className="text-gray-400 font-inter">
              Preps you before you ask.
            </p>

            <div className="flex justify-center mt-8 space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
            </div>

            <p className="text-gray-500 text-sm mt-4 font-inter">
              Tap cards to explore
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessagingToOSSection;
