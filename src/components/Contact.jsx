import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const LinkedinIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = [
      'Name: ' + formData.name,
      'Email: ' + formData.email,
      '',
      formData.message
    ].join('\n');
    const mailto = 'mailto:daanimasaun@gmail.com?subject=' +
      encodeURIComponent(formData.subject || 'Portfolio enquiry') +
      '&body=' + encodeURIComponent(body);
    window.location.href = mailto;
  };

  const fieldStyle = {
    padding: '0.75rem 1rem',
    borderRadius: '10px',
    background: 'var(--bg-secondary)',
    border: '1px solid var(--border-color)',
    color: 'var(--text-primary)',
    outline: 'none',
    fontFamily: 'var(--font-body)',
    fontSize: '0.9rem',
    width: '100%'
  };
  const labelStyle = { fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' };
  const contactDetails = [
    { icon: <Mail size={18} />, label: 'Email', value: 'daanimasaun@gmail.com', href: 'mailto:daanimasaun@gmail.com' },
    { icon: <Phone size={18} />, label: 'Phone', value: '+234 708 264 6535', href: 'tel:+2347082646535' },
  ];

  return (
    <section id="contact" style={{ padding: '2.75rem 0' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="gradient-text">Let’s Connect</h2>
          <p>Open to Customer Success and Customer Operations opportunities where customer insight and structured problem-solving matter.</p>
        </div>

        <div className="contact-grid" style={{
          display: 'grid', gridTemplateColumns: '0.9fr 1.1fr',
          gap: '2.5rem', alignItems: 'start'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 700 }}>
                Let’s talk about customer experience.
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                I’m interested in helping teams understand customer friction, improve onboarding, organise feedback, and make service operations more consistent.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {contactDetails.map((item) => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: '44px', height: '44px', borderRadius: '12px',
                    background: 'var(--bg-card)', border: '1px solid var(--border-color)',
                    color: 'var(--accent)', flexShrink: 0
                  }}>{item.icon}</div>
                  <div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.label}</p>
                    <a href={item.href} style={{ fontSize: '0.95rem', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600 }}>
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '44px', height: '44px', borderRadius: '12px',
                  background: 'var(--bg-card)', border: '1px solid var(--border-color)',
                  color: 'var(--accent)', flexShrink: 0
                }}><MapPin size={18} /></div>
                <div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Location</p>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: 600 }}>Lagos, Nigeria</p>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a href="https://www.linkedin.com/in/danimasaun/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '0.6rem 1rem' }}>
                <LinkedinIcon size={18} /> LinkedIn
              </a>
              <a href="https://github.com/ARGS-PYH" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '0.6rem 1rem' }}>
                <GithubIcon size={18} /> GitHub
              </a>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: 'clamp(1.25rem, 3vw, 2rem)' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              Send an enquiry
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.84rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
              Submitting opens a draft in your email app. The message is not sent automatically from this website.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label htmlFor="contact-name" style={labelStyle}>Your name</label>
                <input id="contact-name" name="name" autoComplete="name" required value={formData.name} onChange={handleInputChange} style={fieldStyle} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label htmlFor="contact-email" style={labelStyle}>Email address</label>
                <input id="contact-email" name="email" type="email" autoComplete="email" required value={formData.email} onChange={handleInputChange} style={fieldStyle} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label htmlFor="contact-subject" style={labelStyle}>Subject</label>
                <input id="contact-subject" name="subject" required value={formData.subject} onChange={handleInputChange} style={fieldStyle} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label htmlFor="contact-message" style={labelStyle}>Message</label>
                <textarea id="contact-message" name="message" rows={4} required value={formData.message} onChange={handleInputChange} style={{ ...fieldStyle, resize: 'vertical' }} />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.25rem' }}>
                Draft Email <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{'@media (max-width: 800px) { .contact-grid { grid-template-columns: 1fr !important; gap: 2rem !important; } }'}</style>
    </section>
  );
}
