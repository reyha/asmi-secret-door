
import { ReactNode } from 'react';

interface MobileOptimizedSectionProps {
  children: ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
}

const MobileOptimizedSection = ({ 
  children, 
  className = '', 
  padding = 'md' 
}: MobileOptimizedSectionProps) => {
  const paddingClasses = {
    sm: 'px-4 py-6',
    md: 'px-6 py-8',
    lg: 'px-8 py-12'
  };

  return (
    <div className={`
      min-h-screen w-full bg-black text-white
      flex flex-col justify-center
      ${paddingClasses[padding]}
      ${className}
    `}>
      <div className="max-w-sm mx-auto w-full space-y-6">
        {children}
      </div>
    </div>
  );
};

export default MobileOptimizedSection;
