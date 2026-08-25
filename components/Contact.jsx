'use client';
import { useState, useRef, useEffect } from 'react';

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [notification, setNotification] = useState(null);
  const [copied, setCopied] = useState(false);
  const formRef = useRef(null);
  const emailjsLoaded = useRef(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.onload = () => {
      if (window.emailjs) {
        window.emailjs.init('La7qMhUgyYpnDiL8Z');
        emailjsLoaded.current = true;
      }
    };
    document.head.appendChild(script);
  }, []);

  const showNotif = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 5000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('zishandeshmukh09@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);

    const formData = {
      name: formRef.current.name.value,
      email: formRef.current.email.value,
      subject: formRef.current.subject.value,
      message: formRef.current.message.value,
    };

    try {
      if (emailjsLoaded.current && window.emailjs) {
        await window.emailjs.send('service_62cvv0s', 'template_bu5va5u', formData);
        showNotif('Thank you! Your message has been sent successfully. We will reply within 4 hours.', 'success');
        formRef.current.reset();
      } else {
        // Fallback to internal API route
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        if (res.ok) {
          showNotif('Thank you! Your message has been received. We will reply within 4 hours.', 'success');
          formRef.current.reset();
        } else {
          showNotif('Message recorded! You can also reach us directly on WhatsApp.', 'success');
          formRef.current.reset();
        }
      }
    } catch {
      showNotif('Direct message error. Please click the WhatsApp button to chat instantly!', 'error');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="centered">
        <span className="section-label">
          <i className="fas fa-paper-plane" style={{ fontSize: '0.65rem' }}></i>
          Let&apos;s Build Together
        </span>
        <h2 className="section-title">
          Ready to Start <span className="accent-gradient">Your Project?</span>
        </h2>
        <p className="section-subtitle">
          Have an idea, an MVP, or an enterprise system that needs senior full-stack execution? Reach out today for a free technical consultation.
        </p>
      </div>

      <div className="contact-container">
        {/* Left Column: Direct Info & WhatsApp */}
        <div className="glass-card contact-card fade-in-up">
          <div className="contact-header">
            <div className="contact-header-icon">
              <i className="fas fa-bolt"></i>
            </div>
            <div>
              <h3>Fast Response Guaranteed</h3>
              <p className="response-time-pill">
                <span className="pulse-dot"></span> Replies within 4 hours
              </p>
            </div>
          </div>

          <p className="contact-desc">
            Skip the agency wait times. Connect directly with Zishan &amp; Sahil to discuss scope, timeline, and architecture.
          </p>

          <div className="contact-channels">
            <a
              href="https://wa.me/917058789799?text=Hi%20Zishan%20and%20Sahil%2C%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20a%20project!"
              target="_blank"
              rel="noopener noreferrer"
              className="direct-whatsapp-card"
            >
              <div className="wa-icon-box">
                <i className="fab fa-whatsapp"></i>
              </div>
              <div className="wa-content">
                <strong>Instant WhatsApp Chat</strong>
                <span>+91 7058789799 (Direct Line)</span>
              </div>
              <i className="fas fa-arrow-right wa-arrow"></i>
            </a>

            <div className="info-item">
              <div className="info-item-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="info-item-body">
                <h4>Direct Email</h4>
                <p>zishandeshmukh09@gmail.com</p>
              </div>
              <button
                type="button"
                className="copy-btn"
                onClick={handleCopyEmail}
                title="Copy email to clipboard"
              >
                <i className={`fas ${copied ? 'fa-check' : 'fa-copy'}`}></i>
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <div className="info-item">
              <div className="info-item-icon">
                <i className="fas fa-location-dot"></i>
              </div>
              <div className="info-item-body">
                <h4>Location &amp; Availability</h4>
                <p>Mumbai &amp; Pune, India (Serving Global Clients)</p>
              </div>
            </div>
          </div>

          <div className="contact-guarantees">
            <div className="guarantee-badge">
              <i className="fas fa-shield-halved"></i> 100% NDA Protected
            </div>
            <div className="guarantee-badge">
              <i className="fas fa-code-commit"></i> 100% IP Ownership
            </div>
            <div className="guarantee-badge">
              <i className="fas fa-headset"></i> 30-Day Free Warranty
            </div>
          </div>

          <div className="contact-social">
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

        {/* Right Column: Interactive Proposal Form */}
        <form
          className="glass-card contact-form fade-in-up"
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <h3 className="form-heading">Send a Project Brief</h3>
          <p className="form-subheading">Fill out the details below and we will prepare an initial technical scope estimate.</p>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Your Name / Company *</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="e.g. Alex Morgan"
                />
                <i className="fas fa-user input-icon"></i>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email Address *</label>
              <div className="input-wrapper">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="alex@company.com"
                />
                <i className="fas fa-envelope input-icon"></i>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Project Subject / Service Required *</label>
            <div className="input-wrapper">
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="e.g. Next.js SaaS Platform / AI RAG Pipeline"
              />
              <i className="fas fa-bookmark input-icon"></i>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Project Overview &amp; Timeline *</label>
            <div className="input-wrapper">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell us about the problem you're solving, required features, timeline expectations, or paste scope from the estimator above..."
              ></textarea>
              <i className="fas fa-comment-alt input-icon textarea-icon"></i>
            </div>
          </div>

          <button type="submit" className="btn btn-primary submit-btn" disabled={sending}>
            <span>{sending ? 'Sending Proposal...' : 'Send Message & Get Scope'}</span>
            <i className={`fas ${sending ? 'fa-spinner fa-spin' : 'fa-paper-plane'}`}></i>
          </button>
        </form>
      </div>

      {notification && (
        <div className={`notification show ${notification.type}`}>
          <i
            className={`fas ${
              notification.type === 'success' ? 'fa-circle-check' : 'fa-triangle-exclamation'
            }`}
            style={{ marginRight: '0.5rem' }}
          ></i>
          {notification.message}
        </div>
      )}
    </section>
  );
}

