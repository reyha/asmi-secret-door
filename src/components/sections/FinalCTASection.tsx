
import { Mail } from 'lucide-react';

const FinalCTASection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-black to-purple-900/20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center max-w-md mx-auto">
        <h2 className="text-3xl md:text-4xl font-light mb-6 opacity-0 animate-fade-in leading-tight">
          Back the memory OS<br />of the future.
        </h2>

        <button className="bg-gradient-to-r from-purple-500 to-green-500 px-12 py-4 rounded-full text-xl font-medium hover:from-purple-600 hover:to-green-600 transition-all duration-300 hover:scale-105 shadow-2xl opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <Mail className="inline mr-3" size={20} />
          Share your offer
        </button>

        <div className="mt-8 opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
          <a 
            href="mailto:rishi@asmi.ai" 
            className="text-gray-400 hover:text-white transition-colors text-lg font-light hover:underline"
          >
            rishi@asmi.ai
          </a>
        </div>
      </div>
    </div>
  );
};

export default FinalCTASection;
