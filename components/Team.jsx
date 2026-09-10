'use client';

const teamMembers = [
  {
    name: 'Zishan Deshmukh',
    role: 'Full-Stack Architect & AI Lead',
    tagline: 'Crafting scalable web backends, Next.js applications & AI workflows.',
    bio: 'Software engineer with deep expertise in full-stack web development, Generative AI pipelines, and computer vision systems. Experienced in designing enterprise B2B applications and high-throughput APIs.',
    image: '/images/zishan.png',
    imgStyle: { objectPosition: 'center 15%', objectFit: 'cover' },
    skills: ['Next.js 16 / React', 'FastAPI & Python', 'GenAI / RAG', 'PostgreSQL & Docker'],
    socials: [
      { icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/zishan-deshmukh-51236728a', label: 'LinkedIn' },
      { icon: 'fab fa-github', url: 'https://github.com/zishandeshmukh', label: 'GitHub' },
      { icon: 'fab fa-x-twitter', url: 'https://x.com/ZishanDesh68630', label: 'X (Twitter)' },
      { icon: 'fab fa-instagram', url: 'https://www.instagram.com/deshmukh_zishan786', label: 'Instagram' },
    ],
  },
  {
    name: 'Sahil Shikalgar',
    role: 'Product Strategist & Managing Director',
    tagline: 'Driving product-market fit, client success & rapid execution.',
    bio: 'Product strategist focused on technical project management, user-centric system design, and ensuring projects launch on time and on budget with exceptional business value.',
    image: '/images/sahil1.png',
    imgStyle: { objectPosition: 'center 15%', objectFit: 'cover' },
    skills: ['Product Architecture', 'Agile Scrum Lead', 'Client Operations', 'UI/UX Validation'],
    socials: [
      { icon: 'fab fa-whatsapp', url: 'https://wa.me/9049017096', label: 'WhatsApp' },
      { icon: 'fas fa-envelope', url: 'mailto:zishandeshmukh09@gmail.com', label: 'Email' },
    ],
  },
];

export default function Team() {
  return (
    <section id="team" className="team-section section-padding">
      <div className="centered">
        <span className="section-label">
          <i className="fas fa-user-group" style={{ fontSize: '0.65rem' }}></i>
          The Builders
        </span>
        <h2 className="section-title">
          Meet Your <span className="accent-gradient">Dedicated Dev Duo</span>
        </h2>
        <p className="section-subtitle">
          No interns, no offshore outsourcing. You partner directly with senior practitioners who own the code from start to finish.
        </p>
      </div>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card modern-card fade-in-up" key={index}>
            <div className="team-image-wrapper">
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                style={member.imgStyle || {}}
              />
              <div className="team-image-overlay" />
              <span className="team-badge-role">{member.role}</span>
            </div>

            <div className="team-info">
              <h3 className="team-name">{member.name}</h3>
              <p className="team-tagline">{member.tagline}</p>
              <p className="team-bio">{member.bio}</p>

              <div className="team-skills-chips">
                {member.skills.map((skill, sIdx) => (
                  <span className="team-skill-pill" key={sIdx}>
                    {skill}
                  </span>
                ))}
              </div>

              <div className="team-social">
                {member.socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    className="social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


