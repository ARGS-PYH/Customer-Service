import React, { useState } from 'react';
import { Headphones, Layers, Database, CheckCircle2 } from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState('customer');

  const skillsData = {
    customer: {
      title: 'Customer Success',
      icon: <Headphones size={18} />,
      skills: [
        { name: 'Customer Communication', desc: 'Clear, professional written and verbal communication' },
        { name: 'Complaint Handling', desc: 'Listen, investigate, and support follow-through' },
        { name: 'Customer Onboarding', desc: 'Support provider onboarding and verification' },
        { name: 'User Feedback', desc: 'Understand user needs and friction points' },
        { name: 'Issue Investigation', desc: 'Document problems clearly for follow-up' },
        { name: 'Service Delivery', desc: 'Help keep customer-facing processes consistent' }
      ]
    },
    product: {
      title: 'Tools & Product',
      icon: <Layers size={18} />,
      skills: [
        { name: 'Microsoft Excel', desc: 'Spreadsheet reporting and structured tracking' },
        { name: 'Google Sheets', desc: 'Organising information and supporting reporting' },
        { name: 'SQL', desc: 'Developing foundational query skills' },
        { name: 'Product Testing', desc: 'Hands-on checks and issue identification' },
        { name: 'Issue Documentation', desc: 'Share clear observations and feedback' }
      ]
    },
    operations: {
      title: 'Operations & Reporting',
      icon: <Database size={18} />,
      skills: [
        { name: 'Operational Workflows', desc: 'Support handoffs between users, providers, and teams' },
        { name: 'Risk Awareness', desc: 'Apply care and accuracy from retail risk work' },
        { name: 'Reporting', desc: 'Structure information to support decisions' },
        { name: 'Data Quality', desc: 'Work carefully with records and guidelines' },
        { name: 'Follow-up Tracking', desc: 'Keep issues, owners, and next steps visible' }
      ]
    }
  };

  const pillars = [
    {
      title: 'Customer-centred problem solving',
      description: 'Start by understanding the user’s need, blocker, or complaint before proposing a next step.'
    },
    {
      title: 'Risk-aware accuracy',
      description: 'Bring attention to detail and procedural awareness from banking and retail risk experience.'
    },
    {
      title: 'Product and process thinking',
      description: 'Connect feedback, onboarding, product issues, and daily workflows to the wider service experience.'
    }
  ];

  return (
    <section id="about" style={{ padding: '2.5rem 0', background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="gradient-text">About Me</h2>
          <p>Customer-facing experience, analytical thinking, and practical digital product operations</p>
        </div>

        <div className="about-grid" style={{
          display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '2rem',
          alignItems: 'start', marginBottom: '2.5rem'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 600 }}>
              Seeing the customer experience and the operation behind it
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              My background spans customer service and teller work at Ecobank, retail risk analysis at Polaris Bank,
              and digital product operations at Peregrine Solution. That combination helps me look at both the
              customer’s experience and the processes behind it.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              At Peregrine Solution, I test product features, listen to users, support service-provider onboarding
              and verification, and contribute to operational workflows. I am building my career in Customer Success,
              with Customer Operations as a complementary strength.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              My computer science education and developing data skills help me work comfortably with digital products,
              spreadsheets, and structured information without losing sight of the customer.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 700 }}>
              How I work
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {pillars.map((pillar) => (
                <div key={pillar.title} style={{ display: 'flex', gap: '0.75rem', alignItems: 'start' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--accent)', marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <h5 style={{ fontWeight: 600, fontSize: '0.95rem' }}>{pillar.title}</h5>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h3 style={{
          fontFamily: 'var(--font-heading)', fontSize: '1.5rem', textAlign: 'center',
          marginBottom: '1.5rem', fontWeight: 700
        }}>
          Skills &amp; Tools
        </h3>

        <div style={{
          display: 'flex', justifyContent: 'center', gap: '0.75rem',
          marginBottom: '1.75rem', flexWrap: 'wrap'
        }}>
          {Object.entries(skillsData).map(([key, value]) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveTab(key)}
              aria-pressed={activeTab === key}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.75rem 1.25rem', borderRadius: '12px', border: '1px solid',
                borderColor: activeTab === key ? 'var(--accent)' : 'var(--border-color)',
                background: activeTab === key ? 'var(--accent)' : 'var(--bg-card)',
                color: activeTab === key ? 'white' : 'var(--text-secondary)',
                fontWeight: 600, cursor: 'pointer', transition: 'var(--transition)'
              }}
            >
              {value.icon}
              <span>{value.title}</span>
            </button>
          ))}
        </div>

        <div className="glass-panel" style={{ padding: '2rem' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '1.25rem'
          }}>
            {skillsData[activeTab].skills.map((skill) => (
              <div key={skill.name} className="skill-card" style={{
                padding: '1.25rem', borderRadius: '12px', background: 'rgba(255,255,255,0.01)',
                border: '1px solid var(--border-color)', transition: 'var(--transition)',
                display: 'flex', flexDirection: 'column', gap: '0.25rem'
              }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 600 }}>{skill.name}</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{'@media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; gap: 2rem !important; } }'}</style>
    </section>
  );
}
