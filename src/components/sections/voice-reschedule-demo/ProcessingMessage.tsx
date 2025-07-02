
import { CheckCircle } from 'lucide-react';

interface ProcessingMessageProps {
  type: 'processing' | 'confirmation';
  text: string;
  isVisible: boolean;
}

const ProcessingMessage = ({ type, text, isVisible }: ProcessingMessageProps) => {
  if (!isVisible) return null;

  if (type === 'processing') {
    return (
      <div className="flex justify-start animate-scale-in">
        <div className="bg-blue-900/40 backdrop-blur-sm px-4 py-3 rounded-2xl rounded-tl-sm max-w-xs border border-blue-400/30 shadow-lg">
          <div className="flex items-center space-x-2 mb-1">
            <div className="w-3 h-3 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-blue-400 text-xs font-medium">Processing</span>
          </div>
          <span className="text-blue-200 text-sm font-light">{text}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start animate-scale-in">
      <div className="bg-gradient-to-r from-green-500/30 to-green-600/30 border border-green-400/40 px-4 py-3 rounded-2xl rounded-tl-sm max-w-xs shadow-lg backdrop-blur-sm">
        <div className="flex items-center space-x-2 mb-2">
          <CheckCircle size={14} className="text-green-400" />
          <span className="text-green-400 text-xs font-medium">Success</span>
        </div>
        <span className="text-green-200 text-sm font-light">{text}</span>
      </div>
    </div>
  );
};

export default ProcessingMessage;
