import React from 'react';
import { ArrowRight, Mail, Briefcase, Download } from 'lucide-react';
import avatarImg from '../assets/avatar.jpg';

export default function Hero() {
  return (
    <section id="home" style={{
      padding: '90px 0 40px 0',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative Glow Elements */}
      <div style={{
        position: 'absolute',
        top: '15%',
        right: '10%',
        width: '350px',
        height: '350px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
        opacity: 0.12,
        filter: 'blur(60px)',
        zIndex: 0,
        pointerEvents: 'none',
        animation: 'pulse-glow 8s infinite alternate'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, var(--accent-secondary) 0%, transparent 70%)',
        opacity: 0.1,
        filter: 'blur(50px)',
        zIndex: 0,
        pointerEvents: 'none',
        animation: 'pulse-glow 6s infinite alternate-reverse'
      }} />

      <div className="container hero-grid" style={{
        position: 'relative',
        zIndex: 10,
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr',
        gap: '2rem',
        alignItems: 'center'
      }}>
        
        {/* Left Content Side */}
        <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          {/* Tagline Badge */}
          <div className="glass-panel" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.35rem 0.9rem',
            borderRadius: '50px',
            width: 'fit-content',
            fontSize: '0.8rem',
            fontWeight: 600,
            color: 'var(--accent)',
            border: '1px solid var(--border-color)',
            background: 'var(--bg-card)'
          }}>
            <Briefcase size={14} />
            <span>Customer Service Representative</span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-0.02em'
          }}>
            Hi, I'm <span className="gradient-text">Damilare Animasaun</span>
          </h1>

          {/* Subheading */}
          <p style={{
            fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
            color: 'var(--text-secondary)',
            maxWidth: '560px',
            lineHeight: 1.65
          }}>
            A customer-focused technology professional with 4+ years of expertise in high-volume banking, complaint resolution, and remote operations. Dedicated to delivering exceptional customer support.
          </p>

          {/* Actions */}
          <div style={{
            display: 'flex',
            gap: '0.75rem',
            flexWrap: 'wrap',
            marginTop: '0.5rem'
          }}>
            <a href="#projects" className="btn btn-primary">
              Explore Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Let's Connect <Mail size={18} />
            </a>
            <a href="/Damilare_Animasaun_CV.pdf" download="Damilare_Animasaun_CV.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}>
              Download CV <Download size={18} />
            </a>
          </div>

          {/* Quick Stats Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.25rem',
            marginTop: '1rem',
            paddingTop: '1rem',
            borderTop: '1px solid var(--border-color)'
          }} className="hero-stats">
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--accent)' }}>4+</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Years Experience</p>
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--accent)' }}>80-90</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Daily Customer Tickets</p>
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--accent)' }}>4+</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Years Customer Support</p>
            </div>
          </div>

        </div>

        {/* Right Avatar Side */}
        <div className="animate-fade-in delay-200" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative'
        }}>
          {/* Avatar Outer Border frame */}
          <div style={{
            position: 'relative',
            width: '280px',
            height: '280px',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
            border: '2px solid var(--border-color)',
            background: 'var(--bg-card)'
          }} className="avatar-frame">
            <img 
              src={avatarImg} 
              alt="Damilare Aderinwale Animasaun"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.5s ease'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            />
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
            text-align: center;
          }
          .hero-stats {
            justify-content: center;
          }
          .glass-panel {
            margin: 0 auto;
          }
          .avatar-frame {
            width: 240px !important;
            height: 240px !important;
          }
        }
      `}</style>
    </section>
  );
}
