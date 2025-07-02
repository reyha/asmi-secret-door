
interface PhoneStatusBarProps {
  isRecording: boolean;
}

const PhoneStatusBar = ({ isRecording }: PhoneStatusBarProps) => {
  return (
    <div className="bg-black px-4 py-2 flex justify-between items-center text-xs text-white/70">
      <span>2:47</span>
      <div className="flex items-center space-x-2">
        {isRecording && (
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
            <span className="text-red-400 text-xs">Recording</span>
          </div>
        )}
        <div className="w-4 h-2 border border-white/50 rounded-sm">
          <div className="w-2/3 h-full bg-yellow-400 rounded-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default PhoneStatusBar;
