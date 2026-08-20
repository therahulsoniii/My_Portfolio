import React from 'react';
import { GraduationCap, BookOpen, Rocket, CheckCircle2 } from 'lucide-react';

export default function EducationSection() {
  const coursework = [
    'Programming in C',
    'Python Development',
    'Database Management Systems (DBMS)',
    'Data Structures & Algorithms (Learning)',
    'Object-Oriented Programming (Learning)',
  ];

  const focusAreas = [
    'Software Engineering',
    'Data Science & AI',
    'Machine Learning',
    'Space Technology',
    'Rocket Propulsion',
    'Orbital Mechanics',
  ];

  return (
    <section id="education" className="spacex-section">
      <div className="section-label">01 // ACADEMIC PROFILE</div>
      <h2 className="section-title">EDUCATION & SPECIALIZATION</h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2.5rem',
        }}
      >
        {/* Main Education Card */}
        <div className="spacex-card" style={{ padding: '2.5rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1rem',
            }}
          >
            <span className="spacex-badge spacex-badge-active">
              08/2025 – 06/2029 (EXPECTED)
            </span>
            <span style={{ fontFamily: 'var(--font-spacex-heading)', fontSize: '0.85rem', color: 'var(--color-silver)' }}>
              NATIONALITY: INDIAN
            </span>
          </div>

          <h3
            style={{
              fontSize: '1.6rem',
              color: '#ffffff',
              marginBottom: '0.5rem',
              letterSpacing: '0.12em',
            }}
          >
            BACHELOR OF TECHNOLOGY (B.TECH.)
          </h3>
          <div
            style={{
              fontFamily: 'var(--font-spacex-heading)',
              fontSize: '1.15rem',
              color: 'var(--color-silver)',
              letterSpacing: '0.1em',
              marginBottom: '1.5rem',
            }}
          >
            COMPUTER SCIENCE AND ENGINEERING
          </div>

          <div
            style={{
              borderLeft: '2px solid #ffffff',
              paddingLeft: '1.25rem',
              marginBottom: '1.75rem',
            }}
          >
            <div style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fff' }}>
              Lovely Professional University (LPU)
            </div>
            <div style={{ fontSize: '0.95rem', color: 'var(--color-silver)', marginTop: '0.25rem' }}>
              Specialization in Artificial Intelligence & Data Science
            </div>
          </div>

          <p style={{ color: 'var(--color-silver)', fontSize: '0.95rem', lineHeight: 1.7 }}>
            Pursuing a rigorous engineering curriculum combining core computer science fundamentals with advanced topics in AI, Data Science, and Space Systems Engineering.
          </p>
        </div>

        {/* Coursework & Technical Interests Spec */}
        <div className="spacex-card" style={{ padding: '2.5rem' }}>
          <h4
            style={{
              fontFamily: 'var(--font-spacex-heading)',
              fontSize: '1.1rem',
              color: '#ffffff',
              letterSpacing: '0.18em',
              marginBottom: '1rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
              paddingBottom: '0.75rem',
            }}
          >
            RELEVANT ACADEMIC COURSEWORK
          </h4>

          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
            {coursework.map((course, idx) => (
              <li
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: 'var(--color-silver)',
                  fontSize: '0.95rem',
                }}
              >
                <span style={{ width: '6px', height: '6px', background: '#ffffff', borderRadius: '50%' }} />
                <span>{course}</span>
              </li>
            ))}
          </ul>

          <h4
            style={{
              fontFamily: 'var(--font-spacex-heading)',
              fontSize: '1.1rem',
              color: '#ffffff',
              letterSpacing: '0.18em',
              marginBottom: '1rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
              paddingBottom: '0.75rem',
            }}
          >
            CORE AREAS OF INTEREST
          </h4>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {focusAreas.map((area, idx) => (
              <span key={idx} className="spacex-badge">
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
