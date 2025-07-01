
import { Brain, Clock, Users } from 'lucide-react';

const DifferentiatorSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-6xl font-light mb-16 tracking-tight">
          What makes Asmi <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent font-medium">different</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-gradient-to-b from-white/10 to-white/5 rounded-3xl border border-white/20">
            <Brain className="text-blue-400 mx-auto mb-6" size={48} />
            <h3 className="text-2xl font-bold mb-4">Memory</h3>
            <p className="text-gray-300">Remembers everything, connects context across time</p>
          </div>
          
          <div className="p-8 bg-gradient-to-b from-white/10 to-white/5 rounded-3xl border border-white/20">
            <Clock className="text-green-400 mx-auto mb-6" size={48} />
            <h3 className="text-2xl font-bold mb-4">Proactive</h3>
            <p className="text-gray-300">Acts before you ask, learns your patterns</p>
          </div>
          
          <div className="p-8 bg-gradient-to-b from-white/10 to-white/5 rounded-3xl border border-white/20">
            <Users className="text-purple-400 mx-auto mb-6" size={48} />
            <h3 className="text-2xl font-bold mb-4">Personal</h3>
            <p className="text-gray-300">Built for your life, not generic workflows</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DifferentiatorSection;
