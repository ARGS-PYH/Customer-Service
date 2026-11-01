import React, { useMemo, useState } from 'react';
import {
  Activity, AlertTriangle, ArrowUpRight, CalendarDays, CheckCircle2, ChevronRight,
  CircleDot, Clock3, FileSpreadsheet, Layers, MessageSquareText, Search, ShieldCheck,
  Target, TrendingUp, Users, X
} from 'lucide-react';

const accounts = [
  { id: 'AC-101', name: 'Account 01 · Design Studio', segment: 'Small team', adoption: 92, engagement: 88, onboarding: 100, supportPressure: 18, lastTouch: 'Yesterday', nextAction: 'Quarterly value review' },
  { id: 'AC-102', name: 'Account 02 · Service Group', segment: 'Growing team', adoption: 84, engagement: 80, onboarding: 100, supportPressure: 25, lastTouch: '2 days ago', nextAction: 'Share advanced workflow tips' },
  { id: 'AC-103', name: 'Account 03 · Operations Co.', segment: 'Mid-market', adoption: 78, engagement: 83, onboarding: 90, supportPressure: 35, lastTouch: '3 days ago', nextAction: 'Confirm wider team adoption' },
  { id: 'AC-104', name: 'Account 04 · Learning Hub', segment: 'Small team', adoption: 76, engagement: 77, onboarding: 88, supportPressure: 31, lastTouch: '2 days ago', nextAction: 'Review feature discovery' },
  { id: 'AC-105', name: 'Account 05 · Field Services', segment: 'Growing team', adoption: 60, engagement: 63, onboarding: 80, supportPressure: 45, lastTouch: '5 days ago', nextAction: 'Offer a guided workflow session' },
  { id: 'AC-106', name: 'Account 06 · Consulting Team', segment: 'Mid-market', adoption: 56, engagement: 58, onboarding: 70, supportPressure: 50, lastTouch: '6 days ago', nextAction: 'Check setup and user permissions' },
  { id: 'AC-107', name: 'Account 07 · Retail Network', segment: 'Growing team', adoption: 42, engagement: 38, onboarding: 60, supportPressure: 72, lastTouch: '9 days ago', nextAction: 'Contact customer and validate blockers' },
  { id: 'AC-108', name: 'Account 08 · Growth Agency', segment: 'Small team', adoption: 31, engagement: 44, onboarding: 40, supportPressure: 80, lastTouch: '12 days ago', nextAction: 'Arrange onboarding recovery call' }
].map((account) => {
  const score = Math.round(
    account.adoption * 0.35 +
    account.engagement * 0.30 +
    account.onboarding * 0.20 +
    (100 - account.supportPressure) * 0.15
  );
  return { ...account, score, health: score >= 75 ? 'Healthy' : score >= 50 ? 'Watch' : 'At risk' };
});

const feedbackItems = [
  { id: 'FB-204', account: 'Account 07 · Retail Network', topic: 'Workflow setup is unclear', area: 'Onboarding', priority: 'High', status: 'Open', owner: 'Customer Success' },
  { id: 'FB-205', account: 'Account 08 · Growth Agency', topic: 'First-use configuration blocker', area: 'Product access', priority: 'Critical', status: 'In progress', owner: 'Product + CS' },
  { id: 'FB-206', account: 'Account 05 · Field Services', topic: 'Report export guidance requested', area: 'Education', priority: 'Medium', status: 'Open', owner: 'Customer Success' },
  { id: 'FB-207', account: 'Account 02 · Service Group', topic: 'User access permissions clarified', area: 'Account setup', priority: 'Low', status: 'Resolved', owner: 'Operations' },
  { id: 'FB-208', account: 'Account 06 · Consulting Team', topic: 'Automation setup needs review', area: 'Product adoption', priority: 'High', status: 'In progress', owner: 'Product + CS' },
  { id: 'FB-209', account: 'Account 07 · Retail Network', topic: 'Team training follow-up requested', area: 'Education', priority: 'Medium', status: 'Open', owner: 'Customer Success' }
];

