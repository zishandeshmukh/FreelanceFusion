'use client';

const comparisonData = [
  {
    feature: 'Direct Access to Senior Engineers',
    us: 'Yes — Direct chat with Zishan & Sahil',
    agency: 'No — Account managers & middle layers',
    freelancers: 'Varies — Often unverified',
  },
  {
    feature: 'Average MVP Turnaround',
    us: '10 to 14 Business Days',
    agency: '8 to 16 Weeks (Slow bureaucracy)',
    freelancers: 'Unpredictable / Frequent delays',
  },
  {
    feature: 'Pricing & Overhead',
    us: 'Transparent, milestone-based with 0 agency markup',
    agency: 'Extremely high (Pays for fancy offices & sales teams)',
    freelancers: 'Cheap upfront, expensive rework later',
  },
  {
    feature: 'Code Quality & Modern Tech',
    us: 'Production-ready Next.js 16, TypeScript, clean architecture',
    agency: 'Often outsourced to junior interns',
    freelancers: 'Inconsistent, spaghetti code',
  },
  {
    feature: 'Post-Launch Support',
    us: '30 Days Included Free Bug-Fix Warranty',
    agency: 'Expensive monthly retainer required',
    freelancers: 'Often disappear after last payment',
  },
  {
    feature: 'Source Code & IP Ownership',
    us: '100% Transferred to You on Day 1',
    agency: 'Complex IP clauses or vendor lock-in',
    freelancers: 'Often ambiguous repository access',
  },
];

const pillars = [
  {
    num: '01',
    title: 'Rapid Agile Sprints',
    desc: 'We work in weekly iterative cycles with live interactive previews. You see real working software every 48-72 hours.',
    icon: 'fas fa-bolt',
  },
  {
    num: '02',
    title: 'Zero Technical Debt',
    desc: 'Every endpoint, database schema, and component is built for production reliability with zero bloat or shortcuts.',
    icon: 'fas fa-shield-halved',
  },
  {
    num: '03',
    title: 'Direct Founder Communication',
    desc: 'No non-technical intermediaries. You collaborate directly with the builders via Slack/WhatsApp/Google Meet.',
    icon: 'fas fa-comments',
  },
  {
    num: '04',
    title: 'Business ROI Focus',
    desc: 'We don’t just write code — we optimize for conversion rates, user experience, and tangible business metrics.',
    icon: 'fas fa-chart-line',
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="why-section section-padding">
      <div className="centered">
        <span className="section-label">
          <i className="fas fa-scale-balanced" style={{ fontSize: '0.65rem' }}></i>
          The Advantage
        </span>
        <h2 className="section-title">
          Why Founders <span className="accent-gradient">Choose Us</span>
        </h2>
        <p className="section-subtitle">
          Get the execution speed of a dedicated pair of senior developers without the overhead of a sluggish agency.
        </p>
      </div>

      {/* 4 Value Pillars */}
      <div className="why-grid">
        {pillars.map((p, index) => (
          <div className="why-card modern-card fade-in-up" key={index}>
            <div className="why-card-top">
              <div className="why-number">{p.num}</div>
              <div className="why-icon">
                <i className={p.icon}></i>
              </div>
            </div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>

      {/* Agency Comparison Table */}
      <div className="comparison-wrapper glass-card fade-in-up">
        <div className="comparison-header">
          <h3>How We Stack Up</h3>
          <p>A transparent breakdown of why agile developer duos outdeliver traditional alternatives.</p>
        </div>

        <div className="comparison-table-scroll">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Factor</th>
                <th className="highlight-col">Softcloud (Us)</th>
                <th>Traditional Agency</th>
                <th>Random Freelancers</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, i) => (
                <tr key={i}>
                  <td className="feat-title">{row.feature}</td>
                  <td className="highlight-col">
                    <i className="fas fa-check-circle" style={{ color: 'var(--accent)', marginRight: '0.4rem' }}></i>
                    {row.us}
                  </td>
                  <td className="dimmed-col">{row.agency}</td>
                  <td className="dimmed-col">{row.freelancers}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

