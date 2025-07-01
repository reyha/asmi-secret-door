
import { useState, useEffect } from 'react';
import { X, Bell, MessageSquare, Calendar, Mail } from 'lucide-react';

const InteractiveProblemSection = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, text: "15 unread messages", icon: MessageSquare, dismissed: false },
    { id: 2, text: "Meeting in 10 mins", icon: Calendar, dismissed: false },
    { id: 3, text: "47 new emails", icon: Mail, dismissed: false },
    { id: 4, text: "Task overdue", icon: Bell, dismissed: false },
    { id: 5, text: "Sarah called 3x", icon: MessageSquare, dismissed: false },
  ]);

  const [showGenAIProblems, setShowGenAIProblems] = useState(false);

  const dismissNotification = (id: number) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, dismissed: true } : notif
      )
    );
  };

  useEffect(() => {
    // Show GenAI problems after notifications are mostly dismissed
    const timer = setTimeout(() => {
      setShowGenAIProblems(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const activeProblemTexts = [
    "Too many tasks",
    "No memory", 
    "Nothing talks to each other",
    "GenAI tools are generic"
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-black to-gray-900 px-4">
      {/* Chaotic notification overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {notifications.map((notif, index) => (
          <div
            key={notif.id}
            className={`absolute transition-all duration-500 ${
              notif.dismissed ? 'opacity-0 scale-75 translate-y-4' : 'opacity-100'
            }`}
            style={{
              left: `${10 + (index * 15)}%`,
              top: `${20 + (index * 10)}%`,
              pointerEvents: notif.dismissed ? 'none' : 'auto'
            }}
          >
            <div className="bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-xl p-3 flex items-center space-x-3 text-sm">
              <notif.icon size={16} className="text-red-400 flex-shrink-0" />
              <span className="text-gray-200">{notif.text}</span>
              <button
                onClick={() => dismissNotification(notif.id)}
                className="text-gray-400 hover:text-white ml-2 pointer-events-auto"
              >
                <X size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 tracking-tight">
          The <span className="text-red-400 font-medium">chaos</span> is real
        </h2>

        {/* Interactive problem reveal */}
        <div className="space-y-8 mb-12">
          {activeProblemTexts.map((text, index) => (
            <div
              key={text}
              className={`text-2xl md:text-4xl font-light transition-all duration-1000 ${
                showGenAIProblems ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              {text}
            </div>
          ))}
        </div>

        {/* Tap to dismiss instruction */}
        <div className="mb-8">
          <p className="text-gray-400 text-lg mb-4">
            👆 Tap to dismiss the notifications above
          </p>
          <p className="text-gray-500">
            But they'll just keep coming...
          </p>
        </div>

        {/* Quote box */}
        <div className={`mt-16 p-6 md:p-8 bg-red-500/10 border border-red-500/20 rounded-3xl backdrop-blur-sm transition-all duration-1000 ${
          showGenAIProblems ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <p className="text-xl md:text-2xl text-red-300 font-light mb-4">
            "Where did I put that note? What was that person's name? When is my next meeting?"
          </p>
          <p className="text-gray-400">
            — Every knowledge worker, every day
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="p-4 bg-gradient-to-b from-white/5 to-white/5 rounded-2xl border border-white/10">
            <div className="text-3xl font-bold text-red-400 mb-2">47</div>
            <p className="text-gray-300 text-sm">Apps switched daily</p>
          </div>
          <div className="p-4 bg-gradient-to-b from-white/5 to-white/5 rounded-2xl border border-white/10">
            <div className="text-3xl font-bold text-yellow-400 mb-2">0</div>
            <p className="text-gray-300 text-sm">Context retention</p>
          </div>
          <div className="p-4 bg-gradient-to-b from-white/5 to-white/5 rounded-2xl border border-white/10">
            <div className="text-3xl font-bold text-purple-400 mb-2">∞</div>
            <p className="text-gray-300 text-sm">Cognitive load</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveProblemSection;
