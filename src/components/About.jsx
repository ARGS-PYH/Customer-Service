import React, { useState } from 'react';
import { Headphones, Code, Database, ShieldAlert, FileSpreadsheet, Globe, CheckCircle2 } from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState('support');

  const skillsData = {
    support: {
      title: 'Customer Operations',
      icon: <Headphones size={18} />,
      skills: [
        { name: 'Written & Verbal Comm.', desc: 'High professional response' },
        { name: 'Complaint Resolution', desc: 'De-escalation & ticket closing' },
        { name: 'Problem Solving', desc: 'Root cause structural fix' },
        { name: 'Ticket Management', desc: 'Zendesk, email, chat tools' },
        { name: 'Client Education', desc: 'Simplifying complex features' },
        { name: 'Confidentiality Compliance', desc: 'Secure data protection laws' }
      ]
    },
    technical: {
      title: 'Technical & Systems',
      icon: <Code size={18} />,
      skills: [
        { name: 'Google Sheets', desc: 'Data formulas & pivots' },
        { name: 'Microsoft Office', desc: 'Excel, Word & presentation' }
      ]
    },
    operations: {
      title: 'Operations & Analytics',
      icon: <Database size={18} />,
      skills: [
        { name: 'Data Entry & Auditing', desc: 'High-accuracy record management' },
        { name: 'Quality Review', desc: 'Error auditing & correction' },
        { name: 'Risk & Fraud Analysis', desc: 'Irregular transaction checks' },
        { name: 'Market & Web Research', desc: 'Comprehensive domain studies' },
        { name: 'Remote Work Master', desc: 'Asynchronous collaboration' },
        { name: 'Continuous Upskilling', desc: 'Professional foundation track' }
      ]
    }
  };

  return (
    <section id="about" style={{ padding: '2.5rem 0', background: 'var(--bg-secondary)' }}>
      <div className="container">
        
        {/* Section Title */}
        <div className="section-header">
          <h2 className="gradient-text">About Me</h2>
          <p>The combination of technology foundations and customer-oriented analytical operations</p>
        </div>

        {/* Narrative & Quick Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: '2rem',
          alignItems: 'start',
          marginBottom: '2rem'
        }} className="about-grid">

          {/* Biography */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 600 }}>
              Bridging Technical Adaptability & Direct Operations
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              I am a Customer Success and Operations professional with a strong computer science background, certified in Data Analytics from Cisco Networking Academy and in Project Management from ICSMP. These credentials, paired with my completed Professional foundation program, equip me with analytical frameworks that I directly apply to operations.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Whether analyzing daily risk vectors in commercial banking databases or managing 80-90 support tickets daily at scale, I deliver precision, speed, and clear communication.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              I thrive in autonomous, remote environments that value fast-paced learning and strict attention to detail.
            </p>
          </div>

          {/* Core Values / Professional Qualities Card */}
          <div className="glass-panel" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 700 }}>
              Professional Pillars
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'start' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--accent)', marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <h5 style={{ fontWeight: 600, fontSize: '0.95rem' }}>Adaptable Technical Mindset</h5>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Proven ability to learn fresh domain knowledge rapidly and resolve tickets efficiently.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'start' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--accent)', marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <h5 style={{ fontWeight: 600, fontSize: '0.95rem' }}>Risk-Conscious Integrity</h5>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Background auditing transactions and maintaining compliance protocols with 100% confidentiality.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'start' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--accent)', marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <h5 style={{ fontWeight: 600, fontSize: '0.95rem' }}>Empathetic Communicator</h5>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Committed to transforming complex customer problems into smooth, simple resolutions.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Skills Section Title */}
        <h3 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.5rem',
          textAlign: 'center',
          marginBottom: '1.5rem',
          fontWeight: 700
        }}>
          Skills Matrix
        </h3>

        {/* Custom Interactive Tab Controls */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.75rem',
          marginBottom: '1.75rem',
          flexWrap: 'wrap'
        }}>
          {Object.entries(skillsData).map(([key, value]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                borderRadius: '12px',
                border: '1px solid',
                borderColor: activeTab === key ? 'var(--accent)' : 'var(--border-color)',
                background: activeTab === key ? 'var(--accent)' : 'var(--bg-card)',
                color: activeTab === key ? 'white' : 'var(--text-secondary)',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'var(--transition)'
              }}
            >
              {value.icon}
              <span>{value.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Display Grid */}
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1.5rem'
          }}>
            {skillsData[activeTab].skills.map((skill, index) => (
              <div
                key={index}
                style={{
                  padding: '1.25rem',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.01)',
                  border: '1px solid var(--border-color)',
                  transition: 'var(--transition)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.25rem'
                }}
                className="skill-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <h4 style={{ fontSize: '1rem', fontWeight: 600 }}>{skill.name}</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
