
import { useState } from 'react';
import { Crown, Users, TrendingUp } from 'lucide-react';

const BusinessModelSection = () => {
  const [activeTier, setActiveTier] = useState(1);

  const tiers = [
    {
      name: 'Free',
      price: '$0',
      period: '/month',
      icon: <Users className="text-gray-400" size={20} />,
      features: ['Basic chat', '7-day memory', 'WhatsApp only'],
      color: 'from-gray-400 to-gray-500',
      bgColor: 'from-gray-500/10 to-gray-400/5',
      borderColor: 'border-gray-400/20'
    },
    {
      name: 'Pro',
      price: '$19',
      period: '/month',
      icon: <Crown className="text-green-400" size={20} />,
      features: ['Unlimited memory', 'All platforms', 'Voice commands', 'Priority support'],
      color: 'from-green-400 to-green-500',
      bgColor: 'from-green-500/20 to-green-400/10',
      borderColor: 'border-green-400/30',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      icon: <TrendingUp className="text-blue-400" size={20} />,
      features: ['Team memory sharing', 'Advanced analytics', 'Custom integrations', 'Dedicated support'],
      color: 'from-blue-400 to-blue-500',
      bgColor: 'from-blue-500/20 to-blue-400/10',
      borderColor: 'border-blue-400/20'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-light text-white mb-4">
            Simple pricing.
          </h1>
          <p className="text-xl text-gray-400 font-light mb-8">
            Freemium → Pro @ $19/mo
          </p>
          <div className="text-green-400 text-lg font-medium">
            LTV > $500 • Power users already asking to pay
          </div>
        </div>

        {/* Pricing tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {tiers.map((tier, index) => (
            <div
              key={index}
              onClick={() => setActiveTier(index)}
              className={`relative cursor-pointer transition-all duration-500 border rounded-3xl p-8 backdrop-blur-sm ${
                activeTier === index
                  ? `bg-gradient-to-r ${tier.bgColor} ${tier.borderColor} scale-105`
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-500 text-black px-4 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${tier.color} mb-4`}>
                  {tier.icon}
                </div>
                
                <h3 className="text-xl font-medium text-white mb-2">{tier.name}</h3>
                
                <div className="mb-6">
                  <span className="text-3xl font-light text-white">{tier.price}</span>
                  <span className="text-gray-400 text-sm">{tier.period}</span>
                </div>

                <div className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm font-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Target market */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-white/5 to-white/10 border border-white/20 rounded-3xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-medium text-white mb-4">Target Market</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="font-light">Founders & executives</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="font-light">VCs & investors</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="font-light">Knowledge workers</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-green-500/10 to-green-400/5 border border-green-400/20 rounded-3xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-medium text-white mb-4">Future: Asmi OS</h3>
            <p className="text-gray-300 font-light leading-relaxed">
              Persona marketplace where your AI becomes the interface layer for all your digital tools and decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessModelSection;
