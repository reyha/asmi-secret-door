import { useEffect, useState } from "react";
import MobileOptimizedSection from "./MobileOptimizedSection";
import { motion } from "framer-motion";

const AsmiIntroSection = ({ isActive }) => {
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showPlatforms, setShowPlatforms] = useState(false);
  const [currentPlatform, setCurrentPlatform] = useState(0);
  const [showTags, setShowTags] = useState(false);
  const [activeTags, setActiveTags] = useState<number[]>([]);

  const fullText = "Asmi is your smart Chief of Staff within ";
  const platforms = ["WhatsApp", "iMessage"];
  const tags = ["Calendar", "Meeting Preps", "Mails"];

  // Reset all state when isActive toggles
  useEffect(() => {
    if (!isActive) {
      // Reset state when user navigates away
      setTypedText("");
      setIsTyping(false);
      setShowPlatforms(false);
      setCurrentPlatform(0);
      setShowTags(false);
      setActiveTags([]);
      return;
    }

    // Trigger typewriter only when active
    setIsTyping(true);
    let i = 0;

    const typeInterval = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.substring(0, i));
        i++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        setShowPlatforms(true);

        setTimeout(() => {
          setShowTags(true);
        }, 500);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [isActive]);

  useEffect(() => {
    if (!isActive || !showPlatforms) return;

    const platformInterval = setInterval(() => {
      setCurrentPlatform((prev) => (prev + 1) % platforms.length);
    }, 2000);

    return () => clearInterval(platformInterval);
  }, [isActive, showPlatforms]);

  useEffect(() => {
    if (!isActive || !showTags) return;

    tags.forEach((_, index) => {
      setTimeout(() => {
        setActiveTags((prev) => [...prev, index]);
      }, index * 500);
    });
  }, [isActive, showTags]);

  // Optional: don't render anything if not active (for optimization)
  if (!isActive) return null;

  return (
    <MobileOptimizedSection maxWidth="md">
      <div className="space-y-8 text-center">
        {/* Main Text */}
        <div className="space-y-6">
          <div className="text-3xl md:text-4xl font-space font-bold text-white leading-tight min-h-[120px] flex items-center justify-center">
            <div>
              {typedText}
              {showPlatforms && (
                <span className="text-green-400 relative inline-block min-w-[140px] text-left">
                  <span
                    key={currentPlatform}
                    className="absolute left-0 top-0 animate-fade-in"
                  >
                    {platforms[currentPlatform]}
                  </span>
                </span>
              )}
              {isTyping && (
                <span className="animate-pulse text-green-400">|</span>
              )}
            </div>
          </div>

          {/* Platform Icons */}
          {showPlatforms && (
            <div className="flex items-center justify-center space-x-4 animate-fade-in">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                <span className="text-green-400 text-2xl">💬</span>
              </div>
              <div className="w-px h-8 bg-gray-600"></div>
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                <span className="text-blue-400 text-2xl">📱</span>
              </div>
            </div>
          )}
        </div>

        {/* Tags */}
        {showTags && (
          <motion.div
            className="flex items-center justify-center space-x-4 pt-8"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.3,
                },
              },
            }}
          >
            {tags.map((tag, index) => (
              <motion.div
                key={tag}
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 10 },
                  visible: { opacity: 1, scale: 1, y: 0 },
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="px-4 py-2 rounded-full border border-white/30 text-white bg-white/10"
              >
                <span className="text-sm font-medium">{tag}</span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </MobileOptimizedSection>
  );
};

export default AsmiIntroSection;
