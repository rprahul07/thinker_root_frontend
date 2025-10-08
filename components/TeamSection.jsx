import React from 'react';
import TeamMember from './TeamMember';

const TEAM_MEMBERS = [
  {
    name: 'Akku',
    role: 'UI-UX DESIGNER',
    image: '/Akku.jpg',
    linkedin: 'https://linkedin.com/in/king-akku-4-u',
  },
  {
    name: 'Anand',
    role: 'FRONTEND DEVELOPER',
    image: '/anand.jpg',
    linkedin: 'https://linkedin.com/in/anandbobba',
  },
  {
    name: 'Rahul',
    role: 'Backend Developer',
    image: '/Rahul.png',
    linkedin: 'https://linkedin.com/in/rahulrp07',
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-zinc-900 relative overflow-hidden border-b border-zinc-800">
      {/* Soft background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(239,68,68,0.15),_transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
 <div className="flex justify-center items-center mb-14">
  <h2 className="text-4xl md:text-5xl font-display font-bold text-red-400 drop-shadow-lg relative inline-block pt-2">
    Meet Our Team
    <span className="absolute left-1/2 bottom-[-0.9rem] w-24 h-1 bg-red-400 -translate-x-1/2 rounded-full"></span>
  </h2>
</div>



        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {TEAM_MEMBERS.map((member, index) => (
            // Pass position to only Anand (index 1)
            <TeamMember key={member.name} {...member} position={index === 1 ? 1 : 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
