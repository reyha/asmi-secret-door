
import { useState, useEffect } from 'react';
import { Users, TrendingUp, Rocket, Star, Calendar, Zap } from 'lucide-react';

const TractionTimelineSection = () => {
  const [activePhase, setActivePhase] = useState(0);
  const [showStats, setShowStats] = useState(false);

  const phases = [
    {
      date: 'Dec 2024',
      title: 'Stealth Launch',
      status: 'completed',
      icon: <Rocket className="text-blue-400" size={20} />,
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'from-blue-500/20 to-cyan-500/10',
      description: 'WhatsApp MVP with 50 early users',
      metrics: ['50 early users', '92% retention', 'Daily active usage']
    },
    {
      date: 'Jan 2025',
      title: 'Private Beta',
      status: 'active',
      icon: <Users className="text-green-400" size={20} />,
      color: 'from-green-400 to-emerald-500',
      bgColor: 'from-green-500/20 to-emerald-500/10',
      description: 'Expanded to 200 users, iMessage integration',
      metrics: ['200+ users', '15+ daily tasks/user', 'Voice note adoption']
    },
    {
      date: 'Mar 2025',
      title: 'Seed Raise',
      status: 'upcoming',
      icon: <TrendingUp className="text-purple-400" size={20} />,
      color: 'from-purple-400 to-pink-500',
      bgColor: 'from-purple-500/20 to-pink-500/10',
      description: '$5-6M to scale AI infrastructure',
      metrics: ['Team expansion', 'AI model training', 'Platform integrations']
    },
    {
      date: 'Q2 2025',
      title: 'Public Beta',
      status: 'planned',
      icon: <Star className="text-yellow-400" size={20} />,
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'from-yellow-500/20 to-orange-500/10',
      description: '1000+ users, advanced memory features',
      metrics: ['1000+ users', 'Enterprise pilots', 'Wearable prototype']
    }
  ];

  const testimonials = [
    {
      text: "Asmi remembers everything I forget. It's like having a second brain.",
      author: "Sarah K.",
      role: "YC Founder",
      avatar: "S"
    },
    {
      text: "Finally, an AI that actually knows me. No more repeating context.",
      author: "Mike R.",
      role: "VC Partner",
      avatar: "M"
    },
    {
      text: "The voice interface is so natural. I talk to Asmi like a colleague.",
      author: "Priya L.",
      role: "Product Manager",
      avatar: "P"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowStats(true);
    }, 1000);

    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % phases.length);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight leading-tight">
            Early <span className="text-green-400 font-medium">traction</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 font-light">
            Users love what we're building
          </p>
          
          {/* Key metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className={`p-6 bg-gradient-to-r from-green-500/20 to-emerald-500/10 border border-green-500/30 rounded-3xl backdrop-blur-sm transition-all duration-1000 ${
              showStats ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              <div className="text-4xl font-bold text-green-400 mb-2">92%</div>
              <p className="text-gray-300 font-light">Day-7 retention</p>
            </div>
            <div className={`p-6 bg-gradient-to-r from-blue-500/20 to-cyan-500/10 border border-blue-500/30 rounded-3xl backdrop-blur-sm transition-all duration-1000 ${
              showStats ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`} style={{ transitionDelay: '200ms' }}>
              <div className="text-4xl font-bold text-blue-400 mb-2">15+</div>
              <p className="text-gray-300 font-light">Tasks per day</p>
            </div>
            <div className={`p-6 bg-gradient-to-r from-purple-500/20 to-pink-500/10 border border-purple-500/30 rounded-3xl backdrop-blur-sm transition-all duration-1000 ${
              showStats ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`} style={{ transitionDelay: '400ms' }}>
              <div className="text-4xl font-bold text-purple-400 mb-2">200+</div>
              <p className="text-gray-300 font-light">Beta users</p>
            </div>
          </div>
        </div>

        {/* Timeline - Mobile optimized */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-light mb-8 text-center">Roadmap</h3>
          
          {/* Mobile: Vertical timeline */}
          <div className="md:hidden space-y-6">
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`p-6 rounded-3xl border transition-all duration-500 ${
                  phase.status === 'completed' ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/10 border-green-500/30' :
                  phase.status === 'active' ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/10 border-blue-500/30' :
                  'bg-white/5 border-white/10'
                }`}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${phase.color}`}>
                    {phase.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="text-lg font-medium">{phase.title}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-light ${
                        phase.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                        phase.status === 'active' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {phase.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">{phase.date}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 font-light">{phase.description}</p>
                <div className="flex flex-wrap gap-2">
                  {phase.metrics.map((metric, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Horizontal timeline */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              
              <div className="grid grid-cols-4 gap-8">
                {phases.map((phase, index) => (
                  <div
                    key={index}
                    onClick={() => setActivePhase(index)}
                    className={`cursor-pointer transition-all duration-500 ${
                      activePhase === index ? 'scale-110' : 'hover:scale-105'
                    }`}
                  >
                    <div className={`p-6 rounded-3xl border backdrop-blur-sm ${
                      activePhase === index
                        ? `bg-gradient-to-r ${phase.bgColor} border-white/30`
                        : 'bg-white/5 border-white/10 hover:border-white/20'
                    }`}>
                      <div className="text-center">
                        <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${phase.color} mb-4`}>
                          {phase.icon}
                        </div>
                        <h4 className="text-lg font-medium mb-2">{phase.title}</h4>
                        <p className="text-gray-400 text-sm mb-3">{phase.date}</p>
                        <p className="text-gray-300 text-sm font-light">{phase.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* User testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-light mb-8 text-center">What users say</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <p className="text-gray-300 mb-4 font-light italic">"{testimonial.text}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-full backdrop-blur-sm">
            <Zap className="text-yellow-400" size={20} />
            <span className="text-lg font-light">Join the next wave of personal AI</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TractionTimelineSection;
