
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface NumberScrollerProps {
  value: number;
  formatNumber: (num: number) => string;
  className?: string;
}

const NumberScroller = ({ value, formatNumber, className = "" }: NumberScrollerProps) => {
  const [displayValue, setDisplayValue] = useState(value);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (value !== displayValue) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setDisplayValue(value);
        setIsAnimating(false);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [value, displayValue]);

  const variants = {
    enter: {
      y: 20,
      opacity: 0,
    },
    center: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: -20,
      opacity: 0,
    },
  };

  return (
    <div className={`relative inline-block ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={displayValue}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ 
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1]
          }}
          className="inline-block"
        >
          {formatNumber(displayValue)}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default NumberScroller;