const successPlan = [
  { period: 'Days 1–2', title: 'Triage and validate', description: 'Contact the two at-risk accounts, confirm their current blockers, and agree on the most important customer outcome.', owner: 'Customer Success', icon: <Search size={17} /> },
  { period: 'Days 3–4', title: 'Repair onboarding gaps', description: 'Walk through setup, access, and configuration with affected users. Record unresolved product issues with clear examples.', owner: 'Customer Success + Product', icon: <Layers size={17} /> },
  { period: 'Days 5–7', title: 'Support first value', description: 'Guide each account through one useful end-to-end workflow and confirm that relevant users can complete it.', owner: 'Customer Success', icon: <Target size={17} /> },
  { period: 'Days 8–10', title: 'Close the feedback loop', description: 'Review recurring themes, assign owners, communicate next steps, and distinguish education needs from product blockers.', owner: 'Operations + Product', icon: <MessageSquareText size={17} /> },
  { period: 'Days 11–14', title: 'Review signals and agree next steps', description: 'Revisit adoption, engagement, onboarding completion, and support pressure. Document remaining risks and schedule the next review.', owner: 'Customer Success', icon: <TrendingUp size={17} /> }
];

const healthColor = (health) => health === 'Healthy' ? '#27b58a' : health === 'Watch' ? '#d49b42' : '#df6a72';
const scoreColor = (score) => score >= 75 ? '#27b58a' : score >= 50 ? '#d49b42' : '#df6a72';

function MetricCard({ label, value, detail, icon: Icon }) {
  return (
    <div className="cs-metric">
      <div className="cs-metric-top"><span>{label}</span><Icon size={17} aria-hidden="true" /></div>
      <strong>{value}</strong>
      <small>{detail}</small>
    </div>
  );
}

function StatusPill({ value }) {
  const color = value === 'Healthy' || value === 'Resolved' ? '#27b58a'
    : value === 'Watch' || value === 'In progress' || value === 'Medium' ? '#d49b42'
    : value === 'Critical' || value === 'At risk' || value === 'High' ? '#df6a72' : 'var(--text-muted)';
  return <span className="cs-status" style={{ color, borderColor: color + '55', background: color + '15' }}>{value}</span>;
}

