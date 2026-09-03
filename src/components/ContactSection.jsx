import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe, Copy, Check, Send, ArrowUpRight, Loader2 } from 'lucide-react';
import { LinkedinIcon } from './SocialIcons';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseDetails, setResponseDetails] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('justrahul2005@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setErrorMsg(null);

    const signalId = `SIG-${Math.floor(100000 + Math.random() * 900000)}`;

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const contentType = res.headers.get('content-type');
      if (res.ok && contentType && contentType.includes('application/json')) {
        const data = await res.json();
        setResponseDetails(data);
      } else {
        // Static GitHub Pages fallback - trigger mailto and display signal confirmation
        const mailtoUrl = `mailto:justrahul2005@gmail.com?subject=SpaceX%20Portfolio%20Signal%20from%20${encodeURIComponent(formState.name)}&body=${encodeURIComponent(formState.message + '\n\nSender Email: ' + formState.email)}`;
        window.location.href = mailtoUrl;

        setResponseDetails({
          success: true,
          signalId,
          message: 'Signal transmission dispatched to justrahul2005@gmail.com.',
          timestamp: new Date().toISOString(),
        });
      }

      setFormState({ name: '', email: '', message: '' });
    } catch (err) {
      console.warn('Backend API offline (Static Host environment). Triggering mailto relay:', err);

      // Fallback mailto dispatch for static hosting environments
      const mailtoUrl = `mailto:justrahul2005@gmail.com?subject=SpaceX%20Portfolio%20Signal%20from%20${encodeURIComponent(formState.name)}&body=${encodeURIComponent(formState.message + '\n\nSender Email: ' + formState.email)}`;
      window.location.href = mailtoUrl;

      setResponseDetails({
        success: true,
        signalId,
        message: 'Signal transmission dispatched to justrahul2005@gmail.com.',
        timestamp: new Date().toISOString(),
      });
      setFormState({ name: '', email: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const languages = ['English', 'Hindi', 'Bengali', 'French'];

  return (
    <section id="contact" className="spacex-section">
      <div className="section-label">04 // COMMUNICATIONS RELAY</div>
      <h2 className="section-title">CONTACT GROUND CONTROL</h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '3rem',
          alignItems: 'start',
        }}
      >
        {/* Left Column: Direct Resume Contact Details */}
        <div className="spacex-card" style={{ padding: '2.5rem' }}>
          <h3
            style={{
              fontSize: '1.4rem',
              color: '#ffffff',
              marginBottom: '1.5rem',
              letterSpacing: '0.12em',
              borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
              paddingBottom: '0.75rem',
            }}
          >
            CONTACT SPECIFICATIONS
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
            {/* Email */}
            <div>
              <div style={{ fontFamily: 'var(--font-spacex-heading)', fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--color-silver)', marginBottom: '0.3rem' }}>
                PRIMARY EMAIL
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(255, 255, 255, 0.03)', padding: '0.75rem 1rem', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '2px' }}>
                <span style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.95rem' }}>
                  justrahul2005@gmail.com
                </span>
                <button
                  onClick={handleCopyEmail}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: copied ? '#10b981' : 'var(--color-silver)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    fontFamily: 'var(--font-spacex-heading)',
                    fontSize: '0.75rem',
                  }}
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  {copied ? 'COPIED' : 'COPY'}
                </button>
              </div>
            </div>

            {/* Phone & Location */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-spacex-heading)', fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--color-silver)', marginBottom: '0.3rem' }}>
                  PHONE NUMBER
                </div>
                <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.95rem' }}>
                  +91 7739043502
                </div>
              </div>

              <div>
                <div style={{ fontFamily: 'var(--font-spacex-heading)', fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--color-silver)', marginBottom: '0.3rem' }}>
                  NATIONALITY
                </div>
                <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.95rem' }}>
                  Indian
                </div>
              </div>
            </div>

            {/* Languages */}
            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '1.25rem' }}>
              <div style={{ fontFamily: 'var(--font-spacex-heading)', fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--color-silver)', marginBottom: '0.6rem' }}>
                LANGUAGES SPOKEN
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {languages.map((lang) => (
                  <span key={lang} className="spacex-badge spacex-badge-active">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Direct Transmission Form */}
        <div className="spacex-card" style={{ padding: '2.5rem' }}>
          {responseDetails ? (
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <div
                style={{
                  fontFamily: 'var(--font-spacex-heading)',
                  fontSize: '0.8rem',
                  letterSpacing: '0.2em',
                  color: '#10b981',
                  marginBottom: '0.5rem',
                }}
              >
                SIGNAL CONFIRMED // {responseDetails.signalId}
              </div>
              <div
                className="font-pixel"
                style={{
                  fontSize: '1.4rem',
                  color: '#ffffff',
                  marginBottom: '1rem',
                }}
              >
                TRANSMISSION SENT TO JUSTRAHUL2005@GMAIL.COM
              </div>
              <p style={{ color: 'var(--color-silver)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                Your transmission has been logged and routed to Ground Control (justrahul2005@gmail.com). Rahul Soni will review your message shortly.
              </p>
              <button
                onClick={() => setResponseDetails(null)}
                className="btn-spacex"
                style={{ fontSize: '0.75rem', padding: '0.6rem 1.25rem' }}
              >
                SEND ANOTHER TRANSMISSION
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h3
                style={{
                  fontSize: '1.4rem',
                  color: '#ffffff',
                  marginBottom: '1.5rem',
                  letterSpacing: '0.12em',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
                  paddingBottom: '0.75rem',
                }}
              >
                DIRECT TRANSMISSION
              </h3>

              {errorMsg && (
                <div
                  style={{
                    background: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid #ef4444',
                    color: '#ef4444',
                    padding: '0.75rem',
                    borderRadius: '2px',
                    fontSize: '0.85rem',
                    marginBottom: '1rem',
                  }}
                >
                  {errorMsg}
                </div>
              )}

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontFamily: 'var(--font-spacex-heading)', fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--color-silver)', marginBottom: '0.4rem' }}>
                  YOUR NAME
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. Dr. Aris Vance"
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#fff',
                    outline: 'none',
                    borderRadius: '2px',
                    fontFamily: 'var(--font-spacex-body)',
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontFamily: 'var(--font-spacex-heading)', fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--color-silver)', marginBottom: '0.4rem' }}>
                  YOUR EMAIL
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="e.g. contact@aerospace-org.com"
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#fff',
                    outline: 'none',
                    borderRadius: '2px',
                    fontFamily: 'var(--font-spacex-body)',
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.75rem' }}>
                <label style={{ display: 'block', fontFamily: 'var(--font-spacex-heading)', fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--color-silver)', marginBottom: '0.4rem' }}>
                  MESSAGE
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="State your engineering inquiry or project discussion..."
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#fff',
                    outline: 'none',
                    borderRadius: '2px',
                    fontFamily: 'var(--font-spacex-body)',
                    resize: 'none',
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn-spacex"
                disabled={isSubmitting}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> TRANSMITTING...
                  </>
                ) : (
                  <>
                    SEND TRANSMISSION <Send size={16} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
