
import { useState } from 'react';
import { TrendingUp, Building, Calendar, DollarSign, Users, ArrowRight, ChevronUp, ChevronDown, Zap } from 'lucide-react';
import InteractiveFOMOSection from './InteractiveFOMOSection';

const FinalCTASectionNew = () => {
  const [showForm, setShowForm] = useState(false);
  const [showFOMO, setShowFOMO] = useState(false);
  const [showInteractiveForm, setShowInteractiveForm] = useState(false);
  const [revealedCards, setRevealedCards] = useState<number[]>([]);
  const [formData, setFormData] = useState({
    why: '',
    amount: 500000,
    valuation: '',
    partner: '',
    usp: ''
  });
  const [formStep, setFormStep] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const ctaPoints = [
    "$5-6M seed → Series A in 18 mo",
    "Founders: $300M GMV & Meta AI systems", 
    "Limited seats. Claim yours."
  ];

  const suggestionChips = [
    "I led $50M+ rounds in AI infrastructure",
    "My network includes top AI founders",
    "I backed 3 unicorns in developer tools"
  ];

  const handleCardReveal = (index: number) => {
    if (!revealedCards.includes(index)) {
      setRevealedCards(prev => [...prev, index]);
    }
  };

  const handleFOMOClick = () => {
    setShowFOMO(true);
  };

  const handleInteractiveFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfetti(true);
    
    setTimeout(() => {
      const subject = encodeURIComponent('Investment Interest - Asmi');
      const body = encodeURIComponent(`
Why me: ${formData.why}

Investment Amount: $${formData.amount.toLocaleString()}
Valuation: ${formData.valuation}
Partner: ${formData.partner}
USP: ${formData.usp}

UTM: investor-site-interactive-form
      `);
      
      window.location.href = `mailto:rishi@asmi.ai?subject=${subject}&body=${body}`;
    }, 2000);
  };

  const handleAmountChange = (value: number) => {
    setFormData(prev => ({ ...prev, amount: value }));
  };

  const handleChipClick = (chip: string) => {
    setFormData(prev => ({ ...prev, why: chip }));
  };

  const nextStep = () => {
    if (formStep < 3) {
      setFormStep(prev => prev + 1);
    }
  };

  // Show Interactive FOMO Section
  if (showFOMO) {
    return <InteractiveFOMOSection />;
  }

  // Show Interactive Form
  if (showInteractiveForm) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-2xl mx-auto w-full">
          {/* Live Offer Preview Card */}
          <div className="mb-6 p-4 rounded-2xl border border-white/10" style={{ backgroundColor: 'var(--bg-surface)' }}>
            <p className="text-sm text-secondary mb-2">Live Offer Preview</p>
            <p className="text-high">
              Offer: ${formData.amount.toLocaleString()} {formData.valuation && `on ${formData.valuation} valuation`}
              {formData.partner && ` | Partner: ${formData.partner}`}
            </p>
          </div>

          {/* Step Indicator */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-secondary">Step {formStep + 1} of 4</span>
              <span className="text-sm text-secondary">{Math.round(((formStep + 1) / 4) * 100)}%</span>
            </div>
            <div className="w-full h-2 bg-gray-700 rounded-full">
              <div 
                className="h-2 rounded-full transition-all duration-500"
                style={{ 
                  width: `${((formStep + 1) / 4) * 100}%`,
                  backgroundColor: 'var(--accent-positive)'
                }}
              />
            </div>
          </div>

          <form onSubmit={handleInteractiveFormSubmit} className="space-y-6">
            {/* Step 0: Investment Amount Slider */}
            {formStep === 0 && (
              <div className="animate-fade-in">
                <label className="block text-xl font-bold text-high mb-4">Investment Amount</label>
                <div className="relative">
                  <input
                    type="range"
                    min="500000"
                    max="10000000"
                    step="250000"
                    value={formData.amount}
                    onChange={(e) => handleAmountChange(parseInt(e.target.value))}
                    className="w-full h-3 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, var(--accent-positive) 0%, var(--accent-positive) ${((formData.amount - 500000) / 9500000) * 100}%, #374151 ${((formData.amount - 500000) / 9500000) * 100}%, #374151 100%)`
                    }}
                  />
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black px-3 py-1 rounded-lg text-sm text-white">
                    ${formData.amount.toLocaleString()}
                  </div>
                </div>
                <div className="flex justify-between text-sm text-secondary mt-2">
                  <span>$500K</span>
                  <span>$10M</span>
                </div>
                <button
                  type="button"
                  onClick={nextStep}
                  className="button-primary w-full mt-6"
                >
                  Continue
                </button>
              </div>
            )}

            {/* Step 1: Why You */}
            {formStep === 1 && (
              <div className="animate-fade-in">
                <label className="block text-xl font-bold text-high mb-4">Why you?</label>
                <div className="space-y-3 mb-4">
                  {suggestionChips.map((chip, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleChipClick(chip)}
                      className="block w-full p-3 rounded-xl border border-white/20 text-left text-secondary hover:text-high hover:border-white/40 transition-colors"
                      style={{ backgroundColor: 'var(--bg-surface)' }}
                    >
                      {chip}
                    </button>
                  ))}
                </div>
                <textarea
                  value={formData.why}
                  onChange={(e) => setFormData({...formData, why: e.target.value})}
                  className="w-full p-4 rounded-xl border border-white/20 text-white placeholder-gray-400 focus:border-green-400 focus:outline-none"
                  style={{ backgroundColor: 'var(--bg-surface)' }}
                  placeholder="What makes you the right investor for Asmi?"
                  rows={4}
                />
                <button
                  type="button"
                  onClick={nextStep}
                  className="button-primary w-full mt-6"
                  disabled={!formData.why}
                >
                  Continue
                </button>
              </div>
            )}

            {/* Step 2: Valuation */}
            {formStep === 2 && (
              <div className="animate-fade-in">
                <label className="block text-xl font-bold text-high mb-4">Your Valuation</label>
                <input
                  type="text"
                  value={formData.valuation}
                  onChange={(e) => setFormData({...formData, valuation: e.target.value})}
                  className="w-full p-4 rounded-xl border border-white/20 text-white placeholder-gray-400 focus:border-green-400 focus:outline-none"
                  style={{ backgroundColor: 'var(--bg-surface)' }}
                  placeholder="e.g., $30M pre-money"
                />
                <button
                  type="button"
                  onClick={nextStep}
                  className="button-primary w-full mt-6"
                  disabled={!formData.valuation}
                >
                  Continue
                </button>
              </div>
            )}

            {/* Step 3: Partner & USP */}
            {formStep === 3 && (
              <div className="animate-fade-in">
                <div className="space-y-6">
                  <div>
                    <label className="block text-xl font-bold text-high mb-4">Partner we'd work with</label>
                    <input
                      type="text"
                      value={formData.partner}
                      onChange={(e) => setFormData({...formData, partner: e.target.value})}
                      className="w-full p-4 rounded-xl border border-white/20 text-white placeholder-gray-400 focus:border-green-400 focus:outline-none"
                      style={{ backgroundColor: 'var(--bg-surface)' }}
                      placeholder="Partner name and background"
                    />
                  </div>

                  <div>
                    <label className="block text-xl font-bold text-high mb-4">What's their USP?</label>
                    <textarea
                      value={formData.usp}
                      onChange={(e) => setFormData({...formData, usp: e.target.value})}
                      className="w-full p-4 rounded-xl border border-white/20 text-white placeholder-gray-400 focus:border-green-400 focus:outline-none"
                      style={{ backgroundColor: 'var(--bg-surface)' }}
                      placeholder="What unique value do they bring?"
                      rows={3}
                    />
                  </div>
                </div>

                {showConfetti ? (
                  <div className="text-center mt-6">
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-400 text-black font-medium mb-4">
                      <Zap size={20} />
                      Thank You—We'll be in touch!
                    </div>
                    <div className="p-4 rounded-2xl border-2 border-green-400 bg-green-400/10">
                      <p className="text-lg font-bold text-high mb-2">🏆 Asmi Vanguard Investor</p>
                      <p className="text-secondary">#3 of 10 seats claimed</p>
                    </div>
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="button-primary w-full mt-6 animate-pulse"
                  >
                    Submit Your Offer
                  </button>
                )}
              </div>
            )}
          </form>

          <button
            onClick={() => setShowInteractiveForm(false)}
            className="mt-4 text-secondary hover:text-high transition-colors text-sm"
          >
            ← Back
          </button>
        </div>
      </div>
    );
  }

  // Main CTA Section
  return (
    <div className="min-h-screen py-20 flex items-center" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-high mb-16 leading-tight">
          Back the personal OS of the future.
        </h2>

        {/* Three key points - tap to reveal */}
        <div className="space-y-6 mb-12">
          {ctaPoints.map((point, index) => (
            <div 
              key={index}
              onClick={() => handleCardReveal(index)}
              className={`p-6 rounded-2xl border border-white/10 cursor-pointer transition-all duration-500 ${
                revealedCards.includes(index) 
                  ? 'opacity-100 transform scale-100 bg-white/5' 
                  : 'opacity-50 transform scale-95'
              }`}
              style={{ backgroundColor: 'var(--bg-surface)' }}
            >
              <div className="text-lg font-medium text-high">
                {revealedCards.includes(index) ? point : 'Tap to reveal'}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setShowInteractiveForm(true)}
            className="button-primary text-xl px-12 py-4 relative overflow-hidden"
          >
            <span className="relative z-10">Lead our $5M seed</span>
            <div className="absolute inset-0 bg-green-300 opacity-50 animate-pulse"></div>
          </button>
          
          <button
            onClick={handleFOMOClick}
            className="px-12 py-4 rounded-full text-xl font-medium transition-all duration-300 hover:scale-105 relative overflow-hidden"
            style={{ 
              backgroundColor: 'rgba(255, 114, 111, 0.1)',
              border: '2px solid rgba(255, 114, 111, 0.5)',
              color: 'var(--text-alert)'
            }}
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
