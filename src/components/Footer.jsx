import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        background: '#000000',
        padding: '3rem 2rem 2.5rem',
        position: 'relative',
        zIndex: 20,
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-spacex-heading)',
            fontSize: '0.85rem',
            letterSpacing: '0.18em',
            color: 'var(--color-silver)',
            textTransform: 'uppercase',
          }}
        >
          RAHUL SONI © {new Date().getFullYear()} // COMPUTER SCIENCE (AI & DATA SCIENCE) • SPACE SYSTEMS
        </div>

        <button
          onClick={scrollToTop}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#ffffff',
            cursor: 'pointer',
            fontFamily: 'var(--font-spacex-heading)',
            fontSize: '0.85rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}
        >
          TOP OF PAGE ↑
        </button>
      </div>
    </footer>
  );
}
