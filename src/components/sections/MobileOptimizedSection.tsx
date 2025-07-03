
import { ReactNode } from 'react';

interface MobileOptimizedSectionProps {
  children: ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  maxWidth?: 'xs' | 'sm' | 'md';
}

const MobileOptimizedSection = ({ 
  children, 
  className = '', 
  padding = 'md',
  maxWidth = 'sm'
}: MobileOptimizedSectionProps) => {
  const paddingClasses = {
    sm: 'px-4 py-6',
    md: 'px-4 py-8',
    lg: 'px-6 py-12'
  };

  const maxWidthClasses = {
    xs: 'max-w-xs',
    sm: 'max-w-sm', 
    md: 'max-w-md'
  };

  return (
    <div className={`
      min-h-screen w-full bg-black text-white
      flex flex-col justify-center
      ${paddingClasses[padding]}
      ${className}
    `}>
      <div className={`${maxWidthClasses[maxWidth]} mx-auto w-full space-y-4`}>
        {children}
      </div>
    </div>
  );
};

export default MobileOptimizedSection;
