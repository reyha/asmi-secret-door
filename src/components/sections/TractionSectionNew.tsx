
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TractionSectionNew = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentRoadmapCard, setCurrentRoadmapCard] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { number: '500+', label: 'Early Adopters' },
    { number: '30+', label: 'Beta Users' },
    { number: 'iMessage', label: 'Beta Live' }
  ];

  const testimonials = [
    "This is exactly what I've been looking for. Asmi actually gets things done without me having to think about it.",
    "Finally, an AI that remembers everything and helps me stay on top of my game.",
    "The calendar integration is pure magic. It knows who I'm meeting before I even think about it."
  ];

  const roadmapCards = [
    { title: 'Calendar Sync', status: 'Live', color: 'bg-green-400' },
    { title: 'iMessage', status: 'Beta', color: 'bg-blue-400' },
    { title: 'Summaries', status: 'Coming', color: 'bg-purple-400' },
    { title: 'Beta Scale', status: 'Q2', color: 'bg-orange-400' }
  ];

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

  // Auto-cycle stats and testimonials
  useEffect(() => {
    if (!isVisible) return;
    
    const statInterval = setInterval(() => {
      setCurrentStat(prev => (prev + 1) % stats.length);
    }, 3000);

    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 4000);

    return () => {
      clearInterval(statInterval);
      clearInterval(testimonialInterval);
    };
  }, [isVisible]);

  // Typing effect for testimonials
  useEffect(() => {
    if (!isVisible) return;
    
    const currentText = testimonials[currentTestimonial];
    setTypedText('');
    let i = 0;
    
    const typeInterval = setInterval(() => {
      if (i < currentText.length) {
        setTypedText(currentText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 30);

    return () => clearInterval(typeInterval);
  }, [currentTestimonial, isVisible]);

  return (
    <div ref={sectionRef} className="min-h-screen bg-black py-20 flex items-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-space font-bold text-white mb-16 text-center">
          Built. Shipped. Growing.
        </h2>

        {/* Split Screen - Stats and Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Stats Carousel */}
          <div className="bg-black/80 border border-white/20 rounded-3xl p-8 text-center">
            <div className="h-32 flex items-center justify-center">
              <div className="animate-fade-in" key={currentStat}>
                <div className="text-4xl md:text-5xl font-space font-bold text-green-400 mb-2">
                  {stats[currentStat].number}
                </div>
                <div className="text-xl text-white font-inter">
                  {stats[currentStat].label}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Testimonial with typing */}
          <div className="bg-black/80 border border-white/20 rounded-3xl p-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex-shrink-0"></div>
              <div className="flex-1">
                <p className="text-lg text-white font-inter mb-2 min-h-[3rem]">
                  "{typedText}"
                  {typedText.length < testimonials[currentTestimonial].length && <span className="animate-pulse">|</span>}
                </p>
                <p className="text-gray-400 font-inter">— Beta User</p>
              </div>
            </div>
          </div>
        </div>

        {/* Next 100 Days Roadmap */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-space font-medium text-white mb-8">
            Next 100 Days
          </h3>

          <div className="relative">
            <div className="flex items-center justify-center space-x-4 overflow-hidden">
              <button
                onClick={() => setCurrentRoadmapCard(Math.max(0, currentRoadmapCard - 1))}
                className="p-2 text-gray-400 hover:text-white transition-colors"
                disabled={currentRoadmapCard === 0}
              >
                <ChevronLeft size={24} />
              </button>

              <div className="flex space-x-4 min-w-0">
                {roadmapCards.slice(currentRoadmapCard, currentRoadmapCard + 2).map((card, index) => (
                  <div key={index} className="bg-black/80 border border-white/20 rounded-2xl p-6 min-w-[200px]">
                    <div className={`${card.color} text-black px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block`}>
                      {card.status}
                    </div>
                    <div className="text-white font-inter font-medium">
                      {card.title}
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setCurrentRoadmapCard(Math.min(roadmapCards.length - 2, currentRoadmapCard + 1))}
                className="p-2 text-gray-400 hover:text-white transition-colors"
                disabled={currentRoadmapCard >= roadmapCards.length - 2}
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {[...Array(Math.max(1, roadmapCards.length - 1))].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentRoadmapCard(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentRoadmapCard === index ? 'bg-green-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TractionSectionNew;
