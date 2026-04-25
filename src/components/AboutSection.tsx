import React, { useRef } from 'react';
import { useScroll } from 'framer-motion';
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle';
import AnimatedLetter from './AnimatedLetter';

const BODY_TEXT =
  'Over the last seven years, I have worked with Parallax, a Berlin-based production house that crafts cinema, series, and Noir Studio in Paris. Together, we have created work that has earned international acclaim at several major festivals.';

const AboutSection: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = BODY_TEXT.split('');

  return (
    <section className="bg-black px-4 py-16 sm:px-6 sm:py-24 md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl rounded-3xl bg-[#101010] px-5 py-10 text-center sm:px-8 sm:py-14 md:px-16 md:py-20">

        <p className="mb-6 text-[10px] uppercase tracking-[0.25em] text-primary sm:text-xs">
          Visual arts
        </p>

        <div className="mx-auto max-w-3xl leading-[0.95] sm:leading-[0.9]">
          <WordsPullUpMultiStyle
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            segments={[
              { text: 'I am Marcus Chen,', className: 'font-normal text-primary' },
              { text: 'a self-taught director.', className: 'font-serif italic text-primary' },
              { text: 'I have skills in color grading, visual effects, and narrative design.', className: 'font-normal text-primary' },
            ]}
          />
        </div>

        <div
          ref={textRef}
          className="mx-auto mt-8 max-w-2xl text-left text-xs sm:text-sm md:text-base"
          style={{ color: '#DEDBC8' }}
        >
          {chars.map((ch, i) => (
            <AnimatedLetter
              key={i}
              char={ch}
              index={i}
              total={chars.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
