import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'OVERVIEW', href: '#overview' },
    { name: 'EDUCATION', href: '#education' },
    { name: 'CAPABILITIES', href: '#capabilities' },
    { name: 'SPACE TECH', href: '#spacetech' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(0, 0, 0, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
        padding: scrolled ? '1rem 2.5rem' : '1.75rem 2.5rem',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand */}
        <a
          href="#overview"
          style={{
            textDecoration: 'none',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-spacex-heading)',
              fontWeight: 800,
              fontSize: '1.25rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
            }}
          >
            RAHUL SONI
          </span>
          <span
            style={{
              fontSize: '0.75rem',
              fontFamily: 'var(--font-spacex-heading)',
              letterSpacing: '0.15em',
              color: 'var(--color-silver)',
              borderLeft: '1px solid rgba(255, 255, 255, 0.2)',
              paddingLeft: '0.75rem',
              display: 'inline-block',
            }}
            className="brand-sub"
          >
            SPACE & AI SYSTEMS
          </span>
        </a>

        {/* Desktop Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '2.5rem',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                fontFamily: 'var(--font-spacex-heading)',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--color-silver)',
                textDecoration: 'none',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--color-silver)')}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <a
            href="https://github.com/therahulsoniii"
            target="_blank"
            rel="noreferrer"
            className="btn-spacex"
            style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}
          >
            <GithubIcon size={14} /> GITHUB <ArrowUpRight size={12} />
          </a>

          <a
            href="https://www.linkedin.com/in/therahulsoniii"
            target="_blank"
            rel="noreferrer"
            className="btn-spacex"
            style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}
          >
            <LinkedinIcon size={14} /> LINKEDIN <ArrowUpRight size={12} />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '1.5rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            marginTop: '1rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-spacex-heading)',
                fontSize: '1rem',
                color: '#fff',
                textDecoration: 'none',
                letterSpacing: '0.2em',
              }}
            >
              {link.name}
            </a>
          ))}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
            <a
              href="https://github.com/therahulsoniii"
              target="_blank"
              rel="noreferrer"
              className="btn-spacex"
              style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}
            >
              <GithubIcon size={14} /> GITHUB <ArrowUpRight size={12} />
            </a>
            <a
              href="https://www.linkedin.com/in/therahulsoniii"
              target="_blank"
              rel="noreferrer"
              className="btn-spacex"
              style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}
            >
              <LinkedinIcon size={14} /> LINKEDIN <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 600px) {
          .brand-sub { display: none !important; }
        }
      `}</style>
    </header>
  );
}
