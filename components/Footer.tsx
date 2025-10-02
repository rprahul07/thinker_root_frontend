import React from 'react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Twitter',
      href: 'https://x.com/lenienttree?t=sN7GtWPsYsa_lY2LIPMcUA&s=09',
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/lenient-tree/',
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 114.75 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93-.8 0-1.22.52-1.42 1.02-.08.18-.1.42-.1.66V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.28.93 3.28 4.63z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/lenient_tree?igsh=ZmV4ajVlNGhhNW52',
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.75 2.25a.75.75 0 110 1.5.75.75 0 010-1.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
        </svg>
      ),
    },
  ];

  const quickLinks = [
    { href: '#vision', label: 'Vision' },
    { href: '#themes', label: 'Themes' },
    { href: '#special', label: 'Features' },
  ];

  const contactDetails = {
    phone: '+91 8590944049',
    email: 'augustinevadakumchery@lenienttree.com',
    whatsapp: 'https://chat.whatsapp.com/GGvb6PcSbxDGQgI3K0L5bI?mode=ems_copy_t',
  };

  return (
    <footer className="relative border-t border-zinc-800 mt-20 pt-16 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-zinc-900 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Branding */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#" className="font-display text-2xl font-bold text-white">
              Thinker<span className="text-red-500">Root</span>
            </a>
            <p className="mt-2 text-zinc-400 text-sm max-w-xs">
              Nurturing Core Innovation for a Better Tomorrow.
            </p>
          </div>

          {/* Column 2: Quick Links & Contact */}
          <div className="text-center">
            <h3 className="font-display text-lg font-semibold text-zinc-200 tracking-wider">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-red-500 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact Details Inline */}
            <div className="mt-6 text-zinc-400 space-y-1">
              <p className="flex justify-center md:justify-start items-center space-x-2">
                <strong>Phone:</strong>
                <a
                  href={`tel:${contactDetails.phone}`}
                  className="hover:text-red-500 transition-colors duration-300"
                >
                  {contactDetails.phone}
                </a>
              </p>
              <p className="flex justify-center md:justify-start items-center space-x-2">
                <strong>Email:</strong>
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="hover:text-red-500 transition-colors duration-300"
                >
                  {contactDetails.email}
                </a>
              </p>
              <p className="flex justify-center md:justify-start items-center space-x-2">
                <strong>WhatsApp:</strong>
                <a
                  href={contactDetails.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500 transition-colors duration-300"
                >
                  Join Our Group
                </a>
              </p>
            </div>
          </div>

          {/* Column 3: Social Links */}
          <div className="text-center md:text-right">
            <h3 className="font-display text-lg font-semibold text-zinc-200 tracking-wider">
              Connect With Us
            </h3>
            <div className="flex justify-center md:justify-end space-x-6 mt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-red-500 transform hover:-translate-y-1 transition-all duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-800 pt-8 text-center text-zinc-500 text-sm">
          <p>&copy; {new Date().getFullYear()} ThinkerRoot Ideathon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
