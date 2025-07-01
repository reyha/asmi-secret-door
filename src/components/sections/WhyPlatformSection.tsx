
import { MessageCircle, Smartphone, Zap } from 'lucide-react';

const WhyPlatformSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
            Why <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent font-medium">WhatsApp + iMessage</span>
          </h2>
          <p className="text-2xl text-gray-400 font-light">
            Start where users already are
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Phone mockups */}
          <div className="relative">
            <div className="flex gap-8 justify-center">
              {/* WhatsApp mockup */}
              <div className="bg-black rounded-3xl p-4 border border-green-500/30 shadow-2xl">
                <div className="w-64 h-96 bg-gradient-to-b from-gray-900 to-black rounded-2xl p-4">
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-700">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <MessageCircle size={16} />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">Asmi</p>
                      <p className="text-green-400 text-xs">online</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-gray-800 rounded-2xl p-3 max-w-[80%]">
                      <p className="text-white text-sm">Good morning! Your day overview:</p>
                    </div>
                    <div className="bg-gray-800 rounded-2xl p-3 max-w-[80%]">
                      <p className="text-white text-sm">• 3 meetings scheduled</p>
                      <p className="text-white text-sm">• Product demo at 2 PM</p>
                      <p className="text-white text-sm">• Budget review due today</p>
                    </div>
                    <div className="bg-green-600 rounded-2xl p-3 max-w-[80%] ml-auto">
                      <p className="text-white text-sm">Thanks! Reschedule the 4pm</p>
                    </div>
                    <div className="bg-gray-800 rounded-2xl p-3 max-w-[80%]">
                      <p className="text-white text-sm">Done! Moved to tomorrow 10 AM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* iMessage mockup */}
              <div className="bg-black rounded-3xl p-4 border border-blue-500/30 shadow-2xl">
                <div className="w-64 h-96 bg-gradient-to-b from-gray-900 to-black rounded-2xl p-4">
                  <div className="text-center mb-4 pb-3 border-b border-gray-700">
                    <p className="text-white font-medium">Asmi</p>
                    <p className="text-blue-400 text-xs">iMessage</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-gray-800 rounded-2xl p-3 max-w-[80%]">
                      <p className="text-white text-sm">Hey! Quick reminder about your investor call in 30 mins</p>
                    </div>
                    <div className="bg-blue-600 rounded-2xl p-3 max-w-[80%] ml-auto">
                      <p className="text-white text-sm">What should I know?</p>
                    </div>
                    <div className="bg-gray-800 rounded-2xl p-3 max-w-[80%]">
                      <p className="text-white text-sm">Last meeting: They were interested in your Q4 metrics. I've prepared a brief...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Benefits */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl border border-green-500/20">
                <div className="flex items-center gap-4 mb-4">
                  <Smartphone className="text-green-400" size={32} />
                  <h3 className="text-2xl font-medium">No app to download</h3>
                </div>
                <p className="text-gray-300 text-lg">
                  3.2 billion people already use WhatsApp. 1 billion use iMessage. Zero friction adoption.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20">
                <div className="flex items-center gap-4 mb-4">
                  <Zap className="text-blue-400" size={32} />
                  <h3 className="text-2xl font-medium">No learning curve</h3>
                </div>
                <p className="text-gray-300 text-lg">
                  Just text or voice message like you already do. Asmi understands natural language perfectly.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20">
                <div className="flex items-center gap-4 mb-4">
                  <MessageCircle className="text-purple-400" size={32} />
                  <h3 className="text-2xl font-medium">Always accessible</h3>
                </div>
                <p className="text-gray-300 text-lg">
                  Your phone is always with you. Asmi is always one message away, context intact.
                </p>
              </div>
            </div>

            <div className="text-center p-8 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl border border-yellow-500/20">
              <p className="text-2xl font-light text-yellow-300 mb-2">
                "The best interface is no interface"
              </p>
              <p className="text-gray-400">
                — Golden Ratio Design Principle
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyPlatformSection;
