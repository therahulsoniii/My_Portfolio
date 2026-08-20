import React from 'react';
import { ArrowUpRight, Cpu, Compass, Database } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectsSection() {
  const initiatives = [
    {
      code: 'PROJECT 01',
      category: 'SPACE TECH & PROPULSION',
      title: 'Rocket Propulsion & Performance Telemetry Simulator',
      subtitle: 'Python & SQL based analytical tool for calculating thrust coefficients and fuel consumption curves.',
      image: '/spacex_launch.jpg',
      caption: 'Photo Credit: SpaceX Public Mission Archives',
      tags: ['Python', 'SQL', 'Space Systems', 'Data Analysis'],
      overview:
        'Building computational models to simulate rocket propulsion performance parameters including specific impulse, mass ratio, and trajectory flight dynamics.',
    },
    {
      code: 'PROJECT 02',
      category: 'COMPUTER SCIENCE CORE',
      title: 'High-Performance GPU Parallel Computing & DSA Engine',
      subtitle: 'Low-level C & Data Structures algorithm pipeline optimized for parallel hardware computing.',
      image: '/nvidia_gpu_silicon.jpg',
      caption: 'Photo Credit: NVIDIA Microarchitecture & Hardware Engineering',
      tags: ['C Language', 'DSA', 'DBMS', 'Operating Systems'],
      overview:
        'Implementing optimized C and Data Structure algorithms to leverage multi-threaded CPU/GPU parallel architectures and memory-mapped database systems.',
    },
    {
      code: 'PROJECT 03',
      category: 'DATA SCIENCE & AI',
      title: 'NVIDIA DGX AI Telemetry & Machine Learning Pipeline',
      subtitle: 'Data science pipeline using Pandas & Machine Learning models running on AI supercomputing clusters.',
      image: '/nvidia_ai_supercomputer.jpg',
      caption: 'Photo Credit: NVIDIA AI Supercomputing & Data Center Infrastructure',
      tags: ['Python', 'Pandas', 'Machine Learning', 'Data Analysis'],
      overview:
        'Applying machine learning models and Pandas data pipelines on high-density AI server clusters to process complex telemetry streams and detect anomalies.',
    },
  ];

  return (
    <section id="spacetech" className="spacex-section">
      <div className="section-label">03 // INITIATIVES & TECHNICAL PROJECTS</div>
      <h2 className="section-title">SPACE TECH, CSE & AI PROJECTS</h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2rem',
        }}
      >
        {initiatives.map((item) => (
          <div key={item.code} className="spacex-card" style={{ padding: '0', overflow: 'hidden' }}>
            <div
              style={{
                height: '210px',
                width: '100%',
                overflow: 'hidden',
                position: 'relative',
                background: '#000000',
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.9) contrast(1.15)',
                  transition: 'transform 0.5s ease',
                }}
                onMouseEnter={(e) => (e.target.style.transform = 'scale(1.06)')}
                onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
              />
              <div style={{ position: 'absolute', top: '12px', left: '12px' }}>
                <span className="spacex-badge spacex-badge-active">{item.code}</span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: '8px',
                  right: '12px',
                  fontFamily: 'var(--font-spacex-heading)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.1em',
                  color: 'rgba(255, 255, 255, 0.7)',
                  background: 'rgba(0, 0, 0, 0.65)',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '2px',
                }}
              >
                {item.caption}
              </div>
            </div>

            <div style={{ padding: '2rem' }}>
              <div
                style={{
                  fontFamily: 'var(--font-spacex-heading)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.2em',
                  color: 'var(--color-silver)',
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase',
                }}
              >
                {item.category}
              </div>

              <h3
                className="font-pixel"
                style={{
                  fontSize: '1.25rem',
                  color: '#ffffff',
                  marginBottom: '0.75rem',
                  letterSpacing: '0.06em',
                  lineHeight: 1.3,
                }}
              >
                {item.title}
              </h3>

              <p style={{ color: 'var(--color-silver)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                {item.overview}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {item.tags.map((tag) => (
                  <span key={tag} className="spacex-badge">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
