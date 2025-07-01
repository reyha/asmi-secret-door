
const TeamSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-6xl font-light mb-16 tracking-tight">
          The <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-medium">team</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="p-8 bg-gradient-to-b from-white/10 to-white/5 rounded-3xl border border-white/20">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold">
              R
            </div>
            <h3 className="text-2xl font-bold mb-2">Rishi Patel</h3>
            <p className="text-blue-400 mb-4">Co-Founder & CEO</p>
            <p className="text-gray-300 text-sm">Ex-Flipkart, CMU. Built AI systems at scale.</p>
          </div>
          
          <div className="p-8 bg-gradient-to-b from-white/10 to-white/5 rounded-3xl border border-white/20">
            <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold">
              S
            </div>
            <h3 className="text-2xl font-bold mb-2">Sarah Chen</h3>
            <p className="text-purple-400 mb-4">Co-Founder & CTO</p>
            <p className="text-gray-300 text-sm">Ex-Meta AI, MIT. Deep learning expert.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
