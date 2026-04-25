import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
}

const WordsPullUp: React.FC<WordsPullUpProps> = ({ text, className, showAsterisk }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const words = text.split(' ');

  return (
    <span
      ref={ref}
      className={`inline-flex flex-wrap items-baseline ${className ?? ''}`}
    >
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <motion.span
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{
              duration: 0.7,
              delay: i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative mr-[0.2em] inline-block"
          >
            {word}
            {showAsterisk && isLast && (
              <span className="absolute -right-[0.3em] top-[0.65em] text-[0.31em]">
                *
              </span>
            )}
          </motion.span>
        );
      })}
    </span>
  );
};

export default WordsPullUp;
