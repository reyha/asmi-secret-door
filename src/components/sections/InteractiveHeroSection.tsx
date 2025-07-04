import { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import MobileOptimizedSection from './MobileOptimizedSection';

// Card components
const Card1 = () => (
  <div className="bg-gradient-to-br from-blue-600/80 to-blue-800/80 rounded-3xl p-6 shadow-xl space-y-6 border border-blue-500/40 backdrop-blur-sm">
    <div className="text-center space-y-3">
      <h3 className="text-2xl font-semibold text-white">Your AI Chief of Staff</h3>
      <p className="text-blue-200 text-sm">For busy founders & investors</p>
    </div>
    <div className="space-y-4">
      <div className="flex items-center space-x-3 bg-blue-900/30 rounded-2xl p-3 border border-blue-500/30">
        <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">A</div>
        <div>
          <p className="text-white text-sm font-medium">Asmi</p>
          <p className="text-blue-300 text-xs">Your AI assistant</p>
        </div>
      </div>
      <div className="bg-blue-900/20 rounded-2xl p-4 text-blue-200 text-sm">
        "Prep me for meeting with David from Sequoia"
      </div>
    </div>
  </div>
);

const Card2 = () => (
  <div className="bg-gradient-to-br from-purple-600/80 to-purple-800/80 rounded-3xl p-6 shadow-xl space-y-6 border border-purple-500/40 backdrop-blur-sm">
    <div className="text-center space-y-3">
      <h3 className="text-2xl font-semibold text-white">Automated Morning Brief</h3>
      <p className="text-purple-200 text-sm">Stay updated effortlessly</p>
    </div>
    <div className="space-y-4">
      <div className="flex items-center space-x-3 bg-purple-900/30 rounded-2xl p-3 border border-purple-500/30">
        <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-bold">A</div>
        <div>
          <p className="text-white text-sm font-medium">Asmi</p>
          <p className="text-purple-300 text-xs">Your AI assistant</p>
        </div>
      </div>
      <div className="bg-purple-900/20 rounded-2xl p-4 text-purple-200 text-sm">
        <p>Sequoia just invested $20M in AI startup, Contextly</p>
        <p className="mt-2">David is on the board of Contextly</p>
      </div>
    </div>
  </div>
);

const Card3 = () => (
  <div className="bg-gradient-to-br from-green-600/80 to-green-800/80 rounded-3xl p-6 shadow-xl space-y-6 border border-green-500/40 backdrop-blur-sm">
    <div className="text-center space-y-3">
      <h3 className="text-2xl font-semibold text-white">Meeting Context</h3>
      <p className="text-green-200 text-sm">Go into meetings prepared</p>
    </div>
    <div className="space-y-4">
      <div className="flex items-center space-x-3 bg-green-900/30 rounded-2xl p-3 border border-green-500/30">
        <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold">A</div>
        <div>
          <p className="text-white text-sm font-medium">Asmi</p>
          <p className="text-green-300 text-xs">Your AI assistant</p>
        </div>
      </div>
      <div className="bg-green-900/20 rounded-2xl p-4 text-green-200 text-sm">
        <p><span className="text-green-400">David's Background:</span></p>
        <p>Early investor in Google & Facebook</p>
        <p className="mt-2"><span className="text-green-400">Investment Style:</span></p>
        <p>Focuses on disruptive technologies</p>
      </div>
    </div>
  </div>
);

const Card4 = () => (
  <div className="bg-gradient-to-br from-red-600/80 to-red-800/80 rounded-3xl p-6 shadow-xl space-y-6 border border-red-500/40 backdrop-blur-sm">
    <div className="text-center space-y-3">
      <h3 className="text-2xl font-semibold text-white">Voice Actions</h3>
      <p className="text-red-200 text-sm">Just speak, it's done</p>
    </div>
    <div className="space-y-4">
      <div className="flex items-center space-x-3 bg-red-900/30 rounded-2xl p-3 border border-red-500/30">
        <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-bold">A</div>
        <div>
          <p className="text-white text-sm font-medium">Asmi</p>
          <p className="text-red-300 text-xs">Your AI assistant</p>
        </div>
      </div>
      <div className="bg-red-900/20 rounded-2xl p-4 text-red-200 text-sm">
        "Reschedule meeting with David to next Tuesday at 3pm"
      </div>
    </div>
  </div>
);

const Card5 = () => (
  <div className="bg-gradient-to-br from-orange-600/80 to-orange-800/80 rounded-3xl p-6 shadow-xl space-y-6 border border-orange-500/40 backdrop-blur-sm">
    <div className="text-center space-y-3">
      <h3 className="text-2xl font-semibold text-white">Memory Engine</h3>
      <p className="text-orange-200 text-sm">Never forget a thing</p>
    </div>
    <div className="space-y-4">
      <div className="flex items-center space-x-3 bg-orange-900/30 rounded-2xl p-3 border border-orange-500/30">
        <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold">A</div>
        <div>
          <p className="text-white text-sm font-medium">Asmi</p>
          <p className="text-orange-300 text-xs">Your AI assistant</p>
        </div>
      </div>
      <div className="bg-orange-900/20 rounded-2xl p-4 text-orange-200 text-sm">
        <p><span className="text-orange-400">Last Meeting:</span></p>
        <p>Discussed Series A funding</p>
        <p className="mt-2"><span className="text-orange-400">Key Interests:</span></p>
        <p>AI, SaaS, and Climate Tech</p>
      </div>
    </div>
  </div>
);

const Card6 = () => (
    <div className="bg-gradient-to-br from-red-600/80 to-red-800/80 rounded-3xl p-6 shadow-xl space-y-6 border border-red-500/40 backdrop-blur-sm">
      <div className="text-center space-y-3">
        <h3 className="text-2xl font-semibold text-white">Voice Actions</h3>
        <p className="text-red-200 text-sm">Just speak, it's done</p>
      </div>
      <div className="space-y-4">
        <div className="flex items-center space-x-3 bg-red-900/30 rounded-2xl p-3 border border-red-500/30">
          <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-bold">A</div>
          <div>
            <p className="text-white text-sm font-medium">Asmi</p>
            <p className="text-red-300 text-xs">Your AI assistant</p>
          </div>
        </div>
        <div className="bg-red-900/20 rounded-2xl p-4 text-red-200 text-sm">
          "Move Eric call to 6PM"
        </div>
      </div>
    </div>
  );

const InteractiveHeroSection = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const cards = [
    { component: <Card1 />, title: 'Card 1' },
    { component: <Card2 />, title: 'Card 2' },
    { component: <Card3 />, title: 'Card 3' },
    { component: <Card4 />, title: 'Card 4' },
    { component: <Card5 />, title: 'Card 5' },
    { component: <Card6 />, title: 'Card 6' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prevCard) => (prevCard + 1) % cards.length);
    }, 5000); // Change card every 5 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  return (
    <MobileOptimizedSection maxWidth="sm">
      <div className="relative min-h-screen flex items-center justify-center">
        {/* Main Card Container */}
        <div className="relative w-full max-w-sm">
          {/* Current Card */}
          <div className="relative">
            {cards[currentCard].component}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCard(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentCard 
                    ? 'bg-white w-8' 
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`Go to card ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </MobileOptimizedSection>
  );
};

export default InteractiveHeroSection;
