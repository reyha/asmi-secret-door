
import { useState, useEffect } from 'react';
import { Mic } from 'lucide-react';

const VoiceRescheduleSection = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [showResponse, setShowResponse] = useState(false);

  useEffect(() => {
    const sequence = async () => {
      // Start recording
      setTimeout(() => setIsRecording(true), 1000);
      // Stop recording and show response
      setTimeout(() => {
        setIsRecording(false);
        setShowResponse(true);
      }, 3000);
      // Reset
      setTimeout(() => {
        setShowResponse(false);
      }, 6000);
    };

    sequence();
    const interval = setInterval(sequence, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#1F1F23] flex flex-col items-center justify-center px-4 relative">
      <div className="text-center max-w-sm mx-auto">
        <h1 className="text-[28px] font-bold text-white mb-8">
          Just speak. It's done.
        </h1>

        <div className="bg-black/40 backdrop-blur-sm rounded-3xl border border-white/10 p-4">
          <div className="flex items-center space-x-3 mb-4 pb-3 border-b border-white/10">
            <div className="w-8 h-8 bg-gradient-to-r from-[#37D67A] to-green-500 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-xs">A</span>
            </div>
            <div>
              <p className="text-white font-medium text-sm">Asmi</p>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-[#37D67A] rounded-full animate-pulse" />
                <span className="text-gray-400 text-xs">Listening</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 min-h-[200px] flex flex-col justify-center">
            {/* Voice interface */}
            <div className="flex flex-col items-center space-y-4">
              {/* Voice button */}
              <div className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
                isRecording 
                  ? 'bg-red-500 animate-pulse scale-110' 
                  : 'bg-[#37D67A] hover:scale-110'
              }`}>
                <Mic size={32} className={isRecording ? 'text-white' : 'text-black'} />
              </div>

              {/* Recording indicator */}
              {isRecording && (
                <div className="animate-fade-in">
                  <p className="text-white text-sm">🎤 "Move my 3 PM call to 4 PM"</p>
                  <div className="flex justify-center space-x-1 mt-2">
                    <div className="w-1 h-4 bg-[#37D67A] animate-bounce" />
                    <div className="w-1 h-4 bg-[#37D67A] animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <div className="w-1 h-4 bg-[#37D67A] animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <div className="w-1 h-4 bg-[#37D67A] animate-bounce" style={{ animationDelay: '0.3s' }} />
                  </div>
                </div>
              )}

              {/* Response */}
              {showResponse && (
                <div className="animate-fade-in text-center">
                  <div className="bg-gray-700 px-4 py-3 rounded-2xl max-w-[250px]">
                    <p className="text-white text-sm">
                      ✅ Done! Moved your call with Sarah to 4 PM. 
                      Calendar updated and Sarah has been notified.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceRescheduleSection;
