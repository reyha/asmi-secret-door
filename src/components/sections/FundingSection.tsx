
const FundingSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-6xl font-light mb-12 tracking-tight">
          Raising <span className="bg-gradient-to-r from-yellow-400 to-green-500 bg-clip-text text-transparent font-medium">$5-6M</span>
        </h2>
        
        <p className="text-2xl text-gray-300 mb-16 font-light">
          To build the memory OS for life
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-gradient-to-b from-blue-500/20 to-blue-500/5 rounded-2xl border border-blue-500/30">
            <h3 className="text-xl font-bold mb-3 text-blue-400">Team</h3>
            <p className="text-gray-300">Expand engineering & AI research</p>
          </div>
          
          <div className="p-6 bg-gradient-to-b from-green-500/20 to-green-500/5 rounded-2xl border border-green-500/30">
            <h3 className="text-xl font-bold mb-3 text-green-400">Product</h3>
            <p className="text-gray-300">Advanced context AI & integrations</p>
          </div>
          
          <div className="p-6 bg-gradient-to-b from-purple-500/20 to-purple-500/5 rounded-2xl border border-purple-500/30">
            <h3 className="text-xl font-bold mb-3 text-purple-400">Scale</h3>
            <p className="text-gray-300">Infrastructure & user acquisition</p>
          </div>
        </div>
        
        <button className="bg-gradient-to-r from-green-500 to-blue-600 px-12 py-4 rounded-full text-xl font-medium hover:from-green-600 hover:to-blue-700 transition-all duration-300 hover:scale-105">
          Back this vision
        </button>
      </div>
    </div>
  );
};

export default FundingSection;
