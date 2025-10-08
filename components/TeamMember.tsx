import React from 'react';
import { Linkedin, Github } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  description?: string;
  image: string;
  linkedin?: string;
  github?: string;
  position?: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  description,
  image,
  linkedin,
  github,
  position = 0,
}) => {
  // Anand (position 1) has the face shifted further up
  const imageTransform = position === 1 ? 'object-[center_50%]' : 'object-top';

  return (
    <div className="bg-zinc-800/70 border border-zinc-700 rounded-2xl overflow-hidden shadow-md hover:shadow-red-500/20 transition-all duration-300 hover:scale-105 backdrop-blur-md">
      {/* Image container */}
      <div className="relative w-full h-56 md:h-60 lg:h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-cover ${imageTransform} rounded-t-2xl transform hover:scale-110 transition-transform duration-500`}
        />
        {/* Gradient overlay for hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 via-transparent to-transparent"></div>
      </div>

      {/* Text content */}
      <div className="p-5 text-center">
        <h3 className="text-lg md:text-xl font-semibold text-white tracking-wide">{name}</h3>
        <p className="text-sm md:text-base text-rose-400 font-medium mb-2">{role}</p>

        {description && (
          <p className="text-zinc-300 text-sm md:text-[15px] leading-relaxed">{description}</p>
        )}

        <div className="mt-4 flex justify-center space-x-6">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 transition-colors"
              aria-label={`${name}'s LinkedIn`}
            >
              <Linkedin size={22} />
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-200 transition-colors"
              aria-label={`${name}'s GitHub`}
            >
              <Github size={22} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
