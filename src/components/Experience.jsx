import React from 'react';
import { Calendar, Briefcase, GraduationCap, Award } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Data Annotation Specialist',
      company: 'Freelance',
      period: '2023 – Present',
      type: 'remote',
      achievements: [
        'Successfully completed 7 complex data annotation projects across text, audio, and image datasets, delivering 50-70 tasks per active work period.',
        'Independently researched and mastered new subject domains for each project, ensuring extreme adaptability across diverse AI/ML training guidelines.',
        'Maintained ultra-high accuracy and consistency standards across all deliverables, enforcing quality control on 100% of custom submissions.',
        'Managed own workload remotely, meeting rigorous client deadlines across multiple concurrent annotation tasks.'
      ]
    },
    {
      role: 'Risk Analyst',
      company: 'Polaris Bank',
      period: '2022 – 2023',
      type: 'fintech',
      achievements: [
        'Reviewed and analyzed 30-40 customer transactions daily, identifying irregularities, inconsistencies, and potential financial risk exposures.',
        'Flagged an average of 5-10 errors or suspicious transactions per day, contributing directly to fraud prevention and regulatory compliance.',
        'Maintained strict, accurate documentation and risk reports in full compliance with company policies and banking standards.',
        'Collaborated cross-functionally with operations, audit, and compliance teams to support smooth, secure business processes.'
      ]
    },
    {
      role: 'Customer Service Representative',
      company: 'Ecobank',
      period: '2019 – 2022',
      type: 'banking',
      achievements: [
        'Managed an average of 80-90 customer tickets daily across multiple communication channels, maintaining service quality in a high-volume environment.',
        'Achieved a 60-70% full resolution rate per cycle through diligent follow-up and proactive ticket management.',
        'Provided highly professional and accurate information on banking products, handling complaints and working toward timely resolutions.',
        'Maintained accurate customer records and transaction details in strict compliance with confidentiality and data protection policies.'
      ]
    }
  ];

  const educations = [
    {
      degree: 'B.Sc. in Computer Science (In View)',
      institution: 'Federal University of Oye Ekiti',
      period: 'Expected 2026',
      details: 'Expected completion before end of 2026'
    },
    {
      degree: 'Higher National Diploma',
      institution: 'Lagos State Polytechnic',
      period: 'Graduated 2018',
      details: 'Advanced focus on systems and practical logic'
    },
    {
      degree: 'Diploma in Computer Science',
      institution: 'Lagos State Polytechnic',
      period: 'Completed 2015',
      details: 'Foundations of programming, data structures, and computer architectures'
    }
  ];

  return (
    <section id="experience" style={{ padding: '2.5rem 0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <h2 className="gradient-text">Experience & Education</h2>
          <p>A proven track record of operational accuracy and professional academic growth</p>
        </div>

        {/* Outer Split Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '2.5rem',
          alignItems: 'start'
        }} className="experience-grid">
          
          {/* Left Column: Professional Experience Timeline */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.5rem',
              fontWeight: 700,
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <Briefcase size={22} style={{ color: 'var(--accent)' }} />
              Professional Experience
            </h3>

            <div className="timeline">
              {experiences.map((exp, index) => (
                <div className="timeline-item animate-fade-in" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="timeline-dot"></div>
                  <div className="glass-panel timeline-card">
                    
                    {/* Header Row */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'start',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      marginBottom: '1rem'
                    }}>
                      <div>
                        <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 700 }}>
                          {exp.role}
                        </h4>
                        <span style={{
                          color: 'var(--accent)',
                          fontWeight: 600,
                          fontSize: '0.9rem'
                        }}>
                          {exp.company}
                        </span>
                      </div>
                      
                      {/* Period Badge */}
                      <span style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.8rem',
                        color: 'var(--text-muted)',
                        padding: '0.25rem 0.6rem',
                        borderRadius: '50px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid var(--border-color)'
                      }}>
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                    </div>

                    {/* Bullet Points */}
                    <ul style={{
                      paddingLeft: '1.2rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem',
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem',
                      lineHeight: '1.5'
                    }}>
                      {exp.achievements.map((ach, idx) => (
                        <li key={idx}>{ach}</li>
                      ))}
                    </ul>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Development */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Education Timeline */}
            <div>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.5rem',
                fontWeight: 700,
                marginBottom: '2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <GraduationCap size={22} style={{ color: 'var(--accent)' }} />
                Education
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {educations.map((edu, index) => (
                  <div key={index} className="glass-panel" style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                        {edu.degree}
                      </h4>
                      <span style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 600 }}>
                        {edu.period}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-secondary)' }}>
                      {edu.institution}
                    </p>
                    {edu.details && (
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                        {edu.details}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications and Additional Training */}
            <div>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.5rem',
                fontWeight: 700,
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <Award size={22} style={{ color: 'var(--accent)' }} />
                Certifications & Growth
              </h3>

              <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 600 }}>Project Management Certification</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 500 }}>CIMP</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>Certified in professional project management lifecycles, execution frameworks, and structural operations.</p>
                </div>
                <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 600 }}>Data Analytics Certification</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 500 }}>Cisco Networking Academy</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>Certified in processing, analyzing, and transforming complex datasets to drive operational intelligence.</p>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 600 }}>ALX Software Engineering Program</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 500 }}>In Progress</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>Enrolled in systems development and advanced engineering workflows.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .experience-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
