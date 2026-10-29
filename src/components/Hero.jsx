import React from 'react';
import { ArrowRight, Mail, BriefcaseBusiness, Download } from 'lucide-react';
import avatarImg from '../assets/avatar.jpg';

export default function Hero() {
  return (
    <section id="home" style={{
      padding: '90px 0 44px 0',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div aria-hidden="true" style={{
        position: 'absolute', top: '15%', right: '10%', width: '350px', height: '350px',
        borderRadius: '50%', background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
        opacity: 0.12, filter: 'blur(60px)', zIndex: 0, pointerEvents: 'none',
        animation: 'pulse-glow 8s infinite alternate'
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: '10%', left: '5%', width: '300px', height: '300px',
        borderRadius: '50%', background: 'radial-gradient(circle, var(--accent-secondary) 0%, transparent 70%)',
        opacity: 0.1, filter: 'blur(50px)', zIndex: 0, pointerEvents: 'none',
        animation: 'pulse-glow 6s infinite alternate-reverse'
      }} />

      <div className="container hero-grid" style={{
        position: 'relative', zIndex: 10, display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr', gap: '2rem', alignItems: 'center'
      }}>
        <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div className="glass-panel" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.35rem 0.9rem',
            borderRadius: '50px', width: 'fit-content', fontSize: '0.8rem', fontWeight: 600,
            color: 'var(--accent)', border: '1px solid var(--border-color)', background: 'var(--bg-card)'
          }}>
            <BriefcaseBusiness size={14} />
            <span>Customer Success &amp; Operations</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em'
          }}>
            Hi, I'm <span className="gradient-text">Animasaun Damilare Aderinwale</span>
          </h1>

          <p style={{
            fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)', color: 'var(--text-secondary)',
            maxWidth: '600px', lineHeight: 1.7
          }}>
            I bring together banking customer service, retail risk analysis, and hands-on digital product operations.
            I help surface customer friction, support onboarding, document product issues, and turn feedback into
            clearer service workflows.
          </p>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
            <a href="#projects" className="btn btn-primary">
              Explore Case Studies <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me <Mail size={18} />
            </a>
            <a href="/Damilare_Animasaun_CV.pdf" download="Animasaun_Damilare_Aderinwale_CV.pdf" className="btn btn-secondary" style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}>
              Download CV <Download size={18} />
            </a>
          </div>

          <div className="hero-stats" style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '1rem',
            marginTop: '1rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-color)'
          }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent)' }}>Customer</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Experience &amp; feedback</p>
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent)' }}>Operations</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Onboarding &amp; workflows</p>
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent)' }}>Analysis</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Reporting &amp; risk awareness</p>
            </div>
          </div>
        </div>

        <div className="animate-fade-in delay-200" style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'
        }}>
          <div className="avatar-frame" style={{
            position: 'relative', width: '280px', height: '280px', borderRadius: '24px',
            overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
            border: '2px solid var(--border-color)', background: 'var(--bg-card)'
          }}>
            <img
              src={avatarImg}
              alt="Portrait of Animasaun Damilare Aderinwale"
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
            />
          </div>
        </div>
      </div>

      <style>{'@media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; text-align: center; } .hero-grid .glass-panel { margin: 0 auto; } .hero-stats { text-align: left; } .avatar-frame { width: 240px !important; height: 240px !important; } } @media (max-width: 480px) { .hero-stats { grid-template-columns: 1fr !important; gap: 0.75rem !important; } .hero-stats > div { padding: 0.55rem 0; } }'}</style>
    </section>
  );
}
