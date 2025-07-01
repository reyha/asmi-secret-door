
const BusinessModelSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-6xl font-light mb-16 tracking-tight">
          <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent font-medium">Business model</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-gradient-to-b from-gray-800/50 to-gray-800/20 rounded-3xl border border-gray-600">
            <h3 className="text-2xl font-bold mb-4">Free</h3>
            <div className="text-4xl font-bold text-gray-400 mb-4">$0</div>
            <p className="text-gray-400">Basic daily summaries</p>
          </div>
          
          <div className="p-8 bg-gradient-to-b from-blue-500/30 to-blue-500/10 rounded-3xl border border-blue-500/50 scale-105">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Pro</h3>
            <div className="text-4xl font-bold text-blue-400 mb-4">$29</div>
            <p className="text-gray-300">Full AI chief of staff</p>
          </div>
          
          <div className="p-8 bg-gradient-to-b from-purple-500/30 to-purple-500/10 rounded-3xl border border-purple-500/50">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">Custom</h3>
            <div className="text-4xl font-bold text-purple-400 mb-4">$99+</div>
            <p className="text-gray-300">Team & enterprise</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessModelSection;
