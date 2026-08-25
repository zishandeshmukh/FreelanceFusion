'use client';
import { useState } from 'react';

const projectTypes = [
  { id: 'mvp', name: 'MVP Web App / SaaS', baseDays: 14, icon: 'fas fa-rocket', desc: 'Fast turnaround to validate your product idea' },
  { id: 'ai', name: 'AI & LLM Integration / RAG', baseDays: 10, icon: 'fas fa-brain', desc: 'Custom AI workflows, assistants & vector pipelines' },
  { id: 'enterprise', name: 'Full-Scale Custom Platform', baseDays: 25, icon: 'fas fa-layer-group', desc: 'Complex multi-role systems & scalable architecture' },
  { id: 'ocr', name: 'Computer Vision / OCR Tool', baseDays: 10, icon: 'fas fa-eye', desc: 'Automated batch document & PDF extraction' },
  { id: 'mobile', name: 'Mobile App (iOS & Android)', baseDays: 20, icon: 'fas fa-mobile-screen-button', desc: 'Cross-platform app built with React Native' },
];

const featureAddons = [
  { id: 'auth', name: 'Auth, RBAC & Permissions', days: 2, icon: 'fas fa-shield-halved' },
  { id: 'ai_copilot', name: 'Custom AI Assistant / Vector DB', days: 4, icon: 'fas fa-robot' },
  { id: 'payments', name: 'Stripe / Razorpay Integration', days: 2, icon: 'fas fa-credit-card' },
  { id: 'dashboard', name: 'Admin & Analytics Dashboard', days: 3, icon: 'fas fa-chart-pie' },
  { id: 'realtime', name: 'Real-time WebSockets & Alerts', days: 3, icon: 'fas fa-bolt' },
  { id: 'cicd', name: 'Docker & Cloud Deployment', days: 2, icon: 'fas fa-cloud-arrow-up' },
];

