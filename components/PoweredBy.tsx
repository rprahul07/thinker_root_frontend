import React from 'react';

const PoweredBy = () => {
  const sponsors = [
    {
      name: 'Lenient Tree',
      logo: '/lt.svg',
      alt: 'Lenient Tree Logo',
    },
  ];

  return (
    <div className="relative z-10 flex flex-col items-center gap-6 py-10">
      <p className="text-base text-zinc-400 tracking-wide uppercase">
        Powered by
      </p>

      <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
        {sponsors.map((sponsor) => (
          <div
            key={sponsor.name}
            aria-label={sponsor.name}
            className="flex items-center justify-center transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={sponsor.logo}
              alt={sponsor.alt}
              className="h-24 w-auto sm:h-32 md:h-40 lg:h-48 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PoweredBy;
