
import { useState, useEffect } from 'react';
import { TrendingUp, Users, Calendar, Zap, Star, CheckCircle } from 'lucide-react';

const TractionTimelineSection = () => {
  const [activePhase, setActivePhase] = useState(0);
  const [showTestimonials, setShowTestimonials] = useState(false);

  const phases = [
    {
      title: 'Waitlist',
      period: 'Oct 2024',
      metric: '500+',
      description: 'Signups without any marketing',
      status: 'completed',
      icon: <Users className="text-green-400" size={24} />,
      color: 'from-green-400 to-emerald-500'
    },
    {
      title: 'Early Users',
      period: 'Nov 2024',
      metric: '30+',
      description: 'Active daily testers',
      status: 'completed',
      icon: <Star className="text-blue-400" size={24} />,
      color: 'from-blue-400 to-cyan-500'
    },
    {
      title: 'iMessage Rollout',
      period: 'Q1 2025',
      metric: 'Live',
      description: 'Platform expansion',
      status: 'current',
      icon: <Zap className="text-yellow-400" size={24} />,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Wearable Prototype',
      period: 'Q2 2025',
      metric: 'Demo',
      description: 'Hardware integration',
      status: 'upcoming',
      icon: <TrendingUp className="text-purple-400" size={24} />,
      color: 'from-purple-400 to-pink-500'
    }
  ];

  const testimonials = [
    {
      text: "Finally, an AI that actually remembers our conversations. Game-changer for my workflow.",
      author: "Sarah Chen",
      role: "Founder, TechFlow",
      avatar: "S"
    },
    {
      text: "I've tried every productivity app. Asmi is the first one that actually reduced my cognitive load.",
      author: "Mike Rodriguez",
      role: "VP Engineering, Scale AI",
      avatar: "M"
    },
    {
      text: "The voice journaling → task creation is magical. It's like having a personal assistant.",
      author: "Priya Patel",
      role: "Investor, Accel Partners",
      avatar: "P"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % phases.length);
    }, 3000);

    const testimonialTimer = setTimeout(() => {
      setShowTestimonials(true);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(testimonialTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-tight">
            Early <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent font-medium">traction</span>
          </h2>
          <p className="text-xl text-gray-400">
            Strong signals from day one
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-20">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-500 via-blue-500 to-purple-600 opacity-30"></div>

          <div className="space-y-16">
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`relative transition-all duration-1000 ${
                  activePhase === index ? 'scale-110 opacity-100' : 'scale-100 opacity-70'
                }`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-black z-10 ${
                  phase.status === 'completed' ? 'bg-green-500' :
                  phase.status === 'current' ? 'bg-yellow-500 animate-pulse' :
                  'bg-gray-600'
                }`}>
                  {phase.status === 'completed' && (
                    <CheckCircle className="w-6 h-6 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" size={16} />
                  )}
                </div>

                {/* Content card */}
                <div className={`${index % 2 === 0 ? 'mr-auto pr-8 md:pr-16' : 'ml-auto pl-8 md:pl-16'} max-w-md md:max-w-lg`}>
                  <div className={`p-6 rounded-3xl border backdrop-blur-sm transition-all duration-500 ${
                    activePhase === index 
                      ? `bg-gradient-to-r ${phase.color.replace('from-', 'from-').replace('to-', 'to-')}/20 border-white/30` 
                      : 'bg-white/5 border-white/10'
                  }`}>
                    
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${phase.color}`}>
                        {phase.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{phase.title}</h3>
                        <p className="text-gray-400">{phase.period}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl font-bold text-white">
                        {phase.metric}
                      </div>
                      <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                        phase.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                        phase.status === 'current' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {phase.status === 'completed' ? 'Completed' :
                         phase.status === 'current' ? 'In Progress' : 'Upcoming'}
                      </div>
                    </div>

                    <p className="text-gray-300">
                      {phase.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-6 bg-gradient-to-b from-green-500/20 to-green-500/5 rounded-3xl border border-green-500/30">
            <div className="text-4xl font-bold text-green-400 mb-2">92%</div>
            <p className="text-gray-300">User retention (weekly)</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-b from-blue-500/20 to-blue-500/5 rounded-3xl border border-blue-500/30">
            <div className="text-4xl font-bold text-blue-400 mb-2">4.8</div>
            <p className="text-gray-300">Average rating</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-b from-purple-500/20 to-purple-500/5 rounded-3xl border border-purple-500/30">
            <div className="text-4xl font-bold text-purple-400 mb-2">15x</div>
            <p className="text-gray-300">Organic growth rate</p>
          </div>
        </div>

        {/* User testimonials */}
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold mb-8">What early users are saying</h3>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 ${
          showTestimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-b from-white/10 to-white/5 rounded-3xl border border-white/20 backdrop-blur-sm"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <p className="text-gray-300 mb-4 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-medium text-white">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Growth projection */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full border border-green-500/30 backdrop-blur-sm">
            <TrendingUp className="text-green-400" size={24} />
            <span className="text-lg font-medium">
              Projected: 10K+ users by end of Q2 2025
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TractionTimelineSection;