export default function ProjectEstimator() {
  const [selectedType, setSelectedType] = useState(projectTypes[0]);
  const [selectedAddons, setSelectedAddons] = useState(['auth', 'dashboard']);
  const [urgency, setUrgency] = useState('standard'); // 'express', 'standard', 'flexible'

  const toggleAddon = (id) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((a) => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  // Calculate totals in days
  const addonDays = selectedAddons.reduce((sum, id) => {
    const item = featureAddons.find((a) => a.id === id);
    return sum + (item ? item.days : 0);
  }, 0);

  let totalDays = selectedType.baseDays + addonDays;

  if (urgency === 'express') {
    totalDays = Math.max(7, Math.round(totalDays * 0.75));
  } else if (urgency === 'flexible') {
    totalDays = Math.round(totalDays * 1.2);
  }

  const handleApplyScope = () => {
    const addonNames = selectedAddons
      .map((id) => featureAddons.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const prefillMessage = `Hi Zishan & Sahil, I planned my project scope using your planner:
- Project Type: ${selectedType.name}
- Features Needed: ${addonNames || 'Standard'}
- Delivery Pace: ${urgency.toUpperCase()}
- Estimated Timeline: ~${totalDays} Business Days

Let's discuss the technical details and get a custom quote!`;

    const contactSection = document.querySelector('#contact');
    const messageInput = document.querySelector('#message');
    const subjectInput = document.querySelector('#subject');

    if (subjectInput) subjectInput.value = `Scope Inquiry: ${selectedType.name}`;
    if (messageInput) messageInput.value = prefillMessage;

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="estimator" className="estimator-section section-padding">
      <div className="centered">
        <span className="section-label">
          <i className="fas fa-calendar-check" style={{ fontSize: '0.65rem' }}></i>
          Interactive Scope Planner
        </span>
        <h2 className="section-title">
          Plan Your Project <span className="accent-gradient">Timeline &amp; Scope</span>
        </h2>
        <p className="section-subtitle">
          Select your requirements below to see an estimated development roadmap. We provide custom, transparent milestone quotes with zero hidden fees.
        </p>
      </div>

      <div className="estimator-container glass-card fade-in-up">
        <div className="estimator-inputs">
          {/* Step 1: Project Type */}
          <div className="estimator-block">
            <h4 className="estimator-step-title">
              <span className="step-num">1</span> Select Project Architecture
            </h4>
            <div className="type-grid">
              {projectTypes.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  className={`type-card ${selectedType.id === type.id ? 'active' : ''}`}
                  onClick={() => setSelectedType(type)}
                >
                  <div className="type-icon">
                    <i className={type.icon}></i>
                  </div>
                  <div className="type-name">{type.name}</div>
                  <div className="type-meta">{type.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Feature Addons */}
          <div className="estimator-block">
            <h4 className="estimator-step-title">
              <span className="step-num">2</span> Select Required Modules &amp; Integrations
            </h4>
            <div className="addons-grid">
              {featureAddons.map((addon) => {
                const isSelected = selectedAddons.includes(addon.id);
                return (
                  <button
                    key={addon.id}
                    type="button"
                    className={`addon-chip ${isSelected ? 'active' : ''}`}
                    onClick={() => toggleAddon(addon.id)}
                  >
                    <i className={addon.icon}></i>
                    <span>{addon.name}</span>
                    <span className="addon-check">
                      <i className={`fas ${isSelected ? 'fa-check-circle' : 'fa-plus'}`}></i>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Speed / Urgency */}
          <div className="estimator-block">
            <h4 className="estimator-step-title">
              <span className="step-num">3</span> Delivery Pace
            </h4>
            <div className="urgency-selector">
              <button
                type="button"
                className={`urgency-btn ${urgency === 'express' ? 'active' : ''}`}
                onClick={() => setUrgency('express')}
              >
                <i className="fas fa-bolt"></i>
                <div>
                  <strong>Express Sprint</strong>
                  <span>Rapid priority turnaround</span>
                </div>
              </button>

              <button
                type="button"
                className={`urgency-btn ${urgency === 'standard' ? 'active' : ''}`}
                onClick={() => setUrgency('standard')}
              >
                <i className="fas fa-calendar-check"></i>
                <div>
                  <strong>Standard Agile</strong>
                  <span>Structured weekly sprints</span>
                </div>
              </button>

              <button
                type="button"
                className={`urgency-btn ${urgency === 'flexible' ? 'active' : ''}`}
                onClick={() => setUrgency('flexible')}
              >
                <i className="fas fa-handshake"></i>
                <div>
                  <strong>Milestone-Based</strong>
                  <span>Phased rollout</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Live Calculation Summary Card */}
        <div className="estimator-summary-card">
          <div className="summary-badge">⚡ Estimated Scope Overview</div>
          
          <div className="summary-main-stat">
            <div className="summary-price-label">Estimated Delivery Window</div>
            <div className="summary-price-val">
              ~{totalDays} <span>Business Days</span>
            </div>
            <div className="summary-price-sub">Agile sprints with weekly live demos</div>
          </div>

          <div className="summary-divider"></div>

          <div className="summary-details-list">
            <div className="summary-detail-item">
              <span className="detail-label"><i className="fas fa-layer-group"></i> Architecture:</span>
              <span className="detail-val">{selectedType.name}</span>
            </div>
            <div className="summary-detail-item">
              <span className="detail-label"><i className="fas fa-cubes"></i> Active Modules:</span>
              <span className="detail-val">{selectedAddons.length} Selected</span>
            </div>
            <div className="summary-detail-item">
              <span className="detail-label"><i className="fas fa-users-gear"></i> Dedicated Team:</span>
              <span className="detail-val">Zishan &amp; Sahil (Full Focus)</span>
            </div>
            <div className="summary-detail-item">
              <span className="detail-label"><i className="fas fa-shield-check"></i> Code Warranty:</span>
              <span className="detail-val">30 Days Included Free Support</span>
            </div>
            <div className="summary-detail-item">
              <span className="detail-label"><i className="fas fa-lock"></i> IP Rights:</span>
              <span className="detail-val">100% Client Ownership</span>
            </div>
          </div>

          <button
            type="button"
            className="btn btn-primary summary-cta-btn"
            onClick={handleApplyScope}
          >
            Request Free Scope &amp; Quote <i className="fas fa-arrow-right"></i>
          </button>

          <p className="summary-disclaimer">
            *Receive a custom, transparent quote with zero obligations.
          </p>
        </div>
      </div>
    </section>
  );
}
