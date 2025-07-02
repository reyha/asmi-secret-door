
import { useState, useEffect } from 'react';
import { Mic } from 'lucide-react';

const VoiceRescheduleSection = () => {
  const [chatStep, setChatStep] = useState(0);
  const [isRecording, setIsRecording] = useState(false);

  const chatFlow = [
    { type: 'voice', text: 'Move Eric call to 6PM', delay: 1000 },
    { type: 'asmi', text: 'Done! Updated your calendar and sent new invite.', delay: 1500 }
  ];

  useEffect(() => {
    if (chatStep === 0) {
      setIsRecording(true);
      setTimeout(() => setIsRecording(false), 2000);
    }

    const timer = setTimeout(() => {
      if (chatStep < chatFlow.length) {
        setChatStep(prev => prev + 1);
      }
    }, chatFlow[chatStep]?.delay || 1000);

    return () => clearTimeout(timer);
  }, [chatStep]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1F1F23] via-gray-900 to-[#1F1F23] flex items-center justify-center px-4">
      <div className="max-w-sm mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Mic className={`text-red-400 mx-auto mb-4 ${isRecording ? 'animate-pulse' : ''}`} size={32} />
          <h2 className="text-[18px] text-white font-medium">Just speak. It's done.</h2>
        </div>

        {/* Phone mockup */}
        <div className="bg-black/60 backdrop-blur-sm rounded-3xl border border-[#37D67A]/20 overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="bg-[#37D67A]/20 px-4 py-3 flex items-center space-x-3 border-b border-white/10">
            <div className="w-8 h-8 bg-gradient-to-r from-[#37D67A] to-[#2DD865] rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-xs">A</span>
            </div>
            <div>
              <h3 className="text-white font-medium text-sm">Asmi</h3>
              <p className="text-gray-400 text-xs">Voice assistant</p>
            </div>
            {isRecording && (
              <div className="ml-auto">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
              </div>
            )}
          </div>

          {/* Messages */}
          <div className="p-4 space-y-4 bg-black min-h-[400px]">
            {/* Voice message */}
            {chatStep >= 0 && (
              <div className="flex justify-end animate-fade-in">
                <div className="bg-red-500/30 border border-red-400/50 px-4 py-3 rounded-2xl max-w-xs">
                  <div className="flex items-center space-x-2">
                    <Mic size={16} className={`text-red-400 ${isRecording ? 'animate-pulse' : ''}`} />
                    <span className="text-red-200 text-sm font-medium">{chatFlow[0].text}</span>
                  </div>
                  {isRecording && (
                    <div className="mt-2 flex space-x-1">
                      <div className="w-1 h-4 bg-red-400 rounded animate-pulse" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-1 h-6 bg-red-400 rounded animate-pulse" style={{ animationDelay: '100ms' }}></div>
                      <div className="w-1 h-3 bg-red-400 rounded animate-pulse" style={{ animationDelay: '200ms' }}></div>
                      <div className="w-1 h-5 bg-red-400 rounded animate-pulse" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Confirmation */}
            {chatStep >= 1 && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-[#37D67A]/20 border border-[#37D67A]/30 px-4 py-3 rounded-2xl max-w-sm">
                  <span className="text-[#37D67A] text-sm font-light">{chatFlow[1].text}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceRescheduleSection;
