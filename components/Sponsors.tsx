import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const Sponsors = () => {
  const sponsors = [
    {
      id: 'tekz',
      displayName: 'TEK-Z',
      logo: '/tekz.png',
      title: 'Title Sponsor',
      subtitle: 'Skill Development Partner',
    },
    {
      id: 'appetite',
      displayName: 'Appetite',
      logo: '/appetite.png',
      title: 'Silver Sponsor',
      subtitle: 'Technology Partner',
    },
  ];

  return (
    <div className="border-b border-zinc-800 relative overflow-hidden">
      <Section id="sponsors" title="Our Sponsors">
        <div className="max-w-6xl mx-auto text-center py-14 md:py-20">
          {/* Section subtitle — Orbitron for headings, Poppins for body */}
          <p
            className="font-sans text-zinc-400 mb-10 text-lg"
            style={{
              // subtle gradient text for flavor — uses the fonts loaded in index.html
              background:
                'linear-gradient(90deg,#ff7a7a 0%, #ff6b6b 30%, #f97373 60%, #ff7a7a 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Proud partners powering the event.
          </p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch"
          >
            {sponsors.map((sponsor, i) => (
              <motion.div
                key={sponsor.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: i * 0.12, duration: 0.6 },
                  },
                }}
                whileHover={{ y: -6, rotate: 0.4, transition: { duration: 0.18 } }}
                whileTap={{ scale: 0.995 }}
                className="flex flex-col justify-center items-center text-center rounded-2xl border border-zinc-700/60
                           backdrop-blur-sm p-8 md:p-10 transition-all duration-200"
                style={{ background: 'transparent' }}
              >
                {/* Logo area: fixed height keeps logos aligned */}
                <div className="h-28 md:h-32 w-full flex items-center justify-center">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.displayName}
                    className="max-h-full object-contain"
                  />
                </div>

                <div className="mt-6 flex flex-col items-center gap-2">
                  {/* Sponsor Role / Title: use Orbitron (font-display) */}
                  <div className="font-display text-zinc-200 font-semibold text-lg md:text-xl tracking-tight">
                    {sponsor.title}
                  </div>

                  {/* Subtitle: use Poppins (font-sans) */}
                  <div className="font-sans text-zinc-400 text-sm md:text-base">
                    {sponsor.subtitle}
                  </div>

                  {/* Brand badge: small pill using Poppins */}
                  <motion.span
                    initial={{ opacity: 0.95, scale: 1 }}
                    animate={{ opacity: [0.95, 0.8, 0.95], scale: [1, 1.01, 1] }}
                    transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
                    className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium
                               border border-zinc-700/50 text-zinc-200 font-sans"
                    aria-hidden
                  >
                    <span
                      className="block w-2 h-2 rounded-full"
                      style={{ backgroundColor: '#fb7185' }} /* red-400 */
                    />
                    <span className="font-sans">{sponsor.displayName}</span>
                  </motion.span>
                </div>

                {/* subtle divider for balance */}
                <div className="mt-6 w-full max-w-xs">
                  <div className="h-[1px] bg-zinc-700/30 rounded-full" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* subtle red vignette behind section */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-red-500/4 to-transparent blur-3xl" />
    </div>
  );
};

export default Sponsors;
