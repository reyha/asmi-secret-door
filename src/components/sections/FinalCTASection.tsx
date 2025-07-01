
import { useState } from 'react';
import { Mail, Calendar, ExternalLink } from 'lucide-react';

const FinalCTASection = () => {
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main CTA */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-light text-white mb-8 leading-tight">
            Back the <span className="text-green-400 font-medium">memory OS</span> of the future.
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-r from-green-500/20 to-green-400/10 border border-green-400/30 rounded-2xl p-6">
              <div className="text-2xl font-bold text-green-400 mb-2">$5-6M</div>
              <div className="text-gray-300 font-light">Seed round</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-400/10 border border-blue-400/30 rounded-2xl p-6">
              <div className="text-2xl font-bold text-blue-400 mb-2">GTM-ready</div>
              <div className="text-gray-300 font-light">Product live</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-400/10 border border-purple-400/30 rounded-2xl p-6">
              <div className="text-2xl font-bold text-purple-400 mb-2">Proven</div>
              <div className="text-gray-300 font-light">Founders</div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-6 mb-16">
          <a
            href="mailto:rishi@asmi.ai?subject=Investment Opportunity - Asmi AI&body=Hi Rishi,%0D%0A%0D%0AI'm interested in discussing an investment opportunity with Asmi AI. Let's schedule a call.%0D%0A%0D%0ABest regards"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-400 to-green-500 px-12 py-4 rounded-full text-xl font-medium text-black hover:from-green-500 hover:to-green-600 transition-all duration-300 hover:scale-105 shadow-lg shadow-green-400/25"
          >
            <Mail size={20} />
            <span>Share your offer</span>
          </a>
          
          <div className="block">
            <a
              href="https://calendly.com/rishi-asmi/investor-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 border border-white/30 px-8 py-3 rounded-full text-lg font-light text-white hover:bg-white/10 transition-all duration-300"
            >
              <Calendar size={18} />
              <span>Schedule a call</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Contact info */}
        <div className="bg-gradient-to-r from-white/5 to-white/10 border border-white/20 rounded-3xl p-8 backdrop-blur-sm">
          <h3 className="text-xl font-medium text-white mb-4">Get in touch</h3>
          <div className="space-y-2">
            <a 
              href="mailto:rishi@asmi.ai" 
              className="text-green-400 hover:text-green-300 transition-colors text-lg block"
            >
              rishi@asmi.ai
            </a>
            <p className="text-gray-400 text-sm font-light">
              Interested investors & strategic partners welcome
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex items-center justify-center space-x-4 text-gray-500">
            <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
              Asmi
            </div>
            <span className="text-sm">Your AI Chief of Staff</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalCTASection;
