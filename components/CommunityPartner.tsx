import React from "react";
import { motion } from "framer-motion";

const CommunityPartner: React.FC = () => {
  return (
    <section id="community" className="py-20 text-center">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-display font-bold text-red-400 drop-shadow-lg relative inline-block pt-2 mb-12">
        Community Partner
        <span className="absolute left-1/2 bottom-[-1.5rem] w-28 h-1 bg-red-400 -translate-x-1/2 rounded-full"></span>
      </h2>

      {/* Partner Logo */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
        className="flex justify-center"
      >
        <img
          src="/cucek.png"
          alt="CUCEK Community Partner"
          className="w-[36rem] md:w-[40rem] lg:w-[44rem] object-contain -translate-x-10"
        />
      </motion.div>
    </section>
  );
};

export default CommunityPartner;
