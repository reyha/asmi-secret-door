import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

const formatNumber = (num: number) => {
  if (num % 1_000_000 === 0) return `$${num / 1_000_000}M`;
  if (num >= 1_000_000) return `$${(num / 1_000_000).toFixed(1)}M`;
  if (num >= 1_000) return `$${(num / 1_000).toFixed(1)}K`;
  return `$${num}`;
};


export const AnimatedAmount = ({ value }: { value: number }) => {
  const motionValue = useMotionValue(value);
  const spring = useSpring(motionValue, { damping: 20, stiffness: 100 });

  const formatted = useTransform(spring, (latest) =>
    formatNumber(Math.round(latest))
  );

  useEffect(() => {
    motionValue.set(value);
  }, [value]);

  return (
    <motion.span>
      {formatted}
    </motion.span>
  );
};
