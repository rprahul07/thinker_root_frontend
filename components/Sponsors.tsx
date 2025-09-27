import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const Sponsors = () => {
  return (
    <div className="border-b border-zinc-800 relative overflow-hidden">
      <Section id="sponsors" title="Our Sponsors">
        <div className="max-w-6xl mx-auto text-center py-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-zinc-200"
          >
            Coming Soon
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-zinc-400 mt-4 text-lg max-w-2xl mx-auto"
          >
            Stay tuned — we’re lining up incredible sponsors for this event.
          </motion.p>
        </div>
      </Section>

      {/* Subtle background effect */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-red-500/5 to-transparent blur-3xl" />
    </div>
  );
};

export default Sponsors;
