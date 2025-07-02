
import { MessageCircle } from 'lucide-react';

interface PhoneHeaderProps {
  isTyping: boolean;
}

const PhoneHeader = ({ isTyping }: PhoneHeaderProps) => {
  return (
    <>
      {/* Status bar */}
      <div className="bg-black px-4 py-2 flex justify-between items-center text-xs text-white/70">
        <span>9:41</span>
        <div className="flex space-x-1">
          <div className="w-4 h-2 border border-white/50 rounded-sm">
            <div className="w-3/4 h-full bg-green-400 rounded-sm"></div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-green-800/40 to-green-900/40 px-4 py-4 flex items-center space-x-3 border-b border-white/10 backdrop-blur-sm">
        <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-black font-bold text-sm">A</span>
        </div>
        <div className="flex-1">
          <h3 className="text-white font-medium text-sm">Asmi</h3>
          <div className="text-gray-400 text-xs flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Your AI Chief of Staff</span>
          </div>
        </div>
        {isTyping && (
          <div className="text-gray-400 text-xs animate-pulse">typing...</div>
        )}
      </div>
    </>
  );
};

export default PhoneHeader;
