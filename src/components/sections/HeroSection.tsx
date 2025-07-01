
import { ChevronDown } from 'lucide-react';
import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = messagesRef.current;
    if (!container) return;

    const messages = [
      { text: "Schedule lunch with Sarah tomorrow", type: "user" },
      { text: "Done! Lunch with Sarah scheduled for 12:30 PM tomorrow.", type: "asmi" },
      { text: "What's on my calendar today?", type: "user" },
      { text: "You have 3 meetings: 10 AM standup, 2 PM investor call, 4 PM product review", type: "asmi" },
      { text: "Remind me to call mom this evening", type: "user" },
      { text: "I'll remind you at 7 PM to call mom", type: "asmi" },
    ];

    let messageIndex = 0;
    const showMessage = () => {
      if (messageIndex < messages.length) {
        const messageElement = document.createElement('div');
        const message = messages[messageIndex];
        
        messageElement.className = `message ${message.type === 'user' ? 'user-message' : 'asmi-message'} opacity-0 transform translate-y-4`;
        messageElement.innerHTML = `
          <div class="${message.type === 'user' ? 'bg-blue-500 ml-auto' : 'bg-gray-800'} rounded-2xl px-4 py-2 max-w-xs ${message.type === 'user' ? 'text-right' : ''}">
            ${message.text}
          </div>
        `;
        
        container.appendChild(messageElement);
        
        // Animate in
        setTimeout(() => {
          messageElement.classList.remove('opacity-0', 'translate-y-4');
          messageElement.classList.add('opacity-100', 'translate-y-0');
        }, 100);
        
        messageIndex++;
        setTimeout(showMessage, 2000);
      } else {
        // Reset and loop
        setTimeout(() => {
          container.innerHTML = '';
          messageIndex = 0;
          showMessage();
        }, 3000);
      }
    };

    showMessage();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-light mb-6 tracking-tight">
          Your AI <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-medium">Chief of Staff</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
          On WhatsApp & iMessage
        </h2>
        
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Built for fast-moving founders, teams, and investors
        </p>

        {/* Animated messages preview */}
        <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-8 max-w-md mx-auto mb-12 border border-white/10">
          <div className="text-green-400 text-sm mb-4 flex items-center justify-center">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            Live conversation
          </div>
          <div ref={messagesRef} className="space-y-3 h-64 overflow-hidden">
            {/* Messages will be dynamically added here */}
          </div>
        </div>

        <button className="group bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full text-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105">
          View How It Works
          <ChevronDown className="inline-block ml-2 group-hover:translate-y-1 transition-transform" size={20} />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