function DashboardCaseStudy() {
  const [tab, setTab] = useState('overview');
  const [accountFilter, setAccountFilter] = useState('All');
  const [accountSearch, setAccountSearch] = useState('');
  const [selectedAccountId, setSelectedAccountId] = useState('AC-107');
  const [feedbackFilter, setFeedbackFilter] = useState('All');
  const [feedbackSearch, setFeedbackSearch] = useState('');

  const counts = useMemo(() => ({
    Healthy: accounts.filter((account) => account.health === 'Healthy').length,
    Watch: accounts.filter((account) => account.health === 'Watch').length,
    'At risk': accounts.filter((account) => account.health === 'At risk').length
  }), []);
  const averageScore = Math.round(accounts.reduce((sum, account) => sum + account.score, 0) / accounts.length);
  const selectedAccount = accounts.find((account) => account.id === selectedAccountId) || accounts[0];

  const visibleAccounts = accounts.filter((account) => {
    const matchesFilter = accountFilter === 'All' || account.health === accountFilter;
    const term = accountSearch.toLowerCase();
    return matchesFilter && (!term || account.name.toLowerCase().includes(term) || account.id.toLowerCase().includes(term));
  });

  const visibleFeedback = feedbackItems.filter((item) => {
    const matchesStatus = feedbackFilter === 'All' || item.status === feedbackFilter;
    const term = feedbackSearch.toLowerCase();
    const matchesSearch = !term || [item.id, item.account, item.topic, item.area, item.owner].some((field) => field.toLowerCase().includes(term));
    return matchesStatus && matchesSearch;
  });

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <Activity size={16} /> },
    { id: 'accounts', label: 'Account health', icon: <Users size={16} /> },
    { id: 'plan', label: '14-day plan', icon: <CalendarDays size={16} /> },
    { id: 'feedback', label: 'Feedback tracker', icon: <MessageSquareText size={16} /> }
  ];

  return (
    <div className="cs-dashboard">
      <div className="cs-disclosure">
        <ShieldCheck size={17} />
        <span><strong>Independent demonstration.</strong> All account names, records, health indicators, and feedback examples are fictional and were created for this portfolio project.</span>
      </div>

      <div className="cs-dashboard-heading">
        <div>
          <span className="cs-eyebrow">CUSTOMER SUCCESS WORKSPACE</span>
          <h3>Customer health &amp; feedback operations</h3>
          <p>A sample SaaS portfolio scenario · 8 fictional accounts · Illustrative indicators only</p>
        </div>
        <span className="cs-sample-label"><CircleDot size={12} /> DEMO DATA</span>
      </div>

      <div className="cs-metrics-grid">
        <MetricCard label="Accounts reviewed" value={accounts.length} detail="Synthetic account sample" icon={Users} />
        <MetricCard label="Average health" value={averageScore + '/100'} detail="Weighted sample score" icon={Activity} />
        <MetricCard label="Watch list" value={counts.Watch} detail="Needs planned follow-up" icon={Clock3} />
        <MetricCard label="At risk" value={counts['At risk']} detail="Needs priority review" icon={AlertTriangle} />
      </div>

      <div className="cs-tab-bar" role="tablist" aria-label="Customer success dashboard sections">
        {tabs.map((item) => (
          <button key={item.id} type="button" role="tab" aria-selected={tab === item.id} className={tab === item.id ? 'active' : ''} onClick={() => setTab(item.id)}>
            {item.icon}<span>{item.label}</span>
          </button>
        ))}
      </div>

      {tab === 'overview' && (
        <div className="cs-panel-grid">
          <section className="cs-panel">
            <div className="cs-panel-heading"><div><h4>Portfolio health distribution</h4><p>Accounts grouped using the sample scoring rules</p></div><Activity size={18} /></div>
            <div className="cs-distribution">
              {['Healthy', 'Watch', 'At risk'].map((health) => (
                <div className="cs-distribution-row" key={health}>
                  <div className="cs-distribution-label"><span className="cs-dot" style={{ background: healthColor(health) }} />{health}<strong>{counts[health]}</strong></div>
                  <div className="cs-progress"><span style={{ width: (counts[health] / accounts.length * 100) + '%', background: healthColor(health) }} /></div>
                  <small>{Math.round(counts[health] / accounts.length * 100)}%</small>
                </div>
              ))}
            </div>
            <div className="cs-score-note">
              <strong>How the sample score works</strong>
              <p>Adoption 35% · Engagement 30% · Onboarding completion 20% · Support pressure 15% (reverse-scored).</p>
              <p>Healthy: 75–100 · Watch: 50–74 · At risk: below 50.</p>
            </div>
          </section>

          <section className="cs-panel">
            <div className="cs-panel-heading"><div><h4>Priority review</h4><p>Suggested next actions from the sample signals</p></div><AlertTriangle size={18} /></div>
            {accounts.filter((account) => account.health === 'At risk').map((account) => (
              <button className="cs-priority-item" key={account.id} type="button" onClick={() => { setSelectedAccountId(account.id); setTab('accounts'); }}>
                <span className="cs-priority-score" style={{ color: scoreColor(account.score) }}>{account.score}</span>
                <span className="cs-priority-copy"><strong>{account.name}</strong><small>{account.nextAction}</small></span>
                <ChevronRight size={17} />
              </button>
            ))}
            <div className="cs-recommendation"><strong>Recommended sequence</strong><p>Validate the root cause first, separate training gaps from product defects, then agree a customer-owned next step.</p></div>
          </section>
        </div>
      )}

      {tab === 'accounts' && (
        <div className="cs-account-layout">
          <section className="cs-panel cs-account-list-panel">
            <div className="cs-panel-heading"><div><h4>Account health register</h4><p>Select an account to inspect its sample signals</p></div><Users size={18} /></div>
            <div className="cs-controls">
              <label className="cs-search"><Search size={15} /><input value={accountSearch} onChange={(event) => setAccountSearch(event.target.value)} placeholder="Search accounts" aria-label="Search accounts" /></label>
              <select value={accountFilter} onChange={(event) => setAccountFilter(event.target.value)} aria-label="Filter account health">
                <option>All</option><option>Healthy</option><option>Watch</option><option>At risk</option>
              </select>
            </div>
            <div className="cs-account-list">
              {visibleAccounts.map((account) => (
                <button key={account.id} type="button" onClick={() => setSelectedAccountId(account.id)} className={'cs-account-row ' + (selectedAccountId === account.id ? 'selected' : '')}>
                  <span className="cs-account-main"><strong>{account.name}</strong><small>{account.id} · {account.segment}</small></span>
                  <span className="cs-account-score" style={{ color: scoreColor(account.score) }}>{account.score}</span>
                  <StatusPill value={account.health} />
                </button>
              ))}
              {visibleAccounts.length === 0 && <p className="cs-empty">No accounts match that search.</p>}
            </div>
          </section>

          <section className="cs-panel cs-account-detail">
            <div className="cs-panel-heading">
              <div><h4>Account snapshot</h4><p>{selectedAccount.id} · Synthetic profile</p></div>
              <span className="cs-large-score" style={{ color: scoreColor(selectedAccount.score) }}>{selectedAccount.score}<small>/100</small></span>
            </div>
            <h5>{selectedAccount.name}</h5>
            <div className="cs-health-line"><StatusPill value={selectedAccount.health} /><span>Last touch: {selectedAccount.lastTouch}</span></div>
            {[
              ['Product adoption', selectedAccount.adoption],
              ['Engagement', selectedAccount.engagement],
              ['Onboarding completion', selectedAccount.onboarding],
              ['Support pressure', selectedAccount.supportPressure]
            ].map(([label, value]) => (
              <div className="cs-signal" key={label}>
                <div><span>{label}</span><strong>{value}%</strong></div>
                <div className="cs-progress"><span style={{ width: value + '%', background: label === 'Support pressure' ? '#d49b42' : 'var(--accent)' }} /></div>
              </div>
            ))}
            <div className="cs-next-action"><span>Suggested next action</span><strong>{selectedAccount.nextAction}</strong></div>
            <small className="cs-method-note">These sample values illustrate a repeatable review method; they are not customer telemetry or measured business results.</small>
          </section>
        </div>
      )}

      {tab === 'plan' && (
        <section className="cs-panel">
          <div className="cs-panel-heading"><div><h4>14-day customer success plan</h4><p>A proposed intervention sequence for accounts requiring attention</p></div><CalendarDays size={18} /></div>
          <div className="cs-plan-list">
            {successPlan.map((step, index) => (
              <div className="cs-plan-step" key={step.period}>
                <div className="cs-plan-marker">{step.icon}</div>
                <div className="cs-plan-body">
                  <div className="cs-plan-meta"><span>{step.period}</span><small>STEP 0{index + 1}</small></div>
                  <h5>{step.title}</h5><p>{step.description}</p><small className="cs-owner">Owner: {step.owner}</small>
                </div>
              </div>
            ))}
          </div>
          <p className="cs-method-note">This is a suggested playbook, not a record of an intervention delivered. Progress and outcomes would be measured during a real customer engagement.</p>
        </section>
      )}

      {tab === 'feedback' && (
        <section className="cs-panel">
          <div className="cs-panel-heading"><div><h4>Customer feedback register</h4><p>Illustrative issue ownership, priority, and follow-up status</p></div><FileSpreadsheet size={18} /></div>
          <div className="cs-controls cs-feedback-controls">
            <label className="cs-search"><Search size={15} /><input value={feedbackSearch} onChange={(event) => setFeedbackSearch(event.target.value)} placeholder="Search feedback" aria-label="Search feedback" /></label>
            <select value={feedbackFilter} onChange={(event) => setFeedbackFilter(event.target.value)} aria-label="Filter feedback status">
              <option>All</option><option>Open</option><option>In progress</option><option>Resolved</option>
            </select>
          </div>
          <div className="cs-feedback-list">
            {visibleFeedback.map((item) => (
              <article className="cs-feedback-row" key={item.id}>
                <div className="cs-feedback-id">{item.id}<small>{item.area}</small></div>
                <div className="cs-feedback-copy"><strong>{item.topic}</strong><small>{item.account}</small><small>Owner: {item.owner}</small></div>
                <div className="cs-feedback-tags"><StatusPill value={item.priority} /><StatusPill value={item.status} /></div>
              </article>
            ))}
            {visibleFeedback.length === 0 && <p className="cs-empty">No feedback items match that search.</p>}
          </div>
        </section>
      )}
    </div>
  );
}

