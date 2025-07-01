
const TractionSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-6xl font-light mb-16 tracking-tight">
          Early <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-medium">traction</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-8 bg-gradient-to-b from-white/10 to-white/5 rounded-3xl border border-white/20">
            <div className="text-4xl font-bold text-blue-400 mb-4">500+</div>
            <p className="text-xl text-gray-300">Waitlist signups</p>
          </div>
          
          <div className="p-8 bg-gradient-to-b from-white/10 to-white/5 rounded-3xl border border-white/20">
            <div className="text-4xl font-bold text-green-400 mb-4">30+</div>
            <p className="text-xl text-gray-300">Active testers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TractionSection;
