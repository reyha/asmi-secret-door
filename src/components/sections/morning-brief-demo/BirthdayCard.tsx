
import { Gift } from 'lucide-react';

interface BirthdayCardProps {
  text: string;
  isVisible: boolean;
}

const BirthdayCard = ({ text, isVisible }: BirthdayCardProps) => {
  if (!isVisible) return null;

  return (
    <div className="flex justify-start animate-scale-in">
      <div className="bg-gradient-to-r from-red-900/40 to-pink-900/40 border border-red-400/40 px-4 py-3 rounded-2xl max-w-sm shadow-lg backdrop-blur-sm">
        <div className="flex items-center space-x-2 mb-2">
          <Gift size={14} className="text-red-400" />
          <span className="text-red-400 text-xs font-medium">Birthday Reminder</span>
        </div>
        <span className="text-red-200 text-sm font-light">{text}</span>
      </div>
    </div>
  );
};

export default BirthdayCard;
