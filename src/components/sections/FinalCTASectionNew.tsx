
import { useState } from 'react';

const FinalCTASectionNew = () => {
  const [showForm, setShowForm] = useState(false);
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

  return (
    <div className="min-h-screen bg-black py-20 flex items-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-space font-bold text-white mb-16 leading-tight">
          Back the memory OS of the future.
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

        {/* CTA Button with pulse - directly opens form */}
        <button
          onClick={() => setShowForm(true)}
          className="bg-green-400 text-black px-12 py-4 rounded-full text-xl font-medium hover:bg-green-500 transition-all duration-300 hover:scale-105 font-inter relative overflow-hidden"
        >
          <span className="relative z-10">I want in</span>
          <div className="absolute inset-0 bg-green-300 opacity-50 animate-pulse"></div>
        </button>
      </div>
    </div>
  );
};

export default FinalCTASectionNew;
