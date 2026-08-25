'use client';

export default function Footer() {
  const handleClick = (e, target) => {
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="logo" style={{ marginBottom: '0.8rem' }}>
            <div className="logo-icon">S</div>
            <div className="logo-text">
              <span>Softcloud</span>
              <span className="logo-badge">Dev Duo</span>
            </div>
          </div>
          <p className="footer-tagline">
            High-Performance Web, SaaS &amp; AI Engineering by Zishan Deshmukh &amp; Sahil Shikalgar.
          </p>
          <p className="footer-availability">
            <span className="pulse-dot"></span> Available for selective high-impact projects.
          </p>
        </div>

        <nav className="footer-nav">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#home" onClick={(e) => handleClick(e, '#home')}>Home</a></li>
            <li><a href="#services" onClick={(e) => handleClick(e, '#services')}>Services</a></li>
            <li><a href="#projects" onClick={(e) => handleClick(e, '#projects')}>Projects &amp; Case Studies</a></li>
            <li><a href="#estimator" onClick={(e) => handleClick(e, '#estimator')}>Project Estimator</a></li>
            <li><a href="#tech" onClick={(e) => handleClick(e, '#tech')}>Tech Stack</a></li>
            <li><a href="#why-us" onClick={(e) => handleClick(e, '#why-us')}>Why Choose Us</a></li>
            <li><a href="#team" onClick={(e) => handleClick(e, '#team')}>Meet the Team</a></li>
            <li><a href="#faq" onClick={(e) => handleClick(e, '#faq')}>FAQ</a></li>
            <li><a href="#contact" onClick={(e) => handleClick(e, '#contact')}>Contact &amp; Hire</a></li>
          </ul>
        </nav>

        <div className="footer-contact-block">
          <h4>Direct Connect</h4>
          <p><i className="fas fa-envelope" style={{ marginRight: '0.5rem', color: 'var(--accent)' }}></i> zishandeshmukh09@gmail.com</p>
          <p><i className="fab fa-whatsapp" style={{ marginRight: '0.5rem', color: 'var(--accent)' }}></i> +91 7058789799</p>
          <p><i className="fas fa-location-dot" style={{ marginRight: '0.5rem', color: 'var(--accent)' }}></i> Mumbai &amp; Pune, India</p>

          <div className="footer-social" style={{ marginTop: '1.2rem' }}>
            <a
              href="https://www.linkedin.com/in/zishan-deshmukh-51236728a"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/zishandeshmukh"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://x.com/ZishanDesh68630"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <i className="fab fa-x-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/deshmukh_zishan786"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Softcloud. Engineered with Next.js 16 &amp; React 19. All rights reserved.</p>
        <button className="back-to-top-btn" onClick={scrollToTop} aria-label="Back to top">
          <i className="fas fa-arrow-up"></i> Top
        </button>
      </div>
    </footer>
  );
}

