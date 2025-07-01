
import { useState, useEffect } from 'react';
import { Mail, Rocket, Brain, Zap } from 'lucide-react';

const ClosingCTASection = () => {
  const [showElements, setShowElements] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowElements(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900/20 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        {/* Main headline */}
        <div className={`mb-12 transition-all duration-1000 ${
          showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-light mb-8 tracking-tight leading-tight">
            Everyone has an <span className="text-gray-500">inbox</span>.
          </h2>
          <h3 className="text-4xl md:text-6xl lg:text-8xl font-light mb-8 tracking-tight leading-tight">
            Now they'll have a <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-medium">brain</span>.
          </h3>
        </div>

        {/* Subtitle */}
        <div className={`mb-12 transition-all duration-1000 delay-500 ${
          showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-2xl md:text-4xl text-gray-300 mb-6 font-light">
            Asmi. Invisible, but <span className="text-white font-medium">indispensable</span>.
          </p>
        </div>

        {/* Vision statement */}
        <div className={`mb-16 transition-all duration-1000 delay-1000 ${
          showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-3xl backdrop-blur-sm">
            <Brain className="mx-auto mb-6 text-purple-400" size={40} />
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
              We're building the <span className="text-purple-400 font-medium">memory OS</span> for human life. 
              An AI that doesn't just answer questions — it knows you, remembers everything, 
              and helps you think.
            </p>
          </div>
        </div>

        {/* The opportunity */}
        <div className={`mb-16 transition-all duration-1000 delay-1500 ${
          showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-gradient-to-r from-green-500/20 to-emerald-500/10 border border-green-500/30 rounded-3xl backdrop-blur-sm">
              <div className="text-3xl font-bold text-green-400 mb-2">$2T</div>
              <p className="text-gray-300 font-light">Knowledge work market</p>
            </div>
            <div className="p-6 bg-gradient-to-r from-blue-500/20 to-cyan-500/10 border border-blue-500/30 rounded-3xl backdrop-blur-sm">
              <div className="text-3xl font-bold text-blue-400 mb-2">5B</div>
              <p className="text-gray-300 font-light">WhatsApp/iMessage users</p>
            </div>
            <div className="p-6 bg-gradient-to-r from-purple-500/20 to-pink-500/10 border border-purple-500/30 rounded-3xl backdrop-blur-sm">
              <div className="text-3xl font-bold text-purple-400 mb-2">First</div>
              <p className="text-gray-300 font-light">Truly personal AI</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className={`space-y-6 transition-all duration-1000 delay-2000 ${
          showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
            <button className="w-full md:w-auto bg-gradient-to-r from-purple-500 to-blue-600 px-12 py-4 rounded-full text-xl font-medium hover:from-purple-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-2xl">
              <Rocket className="inline mr-3" size={20} />
              Fund the future of memory
            </button>
            
            <button className="w-full md:w-auto border border-white/30 px-12 py-4 rounded-full text-xl font-medium hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
              <Mail className="inline mr-3" size={20} />
              Get the full deck
            </button>
          </div>

          {/* Contact info */}
          <div className="mt-12">
            <p className="text-gray-500 mb-4 font-light">Ready to back the memory revolution?</p>
            <div className="space-y-2">
              <a 
                href="mailto:rishi@asmi.ai" 
                className="block text-blue-400 hover:text-blue-300 transition-colors text-xl font-light hover:underline"
              >
                rishi@asmi.ai
              </a>
              <p className="text-gray-600 text-sm font-light">Co-Founder & CEO</p>
            </div>
          </div>
        </div>

        {/* Footer branding */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-2500 ${
          showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
              <Brain size={16} className="text-white" />
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Asmi
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-2 font-light">Your AI Chief of Staff</p>
        </div>
      </div>
    </div>
  );
};

export default ClosingCTASection;
