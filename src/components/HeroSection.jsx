import React from 'react';
import { ArrowDown, Mail, MapPin, GraduationCap, Award } from 'lucide-react';
import { LinkedinIcon } from './SocialIcons';

export default function HeroSection() {
  return (
    <section
      id="overview"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '8rem',
        paddingBottom: '4rem',
        position: 'relative',
        zIndex: 10,
      }}
      className="spacex-section"
    >
      <div style={{ maxWidth: '1000px' }}>
        {/* Category Label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <span className="spacex-badge spacex-badge-active">
            B.TECH CSE (AI & DATA SCIENCE)
          </span>
          <span className="spacex-badge">
            SPACE TECHNOLOGY & ORBITAL MECHANICS
          </span>
        </div>

        {/* Main Name */}
        <h1
          className="font-pixel"
          style={{
            fontSize: 'clamp(3rem, 7vw, 5.5rem)',
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '0.06em',
            color: '#ffffff',
            marginBottom: '1rem',
            textTransform: 'uppercase',
          }}
        >
          RAHUL SONI
        </h1>

        {/* Subtitle */}
        <h2
          style={{
            fontFamily: 'var(--font-spacex-heading)',
            fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
            fontWeight: 600,
            color: 'var(--color-silver)',
            letterSpacing: '0.18em',
            marginBottom: '2rem',
            textTransform: 'uppercase',
          }}
        >
          SOFTWARE ENGINEERING • DATA SCIENCE • SPACE SYSTEMS
        </h2>

        {/* Summary Paragraph */}
        <p
          style={{
            fontSize: '1.15rem',
            color: 'var(--color-silver)',
            maxWidth: '750px',
            marginBottom: '3rem',
            lineHeight: 1.75,
            fontWeight: 400,
          }}
        >
          Computer Science Engineering student specializing in Artificial Intelligence and Data Science with a strong foundation in Python, C, SQL, and database systems. Passionate about software engineering, data science, and space technology. Currently expanding knowledge in rocket propulsion, orbital mechanics, and space systems.
        </p>

        {/* Primary Action Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '4rem' }}>
          <a href="#capabilities" className="btn-spacex">
            EXPLORE CAPABILITIES
          </a>
          <a href="#contact" className="btn-spacex-secondary">
            CONTACT RELAY
          </a>
        </div>
      </div>

      {/* Telemetry Metric Bar */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.15)',
          paddingTop: '2rem',
        }}
      >
        <div>
          <div style={{ fontFamily: 'var(--font-spacex-heading)', fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--color-silver)', marginBottom: '0.3rem' }}>
            INSTITUTION
          </div>
          <div style={{ fontFamily: 'var(--font-spacex-heading)', fontSize: '1.1rem', fontWeight: 700, color: '#fff', letterSpacing: '0.08em' }}>
            LOVELY PROFESSIONAL UNIVERSITY
          </div>
        </div>

        <div>
          <div style={{ fontFamily: 'var(--font-spacex-heading)', fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--color-silver)', marginBottom: '0.3rem' }}>
            DEGREE & SPECIALIZATION
          </div>
          <div style={{ fontFamily: 'var(--font-spacex-heading)', fontSize: '1.1rem', fontWeight: 700, color: '#fff', letterSpacing: '0.08em' }}>
            B.TECH CSE (AI & DATA SCIENCE)
          </div>
        </div>

        <div>
          <div style={{ fontFamily: 'var(--font-spacex-heading)', fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--color-silver)', marginBottom: '0.3rem' }}>
            GRADUATION TIMELINE
          </div>
          <div style={{ fontFamily: 'var(--font-spacex-heading)', fontSize: '1.1rem', fontWeight: 700, color: '#fff', letterSpacing: '0.08em' }}>
            08/2025 – 06/2029 (EXPECTED)
          </div>
        </div>

        <div>
          <div style={{ fontFamily: 'var(--font-spacex-heading)', fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--color-silver)', marginBottom: '0.3rem' }}>
            NATIONALITY
          </div>
          <div style={{ fontFamily: 'var(--font-spacex-heading)', fontSize: '1.1rem', fontWeight: 700, color: '#fff', letterSpacing: '0.08em' }}>
            INDIAN
          </div>
        </div>
      </div>
    </section>
  );
}
