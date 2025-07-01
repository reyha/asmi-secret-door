
import { useState, useEffect } from 'react';
import { Mail, ArrowRight, Zap, Brain } from 'lucide-react';

const ClosingCTASection = () => {
  const [showElements, setShowElements] = useState(false);

  useEffect(() => {
    setShowElements(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 relative overflow-hidden flex items-center justify-center">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        {/* Main headline */}
        <div className={`mb-12 transition-all duration-1000 ${
          showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 tracking-tight leading-tight">
            Everyone has an <span className="text-gray-500">inbox</span>.
          </h2>
          <h3 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 tracking-tight leading-tight">
            Now they'll have a <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-medium">brain</span>.
          </h3>
        </div>
        
        {/* Subtitle */}
        <div className={`mb-16 transition-all duration-1000 delay-500 ${
          showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-3xl md:text-4xl text-gray-400 font-light">
            Asmi. <span className="text-white">Invisible</span>, but <span className="text-white">indispensable</span>.
          </p>
        </div>
        
        {/* Value props */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-1000 ${
          showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="p-6 bg-gradient-to-b from-white/10 to-white/5 rounded-3xl border border-white/20 backdrop-blur-sm">
            <Brain className="text-blue-400 mx-auto mb-4" size={48} />
            <h4 className="text-xl font-bold mb-2">Perfect Memory</h4>
            <p className="text-gray-300">Never forget context, preferences, or conversations again</p>
          </div>
          
          <div className="p-6 bg-gradient-to-b from-white/10 to-white/5 rounded-3xl border border-white/20 backdrop-blur-sm">
            <Zap className="text-yellow-400 mx-auto mb-4" size={48} />
            <h4 className="text-xl font-bold mb-2">Effortless Action</h4>
            <p className="text-gray-300">Speak naturally, get organized outcomes</p>
          </div>
          
          <div className="p-6 bg-gradient-to-b from-white/10 to-white/5 rounded-3xl border border-white/20 backdrop-blur-sm">
            <ArrowRight className="text-green-400 mx-auto mb-4" size={48} />
            <h4 className="text-xl font-bold mb-2">Zero Friction</h4>
            <p className="text-gray-300">Works where you already are: WhatsApp & iMessage</p>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className={`space-y-6 mb-16 transition-all duration-1000 delay-1500 ${
          showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="group bg-gradient-to-r from-blue-500 to-purple-600 px-12 py-4 rounded-full text-xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 flex items-center space-x-2">
              <span>Fund the future of memory</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            
            <button className="border border-white/30 px-12 py-4 rounded-full text-xl font-medium hover:bg-white/10 transition-all duration-300 flex items-center space-x-2">
              <Mail size={20} />
              <span>Talk to us</span>
            </button>
          </div>
          
          <div className="text-gray-500">
            <p className="mb-2">Ready to back the next platform?</p>
            <a href="mailto:rishi@asmi.ai" className="text-blue-400 hover:text-blue-300 transition-colors text-lg">
              rishi@asmi.ai
            </a>
          </div>
        </div>

        {/* Final stats */}
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-6 transition-all duration-1000 delay-2000 ${
          showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-1">$300M+</div>
            <p className="text-gray-400 text-sm">Built by founders</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-1">92%</div>
            <p className="text-gray-400 text-sm">User retention</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-1">500+</div>
            <p className="text-gray-400 text-sm">Waitlist signups</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-1">$5-6M</div>
            <p className="text-gray-400 text-sm">Raising now</p>
          </div>
        </div>

        {/* Footer */}
        <div className={`mt-20 text-gray-600 transition-all duration-1000 delay-2500 ${
          showElements ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Asmi
          </div>
          <p className="text-sm">© 2025 Asmi AI • The future of personal intelligence</p>
        </div>
      </div>
    </div>
  );
};

export default ClosingCTASection;
