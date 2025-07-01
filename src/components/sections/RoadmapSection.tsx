
const RoadmapSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-6xl font-light mb-16 tracking-tight">
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent font-medium">Roadmap</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-8 bg-gradient-to-b from-blue-500/20 to-blue-500/5 rounded-3xl border border-blue-500/30">
            <h3 className="text-3xl font-bold mb-6 text-blue-400">Q3 2025</h3>
            <ul className="space-y-3 text-gray-300 text-left">
              <li>• Daily summaries & briefs</li>
              <li>• iMessage integration</li>
              <li>• Calendar sync</li>
              <li>• Basic task management</li>
            </ul>
          </div>
          
          <div className="p-8 bg-gradient-to-b from-purple-500/20 to-purple-500/5 rounded-3xl border border-purple-500/30">
            <h3 className="text-3xl font-bold mb-6 text-purple-400">Q4 2025</h3>
            <ul className="space-y-3 text-gray-300 text-left">
              <li>• Voice journaling</li>
              <li>• Wearable prototype</li>
              <li>• Advanced context AI</li>
              <li>• Team collaboration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapSection;
