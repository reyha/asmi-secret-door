
import { useState } from 'react';

const FinalCTASectionNew = () => {
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
    console.log('Form submitted:', formData);
  };

  const ctaPoints = [
    "$5-6M seed → Series A in 18 mo",
    "Founders: $300M GMV & Meta AI systems", 
    "Limited seats. Claim yours."
  ];

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
                <label className="block text-sm font-medium text-gray-300 mb-2">Why you?</label>
                <textarea
                  value={formData.why}
                  onChange={(e) => setFormData({...formData, why: e.target.value})}
                  className="w-full p-4 bg-black border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-green-400 focus:outline-none"
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
                    className="w-full p-4 bg-black border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-green-400 focus:outline-none"
                    placeholder="$500K"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Valuation</label>
                  <input
                    type="text"
                    value={formData.valuation}
                    onChange={(e) => setFormData({...formData, valuation: e.target.value})}
                    className="w-full p-4 bg-black border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-green-400 focus:outline-none"
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
                  className="w-full p-4 bg-black border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-green-400 focus:outline-none"
                  placeholder="Partner name and background"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">What's their USP?</label>
                <textarea
                  value={formData.usp}
                  onChange={(e) => setFormData({...formData, usp: e.target.value})}
                  className="w-full p-4 bg-black border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-green-400 focus:outline-none"
                  placeholder="What unique value do they bring?"
                  rows={3}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-400 text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-green-500 transition-all duration-300"
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
    <div className="min-h-screen bg-black py-20 flex items-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-space font-bold text-white mb-16 leading-tight">
          Back the memory OS of the future.
        </h2>

        {/* Three key points */}
        <div className="space-y-6 mb-12">
          {ctaPoints.map((point, index) => (
            <div 
              key={index}
              className="bg-black border border-white/20 rounded-full py-4 px-8 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-lg font-inter text-white">
                {point}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={() => setShowForm(true)}
          className="bg-green-400 text-black px-12 py-4 rounded-full text-xl font-medium hover:bg-green-500 transition-all duration-300 hover:scale-105"
        >
          I want in
        </button>
      </div>
    </div>
  );
};

export default FinalCTASectionNew;
