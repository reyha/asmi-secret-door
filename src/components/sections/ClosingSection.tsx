
const ClosingSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h2 className="text-6xl md:text-8xl font-light mb-12 tracking-tight leading-tight">
          Your AI Chief of Staff.
        </h2>
        
        <p className="text-3xl md:text-4xl text-gray-400 mb-16 font-light">
          Invisible, but <span className="text-white">indispensable</span>.
        </p>
        
        <div className="space-y-8">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-12 py-4 rounded-full text-xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 mr-6">
            Join waitlist
          </button>
          
          <button className="border border-white/30 px-12 py-4 rounded-full text-xl font-medium hover:bg-white/10 transition-all duration-300">
            Talk to us
          </button>
        </div>
        
        <div className="mt-20 text-gray-600">
          <p>rishi@asmi.ai</p>
        </div>
      </div>
    </div>
  );
};

export default ClosingSection;
