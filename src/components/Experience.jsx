import React from 'react';
import { Calendar, Briefcase, GraduationCap, Award } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Customer Specialist',
      company: 'Peregrine Solution',
      period: 'Current',
      achievements: [
        'Test product features and document issues found through hands-on use and user interaction.',
        'Engage with users to understand needs, difficulties, and feedback that can inform product and service improvements.',
        'Support service-provider onboarding and verification, helping providers move through the required steps accurately.',
        'Contribute to operational workflows linking customers, service providers, and the internal team.',
        'Support product launch planning and use spreadsheets or available analytics to organise operational information.'
      ]
    },
    {
      role: 'Freelance Data & Image Annotation (Occasional)',
      company: 'Independent · Remote',
      period: 'August 2024 – Present',
      achievements: [
        'Complete occasional data and image annotation tasks in line with project guidelines and quality standards.',
        'Apply attention to detail and consistency when reviewing and labelling content.'
      ]
    },
    {
      role: 'Risk Analyst (Retail Risk)',
      company: 'Polaris Bank',
      period: '2022 – 2023',
      achievements: [
        'Conducted retail risk analysis, reviewing information to identify discrepancies and potential concerns.',
        'Prepared documentation and reports to support risk monitoring and decision-making.',
        'Followed established procedures with attention to accuracy, record quality, and risk awareness.'
      ]
    },
    {
      role: 'Customer Service / Teller',
      company: 'Ecobank',
      period: '2019 – 2022',
      achievements: [
        'Handled customer enquiries, requests, and banking transactions accurately in line with established procedures.',
        'Received customer complaints and worked towards professional, timely resolution.',
        'Maintained accurate customer and transaction records while following applicable confidentiality requirements.'
      ]
    }
  ];

  const educations = [
    {
      degree: 'Bachelor of Science (B.Sc.) in Computer Science',
      institution: 'Federal University Oye-Ekiti (FUOYE)',
      period: '2026',
      details: 'Clearance and certificate pending'
    },
    {
      degree: 'Higher National Diploma (HND) in Computer Science',
      institution: 'Lagos State Polytechnic (LASPOTECH)',
      period: '',
      details: ''
    },
    {
      degree: 'National Diploma (ND) in Computer Science',
      institution: 'Lagos State Polytechnic (LASPOTECH)',
      period: '',
      details: ''
    }
  ];

  return (
    <section id="experience" style={{ padding: '2.5rem 0' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="gradient-text">Experience &amp; Education</h2>
          <p>Customer service, risk awareness, and practical digital product operations</p>
        </div>

        <div className="experience-grid" style={{
          display: 'grid', gridTemplateColumns: '1.2fr 0.8fr',
          gap: '2.5rem', alignItems: 'start'
        }}>
          <div>
            <h3 style={{
              fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700,
              marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem'
            }}>
              <Briefcase size={22} style={{ color: 'var(--accent)' }} />
              Professional Experience
            </h3>

            <div className="timeline">
              {experiences.map((exp, index) => (
                <div className="timeline-item animate-fade-in" key={exp.role} style={{ animationDelay: (index * 0.1) + 's' }}>
                  <div className="timeline-dot"></div>
                  <div className="glass-panel timeline-card">
                    <div style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'start',
                      flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem'
                    }}>
                      <div>
                        <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700 }}>
                          {exp.role}
                        </h4>
                        <span style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.9rem' }}>
                          {exp.company}
                        </span>
                      </div>
                      {exp.period && (
                        <span style={{
                          display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem',
                          color: 'var(--text-muted)', padding: '0.25rem 0.6rem', borderRadius: '50px',
                          background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)'
                        }}>
                          <Calendar size={12} /> {exp.period}
                        </span>
                      )}
                    </div>

                    <ul style={{
                      paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem',
                      color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.55'
                    }}>
                      {exp.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <h3 style={{
                fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700,
                marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem'
              }}>
                <GraduationCap size={22} style={{ color: 'var(--accent)' }} /> Education
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {educations.map((education) => (
                  <div key={education.degree} className="glass-panel" style={{ padding: '1.35rem' }}>
                    <div style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'start',
                      gap: '0.5rem', marginBottom: '0.5rem'
                    }}>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                        {education.degree}
                      </h4>
                      {education.period && (
                        <span style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 600, whiteSpace: 'nowrap' }}>
                          {education.period}
                        </span>
                      )}
                    </div>
                    <p style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-secondary)' }}>
                      {education.institution}
                    </p>
                    {education.details && (
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
                        {education.details}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 style={{
                fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 700,
                marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem'
              }}>
                <Award size={22} style={{ color: 'var(--accent)' }} /> Professional Development
              </h3>

              <div className="glass-panel" style={{ padding: '1.4rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.9rem' }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 600 }}>Project Management</h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--accent)', fontWeight: 500 }}>ICSMP</p>
                </div>
                <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.9rem' }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 600 }}>Data Analytics</h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--accent)', fontWeight: 500 }}>Cisco Networking Academy · 2024</p>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 600 }}>Professional Foundations</h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--accent)', fontWeight: 500 }}>ALX</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{'@media (max-width: 900px) { .experience-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }'}</style>
    </section>
  );
}
