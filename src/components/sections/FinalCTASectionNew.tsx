
import { useState } from 'react';
import { TrendingUp, Building, Calendar, DollarSign, Users, ArrowRight } from 'lucide-react';

const FinalCTASectionNew = () => {
  const [showForm, setShowForm] = useState(false);
  const [showFOMO, setShowFOMO] = useState(false);
  const [revealedCards, setRevealedCards] = useState<number[]>([]);
  const [fomoStage, setFomoStage] = useState(0);
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
      icon: <TrendingUp className="text-red-400" size={24} />,
      title: "5-Year Returns You'll Miss",
      value: "50-100x",
      description: "Personal OS becomes the new mobile OS. $50B+ market capture."
    },
    {
      icon: <Building className="text-orange-400" size={24} />,
      title: "Category Creation",
      value: "$100B+",
      description: "First-mover advantage in AI-native personal computing infrastructure."
    },
    {
      icon: <Users className="text-purple-400" size={24} />,
      title: "User Base by 2029",
      value: "100M+",
      description: "Every knowledge worker becomes an Asmi power user."
    }
  ];

  const missedOpportunities = [
    { company: "OpenAI", year: "2019", valuation: "$100M", current: "$157B", multiple: "1570x" },
    { company: "Anthropic", year: "2021", valuation: "$4.1B", current: "$60B+", multiple: "15x+" },
    { company: "Perplexity", year: "2022", valuation: "$26M", current: "$9B", multiple: "346x" }
  ];

  const handleCardReveal = (index: number) => {
    if (!revealedCards.includes(index)) {
      setRevealedCards(prev => [...prev, index]);
    }
  };

  const handleFOMOClick = () => {
    setShowFOMO(true);
    setTimeout(() => setFomoStage(1), 300);
    setTimeout(() => setFomoStage(2), 1200);
    setTimeout(() => setFomoStage(3), 2100);
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

  if (showFOMO) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-space font-bold text-red-400 mb-4">
              What You'll Miss
            </h2>
            <p className="text-gray-400 text-lg font-inter">
              The cost of missing the Personal OS revolution
            </p>
          </div>

          {/* FOMO Scenarios Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {fomoScenarios.map((scenario, index) => (
              <div
                key={index}
                className={`bg-black border border-red-400/20 rounded-2xl p-6 text-center transition-all duration-700 ${
                  fomoStage > 0 ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-95'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex justify-center mb-4">
                  {scenario.icon}
                </div>
                <h3 className="text-xl font-space font-bold text-white mb-2">
                  {scenario.title}
                </h3>
                <div className="text-3xl font-space font-bold text-red-400 mb-3">
                  {scenario.value}
                </div>
                <p className="text-gray-400 text-sm font-inter leading-relaxed">
                  {scenario.description}
                </p>
              </div>
            ))}
          </div>

          {/* Missed Opportunities */}
          {fomoStage >= 2 && (
            <div className="bg-black border border-red-400/30 rounded-3xl p-6 md:p-8 mb-8 animate-fade-in">
              <h3 className="text-2xl font-space font-bold text-white mb-6 text-center">
                Remember These Misses?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {missedOpportunities.map((opp, index) => (
                  <div key={index} className="bg-red-500/5 border border-red-400/20 rounded-xl p-4">
                    <div className="font-space font-bold text-white text-lg mb-1">
                      {opp.company}
                    </div>
                    <div className="text-gray-400 text-sm mb-2">
                      {opp.year}: ${opp.valuation}
                    </div>
                    <div className="text-red-400 font-bold">
                      → {opp.current} ({opp.multiple})
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Final CTA */}
          {fomoStage >= 3 && (
            <div className="text-center animate-fade-in">
              <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-400/30 rounded-2xl p-6 mb-6">
                <p className="text-xl font-space font-bold text-white mb-2">
                  Don't repeat history.
                </p>
                <p className="text-gray-400 font-inter">
                  Asmi is building the infrastructure for human-AI collaboration.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setShowForm(true)}
                  className="bg-green-400 text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-green-500 transition-all duration-300 font-inter flex items-center justify-center gap-2"
                >
                  Lead our $5M seed <ArrowRight size={20} />
                </button>
                <button
                  onClick={() => setShowFOMO(false)}
                  className="border border-white/20 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/5 transition-all duration-300 font-inter"
                >
                  Back to overview
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

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
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setShowForm(true)}
            className="bg-green-400 text-black px-12 py-4 rounded-full text-xl font-medium hover:bg-green-500 transition-all duration-300 hover:scale-105 font-inter relative overflow-hidden"
          >
            <span className="relative z-10">Lead our $5M seed</span>
            <div className="absolute inset-0 bg-green-300 opacity-50 animate-pulse"></div>
          </button>
          
          <button
            onClick={handleFOMOClick}
            className="bg-red-500/10 border-2 border-red-400/50 text-red-400 px-12 py-4 rounded-full text-xl font-medium hover:bg-red-500/20 transition-all duration-300 hover:scale-105 font-inter relative overflow-hidden"
          >
            <span className="relative z-10">Miss our seed?</span>
            <div className="absolute inset-0 bg-red-400/10 animate-pulse"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinalCTASectionNew;
