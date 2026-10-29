import React, { useState } from 'react';
import { BookOpen, X, ShieldCheck, Users, FileSpreadsheet } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 'customer-health',
      title: 'Customer Health & Feedback Operations',
      category: 'success',
      categoryLabel: 'Customer Success & Operations',
      brief: 'An anonymised, scenario-based case study connecting customer health signals, onboarding friction, and feedback to prioritised next steps.',
      tech: ['Excel', 'Customer Health Review', 'Customer Communication', 'Feedback Tracking'],
      icon: <Users size={20} />,
      problem: 'A sample set of customer accounts needed a consistent way to distinguish healthy engagement from adoption risk and organise follow-up. The case study uses an illustrative dataset rather than real customer records.',
      approach: 'Reviewed a 10-account sample and classified 5 as healthy, 2 for watch-list follow-up, and 3 as at risk. Prepared a prioritised 14-day action plan, tailored customer message templates, onboarding recommendations, and a feedback tracker for issue priority, ownership, response timelines, and recurring themes.',
      deliverables: 'Customer health segmentation, a 14-day intervention plan, customer communications, onboarding recommendations, and a feedback tracking workbook. The recommendations are proposals from a scenario-based exercise; implementation and business impact were not measured.',
      scopeNote: 'Anonymised case study. Original company and product names, labels, and identifying details have been removed.'
    },
    {
      id: 'risk-review',
      title: 'Risk Review & Exception Tracking',
      category: 'operations',
      categoryLabel: 'Risk & Operations',
      brief: 'A spreadsheet-led review framework for organising exception checks, documenting follow-up, and supporting structured risk reporting.',
      tech: ['Excel', 'Google Sheets', 'Data Quality', 'Risk Tracking'],
      icon: <ShieldCheck size={20} />,
      problem: 'Manual review work can make it difficult to keep exceptions, follow-up actions, and decision notes organised consistently.',
      approach: 'Structured the review concept around reference fields, exception flags, review status, and supporting notes so that checks and follow-up can be documented in a repeatable way. The portfolio description avoids live banking or customer data.',
      deliverables: 'A clearer review structure for exception tracking and documentation. No quantified improvement in review speed, fraud prevention, or financial outcomes is claimed.',
      scopeNote: 'Demonstration project description. No confidential customer or bank records are displayed.'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Work' },
    { key: 'success', label: 'Customer Success' },
    { key: 'operations', label: 'Operations & Analysis' }
  ];

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter((project) => project.category === filter);

  const closeProject = () => setSelectedProject(null);

  return (
    <section id="projects" style={{ padding: '2.75rem 0', background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="gradient-text">Selected Case Studies</h2>
          <p>Practical examples of customer health analysis, feedback operations, and risk-aware workflows</p>
        </div>

        <div style={{
          display: 'flex', justifyContent: 'center', gap: '0.75rem',
          marginBottom: '2rem', flexWrap: 'wrap'
        }}>
          {categories.map((category) => (
            <button
              key={category.key}
              type="button"
              onClick={() => setFilter(category.key)}
              aria-pressed={filter === category.key}
              style={{
                padding: '0.65rem 1.1rem', borderRadius: '10px', border: '1px solid',
                borderColor: filter === category.key ? 'var(--accent)' : 'var(--border-color)',
                background: filter === category.key ? 'var(--accent)' : 'var(--bg-card)',
                color: filter === category.key ? 'white' : 'var(--text-secondary)',
                fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer', transition: 'var(--transition)'
              }}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="projects-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 310px), 1fr))',
          gap: '1.5rem', alignItems: 'stretch'
        }}>
          {filteredProjects.map((project) => (
            <article key={project.id} className="glass-panel" style={{
              padding: '1.75rem', display: 'flex', flexDirection: 'column',
              gap: '1rem', position: 'relative', overflow: 'hidden'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                <span style={{
                  fontSize: '0.72rem', fontWeight: 700, color: 'var(--accent)',
                  textTransform: 'uppercase', letterSpacing: '0.05em'
                }}>{project.categoryLabel}</span>
                <div aria-hidden="true" style={{
                  color: 'var(--text-muted)', background: 'rgba(255,255,255,0.02)',
                  padding: '0.5rem', borderRadius: '8px', border: '1px solid var(--border-color)'
                }}>{project.icon}</div>
              </div>

              <h3 style={{
                fontFamily: 'var(--font-heading)', fontSize: '1.25rem',
                fontWeight: 700, lineHeight: 1.3
              }}>{project.title}</h3>

              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', flexGrow: 1, lineHeight: 1.6 }}>
                {project.brief}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {project.tech.map((tag) => (
                  <span key={tag} style={{
                    fontSize: '0.74rem', background: 'rgba(255,255,255,0.03)',
                    color: 'var(--text-secondary)', padding: '0.25rem 0.55rem',
                    borderRadius: '6px', border: '1px solid var(--border-color)'
                  }}>{tag}</span>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="btn btn-secondary"
                style={{ width: '100%', justifyContent: 'center', padding: '0.7rem', fontSize: '0.87rem', marginTop: '0.25rem' }}
              >
                <BookOpen size={16} /> View Case Study
              </button>
            </article>
          ))}
        </div>

        {selectedProject && (
          <div className="modal-overlay animate-fade-in" onClick={closeProject}>
            <div
              className="glass-panel modal-content"
              role="dialog"
              aria-modal="true"
              aria-labelledby="case-study-title"
              onClick={(event) => event.stopPropagation()}
              style={{
                background: 'var(--bg-secondary)', border: '1px solid var(--border-color-hover)',
                boxShadow: '0 20px 80px rgba(0, 242, 254, 0.15)'
              }}
            >
              <button className="modal-close" type="button" onClick={closeProject} aria-label="Close case study">
                <X size={24} />
              </button>

              <span style={{
                fontSize: '0.72rem', color: 'var(--accent)', fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: '0.05em'
              }}>{selectedProject.categoryLabel}</span>

              <h2 id="case-study-title" style={{
                fontFamily: 'var(--font-heading)', fontSize: '1.65rem', fontWeight: 800,
                marginTop: '0.5rem', marginBottom: '0.75rem', lineHeight: 1.25, paddingRight: '1.5rem'
              }}>{selectedProject.title}</h2>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
                {selectedProject.tech.map((tag) => (
                  <span key={tag} style={{
                    fontSize: '0.75rem', color: 'var(--text-secondary)', padding: '0.2rem 0.5rem',
                    borderRadius: '6px', border: '1px solid var(--border-color)'
                  }}>{tag}</span>
                ))}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, marginBottom: '0.4rem' }}>
                    The Challenge
                  </h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                    {selectedProject.problem}
                  </p>
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, marginBottom: '0.4rem' }}>
                    My Approach
                  </h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                    {selectedProject.approach}
                  </p>
                </div>
                <div style={{
                  padding: '1.1rem', borderRadius: '12px', background: 'var(--glow)',
                  border: '1px solid rgba(var(--accent-rgb), 0.15)'
                }}>
                  <h4 style={{
                    fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700,
                    color: 'var(--accent)', marginBottom: '0.4rem', display: 'flex',
                    alignItems: 'center', gap: '0.4rem'
                  }}><FileSpreadsheet size={16} /> Deliverables</h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-primary)', lineHeight: 1.65 }}>
                    {selectedProject.deliverables}
                  </p>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                  {selectedProject.scopeNote}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
