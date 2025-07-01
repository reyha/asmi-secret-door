
import { useState } from 'react';
import { Users, Award, TrendingUp, Star, Building, GraduationCap } from 'lucide-react';

const FounderSection = () => {
  const [activeFounder, setActiveFounder] = useState(0);

  const founders = [
    {
      name: 'Rishi Patel',
      role: 'Co-Founder & CEO',
      avatar: 'R',
      gradient: 'from-blue-500 to-purple-600',
      bgGradient: 'from-blue-500/20 to-purple-600/10',
      achievements: [
        {
          icon: <Building className="text-green-400" size={20} />,
          title: 'Built $300M+ Business',
          description: 'Co-founded Arzooo, scaled to $300M+ revenue in B2B commerce'
        },
        {
          icon: <TrendingUp className="text-blue-400" size={20} />,
          title: 'Raised $75M',
          description: 'From Tony Xu (DoorDash CEO), Eric Yuan (Zoom CEO), and top VCs'
        },
        {
          icon: <Award className="text-yellow-400" size={20} />,
          title: 'Proven Operator',
          description: 'Ex-Flipkart, deep experience in consumer-scale products'
        }
      ],
      quote: "I've built consumer products for millions. Now I want to build the OS for human memory.",
      credibility: "This isn't his first rodeo. Rishi has the track record of building and scaling massive consumer products."
    },
    {
      name: 'Satwik Kolhe',
      role: 'Co-Founder & CTO',
      avatar: 'S',
      gradient: 'from-purple-500 to-pink-600',
      bgGradient: 'from-purple-500/20 to-pink-600/10',
      achievements: [
        {
          icon: <GraduationCap className="text-purple-400" size={20} />,
          title: 'PhD CMU',
          description: 'Machine Learning PhD from Carnegie Mellon University'
        },
        {
          icon: <Star className="text-blue-400" size={20} />,
          title: '6 Years Meta AI',
          description: 'Foundation models & multimodal AI expert, 25+ research papers'
        },
        {
          icon: <Award className="text-green-400" size={20} />,
          title: 'Meta Glasses Pioneer',
          description: 'Core team member building AI for Meta\'s AR/VR products'
        }
      ],
      quote: "AI that truly understands context requires deep technical innovation. We're building the memory layer that doesn't exist yet.",
      credibility: "World-class AI researcher with the deep technical expertise to make personal AI actually work."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-tight">
            The <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-medium">team</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            This is not their first time building something massive
          </p>
          
          {/* Credibility banner */}
          <div className="inline-flex items-center space-x-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-full px-8 py-4 mb-12">
            <div className="flex items-center space-x-2">
              <TrendingUp className="text-green-400" size={20} />
              <span className="text-green-300 font-medium">$300M+ Built</span>
            </div>
            <div className="w-px h-6 bg-gray-600"></div>
            <div className="flex items-center space-x-2">
              <Award className="text-blue-400" size={20} />
              <span className="text-blue-300 font-medium">$75M Raised</span>
            </div>
            <div className="w-px h-6 bg-gray-600"></div>
            <div className="flex items-center space-x-2">
              <Star className="text-purple-400" size={20} />
              <span className="text-purple-300 font-medium">Meta AI Veteran</span>
            </div>
          </div>
        </div>

        {/* Mobile: Stacked founder cards */}
        <div className="md:hidden space-y-8">
          {founders.map((founder, index) => (
            <div
              key={index}
              className={`p-6 rounded-3xl border bg-gradient-to-r ${founder.bgGradient} border-white/20`}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${founder.gradient} rounded-full flex items-center justify-center text-2xl font-bold`}>
                  {founder.avatar}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{founder.name}</h3>
                  <p className="text-gray-300">{founder.role}</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {founder.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      {achievement.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{achievement.title}</h4>
                      <p className="text-sm text-gray-300">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <blockquote className="text-gray-300 italic border-l-4 border-white/20 pl-4 mb-4">
                "{founder.quote}"
              </blockquote>

              <p className="text-sm text-gray-400">
                {founder.credibility}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop: Side-by-side with interactive switching */}
        <div className="hidden md:grid md:grid-cols-2 gap-12 items-start">
          {/* Founder selector */}
          <div className="space-y-6">
            {founders.map((founder, index) => (
              <div
                key={index}
                onClick={() => setActiveFounder(index)}
                className={`p-6 rounded-3xl border cursor-pointer transition-all duration-300 ${
                  activeFounder === index
                    ? `bg-gradient-to-r ${founder.bgGradient} border-white/30 scale-105`
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${founder.gradient} rounded-full flex items-center justify-center text-2xl font-bold`}>
                    {founder.avatar}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{founder.name}</h3>
                    <p className="text-gray-300">{founder.role}</p>
                  </div>
                  {activeFounder === index && (
                    <div className="ml-auto">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Founder details */}
          <div className="sticky top-8">
            <div className={`p-8 bg-gradient-to-r ${founders[activeFounder].bgGradient} rounded-3xl border border-white/20 backdrop-blur-sm`}>
              <div className="mb-8">
                <h3 className="text-3xl font-bold mb-2">{founders[activeFounder].name}</h3>
                <p className="text-xl text-gray-300 mb-6">{founders[activeFounder].role}</p>
                
                <blockquote className="text-lg text-gray-300 italic border-l-4 border-white/30 pl-6 mb-6">
                  "{founders[activeFounder].quote}"
                </blockquote>
              </div>

              <div className="space-y-6">
                {founders[activeFounder].achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-black/20 rounded-2xl backdrop-blur-sm">
                    <div className="flex-shrink-0 mt-1">
                      {achievement.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-white text-lg">{achievement.title}</h4>
                      <p className="text-gray-300">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-green-500/10 border border-green-500/20 rounded-2xl">
                <p className="text-green-300 font-medium">
                  {founders[activeFounder].credibility}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why this team CTA */}
        <div className="mt-20 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">
              Why we're the team to build the <span className="text-gradient">memory OS</span>
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Building personal AI requires both proven execution at scale AND deep technical innovation. We have both.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-12 py-4 rounded-full text-xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105">
              Back this team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderSection;
