import { motion } from "framer-motion";

interface MentorProps {
  name: string;
  role: string;
  description: string;
  linkedin: string;
}

const Mentor = ({ name, role, description, linkedin }: MentorProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="relative group bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl overflow-hidden cursor-pointer w-full max-w-lg"
    >
      {/* Mentor Image */}
      <div className="w-full h-80 flex items-center justify-center bg-black">
        <img
          src="/JacobMentor.jpeg"
          alt={name}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Basic Info */}
      <div className="p-6 text-center">
        <h3 className="text-2xl font-bold text-white">{name}</h3>
        <p className="text-red-400 font-semibold">{role}</p>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-zinc-950/95 px-6 py-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between">
        <div className="overflow-y-auto pr-2">
          <p className="text-zinc-200 text-base leading-relaxed">
            {description}
          </p>
        </div>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-500 transition"
        >
          🔗 Connect on LinkedIn
        </a>
      </div>
    </motion.div>
  );
};

export default Mentor;
