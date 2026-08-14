import React, { useState } from 'react';
import { Eye, ExternalLink, X, BookOpen, Terminal, ShieldCheck, Database, Layers } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 4,
      title: 'Semi-Automated Transaction Risk Monitor',
      category: 'ops',
      categoryLabel: 'Fintech & Risk Ops',
      brief: 'Advanced tracking and analysis dashboard built to optimize daily compliance reviews.',
      tech: ['Google Sheets', 'Excel Macros', 'Risk Formulas', 'Audit Reporting'],
      icon: <ShieldCheck size={20} />,
      problem: 'Auditing 30-40 daily multi-channel banking records manually was slow, making it difficult to flag critical risk exposures before daily settlements.',
      approach: 'Designed spreadsheet dashboards utilizing automated validation rules, custom conditional logic, and macro triggers to instantly isolate transaction outliers and velocity threshold limits.',
      results: 'Increased suspicious activity identification speed by 40%. Allowed operations teams to catch daily compliance errors within the same-day cycle, saving potential regulatory penalty exposures.'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" style={{ padding: '2.5rem 0', background: 'var(--bg-secondary)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <h2 className="gradient-text">Featured Work</h2>
          <p>Practical demonstrations of operational accuracy, risk monitoring, and systems workflow</p>
        </div>

        {/* Filter Navigation */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.75rem',
          marginBottom: '2rem',
          flexWrap: 'wrap'
        }}>
          {['all', 'ops'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '0.6rem 1.25rem',
                borderRadius: '10px',
                border: '1px solid',
                borderColor: filter === cat ? 'var(--accent)' : 'var(--border-color)',
                background: filter === cat ? 'var(--accent)' : 'var(--bg-card)',
                color: filter === cat ? 'white' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'var(--transition)',
                textTransform: 'capitalize'
              }}
            >
              {cat === 'all' ? 'All Work' : 'Risk & Operations'}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '2rem'
        }} className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Top Category Badge & Icon */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {project.categoryLabel}
                </span>
                <div style={{
                  color: 'var(--text-muted)',
                  background: 'rgba(255,255,255,0.02)',
                  padding: '0.5rem',
                  borderRadius: '8px',
                  border: '1px solid var(--border-color)'
                }}>
                  {project.icon}
                </div>
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.25rem',
                fontWeight: 700,
                lineHeight: '1.3'
              }}>
                {project.title}
              </h3>

              {/* Brief */}
              <p style={{
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                flexGrow: 1,
                lineHeight: '1.5'
              }}>
                {project.brief}
              </p>

              {/* Tech Tags */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginTop: '0.5rem'
              }}>
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '0.75rem',
                      background: 'rgba(255, 255, 255, 0.03)',
                      color: 'var(--text-secondary)',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '6px',
                      border: '1px solid var(--border-color)'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <button
                onClick={() => setSelectedProject(project)}
                className="btn btn-secondary"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '0.6rem',
                  fontSize: '0.85rem',
                  marginTop: '0.75rem'
                }}
              >
                <BookOpen size={16} /> View Case Study
              </button>

            </div>
          ))}
        </div>

        {/* Premium Case Study Modal Overlay */}
        {selectedProject && (
          <div className="modal-overlay animate-fade-in" onClick={() => setSelectedProject(null)}>
            <div
              className="glass-panel modal-content"
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color-hover)',
                boxShadow: '0 20px 80px rgba(0, 242, 254, 0.15)'
              }}
            >
              
              {/* Close Button */}
              <button className="modal-close" onClick={() => setSelectedProject(null)}>
                <X size={24} />
              </button>

              {/* Header Info */}
              <span style={{
                fontSize: '0.75rem',
                color: 'var(--accent)',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {selectedProject.categoryLabel}
              </span>
              
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.75rem',
                fontWeight: 800,
                marginTop: '0.5rem',
                marginBottom: '1.25rem',
                lineHeight: '1.25'
              }}>
                {selectedProject.title}
              </h2>

              {/* Detailed Breakdown */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem' }}>
                
                {/* Problem */}
                <div>
                  <h4 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.4rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'hsl(350, 85%, 55%)' }}></span>
                    The Challenge
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                    {selectedProject.problem}
                  </p>
                </div>

                {/* My Approach */}
                <div>
                  <h4 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.4rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)' }}></span>
                    My Solution & Approach
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                    {selectedProject.approach}
                  </p>
                </div>

                {/* Key Results */}
                <div style={{
                  padding: '1.25rem',
                  borderRadius: '12px',
                  background: 'var(--glow)',
                  border: '1px solid rgba(var(--accent-rgb), 0.15)'
                }}>
                  <h4 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--accent)',
                    marginBottom: '0.4rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'hsl(140, 85%, 45%)' }}></span>
                    Key Achievements & Results
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 500, lineHeight: '1.5' }}>
                    {selectedProject.results}
                  </p>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
