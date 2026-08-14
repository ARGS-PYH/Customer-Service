import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const GithubIcon = ({ size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email address is invalid';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate API submit delay
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1500);
    }
  };

  return (
    <section id="contact" style={{ padding: '2.5rem 0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <h2 className="gradient-text">Get In Touch</h2>
          <p>Let's discuss how I can support your customer operations or technical integration goals</p>
        </div>

        {/* Form & Info Layout Split */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '0.9fr 1.1fr',
          gap: '2.5rem',
          alignItems: 'start'
        }} className="contact-grid">
          
          {/* Left Info Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 700 }}>
                Let's Build Something Exceptional
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                I am actively interested in Customer Support, FinTech Operations, and Technical Service roles within forward-thinking technology environments. 
              </p>
              <p style={{ color: 'var(--text-secondary)' }}>
                If you are looking for an analytical team member who learns fast, operates independently, and executes with precision—get in touch!
              </p>
            </div>

            {/* Coordinates Grid */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--accent)'
                }}>
                  <Mail size={18} />
                </div>
                <div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Email Me</p>
                  <a href="mailto:daanimasaun@gmail.com" style={{ fontSize: '0.95rem', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600 }}>
                    daanimasaun@gmail.com
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--accent)'
                }}>
                  <Phone size={18} />
                </div>
                <div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Call Me</p>
                  <a href="tel:+2347082646535" style={{ fontSize: '0.95rem', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600 }}>
                    +234 708 264 6535
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--accent)'
                }}>
                  <MapPin size={18} />
                </div>
                <div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Location</p>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                    Lagos, Nigeria
                  </p>
                </div>
              </div>

            </div>

            {/* Social Icons Links */}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '0.6rem 1rem' }}>
                <LinkedinIcon size={18} /> LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '0.6rem 1rem' }}>
                <GithubIcon size={18} /> GitHub
              </a>
            </div>

          </div>

          {/* Right Contact Form Column */}
          <div className="glass-panel" style={{ padding: '2.5rem', position: 'relative' }}>
            
            {isSubmitted ? (
              /* Success Panel Screen */
              <div className="animate-fade-in" style={{
                textAlign: 'center',
                padding: '2rem 0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <CheckCircle size={56} style={{ color: 'hsl(140, 85%, 45%)' }} />
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700 }}>
                  Message Sent Successfully!
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '340px' }}>
                  Thank you for reaching out, Damilare. I will review your request and get back to you as soon as possible!
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn btn-secondary"
                  style={{ marginTop: '1rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              /* Actual Interactive Form */
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                
                {/* Name */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor="name" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    style={{
                      padding: '0.75rem 1rem',
                      borderRadius: '10px',
                      background: 'var(--bg-secondary)',
                      border: '1px solid',
                      borderColor: errors.name ? 'hsl(350, 85%, 55%)' : 'var(--border-color)',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem',
                      transition: 'var(--transition)'
                    }}
                  />
                  {errors.name && <span style={{ color: 'hsl(350, 85%, 55%)', fontSize: '0.75rem' }}>{errors.name}</span>}
                </div>

                {/* Email */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor="email" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={{
                      padding: '0.75rem 1rem',
                      borderRadius: '10px',
                      background: 'var(--bg-secondary)',
                      border: '1px solid',
                      borderColor: errors.email ? 'hsl(350, 85%, 55%)' : 'var(--border-color)',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem',
                      transition: 'var(--transition)'
                    }}
                  />
                  {errors.email && <span style={{ color: 'hsl(350, 85%, 55%)', fontSize: '0.75rem' }}>{errors.email}</span>}
                </div>

                {/* Subject */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor="subject" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    style={{
                      padding: '0.75rem 1rem',
                      borderRadius: '10px',
                      background: 'var(--bg-secondary)',
                      border: '1px solid',
                      borderColor: errors.subject ? 'hsl(350, 85%, 55%)' : 'var(--border-color)',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem',
                      transition: 'var(--transition)'
                    }}
                  />
                  {errors.subject && <span style={{ color: 'hsl(350, 85%, 55%)', fontSize: '0.75rem' }}>{errors.subject}</span>}
                </div>

                {/* Message */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor="message" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    style={{
                      padding: '0.75rem 1rem',
                      borderRadius: '10px',
                      background: 'var(--bg-secondary)',
                      border: '1px solid',
                      borderColor: errors.message ? 'hsl(350, 85%, 55%)' : 'var(--border-color)',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem',
                      resize: 'none',
                      transition: 'var(--transition)'
                    }}
                  ></textarea>
                  {errors.message && <span style={{ color: 'hsl(350, 85%, 55%)', fontSize: '0.75rem' }}>{errors.message}</span>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    marginTop: '0.5rem',
                    padding: '0.9rem'
                  }}
                >
                  {isSubmitting ? (
                    'Sending Message...'
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 800px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
