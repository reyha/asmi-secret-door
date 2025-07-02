
import { useState } from 'react';
import { Mail, TrendingUp, Users, Star } from 'lucide-react';

const FinalCTASection = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    why: '',
    amount: '',
    valuation: '',
    partner: '',
    usp: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const ctaCards = [
    {
      title: '$5M seed round',
      description: 'Series A ready in 18 months',
      icon: <TrendingUp className="text-green-400" size={24} />,
      color: 'from-green-500/20 to-green-400/10'
    },
    {
      title: 'Team that knows product and distribution',
      description: 'Will grow like wildfire',
      icon: <Users className="text-blue-400" size={24} />,
      color: 'from-blue-500/20 to-blue-400/10'
    },
    {
      title: 'Only open to select investors',
      description: 'Who have backed amazing consumer stories',
      icon: <Star className="text-purple-400" size={24} />,
      color: 'from-purple-500/20 to-purple-400/10'
    }
  ];

  if (showForm) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-white/5 to-white/10 border border-white/20 rounded-3xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-light text-white mb-8 text-center">Claim Your Space</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Why you?</label>
                <textarea
                  value={formData.why}
                  onChange={(e) => setFormData({...formData, why: e.target.value})}
                  className="w-full p-4 bg-black/40 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-green-400 focus:outline-none"
                  placeholder="What makes you the right investor for Asmi?"
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Investment Amount</label>
                  <input
                    type="text"
                    value={formData.amount}
                    onChange={(e) => setFormData({...formData, amount: e.target.value})}
                    className="w-full p-4 bg-black/40 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-green-400 focus:outline-none"
                    placeholder="$500K"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Valuation</label>
                  <input
                    type="text"
                    value={formData.valuation}
                    onChange={(e) => setFormData({...formData, valuation: e.target.value})}
                    className="w-full p-4 bg-black/40 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-green-400 focus:outline-none"
                    placeholder="Your valuation"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Partner we'd work with</label>
                <input
                  type="text"
                  value={formData.partner}
                  onChange={(e) => setFormData({...formData, partner: e.target.value})}
                  className="w-full p-4 bg-black/40 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-green-400 focus:outline-none"
                  placeholder="Partner name and background"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">What's their USP?</label>
                <textarea
                  value={formData.usp}
                  onChange={(e) => setFormData({...formData, usp: e.target.value})}
                  className="w-full p-4 bg-black/40 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-green-400 focus:outline-none"
                  placeholder="What unique value do they bring?"
                  rows={3}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-400 to-green-500 px-8 py-4 rounded-full text-lg font-medium text-black hover:from-green-500 hover:to-green-600 transition-all duration-300 hover:scale-105 shadow-lg shadow-green-400/25"
              >
                Submit Your Offer
              </button>
            </form>

            <button
              onClick={() => setShowForm(false)}
              className="mt-4 text-gray-400 hover:text-white transition-colors text-sm"
            >
              ← Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main CTA */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-light text-white mb-8 leading-tight">
            Join the movement to build a <span className="text-green-400 font-medium">single interface for AI-native life</span>
          </h1>
        </div>

        {/* CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {ctaCards.map((card, index) => (
            <div
              key={index}
              className={`p-6 bg-gradient-to-r ${card.color} border border-white/20 rounded-2xl backdrop-blur-sm animate-fade-in`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-white/10 rounded-xl mb-4">
                  {card.icon}
                </div>
                <h3 className="text-lg font-medium text-white mb-2">{card.title}</h3>
                <p className="text-gray-300 text-sm font-light">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mb-16">
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-400 to-green-500 px-12 py-4 rounded-full text-xl font-medium text-black hover:from-green-500 hover:to-green-600 transition-all duration-300 hover:scale-105 shadow-lg shadow-green-400/25"
          >
            <span>Claim your space</span>
          </button>
        </div>

        {/* Contact info */}
        <div className="bg-gradient-to-r from-white/5 to-white/10 border border-white/20 rounded-3xl p-6 backdrop-blur-sm">
          <a 
            href="mailto:rishi@asmi.ai" 
            className="text-green-400 hover:text-green-300 transition-colors text-lg"
          >
            rishi@asmi.ai
          </a>
        </div>
      </div>
    </div>
  );
};

export default FinalCTASection;
