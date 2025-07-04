
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
    {
      text: "Asmi remembers everything I forget. It's like having a personal chief of staff who actually gets things done.",
      name: "Karan",
      title: "Cartesia"
    },
    {
      text: "Finally, an AI that doesn't just chat but actually helps me stay ahead of my portfolio. Game changing for VCs.",
      name: "Nitin", 
      title: "Antler VC"
    },
    {
      text: "The context switching between meetings used to kill my productivity. Asmi solved this completely.",
      name: "Pooja",
      title: "Head of Growth, Smallest AI"
    }
  ];

  const roadmapCards = [
    { title: 'Calendar & Contacts', status: 'Live', color: 'bg-green-400' },
    { title: 'Mail Sync', status: 'Live', color: 'bg-green-400' },
    { title: 'iMessage', status: "Q3'25", color: 'bg-blue-400' },
    { title: '50K Users', status: "Q3'25", color: 'bg-purple-400' }
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

  // Auto-cycle stats and testimonials - faster for stats
  useEffect(() => {
    if (!isVisible) return;
    
    const statInterval = setInterval(() => {
      setCurrentStat(prev => (prev + 1) % stats.length);
    }, 1500); // Faster from 3000ms to 1500ms

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
    
    const currentTestimonialData = testimonials[currentTestimonial];
    setTypedText('');
    let i = 0;
    
    const typeInterval = setInterval(() => {
      if (i < currentTestimonialData.text.length) {
        setTypedText(currentTestimonialData.text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 30);

    return () => clearInterval(typeInterval);
  }, [currentTestimonial, isVisible]);

  return (
    <div ref={sectionRef} className="min-h-screen bg-black py-12 md:py-20 flex items-center">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-space font-bold text-white mb-12 md:mb-16 text-center leading-tight">
          Built. Shipped. Growing.
        </h2>

        {/* Split Screen - Stats and Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Left: Stats Carousel */}
          <div className="bg-black/80 border border-white/20 rounded-3xl p-6 md:p-8 text-center">
            <div className="h-24 md:h-32 flex items-center justify-center">
              <div className="animate-fade-in" key={currentStat}>
                <div className="text-3xl md:text-4xl lg:text-5xl font-space font-bold text-green-400 mb-2">
                  {stats[currentStat].number}
                </div>
                <div className="text-lg md:text-xl text-white font-inter">
                  {stats[currentStat].label}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Testimonial with typing */}
          <div className="bg-black/80 border border-white/20 rounded-3xl p-6 md:p-8">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex-shrink-0 flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  {testimonials[currentTestimonial].name[0]}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-base md:text-lg text-white font-inter mb-2 min-h-[3rem] md:min-h-[4rem] break-words">
                  "{typedText}"
                  {typedText.length < testimonials[currentTestimonial].text.length && <span className="animate-pulse">|</span>}
                </p>
                <p className="text-gray-400 font-inter text-sm md:text-base">
                  — {testimonials[currentTestimonial].name}, {testimonials[currentTestimonial].title}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Next 100 Days Roadmap */}
        <div className="text-center">
          <h3 className="text-xl md:text-2xl font-space font-medium text-white mb-6 md:mb-8">
            Next 100 Days
          </h3>

          <div className="relative">
            {/* Mobile: Single card view */}
            <div className="block md:hidden">
              <div className="flex items-center justify-center space-x-4">
                <button
                  onClick={() => setCurrentRoadmapCard(Math.max(0, currentRoadmapCard - 1))}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                  disabled={currentRoadmapCard === 0}
                >
                  <ChevronLeft size={20} />
                </button>

                <div className="bg-black/80 border border-white/20 rounded-2xl p-4 min-w-[200px] max-w-[250px]">
                  <div className={`${roadmapCards[currentRoadmapCard].color} text-black px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block`}>
                    {roadmapCards[currentRoadmapCard].status}
                  </div>
                  <div className="text-white font-inter font-medium">
                    {roadmapCards[currentRoadmapCard].title}
                  </div>
                </div>

                <button
                  onClick={() => setCurrentRoadmapCard(Math.min(roadmapCards.length - 1, currentRoadmapCard + 1))}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                  disabled={currentRoadmapCard >= roadmapCards.length - 1}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Desktop: Two card view */}
            <div className="hidden md:flex items-center justify-center space-x-4">
              <button
                onClick={() => setCurrentRoadmapCard(Math.max(0, currentRoadmapCard - 1))}
                className="p-2 text-gray-400 hover:text-white transition-colors"
                disabled={currentRoadmapCard === 0}
              >
                <ChevronLeft size={24} />
              </button>

              <div className="flex space-x-4">
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
              {[...Array(Math.max(1, roadmapCards.length - (window.innerWidth >= 768 ? 1 : 0)))].map((_, index) => (
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
