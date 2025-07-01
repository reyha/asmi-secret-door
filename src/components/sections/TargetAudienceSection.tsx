
const TargetAudienceSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-6xl font-light mb-16 tracking-tight">
          Built for <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent font-medium">fast minds</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {['SF Founders', 'VCs', 'Operators', 'Creators'].map((persona, index) => (
            <div key={persona} className="p-8 bg-gradient-to-b from-white/10 to-white/5 rounded-3xl border border-white/20 hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold mb-4">{persona}</h3>
              <p className="text-gray-300">High-speed decision makers who need context, not chaos</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TargetAudienceSection;
