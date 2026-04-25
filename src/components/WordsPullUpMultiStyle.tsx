import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Segment {
  text: string;
  className?: string;
}

interface Props {
  segments: Segment[];
  className?: string;
}

const WordsPullUpMultiStyle: React.FC<Props> = ({ segments, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  type WordItem = { word: string; className?: string; key: string };
  const allWords: WordItem[] = [];

  segments.forEach((seg, si) => {
    seg.text.split(' ').forEach((w, wi) => {
      allWords.push({ word: w, className: seg.className, key: `${si}-${wi}` });
    });
  });

  return (
    <div
      ref={ref}
      className={`inline-flex flex-wrap justify-center gap-x-[0.22em] ${className ?? ''}`}
    >
      {allWords.map((item, index) => (
        <motion.span
          key={item.key}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{
            duration: 0.7,
            delay: index * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`inline-block ${item.className ?? ''}`}
        >
          {item.word}
        </motion.span>
      ))}
    </div>
  );
};

export default WordsPullUpMultiStyle;
