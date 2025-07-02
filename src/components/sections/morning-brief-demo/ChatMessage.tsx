
interface ChatMessageProps {
  type: 'user' | 'asmi';
  text: string;
  isVisible: boolean;
}

const ChatMessage = ({ type, text, isVisible }: ChatMessageProps) => {
  if (!isVisible) return null;

  if (type === 'user') {
    return (
      <div className="flex justify-end animate-slide-in-right">
        <div className="bg-gradient-to-r from-green-500 to-green-600 px-4 py-3 rounded-2xl rounded-tr-sm max-w-xs shadow-lg">
          <span className="text-white text-sm font-light">{text}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start animate-scale-in">
      <div className="bg-gray-800/90 backdrop-blur-sm px-4 py-3 rounded-2xl rounded-tl-sm text-white border border-white/10 max-w-sm shadow-lg">
        <span className="text-sm font-light">{text}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
