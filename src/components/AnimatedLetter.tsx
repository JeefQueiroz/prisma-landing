import React from 'react';
import { motion, useTransform, MotionValue } from 'framer-motion';

interface Props {
  char: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}

const AnimatedLetter: React.FC<Props> = ({ char, index, total, scrollYProgress }) => {
  const charProgress = index / total;
  const start = Math.max(charProgress - 0.1, 0);
  const end = Math.min(charProgress + 0.05, 1);
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

  return (
    <motion.span style={{ opacity }} className="inline-block">
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  );
};

export default AnimatedLetter;
