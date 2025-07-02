
import { useState, useEffect } from 'react';
import { TrendingUp } from 'lucide-react';

const TractionRoadmapSection = () => {
  const [waitlistCount, setWaitlistCount] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    '"This is exactly what I need."',
    '"Finally, an AI that remembers."',
    '"Game changer for busy founders."'
  ];

  const roadmapItems = [
    { title: "Calendar memory", status: "LIVE", color: "text-[#37D67A]" },
    { title: "iMessage β", status: "Q3", color: "text-blue-400" },
    { title: "Summaries", status: "Q4", color: "text-purple-400" },
    { title: "Scale to 1k", status: "2025", color: "text-yellow-400" }
  ];

  useEffect(() => {
    // Count up animations
    const waitlistInterval = setInterval(() => {
      setWaitlistCount(prev => prev >= 500 ? 500 : prev + 10);
    }, 50);

    const usersInterval = setInterval(() => {
      setActiveUsers(prev => prev >= 30 ? 30 : prev + 1);
    }, 100);

    // Testimonial rotation
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 2000);

    return () => {
      clearInterval(waitlistInterval);
      clearInterval(usersInterval);
      clearInterval(testimonialInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1F1F23] via-gray-900 to-[#1F1F23] flex items-center justify-center px-4">
      <div className="max-w-sm mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <TrendingUp className="text-[#37D67A] mx-auto mb-4" size={32} />
          <h2 className="text-[28px] font-medium text-white leading-tight">
            Built for scale.
          </h2>
        </div>

        <div className="space-y-6">
          {/* Traction numbers */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-6 border border-[#37D67A]/20 text-center">
              <div className="text-2xl font-bold text-[#37D67A] mb-1">
                {waitlistCount}+
              </div>
              <div className="text-gray-400 text-sm">waitlist</div>
            </div>
            
            <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/20 text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">
                {activeUsers}+
              </div>
              <div className="text-gray-400 text-sm">active users</div>
            </div>
          </div>

          {/* Testimonial bubble */}
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="text-white text-center font-light animate-fade-in" key={currentTestimonial}>
              {testimonials[currentTestimonial]}
            </div>
            <div className="flex justify-center space-x-1 mt-3">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    currentTestimonial === index ? 'bg-[#37D67A]' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Roadmap cards */}
          <div className="space-y-3">
            <h3 className="text-white text-lg font-medium text-center mb-4">What's shipping</h3>
            {roadmapItems.map((item, index) => (
              <div
                key={index}
                className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-white/10 flex items-center justify-between"
              >
                <span className="text-white font-medium">{item.title}</span>
                <span className={`text-sm font-medium ${item.color}`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TractionRoadmapSection;
