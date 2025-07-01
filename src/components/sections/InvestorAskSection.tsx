
import { useState } from 'react';
import { DollarSign, Users, Rocket, Zap, Mail, FileText } from 'lucide-react';

const InvestorAskSection = () => {
  const [activeUseOfFunds, setActiveUseOfFunds] = useState(0);

  const useOfFunds = [
    {
      category: 'AI Infrastructure',
      percentage: 40,
      amount: '$2-2.4M',
      description: 'Advanced memory engine, context processing, multimodal AI capabilities',
      icon: <Zap className="text-blue-400" size={24} />,
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'from-blue-500/20 to-cyan-500/10'
    },
    {
      category: 'Team Expansion',
      percentage: 35,
      amount: '$1.8-2.1M',
      description: 'Senior AI engineers, product designers, GTM specialists',
      icon: <Users className="text-green-400" size={24} />,
      color: 'from-green-400 to-emerald-500',
      bgColor: 'from-green-500/20 to-emerald-500/10'
    },
    {
      category: 'Product & Hardware',
      percentage: 25,
      amount: '$1.2-1.5M',
      description: 'Wearable prototype, platform integrations, user experience',
      icon: <Rocket className="text-purple-400" size={24} />,
      color: 'from-purple-400 to-pink-500',
      bgColor: 'from-purple-500/20 to-pink-500/10'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-tight">
            Raising <span className="bg-gradient-to-r from-yellow-400 to-green-500 bg-clip-text text-transparent font-medium">$5-6M</span> seed
          </h2>
          <p className="text-2xl text-gray-300 mb-8 font-light">
            To build the memory OS for life
          </p>
          
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-green-500/10 to-yellow-500/10 border border-green-500/20 rounded-full px-8 py-4">
            <DollarSign className="text-green-400" size={24} />
            <span className="text-lg">
              Lead round: $3-4M • Strategic angels: $2M
            </span>
          </div>
        </div>

        {/* Use of funds breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-8">Use of funds</h3>
            
            {useOfFunds.map((fund, index) => (
              <div
                key={index}
                onClick={() => setActiveUseOfFunds(index)}
                className={`p-6 rounded-3xl border cursor-pointer transition-all duration-300 ${
                  activeUseOfFunds === index
                    ? `bg-gradient-to-r ${fund.bgColor} border-white/30 scale-105`
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${fund.color}`}>
                      {fund.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">{fund.category}</h4>
                      <p className="text-gray-400">{fund.amount}</p>
                    </div>
                  </div>
                  <div className="text-3xl font-bold">
                    {fund.percentage}%
                  </div>
                </div>
                
                {activeUseOfFunds === index && (
                  <p className="text-gray-300 animate-fade-in">
                    {fund.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Visual breakdown */}
          <div className="sticky top-8">
            <div className="bg-gradient-to-r from-white/10 to-white/5 rounded-3xl p-8 border border-white/20 backdrop-blur-sm">
              <h4 className="text-2xl font-bold mb-8 text-center">Fund Allocation</h4>
              
              {/* Pie chart representation */}
              <div className="relative w-64 h-64 mx-auto mb-8">
                <svg viewBox="0 0 200 200" className="w-full h-full transform -rotate-90">
                  {/* Background circle */}
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="20"
                  />
                  
                  {/* Segments */}
                  {useOfFunds.map((fund, index) => {
                    const offset = useOfFunds.slice(0, index).reduce((acc, f) => acc + f.percentage, 0);
                    const circumference = 2 * Math.PI * 80;
                    const strokeDasharray = `${(fund.percentage / 100) * circumference} ${circumference}`;
                    const strokeDashoffset = -((offset / 100) * circumference);
                    
                    return (
                      <circle
                        key={index}
                        cx="100"
                        cy="100"
                        r="80"
                        fill="none"
                        stroke={`url(#gradient-${index})`}
                        strokeWidth="20"
                        strokeDasharray={strokeDasharray}
                        strokeDashoffset={strokeDashoffset}
                        className={`transition-all duration-500 ${
                          activeUseOfFunds === index ? 'opacity-100' : 'opacity-60'
                        }`}
                      />
                    );
                  })}
                  
                  {/* Gradients */}
                  <defs>
                    <linearGradient id="gradient-0" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                    <linearGradient id="gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#059669" />
                    </linearGradient>
                    <linearGradient id="gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Center text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">
                      {useOfFunds[activeUseOfFunds].percentage}%
                    </div>
                    <div className="text-sm text-gray-400">
                      {useOfFunds[activeUseOfFunds].category}
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-300 mb-6">
                  {useOfFunds[activeUseOfFunds].description}
                </p>
                <div className="text-2xl font-bold text-green-400">
                  {useOfFunds[activeUseOfFunds].amount}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why now / Market timing */}
        <div className="mb-20 p-8 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-3xl">
          <h3 className="text-3xl font-bold text-center mb-8">
            Why <span className="text-yellow-400">now</span>?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400 mb-2">GenAI Fatigue</div>
              <p className="text-gray-300">People want agents, not prompts</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400 mb-2">Platform Ready</div>
              <p className="text-gray-300">WhatsApp & iMessage APIs mature</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400 mb-2">Memory Breakthrough</div>
              <p className="text-gray-300">Context + LLM technology convergence</p>
            </div>
          </div>
        </div>

        {/* Investment terms preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-3xl">
            <h4 className="text-2xl font-bold mb-6 flex items-center">
              <FileText className="mr-3 text-blue-400" size={24} />
              Investment Highlights
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Proven founding team ($300M+ built)</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Strong early traction (92% retention)</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Massive market opportunity</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>Defensible AI moat</span>
              </li>
            </ul>
          </div>

          <div className="p-8 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-3xl">
            <h4 className="text-2xl font-bold mb-6 flex items-center">
              <Rocket className="mr-3 text-green-400" size={24} />
              Investor Benefits
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Early access to platform</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Monthly investor updates</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Product feedback opportunities</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>Network effect participation</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="text-center space-y-6">
          <button className="bg-gradient-to-r from-green-500 to-blue-600 px-12 py-4 rounded-full text-xl font-medium hover:from-green-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 mr-6">
            Back this vision
          </button>
          
          <button className="border border-white/30 px-12 py-4 rounded-full text-xl font-medium hover:bg-white/10 transition-all duration-300">
            <Mail className="inline mr-2" size={20} />
            Get full deck
          </button>

          <div className="mt-8 text-gray-500">
            <p>Interested investors:</p>
            <a href="mailto:rishi@asmi.ai" className="text-blue-400 hover:text-blue-300 transition-colors text-xl">
              rishi@asmi.ai
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorAskSection;
