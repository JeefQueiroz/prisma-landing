import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import WordsPullUp from './WordsPullUp';

const NAV_ITEMS = ['Our story', 'Collective', 'Workshops', 'Programs', 'Inquiries'];

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full bg-black p-4 md:p-6">
      <div className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-[2rem]">

        {/* Video */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay loop muted playsInline
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
            type="video/mp4"
          />
        </video>

        {/* Noise overlay */}
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />

        {/* Gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        {/* Navbar */}
        <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2">
          <nav className="inline-flex items-center rounded-b-2xl bg-black px-4 py-2 md:rounded-b-3xl md:px-8">
            <ul className="flex items-center gap-3 text-[10px] sm:gap-6 sm:text-xs md:gap-12 md:text-sm lg:gap-14">
              {NAV_ITEMS.map((item) => (
                <li key={item}>
                  <button
                    style={{ color: 'rgba(225,224,204,0.8)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#E1E0CC')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(225,224,204,0.8)')}
                    className="transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-4 pb-6 sm:px-6 sm:pb-10 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-12">

            <div className="md:col-span-8">
              <WordsPullUp
                text="Prisma"
                showAsterisk
                className="block font-medium leading-[0.85] tracking-[-0.07em] text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw]"
              />
            </div>

            <div className="space-y-4 pb-1 md:col-span-4 sm:space-y-6">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs sm:text-sm md:text-base"
                style={{ color: 'rgba(225,224,204,0.7)', lineHeight: 1.2 }}
              >
                Prisma is a worldwide network of visual artists, filmmakers and
                storytellers bound not by place, status or labels but by passion
                and hunger to unlock potential through our unique perspectives.
              </motion.p>

              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group inline-flex items-center gap-2 rounded-full bg-primary py-2 pl-5 pr-2 text-sm font-medium text-black sm:text-base hover:gap-3 transition-all duration-300"
              >
                Join the lab
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black sm:h-10 sm:w-10 transition-transform duration-300 group-hover:scale-110">
                  <ArrowRight className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                </span>
              </motion.button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
