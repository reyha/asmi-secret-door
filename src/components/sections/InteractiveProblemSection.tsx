
import { useState, useEffect } from 'react';
import { X, Bell, MessageSquare, Calendar, Mail, Zap } from 'lucide-react';

const InteractiveProblemSection = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, text: "15 unread messages", icon: MessageSquare, dismissed: false },
    { id: 2, text: "Meeting in 10 mins", icon: Calendar, dismissed: false },
    { id: 3, text: "47 new emails", icon: Mail, dismissed: false },
    { id: 4, text: "Task overdue", icon: Bell, dismissed: false },
    { id: 5, text: "Sarah called 3x", icon: MessageSquare, dismissed: false },
  ]);

  const [showProblemStatements, setShowProblemStatements] = useState(false);

  const dismissNotification = (id: number) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, dismissed: true } : notif
      )
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProblemStatements(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const problemStatements = [
    "Too many tasks",
    "No memory", 
    "Nothing talks to each other",
    "GenAI tools are generic"
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-black via-gray-900 to-black px-4 py-20">
      {/* Floating notifications - positioned better for mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {notifications.map((notif, index) => (
          <div
            key={notif.id}
            className={`absolute transition-all duration-500 ${
              notif.dismissed ? 'opacity-0 scale-75 translate-y-4' : 'opacity-100'
            }`}
            style={{
              left: `${5 + (index * 18)}%`,
              top: `${15 + (index * 12)}%`,
              pointerEvents: notif.dismissed ? 'none' : 'auto'
            }}
          >
            <div className="bg-red-500/15 backdrop-blur-sm border border-red-500/25 rounded-2xl p-4 flex items-center space-x-3 text-sm shadow-lg">
              <notif.icon size={18} className="text-red-400 flex-shrink-0" />
              <span className="text-gray-200 font-light">{notif.text}</span>
              <button
                onClick={() => dismissNotification(notif.id)}
                className="text-gray-400 hover:text-white ml-2 pointer-events-auto p-1 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-light mb-12 tracking-tight leading-tight">
          The <span className="text-red-400 font-medium">chaos</span> is real
        </h2>

        {/* Problem statements with better spacing */}
        <div className="space-y-8 mb-16">
          {problemStatements.map((text, index) => (
            <div
              key={text}
              className={`text-2xl md:text-4xl lg:text-5xl font-light transition-all duration-1000 ${
                showProblemStatements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 400}ms` }}
            >
              <span className="text-gray-300">{text}</span>
            </div>
          ))}
        </div>

        {/* Interactive instruction */}
        <div className="mb-12">
          <div className="inline-flex items-center space-x-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
            <Zap className="text-yellow-400" size={20} />
            <p className="text-gray-300 font-light">
              Tap to dismiss the notifications above
            </p>
          </div>
          <p className="text-gray-500 mt-4 font-light">
            But they'll just keep coming...
          </p>
        </div>

        {/* Clean quote section */}
        <div className={`max-w-3xl mx-auto p-8 bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-3xl backdrop-blur-sm transition-all duration-1000 ${
          showProblemStatements ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <p className="text-xl md:text-2xl text-red-300 font-light mb-6 leading-relaxed">
            "Where did I put that note? What was that person's name? When is my next meeting?"
          </p>
          <p className="text-gray-400 font-light">
            — Every knowledge worker, every day
          </p>
        </div>

        {/* Clean stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="p-6 bg-gradient-to-b from-white/5 to-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
            <div className="text-4xl font-bold text-red-400 mb-3">47</div>
            <p className="text-gray-300 font-light">Apps switched daily</p>
          </div>
          <div className="p-6 bg-gradient-to-b from-white/5 to-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
            <div className="text-4xl font-bold text-yellow-400 mb-3">0</div>
            <p className="text-gray-300 font-light">Context retention</p>
          </div>
          <div className="p-6 bg-gradient-to-b from-white/5 to-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
            <div className="text-4xl font-bold text-purple-400 mb-3">∞</div>
            <p className="text-gray-300 font-light">Cognitive load</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveProblemSection;
