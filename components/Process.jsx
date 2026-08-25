'use client';

const steps = [
  {
    num: '01',
    phase: 'Days 1 – 3',
    title: 'Discovery & System Architecture',
    desc: 'We deep dive into your business logic, map database schemas, design API contracts, and establish strict milestone deliverables.',
    icon: 'fas fa-compass-drafting',
    deliverables: ['System Architecture Diagram', 'Milestone Roadmap', 'Tech Stack Selection'],
  },
  {
    num: '02',
    phase: 'Days 4 – 7',
    title: 'Interactive UI/UX & Clickable Prototype',
    desc: 'We design high-converting, modern interfaces in Figma and validate user flows before committing to production code.',
    icon: 'fas fa-pen-ruler',
    deliverables: ['Full Component Design System', 'Interactive Figma Prototype', 'Design Review Call'],
  },
  {
    num: '03',
    phase: 'Weeks 2 – 3',
    title: 'Agile Sprints & Staging Previews',
    desc: 'We build with clean, tested Next.js & Python code. You receive live password-protected staging URLs updated every 48 hours.',
    icon: 'fas fa-code',
    deliverables: ['Live Staging URL', 'Continuous Git Commits', 'Weekly Progress Demo'],
  },
  {
    num: '04',
    phase: 'Week 4+',
    title: 'Launch, Code Handover & 30d Warranty',
    desc: 'Production deployment to Vercel/AWS with custom domains, SSL, database backups, complete IP handover, and 30 days free support.',
    icon: 'fas fa-rocket',
    deliverables: ['100% Repository Transfer', 'Production CI/CD Live', '30-Day Bugfix Guarantee'],
  },
];

export default function Process() {
  return (
    <section id="process" className="process-section section-padding">
      <div className="centered">
        <span className="section-label">
          <i className="fas fa-layer-group" style={{ fontSize: '0.65rem' }}></i>
          Predictable Delivery
        </span>
        <h2 className="section-title">
          From Concept to Production <span className="accent-gradient">in 4 Agile Steps</span>
        </h2>
        <p className="section-subtitle">
          A disciplined, battle-tested engineering process designed to eliminate guesswork, eliminate delays, and ship quality software.
        </p>
      </div>

      <div className="process-timeline-grid">
        {steps.map((step, index) => (
          <div className="process-card modern-card fade-in-up" key={index}>
            <div className="process-card-header">
              <div className="process-step-num">{step.num}</div>
              <span className="process-phase-badge">{step.phase}</span>
            </div>

            <div className="process-icon-box">
              <i className={step.icon}></i>
            </div>

            <h3 className="process-step-title">{step.title}</h3>
            <p className="process-step-desc">{step.desc}</p>

            <div className="process-deliverables">
              <span className="deliverables-title">Key Outputs:</span>
              <ul>
                {step.deliverables.map((d, dIdx) => (
                  <li key={dIdx}>
                    <i className="fas fa-circle-check"></i>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

