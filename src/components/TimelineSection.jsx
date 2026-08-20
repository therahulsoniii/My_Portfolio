import React, { useState } from 'react';
import { Orbit, CheckCircle2, ChevronRight, Award, Layers } from 'lucide-react';
import { audioEngine } from '../utils/AudioEngine';

export default function TimelineSection() {
  const [activeNode, setActiveNode] = useState(0);

  const milestones = [
    {
      epoch: '2024 — PRESENT',
      station: 'STATION 04 // LUNAR GATEWAY',
      role: 'Lead Orbital Software Architect',
      org: 'Astra Lunar Dynamics & Spacecraft Systems',
      description:
        'Architected real-time mission-critical telemetry streaming pipelines handling 50,000+ sensor data events/sec with sub-10ms WebGL visual latency. Led a cross-functional team of 12 aerospace developers.',
      achievements: [
        'Built WebGL 3D digital twin of satellite constellation telemetry',
        'Reduced telemetry streaming payload size by 64% using binary WebSockets',
        'Engineered zero-downtime microservices for launch command dispatch',
      ],
      tags: ['React', 'Three.js', 'Go', 'WebSockets', 'Kubernetes'],
    },
    {
      epoch: '2022 — 2024',
      station: 'STATION 03 // NEBULA DOCKING PORT',
      role: 'Senior Full-Stack Space Systems Engineer',
      org: 'Nebula Aerospace Software',
      description:
        'Developed cloud-native rocket flight tracking software and web telemetry dashboards for satellite launch vehicles. Integrated computer vision tracking for booster landing recovery.',
      achievements: [
        'Designed interactive flight trajectory analytics dashboard',
        'Optimized WebGL renderer performance to maintain 60 FPS under 100k data points',
        'Integrated automated failover redundancy for Ground Control CLI',
      ],
      tags: ['TypeScript', 'WebGL', 'Node.js', 'Python', 'Docker'],
    },
    {
      epoch: '2020 — 2022',
      station: 'STATION 02 // SOLAR CRAFT HUB',
      role: 'Creative WebGL & 3D Simulation Developer',
      org: 'SolarCraft Graphics & Simulation Labs',
      description:
        'Crafted high-fidelity 3D WebGL solar system simulators, orbital mechanics visualizers, and interactive user interfaces for aerospace clients.',
      achievements: [
        'Rendered 3D planetary physics engine with accurate gravitational n-body calculations',
        'Won 2021 Creative Web Design Award for Interactive Space Experience',
      ],
      tags: ['JavaScript', 'Three.js', 'GLSL Shaders', 'CSS3', 'WebAudio'],
    },
    {
      epoch: '2016 — 2020',
      station: 'STATION 01 // BASE ACADEMY',
      role: 'B.S. Computer Science & Aerospace Systems',
      org: 'MIT / Space Technology Institute',
      description:
        'Graduated Magna Cum Laude. Focused on distributed algorithms, computer graphics, linear algebra, and orbital mechanics.',
      achievements: [
        'Lead Programmer for MIT CubeSat Autonomous Navigation Project',
        'Published research paper on real-time WebGL rendering optimization',
      ],
      tags: ['C++', 'Python', 'Algorithms', 'Linear Algebra', 'OpenGL'],
    },
  ];

  return (
    <section id="trajectory" className="space-section">
      <div className="section-header">
        <div className="section-subtitle">FLIGHT LOG // CAREER PROGRESSION</div>
        <h2 className="section-title">ORBITAL TRAJECTORY</h2>
        <p style={{ color: 'var(--color-text-dim)', maxWidth: '600px', margin: '0.5rem auto 0' }}>
          Explore key milestones, space station deployments, and mission accomplishments.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'start',
        }}
      >
        {/* Timeline Node List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {milestones.map((item, index) => {
            const isSelected = activeNode === index;
            return (
              <div
                key={index}
                onClick={() => {
                  setActiveNode(index);
                  audioEngine.playClick();
                }}
                className={isSelected ? 'glass-panel' : 'glass-panel'}
                style={{
                  padding: '1.5rem',
                  cursor: 'pointer',
                  borderColor: isSelected ? 'var(--color-cyan)' : 'rgba(255, 255, 255, 0.08)',
                  background: isSelected ? 'rgba(0, 243, 255, 0.08)' : 'rgba(11, 17, 36, 0.5)',
                  transform: isSelected ? 'translateX(8px)' : 'none',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.5rem',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-code)',
                      fontSize: '0.8rem',
                      color: isSelected ? 'var(--color-cyan)' : 'var(--color-purple)',
                      fontWeight: 700,
                    }}
                  >
                    {item.epoch}
                  </div>
                  <div className="space-badge">{item.station}</div>
                </div>

                <h3
                  style={{
                    fontSize: '1.15rem',
                    color: '#ffffff',
                    marginBottom: '0.25rem',
                  }}
                >
                  {item.role}
                </h3>
                <div style={{ fontSize: '0.9rem', color: '#94a3b8', fontFamily: 'var(--font-subheading)' }}>
                  {item.org}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Milestone Detail Console */}
        <div className="glass-panel" style={{ padding: '2.25rem', position: 'relative' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              borderBottom: '1px solid rgba(0, 243, 255, 0.2)',
              paddingBottom: '1rem',
              marginBottom: '1.5rem',
            }}
          >
            <Orbit size={24} color="var(--color-cyan)" className="animate-radar" />
            <div>
              <div style={{ fontFamily: 'var(--font-code)', fontSize: '0.75rem', color: 'var(--color-cyan)' }}>
                DOCKING TELEMETRY // DEPLOYMENT DETAILS
              </div>
              <h3 style={{ fontSize: '1.3rem', color: '#fff' }}>{milestones[activeNode].role}</h3>
            </div>
          </div>

          <p style={{ color: '#cbd5e1', marginBottom: '1.5rem', fontSize: '1rem', lineHeight: 1.7 }}>
            {milestones[activeNode].description}
          </p>

          <h4
            style={{
              fontSize: '0.9rem',
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-purple)',
              marginBottom: '0.75rem',
              letterSpacing: '0.08em',
            }}
          >
            KEY MISSION ACHIEVEMENTS
          </h4>

          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
            {milestones[activeNode].achievements.map((ach, idx) => (
              <li
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.6rem',
                  color: '#e2e8f0',
                  fontSize: '0.95rem',
                }}
              >
                <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <span>{ach}</span>
              </li>
            ))}
          </ul>

          <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '1.25rem' }}>
            <div
              style={{
                fontFamily: 'var(--font-code)',
                fontSize: '0.75rem',
                color: '#94a3b8',
                marginBottom: '0.5rem',
              }}
            >
              DEPLOYED TECH STACK
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {milestones[activeNode].tags.map((tag) => (
                <span key={tag} className="space-badge-purple">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