function ProjectCard({ project, onOpen }) {
  return (
    <article className="glass-panel cs-project-card">
      <div className="cs-project-top"><span className="cs-eyebrow">{project.categoryLabel}</span><span className="cs-project-icon">{project.icon}</span></div>
      <h3>{project.title}</h3>
      <p>{project.brief}</p>
      <div className="cs-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      <button type="button" className="btn btn-secondary cs-open-project" onClick={onOpen}>{project.actionLabel} <ArrowUpRight size={16} /></button>
    </article>
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const projects = [
    {
      id: 'customer-health',
      title: 'Customer Health & Feedback Operations',
      categoryLabel: 'Interactive customer success case study',
      brief: 'Explore a fictional SaaS customer portfolio, inspect health signals, review a proposed 14-day success plan, and filter a feedback operations register.',
      tags: ['Customer Health', 'Onboarding', 'Feedback Operations', 'Interactive Dashboard'],
      icon: <Activity size={20} />,
      actionLabel: 'Explore interactive case study',
      interactive: true
    },
    {
      id: 'product-operations',
      title: 'Digital Product Testing & Provider Onboarding',
      categoryLabel: 'Digital product operations',
      brief: 'A practical overview of product checks, user feedback, service-provider onboarding, verification, and operational workflow contributions.',
      tags: ['Product Testing', 'User Feedback', 'Onboarding', 'Service Operations'],
      icon: <Layers size={20} />,
      actionLabel: 'View project details',
      interactive: false,
      problem: 'Digital service platforms need clear feedback loops between users, providers, product checks, and day-to-day operations.',
      approach: 'At Peregrine Solution, I test product features, note issues encountered during hands-on use, engage with users to understand friction, support service-provider onboarding and verification, and contribute to workflows that help track and follow up on service issues.',
      deliverables: 'Product observations, user feedback, onboarding support, and operational workflow contributions. No unsupported adoption, revenue, SEO, or customer-retention results are claimed.',
      scopeNote: 'This summary reflects responsibilities at Peregrine Solution and does not disclose confidential product or customer information.'
    }
  ];

  return (
    <section id="projects" className="cs-projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="gradient-text">Selected Case Studies</h2>
          <p>How I approach customer health, feedback, onboarding, and digital product operations</p>
        </div>

        <div className="cs-projects-grid">
          {projects.map((project) => <ProjectCard key={project.id} project={project} onOpen={() => setActiveProject(project)} />)}
        </div>

        {activeProject && (
          <div className="modal-overlay cs-modal-overlay" onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveProject(null); }}>
            <div className="glass-panel modal-content cs-modal-content" role="dialog" aria-modal="true" aria-labelledby="active-project-title">
              <button className="modal-close cs-modal-close" type="button" onClick={() => setActiveProject(null)} aria-label="Close case study"><X size={23} /></button>
              <div className="cs-modal-heading">
                <span className="cs-eyebrow">{activeProject.categoryLabel}</span>
                <h2 id="active-project-title">{activeProject.title}</h2>
              </div>
              {activeProject.interactive ? (
                <DashboardCaseStudy />
              ) : (
                <div className="cs-project-detail">
                  <section><h3>The context</h3><p>{activeProject.problem}</p></section>
                  <section><h3>My contribution</h3><p>{activeProject.approach}</p></section>
                  <section><h3>Work demonstrated</h3><p>{activeProject.deliverables}</p></section>
                  <p className="cs-method-note">{activeProject.scopeNote}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <style>{`
        .cs-projects-section { padding: 3rem 0; background: var(--bg-secondary); }
        .cs-projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr)); gap: 1.5rem; align-items: stretch; }
        .cs-project-card { padding: 1.65rem; display: flex; flex-direction: column; gap: 1rem; min-width: 0; }
        .cs-project-top { display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
        .cs-eyebrow { color: var(--accent); font-size: .69rem; font-weight: 800; letter-spacing: .09em; text-transform: uppercase; }
        .cs-project-icon { display: grid; place-items: center; width: 40px; height: 40px; border-radius: 11px; border: 1px solid var(--border-color); color: var(--accent); background: var(--bg-secondary); flex: 0 0 auto; }
        .cs-project-card h3 { font: 700 1.25rem/1.3 var(--font-heading); }
        .cs-project-card > p { color: var(--text-secondary); font-size: .9rem; line-height: 1.65; flex: 1; }
        .cs-tags { display: flex; flex-wrap: wrap; gap: .45rem; }
        .cs-tags span { color: var(--text-muted); border: 1px solid var(--border-color); border-radius: 6px; padding: .25rem .5rem; font-size: .72rem; }
        .cs-open-project { width: 100%; justify-content: center; margin-top: .3rem; }
        .cs-modal-overlay { align-items: flex-start; overflow-y: auto; }
        .cs-modal-content { width: min(1120px, 100%); max-width: 1120px; max-height: none; min-height: 70vh; margin: 1rem auto; padding: clamp(1.15rem, 3vw, 2rem); overflow: visible; }
        .cs-modal-close { position: sticky; float: right; top: 0; z-index: 5; margin: -.35rem -.35rem 0 1rem; }
        .cs-modal-heading { padding: .2rem 2.4rem 1rem 0; }
        .cs-modal-heading h2 { font: 800 clamp(1.35rem, 3vw, 1.8rem)/1.2 var(--font-heading); margin-top: .35rem; }
        .cs-dashboard { clear: both; display: flex; flex-direction: column; gap: 1rem; color: var(--text-primary); }
        .cs-disclosure { display: flex; gap: .65rem; align-items: flex-start; padding: .8rem .95rem; border-radius: 10px; background: var(--glow); border: 1px solid var(--border-color-hover); color: var(--text-secondary); font-size: .78rem; line-height: 1.55; }
        .cs-disclosure svg { flex: 0 0 auto; color: var(--accent); margin-top: 1px; }
        .cs-disclosure strong { color: var(--text-primary); }
        .cs-dashboard-heading { display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; flex-wrap: wrap; }
        .cs-dashboard-heading h3 { font: 700 clamp(1.15rem, 2.4vw, 1.45rem)/1.25 var(--font-heading); margin: .2rem 0; }
        .cs-dashboard-heading p { font-size: .78rem; color: var(--text-muted); }
        .cs-sample-label { display: inline-flex; align-items: center; gap: .35rem; color: var(--accent); border: 1px solid var(--border-color-hover); border-radius: 999px; padding: .35rem .6rem; font-size: .65rem; font-weight: 800; letter-spacing: .06em; }
        .cs-metrics-grid { display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap: .75rem; }
        .cs-metric { padding: .85rem .9rem; border: 1px solid var(--border-color); border-radius: 12px; background: var(--bg-card); min-width: 0; }
        .cs-metric-top { display: flex; align-items: center; justify-content: space-between; gap: .4rem; color: var(--text-muted); font-size: .68rem; }
        .cs-metric-top svg { color: var(--accent); flex: 0 0 auto; }
        .cs-metric strong { display: block; font: 800 1.55rem/1.3 var(--font-heading); margin: .3rem 0 .1rem; }
        .cs-metric small { color: var(--text-muted); font-size: .66rem; }
        .cs-tab-bar { display: flex; gap: .45rem; overflow-x: auto; padding-bottom: .2rem; border-bottom: 1px solid var(--border-color); }
        .cs-tab-bar button { display: inline-flex; align-items: center; justify-content: center; gap: .45rem; white-space: nowrap; border: 1px solid transparent; border-radius: 9px 9px 0 0; padding: .7rem .85rem; color: var(--text-muted); background: transparent; font: 600 .76rem var(--font-body); cursor: pointer; }
        .cs-tab-bar button.active { color: var(--accent); border-color: var(--border-color); border-bottom-color: var(--bg-secondary); background: var(--bg-card); }
        .cs-panel-grid { display: grid; grid-template-columns: 1fr 1fr; gap: .85rem; }
        .cs-panel { padding: 1rem; border: 1px solid var(--border-color); border-radius: 13px; background: var(--bg-card); min-width: 0; }
        .cs-panel-heading { display: flex; justify-content: space-between; align-items: flex-start; gap: .75rem; margin-bottom: .9rem; }
        .cs-panel-heading h4 { font: 700 .95rem var(--font-heading); }
        .cs-panel-heading p { color: var(--text-muted); font-size: .7rem; margin-top: .2rem; }
        .cs-panel-heading > svg { color: var(--accent); flex: 0 0 auto; }
        .cs-distribution { display: flex; flex-direction: column; gap: .85rem; padding: .3rem 0 .9rem; }
        .cs-distribution-row { display: grid; grid-template-columns: 105px 1fr 38px; align-items: center; gap: .6rem; }
        .cs-distribution-label { display: flex; align-items: center; gap: .4rem; font-size: .73rem; color: var(--text-secondary); }
        .cs-distribution-label strong { margin-left: auto; color: var(--text-primary); }
        .cs-dot { width: 7px; height: 7px; border-radius: 50%; flex: 0 0 auto; }
        .cs-progress { height: 7px; background: var(--border-color); border-radius: 999px; overflow: hidden; }
        .cs-progress span { display: block; height: 100%; border-radius: inherit; }
        .cs-distribution-row > small { color: var(--text-muted); text-align: right; font-size: .67rem; }
        .cs-score-note { border-top: 1px solid var(--border-color); padding-top: .8rem; }
        .cs-score-note strong, .cs-recommendation strong { font-size: .75rem; }
        .cs-score-note p, .cs-recommendation p { color: var(--text-muted); font-size: .7rem; line-height: 1.55; margin-top: .3rem; }
        .cs-priority-item { width: 100%; display: flex; align-items: center; gap: .7rem; padding: .75rem 0; border: 0; border-bottom: 1px solid var(--border-color); color: inherit; text-align: left; background: transparent; cursor: pointer; }
        .cs-priority-score { font: 800 1.2rem var(--font-heading); min-width: 32px; }
        .cs-priority-copy { display: flex; flex-direction: column; gap: .18rem; min-width: 0; flex: 1; }
        .cs-priority-copy strong { font-size: .75rem; }
        .cs-priority-copy small { color: var(--text-muted); font-size: .67rem; line-height: 1.4; }
        .cs-priority-item > svg { color: var(--text-muted); }
        .cs-recommendation { margin-top: .8rem; padding: .75rem; border-radius: 9px; background: var(--glow); }
        .cs-account-layout { display: grid; grid-template-columns: 1.08fr .92fr; gap: .85rem; align-items: start; }
        .cs-controls { display: flex; gap: .55rem; margin-bottom: .75rem; }
        .cs-search { display: flex; align-items: center; gap: .4rem; flex: 1; min-width: 0; padding: .5rem .65rem; border: 1px solid var(--border-color); border-radius: 8px; color: var(--text-muted); background: var(--bg-secondary); }
        .cs-search input { width: 100%; border: 0; outline: 0; color: var(--text-primary); background: transparent; font: .72rem var(--font-body); min-width: 0; }
        .cs-controls select { max-width: 130px; border: 1px solid var(--border-color); border-radius: 8px; padding: .45rem .5rem; color: var(--text-primary); background: var(--bg-secondary); font: .7rem var(--font-body); }
        .cs-account-list { display: flex; flex-direction: column; gap: .35rem; }
        .cs-account-row { width: 100%; display: flex; align-items: center; gap: .45rem; padding: .65rem; border: 1px solid transparent; border-radius: 9px; color: inherit; background: transparent; cursor: pointer; text-align: left; }
        .cs-account-row:hover, .cs-account-row.selected { border-color: var(--border-color-hover); background: var(--glow); }
        .cs-account-main { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: .12rem; }
        .cs-account-main strong { font-size: .7rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .cs-account-main small { color: var(--text-muted); font-size: .62rem; }
        .cs-account-score { font: 800 .95rem var(--font-heading); }
        .cs-status { display: inline-flex; align-items: center; border: 1px solid; border-radius: 999px; padding: .18rem .42rem; white-space: nowrap; font-size: .59rem; font-weight: 700; }
        .cs-large-score { font: 800 1.8rem var(--font-heading); white-space: nowrap; }
        .cs-large-score small { color: var(--text-muted); font-size: .65rem; }
        .cs-account-detail h5 { font: 700 .96rem var(--font-heading); margin-bottom: .3rem; }
        .cs-health-line { display: flex; align-items: center; gap: .6rem; flex-wrap: wrap; color: var(--text-muted); font-size: .66rem; margin-bottom: .9rem; }
        .cs-signal { margin: .75rem 0; }
        .cs-signal > div:first-child { display: flex; justify-content: space-between; gap: .5rem; margin-bottom: .3rem; color: var(--text-secondary); font-size: .68rem; }
        .cs-signal strong { color: var(--text-primary); }
        .cs-next-action { display: flex; flex-direction: column; gap: .25rem; margin-top: 1rem; padding: .75rem; border-radius: 9px; background: var(--glow); }
        .cs-next-action span { color: var(--text-muted); text-transform: uppercase; letter-spacing: .05em; font-size: .59rem; font-weight: 800; }
        .cs-next-action strong { font-size: .72rem; line-height: 1.45; }
        .cs-method-note { display: block; color: var(--text-muted); font-size: .67rem; line-height: 1.55; margin-top: .85rem; }
        .cs-plan-list { display: flex; flex-direction: column; gap: .2rem; }
        .cs-plan-step { display: grid; grid-template-columns: 34px 1fr; gap: .8rem; position: relative; }
        .cs-plan-step:not(:last-child)::after { content: ''; position: absolute; left: 16px; top: 35px; bottom: -5px; width: 1px; background: var(--border-color-hover); }
        .cs-plan-marker { width: 34px; height: 34px; display: grid; place-items: center; color: var(--accent); border-radius: 10px; border: 1px solid var(--border-color-hover); background: var(--bg-secondary); z-index: 1; }
        .cs-plan-body { padding: .1rem 0 1.05rem; }
        .cs-plan-meta { display: flex; justify-content: space-between; gap: .5rem; color: var(--accent); font-size: .66rem; font-weight: 800; }
        .cs-plan-meta small { color: var(--text-muted); font-size: .58rem; letter-spacing: .06em; }
        .cs-plan-body h5 { font: 700 .88rem var(--font-heading); margin: .2rem 0; }
        .cs-plan-body p { color: var(--text-secondary); font-size: .73rem; line-height: 1.55; }
        .cs-owner { display: inline-block; margin-top: .3rem; color: var(--text-muted); font-size: .65rem; }
        .cs-feedback-list { display: flex; flex-direction: column; }
        .cs-feedback-row { display: grid; grid-template-columns: 65px minmax(0,1fr) auto; gap: .7rem; align-items: center; padding: .75rem .1rem; border-top: 1px solid var(--border-color); }
        .cs-feedback-id { color: var(--accent); font: 700 .68rem var(--font-heading); }
        .cs-feedback-id small { display: block; color: var(--text-muted); font: .6rem var(--font-body); margin-top: .2rem; }
        .cs-feedback-copy { display: flex; flex-direction: column; gap: .16rem; min-width: 0; }
        .cs-feedback-copy strong { font-size: .72rem; }
        .cs-feedback-copy small { color: var(--text-muted); font-size: .62rem; overflow-wrap: anywhere; }
        .cs-feedback-tags { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: .3rem; }
        .cs-empty { color: var(--text-muted); padding: 1rem; font-size: .75rem; text-align: center; }
        .cs-project-detail { display: flex; flex-direction: column; gap: 1rem; }
        .cs-project-detail h3 { font: 700 1rem var(--font-heading); margin-bottom: .3rem; }
        .cs-project-detail p { color: var(--text-secondary); font-size: .86rem; line-height: 1.65; }
        @media (max-width: 780px) {
          .cs-metrics-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .cs-panel-grid, .cs-account-layout { grid-template-columns: 1fr; }
          .cs-modal-content { padding: 1rem; }
          .cs-tab-bar button { padding: .65rem .72rem; }
        }
        @media (max-width: 480px) {
          .cs-modal-overlay { padding: .35rem; }
          .cs-modal-content { margin: .35rem auto; }
          .cs-metric { padding: .7rem; }
          .cs-metric strong { font-size: 1.3rem; }
          .cs-distribution-row { grid-template-columns: 95px 1fr 32px; gap: .4rem; }
          .cs-account-row { flex-wrap: wrap; }
          .cs-feedback-row { grid-template-columns: 58px minmax(0,1fr); }
          .cs-feedback-tags { grid-column: 2; justify-content: flex-start; }
          .cs-controls { flex-wrap: wrap; }
          .cs-controls select { flex: 0 0 100%; max-width: none; }
        }
      `}</style>
    </section>
  );
}
