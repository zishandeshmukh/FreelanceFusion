'use client';
import dynamic from 'next/dynamic';

const Scene3D = dynamic(() => import('./Scene3D'), { ssr: false });

export default function Hero() {
  const handleClick = (e, target) => {
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="hero">
      {/* Background visual overlay */}
      <div className="hero-video-bg">
        <div className="hero-grid-pattern" />
        <div className="hero-video-overlay" />
      </div>

      <div className="hero-section-inner">
        <div className="hero-content fade-in-up">
          <div className="hero-tag">
            <span className="hero-badge-dot pulse-dot"></span>
            AVAILABLE FOR Q3/Q4 PROJECTS — 2 SLOTS OPEN
          </div>

          <div className="hero-heading-wp">
            <h1>
              We Build Scalable<br />
              <span className="accent-gradient">AI, Web &amp; SaaS Products</span>
            </h1>
            <p className="hero-subtitle">
              Hi, we are <strong>Zishan</strong> &amp; <strong>Sahil</strong>. A senior full-stack &amp; AI developer duo.
              From conceptual design to battle-tested production deployment, we deliver high-performance software
              for ambitious founders and businesses.
            </p>
          </div>

          <div className="hero-cta">
            <a
              href="#contact"
              className="primary-button"
              onClick={(e) => handleClick(e, '#contact')}
            >
              Start a Project <i className="fas fa-arrow-right" style={{ marginLeft: '0.5rem', fontSize: '0.8rem' }}></i>
            </a>
            <a
              href="#projects"
              className="secondary-button"
              onClick={(e) => handleClick(e, '#projects')}
            >
              <i className="fas fa-layer-group" style={{ marginRight: '0.5rem' }}></i>
              View Live Case Studies
            </a>
            <a
              href="https://wa.me/917058789799?text=Hi%20Zishan%20and%20Sahil%2C%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20a%20project!"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-quick-btn"
              title="Chat directly on WhatsApp"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>

          <div className="hero-trusted-tags">
            <span>Specialized In:</span>
            <span className="trust-pill">Next.js 16</span>
            <span className="trust-pill">FastAPI / Python</span>
            <span className="trust-pill">Generative AI / LLMs</span>
            <span className="trust-pill">Computer Vision &amp; OCR</span>
            <span className="trust-pill">Cloud &amp; DevOps</span>
          </div>
        </div>

        <div className="hero-stats-bar">
          <div className="hero-stat-item">
            <span className="stats-number">15+</span>
            <span className="stats-label">PROJECTS DELIVERED</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat-item">
            <span className="stats-number">100%</span>
            <span className="stats-label">CLIENT SATISFACTION</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat-item">
            <span className="stats-number">10-14d</span>
            <span className="stats-label">RAPID MVP TURNAROUND</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat-item">
            <span className="stats-number">24/7</span>
            <span className="stats-label">DIRECT FOUNDER ACCESS</span>
          </div>
        </div>
      </div>
    </section>
  );
}

