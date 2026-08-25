'use client';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, target) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Work' },
    { href: '#estimator', label: 'Estimator' },
    { href: '#tech', label: 'Stack' },
    { href: '#why-us', label: 'Why Us' },
    { href: '#team', label: 'Team' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
        <a href="#home" className="logo" onClick={(e) => handleNavClick(e, '#home')}>
          <div className="logo-icon">S</div>
          <div className="logo-text">
            <span>Softcloud</span>
            <span className="logo-badge">Dev Duo</span>
          </div>
        </a>

        <nav>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={(e) => handleNavClick(e, item.href)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-cta">
          <a
            href="#contact"
            className="btn btn-primary nav-talk-btn"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            <span className="pulse-dot"></span>
            Hire Us
          </a>
        </div>

        <button
          className="hamburger"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <i className="fas fa-bars"></i>
        </button>
      </header>

      <div className={`mobile-menu ${mobileOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <div className="logo">
            <div className="logo-icon">S</div>
            <span>Softcloud</span>
          </div>
          <button
            className="mobile-menu-close"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="mobile-nav-list">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="mobile-nav-item"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="mobile-menu-footer">
          <a
            href="https://wa.me/917058789799?text=Hi%20Zishan%20and%20Sahil%2C%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20a%20project!"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <i className="fab fa-whatsapp"></i> Quick WhatsApp Chat
          </a>
        </div>
      </div>

      <div
        className={`overlay ${mobileOpen ? 'active' : ''}`}
        onClick={() => setMobileOpen(false)}
      />
    </>
  );
}

