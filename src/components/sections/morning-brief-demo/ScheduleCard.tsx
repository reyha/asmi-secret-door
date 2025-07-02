
import { Calendar, User } from 'lucide-react';

interface ScheduleItem {
  icon: typeof Calendar;
  text: string;
  color: string;
}

interface ScheduleCardProps {
  items: ScheduleItem[];
  isVisible: boolean;
}

const ScheduleCard = ({ items, isVisible }: ScheduleCardProps) => {
  if (!isVisible) return null;

  return (
    <div className="flex justify-start animate-scale-in">
      <div className="bg-blue-900/40 backdrop-blur-sm px-4 py-4 rounded-2xl text-white border border-blue-400/30 max-w-sm shadow-lg">
        <div className="space-y-3">
          {items.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="flex items-center space-x-3">
                <div className="p-1.5 rounded-lg bg-black/30">
                  <IconComponent size={14} className={item.color} />
                </div>
                <span className="text-sm font-light text-white">{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ScheduleCard;
