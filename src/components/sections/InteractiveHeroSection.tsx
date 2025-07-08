import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import NeuralBloomBackground from "../NeuralBloomBackground";

const InteractiveHeroSection = ({ isActive, setShowSwipeTilt }) => {
  const [currentRoast, setCurrentRoast] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showRoasts, setShowRoasts] = useState(false);
  const [showSwipeHint, setShowSwipeHint] = useState(false);
  const [showError, setShowError] = useState(false);
  const [password, setPassword] = useState("");  

  useEffect(() => {
    if (!isActive) return;

    // Trigger animation here
  }, [isActive]);

  // Personalized roasts - fun & conversational
  const roasts = [
    "You invested in 3 AI startups this quarter but still use a flip phone. Classic contrarian move! 📱",
    "Your LinkedIn says 'Thought Leader' but you haven't posted in 6 months. Busy making actual money? 💰",
    "You backed that unicorn everyone said would fail. Guess coffee meetings at 6 AM do pay off ☕",
    "Your portfolio company just raised at 2x valuation. Meanwhile, you're here scouting the next big thing 🚀",
    "You said 'AI is overhyped' in 2022. Your recent investments suggest otherwise... 🤖",
  ];

  // Welcome sequence
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(true);
      setTimeout(() => {
        setShowRoasts(true);
      }, 1500);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Typewriter effect for current roast
  useEffect(() => {
    if (!showRoasts || currentRoast >= roasts.length) {
      return;
    }

    const roast = roasts[currentRoast];
    setTypedText("");
    setIsTyping(true);

    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex <= roast.length) {
        setTypedText(roast.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);

        // Wait before moving to next roast
        setTimeout(() => {
          if (currentRoast < roasts.length - 1) {
            setCurrentRoast((prev) => prev + 1);
          } else {
            // All roasts done, show swipe hint
            setShowSwipeTilt(true);
            setTimeout(() => {
              setShowSwipeHint(true);
            }, 1000);
          }
        }, 2000);
      }
    }, 40);

    return () => clearInterval(typingInterval);
  }, [showRoasts, currentRoast, roasts.length]);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== "correct123") {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Neural Bloom Background */}
      <NeuralBloomBackground />

      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 py-12">
        {/* Main Content - Centered */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center max-w-md mx-auto">
            {/* Welcome Message */}
            {showWelcome && (
              <div className="mb-12 animate-fade-in">
                <div className="flex items-center justify-center mb-8 relative">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center text-black font-space font-bold text-2xl relative">
                    AS
                    <div className="absolute inset-0 rounded-full bg-green-400/20 animate-ping"></div>
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-space font-light text-white mb-3">
                  Well, well...{" "}
                  <span className="font-medium text-green-400">Alex</span> 👋
                </h2>

                <p className="text-base text-gray-300 font-light">
                  Let me tell you what I know about you...
                </p>
              </div>
            )}

            {/* Roasts */}
            {showRoasts && (
              <div className="mb-12">
                <div className="min-h-[140px] flex items-center justify-center">
                  <div className="text-center">
                    {/* Roast counter */}
                    <div className="flex items-center justify-center space-x-2 mb-6">
                      <span className="text-sm text-green-400 font-medium">
                        {currentRoast + 1} of {roasts.length}
                      </span>
                    </div>

                    {/* Typing indicator when starting new roast */}
                    {isTyping && typedText === "" && (
                      <div className="flex items-center justify-center space-x-1 mb-6">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce delay-200"></div>
                      </div>
                    )}

                    {/* Typed roast */}
                    {typedText && (
                      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                        <p className="text-lg text-white font-inter leading-relaxed">
                          {typedText}
                          {isTyping && (
                            <span className="animate-pulse text-green-400">
                              |
                            </span>
                          )}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Swipe Hint */}
            {showSwipeHint && (
              <div
                className="animate-fade-in"
                style={{ animationDelay: "500ms" }}
              >
                <div className="flex items-center justify-center space-x-3 text-gray-400">
                  <ArrowLeft
                    className="animate-pulse"
                    size={20}
                    style={{
                      animation:
                        "pulse 2s ease-in-out infinite, translateX 2s ease-in-out infinite",
                    }}
                  />
                  <span className="text-sm font-inter">
                    Now, you can swipe to know me
                  </span>
                </div>
              </div>
            )}

            {/* Error Message (hidden by default, shown when password is wrong) */}
            {showError && (
              <div className="fixed bottom-4 left-4 right-4 bg-red-500/90 backdrop-blur-sm border border-red-400 rounded-xl p-4 animate-fade-in z-50">
                <p className="text-white text-center font-medium">
                  ❌ Incorrect password. Please reach out to Rishi for access.
                </p>
              </div>
            )}

            {/* Hidden password form for testing */}
            <form onSubmit={handlePasswordSubmit} className="hidden">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="bg-gray-800 text-white p-2 rounded"
              />
              <button type="submit">Test</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveHeroSection;
