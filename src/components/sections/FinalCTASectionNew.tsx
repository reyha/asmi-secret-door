
import { useState } from 'react';
import { TrendingDown, Clock, Target } from 'lucide-react';

const FinalCTASectionNew = () => {
  const [showForm, setShowForm] = useState(false);
  const [showFOMO, setShowFOMO] = useState(false);
  const [revealedCards, setRevealedCards] = useState<number[]>([]);
  const [formData, setFormData] = useState({
    why: '',
    amount: '',
    valuation: '',
    partner: '',
    usp: ''
  });

  const ctaPoints = [
    "$5-6M seed → Series A in 18 mo",
    "Founders: $300M GMV & Meta AI systems", 
    "Limited seats. Claim yours."
  ];

  const fomoScenarios = [
    {
      icon: <TrendingDown className="text-red-400" size={24} />,
      title: "Miss 1000x Returns",
      content: "OpenAI investors saw 1000x+ returns. Asmi targets similar trajectory with personal OS market (estimated $2T by 2030). Early seed investors typically see 500-1000x on category-defining AI companies."
    },
    {
      icon: <Clock className="text-orange-400" size={24} />,
      title: "5-7 Year Opportunity Window",
      content: "Personal AI assistants market growing 40% YoY. By 2030, Asmi could be the dominant OS for personal productivity. Current seed round is your only entry point before Series A at 10x valuation."
    },
    {
      icon: <Target className="text-yellow-400" size={24} />,
      title: "What If You Missed These?",
      content: "Imagine passing on Google's early rounds (1999), Facebook's Series A (2005), or OpenAI's seed (2015). Asmi represents the same category-defining moment for personal AI - the OS layer that everything else builds on."
    }
  ];

  const handleCardReveal = (index: number) => {
    if (!revealedCards.includes(index)) {
      setRevealedCards(prev => [...prev, index]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent('Investment Interest - Asmi');
    const body = encodeURIComponent(`
Why me: ${formData.why}

Investment Amount: ${formData.amount}
Valuation: ${formData.valuation}
Partner: ${formData.partner}
USP: ${formData.usp}

UTM: investor-site-form
    `);
    
    window.location.href = `mailto:rishi@asmi.ai?subject=${subject}&body=${body}`;
  };

  if (showForm) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-black border border-white/20 rounded-3xl p-8">
            <h2 className="text-3xl font-space font-bold text-white mb-8 text-center">
              Claim Your Space
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 font-inter">Why you?</label>
                <textarea
                  value={formData.why}
                  onChange={(e) => setFormData({...formData, why: e.target.value})}
                  className="w-full p-4 bg-black border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-green-400 focus:outline-none font-inter"
                  placeholder="What makes you the right investor for Asmi?"
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-inter">Investment Amount</label>
                  <input
                    type="text"
                    value={formData.amount}
                    onChange={(e) => setFormData({...formData, amount: e.target.value})}
                    className="w-full p-4 bg-black border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-green-400 focus:outline-none font-inter"
                    placeholder="$500K"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-inter">Valuation</label>
                  <input
                    type="text"
                    value={formData.valuation}
                    onChange={(e) => setFormData({...formData, valuation: e.target.value})}
                    className="w-full p-4 bg-black border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-green-400 focus:outline-none font-inter"
                    placeholder="Your valuation"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 font-inter">Partner we'd work with</label>
                <input
                  type="text"
                  value={formData.partner}
                  onChange={(e) => setFormData({...formData, partner: e.target.value})}
                  className="w-full p-4 bg-black border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-green-400 focus:outline-none font-inter"
                  placeholder="Partner name and background"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 font-inter">What's their USP?</label>
                <textarea
                  value={formData.usp}
                  onChange={(e) => setFormData({...formData, usp: e.target.value})}
                  className="w-full p-4 bg-black border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-green-400 focus:outline-none font-inter"
                  placeholder="What unique value do they bring?"
                  rows={3}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-400 text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-green-500 transition-all duration-300 font-inter"
              >
                Submit Your Offer
              </button>
            </form>

            <button
              onClick={() => setShowForm(false)}
              className="mt-4 text-gray-400 hover:text-white transition-colors text-sm font-inter"
            >
              ← Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showFOMO) {
    return (
      <div className="min-h-screen bg-black py-20 flex items-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-space font-bold text-red-400 mb-6">
              What You'll Miss
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              The cost of saying no to the next generation-defining AI company
            </p>
          </div>

          <div className="space-y-8 mb-12">
            {fomoScenarios.map((scenario, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-3xl p-8 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-black rounded-xl border border-red-500/30">
                    {scenario.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-space font-bold text-white mb-4">
                      {scenario.title}
                    </h3>
                    <p className="text-gray-300 font-inter leading-relaxed">
                      {scenario.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Portfolio comparison */}
          <div className="bg-gradient-to-r from-yellow-500/10 to-red-500/10 border border-yellow-500/20 rounded-3xl p-8 mb-8">
            <h3 className="text-2xl font-space font-bold text-yellow-400 mb-4 text-center">
              Your Portfolio's Biggest Misses
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-red-400 mb-2">Google</div>
                <div className="text-gray-300">1999 → 2004</div>
                <div className="text-yellow-400">2,318x Return</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-400 mb-2">Facebook</div>
                <div className="text-gray-300">2005 → 2012</div>
                <div className="text-yellow-400">1,000x Return</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-400 mb-2">OpenAI</div>
                <div className="text-gray-300">2015 → 2023</div>
                <div className="text-yellow-400">1,000x+ Return</div>
              </div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <button
              onClick={() => setShowForm(true)}
              className="bg-green-400 text-black px-12 py-4 rounded-full text-xl font-medium hover:bg-green-500 transition-all duration-300 hover:scale-105 font-inter mr-4"
            >
              Don't Miss Asmi
            </button>
            
            <button
              onClick={() => setShowFOMO(false)}
              className="border border-white/30 px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-all duration-300 font-inter"
            >
              Back to Main
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-20 flex items-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-space font-bold text-white mb-16 leading-tight">
          Back the personal OS of the future.
        </h2>

        {/* Three key points - tap to reveal */}
        <div className="space-y-6 mb-12">
          {ctaPoints.map((point, index) => (
            <div 
              key={index}
              onClick={() => handleCardReveal(index)}
              className={`bg-black border border-white/20 rounded-full py-4 px-8 cursor-pointer transition-all duration-500 ${
                revealedCards.includes(index) ? 'opacity-100 transform scale-100' : 'opacity-50 transform scale-95'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-lg font-inter text-white">
                {revealedCards.includes(index) ? point : 'Tap to reveal'}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="space-y-4">
          <button
            onClick={() => setShowForm(true)}
            className="bg-green-400 text-black px-12 py-4 rounded-full text-xl font-medium hover:bg-green-500 transition-all duration-300 hover:scale-105 font-inter relative overflow-hidden mr-4"
          >
            <span className="relative z-10">Lead our $5M seed</span>
            <div className="absolute inset-0 bg-green-300 opacity-50 animate-pulse"></div>
          </button>

          <button
            onClick={() => setShowFOMO(true)}
            className="bg-red-500 text-white px-12 py-4 rounded-full text-xl font-medium hover:bg-red-600 transition-all duration-300 hover:scale-105 font-inter"
          >
            Miss our seed
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinalCTASectionNew;
