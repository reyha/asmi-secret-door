
import { useEffect, useRef, useState } from 'react';
import { MessageCircle, Calendar, Bell, Mic, Clock } from 'lucide-react';

const InteractiveHeroSection = () => {
  const [showFloatingElements, setShowFloatingElements] = useState(false);
  const bubbleContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setShowFloatingElements(true);
    
    // Create floating speech bubbles
    const container = bubbleContainerRef.current;
    if (!container) return;

    const bubbles = [
      { text: "Schedule lunch with Sarah", icon: Calendar, delay: 0 },
      { text: "Voice note: Review Q4 budget", icon: Mic, delay: 1000 },
      { text: "Remind me to call mom", icon: Bell, delay: 2000 },
      { text: "What's on my calendar?", icon: MessageCircle, delay: 3000 },
      { text: "Send Eric birthday gift ideas", icon: MessageCircle, delay: 4000 },
    ];

    bubbles.forEach((bubble, index) => {
      setTimeout(() => {
        const bubbleEl = document.createElement('div');
        bubbleEl.className = 'floating-bubble absolute animate-fade-in';
        bubbleEl.style.left = `${Math.random() * 80 + 10}%`;
        bubbleEl.style.top = `${Math.random() * 80 + 10}%`;
        bubbleEl.innerHTML = `
          <div class="bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-sm border border-white/10 rounded-2xl px-4 py-3 flex items-center space-x-2 text-sm">
            <div class="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-xs">
              •
            </div>
            <span>${bubble.text}</span>
          </div>
        `;
        
        container.appendChild(bubbleEl);

        // Animate bubble movement
        const animateBubble = () => {
          const x = Math.sin(Date.now() * 0.001 + index) * 20;
          const y = Math.cos(Date.now() * 0.0008 + index) * 15;
          bubbleEl.style.transform = `translate(${x}px, ${y}px)`;
        };

        const interval = setInterval(animateBubble, 50);
        
        // Clean up after 8 seconds
        setTimeout(() => {
          clearInterval(interval);
          bubbleEl.remove();
        }, 8000);
      }, bubble.delay);
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Floating elements container */}
      <div ref={bubbleContainerRef} className="absolute inset-0 pointer-events-none" />

      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <div className="mb-8 opacity-0 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-600/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-3 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-300">Your AI Chief of Staff</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-7xl lg:text-8xl font-light mb-6 tracking-tight opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          Your AI <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-medium">Chief of Staff</span>
        </h1>
        
        <h2 className="text-xl md:text-3xl lg:text-4xl text-gray-300 mb-4 font-light opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
          On WhatsApp & iMessage
        </h2>
        
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '1.5s' }}>
          Built for fast-moving founders, teams, and investors
        </p>

        {/* Interactive demo preview */}
        <div className="relative max-w-sm mx-auto mb-12 opacity-0 animate-scale-in" style={{ animationDelay: '2s' }}>
          <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-500 rounded-xl flex items-center justify-center">
                <MessageCircle size={24} className="text-white" />
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              "Hey Asmi, what's my day looking like?"
            </p>
            <div className="bg-gray-800/50 rounded-xl p-3 text-xs text-gray-400">
              <div className="flex items-center space-x-2 mb-2">
                <Clock size={12} />
                <span>Analyzing your calendar...</span>
              </div>
              <p className="text-white">Good morning! You have 3 meetings today: 10 AM standup, 2 PM investor call, 4 PM product review. Weather is 72°F.</p>
            </div>
          </div>
        </div>

        <button className="group bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full text-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 opacity-0 animate-fade-in" style={{ animationDelay: '2.5s' }}>
          See how it works
          <div className="inline-block ml-2 group-hover:translate-y-1 transition-transform">↓</div>
        </button>
      </div>
    </div>
  );
};

export default InteractiveHeroSection;
