
const WhyNowSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-6xl md:text-8xl font-light mb-12 tracking-tight">
          <span className="bg-gradient-to-r from-red-400 to-yellow-500 bg-clip-text text-transparent font-medium">GenAI fatigue</span> is real
        </h2>
        
        <div className="space-y-8 max-w-3xl mx-auto text-xl text-gray-300">
          <p className="opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            Chat ≠ action
          </p>
          <p className="opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
            People want agents, not prompts
          </p>
          <p className="opacity-0 animate-fade-in" style={{ animationDelay: '1.5s' }}>
            Context + memory = new frontier
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyNowSection;
