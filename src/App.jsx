import React from 'react';
import StarfieldCanvas from './components/StarfieldCanvas';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#000000' }}>
      {/* SpaceX Subtle WebGL Background */}
      <StarfieldCanvas />

      {/* SpaceX Minimal Header */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <HeroSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
