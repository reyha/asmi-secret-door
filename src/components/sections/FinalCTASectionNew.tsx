import { useState } from "react";
import {
  TrendingUp,
  Building,
  Calendar,
  DollarSign,
  Users,
  ArrowRight,
  ChevronUp,
  ChevronDown,
  Zap,
} from "lucide-react";
import InteractiveFOMOSection from "./InteractiveFOMOSection";
import MobileOptimizedSection from "./MobileOptimizedSection";
import { Dialog, DialogContent } from "../ui/dialog";

const FinalCTASectionNew = () => {
  const [showForm, setShowForm] = useState(false);
  const [showFOMO, setShowFOMO] = useState(false);
  const [showInteractiveForm, setShowInteractiveForm] = useState(false);
  const [revealedCards, setRevealedCards] = useState<number[]>([]);
  const [formData, setFormData] = useState({
    why: "",
    amount: 500000,
    valuation: "",
    partner: "",
    usp: "",
  });
  const [formStep, setFormStep] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const ctaPoints = [
    "$5M seed → Series A in 8 mo",
    // "Founders: $300M GMV & Meta AI systems",
    "Serial Entrepreneur meets Cracked Research Scientist",
    "Limited seats. Claim yours.",
  ];

  const suggestionChips = [
    "I led $50M+ rounds in AI infrastructure",
    "My network includes top AI founders",
    "I backed 3 unicorns in developer tools",
  ];

  const handleCardReveal = (index: number) => {
    if (!revealedCards.includes(index)) {
      setRevealedCards((prev) => [...prev, index]);
    }
  };

  const handleFOMOClick = () => {
    setShowFOMO(true);
  };

  const handleInteractiveFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfetti(true);

    setTimeout(() => {
      const subject = encodeURIComponent("Investment Interest - Asmi");
      const body = encodeURIComponent(`
Why me: ${formData.why}

Investment Amount: $${formData.amount.toLocaleString()}
Valuation Offer: ${formData.valuation}
Partner: ${formData.partner}
USP: ${formData.usp}

UTM: investor-site-interactive-form
      `);

      window.location.href = `mailto:rishi@asmi.ai?subject=${subject}&body=${body}`;
    }, 2000);
  };

  const handleAmountChange = (value: number) => {
    setFormData((prev) => ({ ...prev, amount: value }));
  };

  const handleChipClick = (chip: string) => {
    setFormData((prev) => ({ ...prev, why: chip }));
  };

  const nextStep = () => {
    if (formStep < 3) {
      setFormStep((prev) => prev + 1);
    }
  };

  // Show Interactive FOMO Section
  // if (showFOMO) {
  //   return <InteractiveFOMOSection setShowFOMO={setShowFOMO}/>;
  // }

  // Show Interactive Form
  if (showInteractiveForm) {
    return (
      <Dialog open={showInteractiveForm} onOpenChange={setShowInteractiveForm}>
        <DialogContent className="p-0 bg-background max-h-[90vh] w-[90vw] overflow-y-auto rounded-xl border-black/60 scrollbar-hide">
      <MobileOptimizedSection maxWidth="sm">
        {/* Live Offer Preview Card */}
        <div
          className="mb-4 p-3 rounded-xl border border-white/10"
          style={{ backgroundColor: "var(--bg-surface)" }}
        >
          <p className="text-xs text-secondary mb-1">Live Offer Preview</p>
          <p className="text-sm text-high">
            ${formData.amount.toLocaleString()}{" "}
            {formData.valuation && `on ${formData.valuation}`}
            {formData.partner && ` | ${formData.partner}`}
          </p>
        </div>

        {/* Step Indicator - Simple text */}
        <div className="mb-6 text-center">
          <span className="text-sm text-gray-400">
            Step {formStep + 1} of 4
          </span>
        </div>

        <form onSubmit={handleInteractiveFormSubmit} className="space-y-4">
          {/* Step 0: Investment Amount Slider */}
          {formStep === 0 && (
            <div className="animate-fade-in space-y-4">
              <label className="block text-lg font-bold text-high">
                Investment Amount
              </label>
              <div className="relative">
                <input
                  type="range"
                  min="500000"
                  max="10000000"
                  step="250000"
                  value={formData.amount}
                  onChange={(e) => handleAmountChange(parseInt(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, var(--accent-positive) 0%, var(--accent-positive) ${
                      ((formData.amount - 500000) / 9500000) * 100
                    }%, #374151 ${
                      ((formData.amount - 500000) / 9500000) * 100
                    }%, #374151 100%)`,
                  }}
                />
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black px-2 py-1 rounded-lg text-xs text-white">
                  ${formData.amount.toLocaleString()}
                </div>
              </div>
              <div className="flex justify-between text-xs text-secondary">
                <span>$500K</span>
                <span>$10M</span>
              </div>
              <button
                type="button"
                onClick={nextStep}
                className="button-primary w-full"
              >
                Continue
              </button>
            </div>
          )}

          {/* Step 1: Why You */}
          {formStep === 1 && (
            <div className="animate-fade-in space-y-4">
              <label className="block text-lg font-bold text-high">
                Why you?
              </label>
              <div className="space-y-2">
                {suggestionChips.map((chip, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleChipClick(chip)}
                    className="block w-full p-3 rounded-xl border border-white/20 text-left text-secondary hover:text-high hover:border-white/40 transition-colors text-sm"
                    style={{ backgroundColor: "var(--bg-surface)" }}
                  >
                    {chip}
                  </button>
                ))}
              </div>
              <textarea
                value={formData.why}
                onChange={(e) =>
                  setFormData({ ...formData, why: e.target.value })
                }
                className="w-full p-3 rounded-xl border border-white/20 text-white placeholder-gray-400 focus:border-green-400 focus:outline-none text-sm"
                style={{ backgroundColor: "var(--bg-surface)" }}
                placeholder="What makes you the right investor for Asmi?"
                rows={3}
              />
              <button
                type="button"
                onClick={nextStep}
                className="button-primary w-full"
                disabled={!formData.why}
              >
                Continue
              </button>
            </div>
          )}

          {/* Step 2: Valuation Offer */}
          {formStep === 2 && (
            <div className="animate-fade-in space-y-4">
              <label className="block text-lg font-bold text-high">
                Valuation Offer
              </label>
              <input
                type="text"
                value={formData.valuation}
                onChange={(e) =>
                  setFormData({ ...formData, valuation: e.target.value })
                }
                className="w-full p-3 rounded-xl border border-white/20 text-white placeholder-gray-400 focus:border-green-400 focus:outline-none text-sm"
                style={{ backgroundColor: "var(--bg-surface)" }}
                placeholder="e.g., $30M pre-money"
              />
              <button
                type="button"
                onClick={nextStep}
                className="button-primary w-full"
                disabled={!formData.valuation}
              >
                Continue
              </button>
            </div>
          )}

          {/* Step 3: Partner & USP */}
          {formStep === 3 && (
            <div className="animate-fade-in space-y-4">
              <div>
                <label className="block text-lg font-bold text-high mb-2">
                  Partner we'd work with
                </label>
                <input
                  type="text"
                  value={formData.partner}
                  onChange={(e) =>
                    setFormData({ ...formData, partner: e.target.value })
                  }
                  className="w-full p-3 rounded-xl border border-white/20 text-white placeholder-gray-400 focus:border-green-400 focus:outline-none text-sm"
                  style={{ backgroundColor: "var(--bg-surface)" }}
                  placeholder="Partner name"
                />
              </div>

              <div>
                <label className="block text-lg font-bold text-high mb-2">
                  What's their USP?
                </label>
                <textarea
                  value={formData.usp}
                  onChange={(e) =>
                    setFormData({ ...formData, usp: e.target.value })
                  }
                  className="w-full p-3 rounded-xl border border-white/20 text-white placeholder-gray-400 focus:border-green-400 focus:outline-none text-sm"
                  style={{ backgroundColor: "var(--bg-surface)" }}
                  placeholder="What unique value do they bring?"
                  rows={2}
                />
              </div>

              {showConfetti ? (
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-400 text-black font-medium mb-3 text-sm">
                    <Zap size={16} />
                    Thank You—We'll be in touch!
                  </div>
                  <div className="p-3 rounded-xl border-2 border-green-400 bg-green-400/10">
                    <p className="text-sm font-bold text-high mb-1">
                      🏆 Asmi Vanguard Investor
                    </p>
                    <p className="text-xs text-secondary">
                      #3 of 10 seats claimed
                    </p>
                  </div>
                </div>
              ) : (
                <button
                  type="submit"
                  className="button-primary w-full animate-pulse"
                >
                  Submit Your Offer
                </button>
              )}
            </div>
          )}
        </form>

        {/* <button
          onClick={() => setShowInteractiveForm(false)}
          className="mt-3 text-secondary hover:text-high transition-colors text-sm"
        >
          ← Back
        </button> */}
      </MobileOptimizedSection>
      </DialogContent>
      </Dialog>
    );
  }

  // Main CTA Section
  return (
    <MobileOptimizedSection maxWidth="sm">
      <Dialog open={showFOMO} onOpenChange={setShowFOMO}>
        <DialogContent className="p-0 bg-background max-h-[90vh] w-[90vw] overflow-y-auto rounded-xl border-black/60 scrollbar-hide">
          <InteractiveFOMOSection setShowFOMO={setShowFOMO} />
        </DialogContent>
      </Dialog>
      <div className="text-center space-y-6">
        <h2 className="text-2xl font-bold text-high leading-tight">
          Back the personal OS of the future.
        </h2>

        {/* Three key points - tap to reveal */}
        <div className="space-y-4">
          {ctaPoints.map((point, index) => (
            <div
              key={index}
              onClick={() => handleCardReveal(index)}
              className={`p-4 rounded-xl border border-white/10 cursor-pointer transition-all duration-500 ${
                revealedCards.includes(index)
                  ? "opacity-100 transform scale-100 bg-white/5"
                  : "opacity-70 transform scale-95"
              }`}
              style={{ backgroundColor: "var(--bg-surface)" }}
            >
              <div className="text-sm font-medium text-high">
                {revealedCards.includes(index) ? point : "Tap to reveal"}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => setShowInteractiveForm(true)}
            className="button-primary w-full py-4 text-lg relative overflow-hidden"
          >
            <span className="relative z-10">Lead our $5M seed</span>
            <div className="absolute inset-0 bg-green-300 opacity-30 animate-pulse"></div>
          </button>

          <button
            onClick={handleFOMOClick}
            className="w-full py-4 rounded-full text-lg font-medium transition-all duration-300 relative overflow-hidden"
            style={{
              backgroundColor: "rgba(255, 114, 111, 0.1)",
              border: "2px solid rgba(255, 114, 111, 0.5)",
              color: "var(--text-alert)",
            }}
          >
            <span className="relative z-10">Miss our seed?</span>
            <div className="absolute inset-0 bg-red-400/10 animate-pulse"></div>
          </button>
        </div>
      </div>
    </MobileOptimizedSection>
  );
};

export default FinalCTASectionNew;
