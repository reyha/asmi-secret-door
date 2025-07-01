
import { useState, useEffect } from 'react';
import { X, Bell, MessageSquare, Calendar, Mail, Zap } from 'lucide-react';

const InteractiveProblemSection = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, text: "When is my next meeting?", icon: Calendar, dismissed: false, position: { left: '10%', top: '20%' } },
    { id: 2, text: "Who is this person I'm meeting?", icon: MessageSquare, dismissed: false, position: { left: '70%', top: '15%' } },
    { id: 3, text: "Where did I take notes?", icon: Bell, dismissed: false, position: { left: '15%', top: '60%' } },
    { id: 4, text: "Another urgent task", icon: Mail, dismissed: false, position: { left: '75%', top: '70%' } },
    { id: 5, text: "Meeting prep needed", icon: MessageSquare, dismissed: false, position: { left: '45%', top: '25%' } },
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
    "Too many apps",
    "GenAI tools are reactive", 
    "Nothing talks to each other"
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-red-900/20 via-black to-black px-4 py-20">
      {/* Interactive floating notifications */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className={`absolute transition-all duration-500 ${
              notif.dismissed ? 'opacity-0 scale-75 translate-y-4' : 'opacity-100'
            }`}
            style={{
              left: notif.position.left,
              top: notif.position.top,
              pointerEvents: notif.dismissed ? 'none' : 'auto'
            }}
          >
            <div className="bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-2xl p-4 flex items-center space-x-3 text-sm shadow-lg hover:bg-red-500/25 transition-colors">
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
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-light mb-16 tracking-tight leading-tight">
          Work is faster than ever. <span className="text-red-400 font-medium">Humans aren't</span>.
        </h2>

        {/* Problem statements */}
        <div className="space-y-8 mb-16">
          {problemStatements.map((text, index) => (
            <div
              key={text}
              className={`text-2xl md:text-3xl lg:text-4xl font-light transition-all duration-1000 ${
                showProblemStatements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 500}ms` }}
            >
              <span className="text-gray-300">{text}</span>
            </div>
          ))}
        </div>

        {/* Interactive instruction */}
        <div className="mb-12">
          <div className="inline-flex items-center space-x-3 px-6 py-3 bg-red-500/10 border border-red-500/20 rounded-full backdrop-blur-sm">
            <Zap className="text-red-400" size={20} />
            <p className="text-gray-300 font-light">
              Tap to dismiss the chaos above
            </p>
          </div>
          <p className="text-gray-500 mt-4 font-light">
            But it never ends...
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-6 bg-gradient-to-b from-red-500/10 to-red-500/5 rounded-3xl border border-red-500/20 backdrop-blur-sm">
            <div className="text-4xl font-bold text-red-400 mb-3">47</div>
            <p className="text-gray-300 font-light">Apps switched daily</p>
          </div>
          <div className="p-6 bg-gradient-to-b from-red-500/10 to-red-500/5 rounded-3xl border border-red-500/20 backdrop-blur-sm">
            <div className="text-4xl font-bold text-red-400 mb-3">0</div>
            <p className="text-gray-300 font-light">Context retention</p>
          </div>
          <div className="p-6 bg-gradient-to-b from-red-500/10 to-red-500/5 rounded-3xl border border-red-500/20 backdrop-blur-sm">
            <div className="text-4xl font-bold text-red-400 mb-3">∞</div>
            <p className="text-gray-300 font-light">Cognitive overload</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveProblemSection;
