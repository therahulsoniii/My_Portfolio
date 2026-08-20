import React from 'react';
import { Code, Database, Rocket, Cpu, Wrench } from 'lucide-react';

export default function SkillsSection() {
  const skillCategories = [
    {
      code: 'SPEC 01',
      title: 'PROGRAMMING LANGUAGES',
      icon: Code,
      items: [
        { name: 'Python', status: 'Core / Primary' },
        { name: 'C Language', status: 'Core Systems' },
        { name: 'SQL', status: 'Database Queries' },
      ],
    },
    {
      code: 'SPEC 02',
      title: 'DATA SCIENCE & AI',
      icon: Database,
      items: [
        { name: 'Data Analysis', status: 'Proficient' },
        { name: 'Machine Learning', status: 'Core Focus' },
        { name: 'Pandas Framework', status: 'Proficient' },
        { name: 'NumPy Library', status: 'Currently Learning' },
      ],
    },
    {
      code: 'SPEC 03',
      title: 'SPACE TECHNOLOGY',
      icon: Rocket,
      items: [
        { name: 'Rocket Propulsion', status: 'Primary Area of Interest' },
        { name: 'Orbital Mechanics', status: 'Primary Area of Interest' },
        { name: 'Space Systems', status: 'Currently Learning' },
      ],
    },
    {
      code: 'SPEC 04',
      title: 'COMPUTER SCIENCE CORE',
      icon: Cpu,
      items: [
        { name: 'Database Management (DBMS)', status: 'Proficient' },
        { name: 'Data Structures & Algorithms (DSA)', status: 'Currently Learning' },
        { name: 'Object-Oriented Programming (OOPs)', status: 'Currently Learning' },
        { name: 'Operating Systems', status: 'Currently Learning' },
      ],
    },
    {
      code: 'SPEC 05',
      title: 'TOOLS & ENVIRONMENT',
      icon: Wrench,
      items: [
        { name: 'Git & GitHub', status: 'Version Control' },
        { name: 'VS Code', status: 'Primary IDE' },
        { name: 'Linux OS', status: 'Development Environment' },
      ],
    },
  ];

  return (
    <section id="capabilities" className="spacex-section">
      <div className="section-label">02 // TECHNICAL SPECIFICATIONS</div>
      <h2 className="section-title">ENGINEERING CAPABILITIES</h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.75rem',
        }}
      >
        {skillCategories.map((cat) => {
          const IconComponent = cat.icon;
          return (
            <div key={cat.title} className="spacex-card">
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.25rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  paddingBottom: '0.75rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <IconComponent size={18} color="#ffffff" />
                  <h3
                    style={{
                      fontSize: '1.05rem',
                      color: '#ffffff',
                      letterSpacing: '0.15em',
                    }}
                  >
                    {cat.title}
                  </h3>
                </div>
                <span className="spacex-badge">{cat.code}</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.5rem 0',
                      borderBottom: '1px stroke rgba(255, 255, 255, 0.05)',
                    }}
                  >
                    <span style={{ fontSize: '1rem', color: '#ffffff', fontWeight: 600 }}>
                      {item.name}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-spacex-heading)',
                        fontSize: '0.75rem',
                        color: 'var(--color-silver)',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
