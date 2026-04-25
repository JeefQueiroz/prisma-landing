import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle';

interface CardData {
  type: 'video' | 'feature';
  label?: string;
  number?: string;
  imageUrl?: string;
  items?: string[];
}

const CARDS: CardData[] = [
  { type: 'video' },
  {
    type: 'feature',
    label: 'Project Storyboard.',
    number: '01',
    imageUrl: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85',
    items: [
      'Scene-first framing and sequencing.',
      'Collaborative comments with version history.',
      'Shot tags for lenses, moods, and palettes.',
      'Export-ready boards for decks and pitches.',
    ],
  },
  {
    type: 'feature',
    label: 'Smart Critiques.',
    number: '02',
    imageUrl: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85',
    items: [
      'AI-driven breakdowns of pacing and tone.',
      'Creative notes layered on top of your edit.',
      'Hooks into your favorite NLEs and tools.',
    ],
  },
  {
    type: 'feature',
    label: 'Immersion Capsule.',
    number: '03',
    imageUrl: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85',
    items: [
      'One-tap silencing of noisy channels.',
      'Ambient soundscapes tuned to your focus.',
      'Schedule-aware session planning.',
    ],
  },
];

const FeaturesSection: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardsRef, { once: true, margin: '-100px' });

  return (
    <section className="relative min-h-screen bg-black px-4 py-16 sm:px-6 sm:py-24 md:px-10 lg:px-16">
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.15]" />
      <div className="relative z-10 mx-auto max-w-6xl">

        <div className="mb-10 space-y-1 sm:mb-14">
          <WordsPullUpMultiStyle
            segments={[{ text: 'Studio-grade workflows for visionary creators.', className: 'text-primary' }]}
            className="justify-start text-xl font-normal sm:text-2xl md:text-3xl lg:text-4xl"
          />
          <WordsPullUpMultiStyle
            segments={[{ text: 'Built for pure vision. Powered by art.', className: 'text-gray-500' }]}
            className="justify-start text-xl font-normal sm:text-2xl md:text-3xl lg:text-4xl"
          />
        </div>

        <div
          ref={cardsRef}
          className="grid gap-3 md:grid-cols-2 md:gap-2 lg:h-[480px] lg:grid-cols-4 lg:gap-1"
        >
          {CARDS.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="h-[320px] overflow-hidden rounded-2xl lg:h-full"
            >
              {card.type === 'video' ? (
                <VideoCard />
              ) : (
                <FeatureCard
                  label={card.label!}
                  number={card.number!}
                  imageUrl={card.imageUrl!}
                  items={card.items!}
                />
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

const VideoCard: React.FC = () => (
  <div className="relative flex h-full flex-col overflow-hidden rounded-2xl">
    <video
      className="absolute inset-0 h-full w-full object-cover"
      autoPlay loop muted playsInline
    >
      <source
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
        type="video/mp4"
      />
    </video>
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
    <p className="relative mt-auto p-4 text-sm sm:p-5 sm:text-base" style={{ color: '#E1E0CC' }}>
      Your creative canvas.
    </p>
  </div>
);

interface FeatureCardProps {
  label: string;
  number: string;
  imageUrl: string;
  items: string[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({ label, number, imageUrl, items }) => (
  <div className="flex h-full flex-col justify-between rounded-2xl bg-[#212121] p-5 md:p-6">
    <div>
      <div className="mb-4 flex items-start justify-between gap-2">
        <div className="flex flex-col gap-2">
          <img src={imageUrl} alt={label} className="h-10 w-10 rounded-lg object-cover sm:h-12 sm:w-12" />
          <span className="text-xs font-medium text-primary sm:text-sm">{label}</span>
        </div>
        <span className="text-xs text-primary/40">{number}</span>
      </div>
      <ul className="space-y-2 sm:space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <Check className="mt-[2px] h-3.5 w-3.5 shrink-0 text-primary sm:h-4 sm:w-4" />
            <span className="text-xs leading-snug text-gray-400 sm:text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>
    <button className="group mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-primary sm:mt-5 sm:text-sm">
      Learn more
      <span className="flex h-5 w-5 items-center justify-center rounded-full border border-primary/30 transition-all duration-200 group-hover:border-primary/80">
        <ArrowRight className="h-3 w-3 -rotate-45" />
      </span>
    </button>
  </div>
);

export default FeaturesSection;
