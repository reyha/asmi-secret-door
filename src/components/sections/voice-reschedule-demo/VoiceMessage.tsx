
import { Mic } from 'lucide-react';

interface VoiceMessageProps {
  text: string;
  isRecording: boolean;
  audioWaves: number[];
  isVisible: boolean;
}

const VoiceMessage = ({ text, isRecording, audioWaves, isVisible }: VoiceMessageProps) => {
  if (!isVisible) return null;

  return (
    <div className="flex justify-end animate-slide-in-right">
      <div className="bg-gradient-to-r from-red-500/40 to-red-600/40 border border-red-400/60 px-4 py-4 rounded-2xl rounded-tr-sm max-w-xs shadow-lg backdrop-blur-sm">
        <div className="flex items-center space-x-3 mb-2">
          <Mic size={16} className={`text-red-400 ${isRecording ? 'animate-pulse' : ''}`} />
          <span className="text-red-200 text-sm font-light">{text}</span>
        </div>
        {isRecording && (
          <div className="flex items-center space-x-1 mt-3">
            {audioWaves.map((height, index) => (
              <div
                key={index}
                className="w-1 bg-red-400 rounded transition-all duration-150"
                style={{ height: `${height * 4}px` }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default VoiceMessage;
