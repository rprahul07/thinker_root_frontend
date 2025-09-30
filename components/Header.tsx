import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';



interface HeaderProps {
  onRegisterClick: () => void;
}

const Header = ({ onRegisterClick }: HeaderProps) => {
  const [registrationCount, setRegistrationCount] = useState<number>(0);

  // Fetch live registration count
  useEffect(() => {
    const fetchCount = async () => {
      const url = process.env.VITE_API_URL || "https://lenienttree.in";
      try {
        const res = await fetch(`${url}/api/applications/count`); // teammate API
        const data = await res.json();
        setRegistrationCount(data.count || 0);
      } catch (err) {
        console.error('Failed to fetch registration count', err);
      }
    };
    fetchCount();
    const interval = setInterval(fetchCount, 30000);
    return () => clearInterval(interval);
  }, []);

  // ✅ Fixed prize amounts
  const firstPrize = 5000;
  const secondPrize = 3000;
  const thirdPrize = 1000;

  return (
    <header className="relative min-h-screen flex flex-col items-center text-center px-4 overflow-hidden pt-20 md:pt-36">
      {/* Background Grid + Radial Glow */}
      <div className="absolute inset-0 w-full h-full bg-zinc-900 
        bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),
        linear-gradient(to_bottom,#80808012_1px,transparent_1px)] 
        bg-[size:14px_24px] 
        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]">
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(239,68,68,0.25),_transparent_70%)]"></div>

      {/* Hero Section */}
      <div className="relative z-10 space-y-10 flex-grow flex flex-col items-center justify-center">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter animate-gradient-text bg-gradient-to-r from-red-500 via-red-400 to-orange-400 bg-clip-text text-transparent">
          ThinkerRoot Ideathon 2025
        </h1>

        <p className="max-w-3xl mx-auto text-lg md:text-xl text-zinc-300">
          A one of a kind hackathon designed to nurture core innovation. Empowering developers,
          thinkers, and creators to build impactful solutions.
        </p>

        {/* Live Registration Count */}
        <p className="text-zinc-400 text-lg font-medium">
          🔥 {registrationCount} teams registered so far
        </p>

        {/* Button with ₹50 below */}
        <div className="flex flex-col items-center pt-4">
          <button
            onClick={onRegisterClick}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-5 px-12 
                       rounded-lg text-xl md:text-2xl transition-all duration-300 
                       transform hover:scale-105 shadow-lg shadow-red-500/20"
          >
            Register Now
          </button>
          <span className="mt-2 text-zinc-400 text-lg font-medium">₹250 per Team</span>
        </div>

        {/* Prize Pool Section */}
        <div className="mt-10 max-w-md mx-auto">
          <motion.h2
            className="text-white text-xl font-semibold mb-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Prize Pool
          </motion.h2>

          {/* Stack the prize cards vertically */}
          <div className="flex flex-col gap-4">
            <PrizeCard
              label="1st Prize"
              amount={firstPrize}
              colorFrom="from-red-500"
              colorTo="to-orange-400"
            />
            <PrizeCard
              label="2nd Prize"
              amount={secondPrize}
              colorFrom="from-orange-400"
              colorTo="to-yellow-300"
            />
            <PrizeCard
              label="3rd Prize"
              amount={thirdPrize}
              colorFrom="from-yellow-300"
              colorTo="to-green-400"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

/** 
 * A dynamic glowing card for prize pools
 */
const PrizeCard = ({
  label,
  amount,
  colorFrom,
  colorTo,
}: {
  label: string;
  amount: number;
  colorFrom: string;
  colorTo: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className={`relative rounded-xl p-4 bg-zinc-900/60 backdrop-blur-md border border-zinc-700`}
    >
      <div
        className={`absolute inset-0 rounded-xl bg-gradient-to-br ${colorFrom} ${colorTo} opacity-10 blur-xl`}
      />
      <h3 className="text-sm text-zinc-400 font-medium mb-1">{label}</h3>
      <AnimatePresence mode="wait">
        <motion.p
          key={amount}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${colorFrom} ${colorTo} bg-clip-text text-transparent`}
        >
          ₹{amount.toLocaleString('en-IN')}
        </motion.p>
      </AnimatePresence>
    </motion.div>
  );
};
