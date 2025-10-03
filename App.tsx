import React, { useState } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import ThemeCard from './components/ThemeCard';
import SpecialFeature from './components/SpecialFeature';
import VisionCard from './components/VisionCard';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import RegistrationModal from './components/RegistrationModal';
import AnnouncementBanner from './components/AnnouncementBanner';
import EventDetails from './components/EventDetails';
import Sponsors from './components/Sponsors';
import SuccessToast from './components/SuccessToast';
import PoweredBy from './components/PoweredBy';
import ClickSpark from './components/ClickSpark';
import ParticlesBackground from './components/ParticlesBackground';
import VolunteerModal from './components/VolunteerModal'; 
import Mentor from './components/Mentor';

import { HACKATHON_THEMES, SPECIAL_FEATURES, VISION_POINTS } from './constants';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false); // ✅ renamed

  const handleRegisterSuccess = () => {
    setIsModalOpen(false);
    setShowSuccessToast(true);
  };

  return (
    <ClickSpark sparkColor="#ef4444">
      <div className="relative bg-zinc-900 text-zinc-200 font-sans leading-relaxed overflow-x-hidden">
        <ParticlesBackground />

        <Navbar
          onRegisterClick={() => setIsModalOpen(true)}
          onCampusClick={() => setIsVolunteerModalOpen(true)} // ✅ opens volunteer modal now
        />
        <AnnouncementBanner />

        <RegistrationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSuccess={handleRegisterSuccess}
        />

        
        <VolunteerModal
          isOpen={isVolunteerModalOpen}
          onClose={() => setIsVolunteerModalOpen(false)}
          onSuccess={() => {
            setIsVolunteerModalOpen(false);
            setShowSuccessToast(true);
          }}
        />

        <SuccessToast
          isVisible={showSuccessToast}
          onDismiss={() => setShowSuccessToast(false)}
        />

        <div className="relative z-10">
          <Header onRegisterClick={() => setIsModalOpen(true)} />
          <PoweredBy />
          <Section id="mentors" title="Our Mentors">
  <div className="flex justify-center">
    <Mentor
      name="Jacob George"
      role="Technical Lead"
      description="Technical Lead with 16+ years of expertise in Microsoft technologies, solution design, and DevOps. Known for building highly available IT systems, solving complex problems, and driving innovation through clean, high-quality code. Skilled at automating release pipelines, streamlining SDLC processes, and fostering collaboration. A strong advocate of agile practices with proven ability to remove impediments, manage dependencies, and deliver impactful results."
      linkedin="https://www.linkedin.com/in/jacobgeorgea?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    />
  </div>
</Section>



          <main>
            <EventDetails />
            <Sponsors />

            <Section id="vision" title="Our Vision">
              <div className="grid md:grid-cols-3 gap-8">
                {VISION_POINTS.map((point) => (
                  <VisionCard
                    key={point.title}
                    title={point.title}
                    description={point.description}
                  />
                ))}
              </div>
            </Section>

            <Section id="themes" title="6 Groundbreaking Themes">
              <p className="max-w-4xl mx-auto text-center text-zinc-300 mb-14 text-xl md:text-2xl font-medium">
              Dive into one of our six future-forward themes. Each one is a launchpad for radical
              ideas, blending core science with frontier technology to challenge your creativity
              and push the boundaries of what's possible.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {HACKATHON_THEMES.map((theme) => (
                <ThemeCard
                key={theme.title}
                icon={theme.icon}
                title={theme.title}
                description={theme.description}
                />
              ))}
              </div>
             
            </Section>

            <Section id="special" title="What Makes ThinkerRoot Special?">
              <div className="max-w-4xl mx-auto space-y-8">
                {SPECIAL_FEATURES.map((feature) => (
                  <SpecialFeature
                    key={feature.title}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
            </Section>
          </main>

          <Footer />
        </div>
      </div>
    </ClickSpark>
  );
};

export default App;
