'use client';
import { useState } from 'react';

const projects = [
  {
    id: 'tendervault',
    title: 'TenderVault Enterprise B2B SaaS',
    category: 'SaaS & Web',
    shortDesc: 'AI-driven tender management and automated bid parsing platform built for infrastructure contractors.',
    fullDesc: 'TenderVault eliminates manual analysis of complex 500+ page government tender documents. It parses tender PDFs using Gemini AI, extracts compliance criteria, calculates margin thresholds, and automates bid submission workflows.',
    tech: ['Next.js 16', 'FastAPI', 'Gemini AI', 'Supabase', 'PostgreSQL', 'TailwindCSS'],
    metrics: [
      { label: 'Time Saved', val: '65% Faster Bidding' },
      { label: 'Doc Processing', val: '500+ Pages in <20s' },
      { label: 'Accuracy', val: '99.4% Parsing Precision' },
    ],
    challenges: 'Handling non-standardized government PDF formats, embedded multi-column tables, and high-concurrency background OCR jobs.',
    solution: 'Designed an asynchronous task queue with FastAPI, utilizing Gemini multimodal document parsing combined with structured JSON schema outputs.',
    github: 'https://github.com/zishandeshmukh',
    live: 'https://github.com/zishandeshmukh',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    featured: true,
  },
  {
    id: 'nexusai',
    title: 'Nexus AI Autonomous Agent Platform',
    category: 'AI & ML',
    shortDesc: 'Multimodal content synthesis and autonomous research assistant powered by vector retrieval pipelines.',
    fullDesc: 'Nexus AI is a next-generation research platform that aggregates unstructured web data, whitepapers, and audio files. It constructs knowledge graphs and generates executive-level summaries with cited verifiable sources.',
    tech: ['React 19', 'Python', 'LangChain', 'Pinecone', 'Redis', 'Node.js'],
    metrics: [
      { label: 'Latency', val: 'Sub-400ms Retrieval' },
      { label: 'Vector Index', val: 'Hybrid Semantic Search' },
      { label: 'Reliability', val: 'Zero Hallucination Guardrails' },
    ],
    challenges: 'Minimizing LLM hallucination and executing low-latency vector similarity lookups across dense domain documentation.',
    solution: 'Engineered a two-stage re-ranking RAG pipeline using Pinecone vector embeddings and Redis semantic caching.',
    github: 'https://github.com/zishandeshmukh',
    live: 'https://github.com/zishandeshmukh',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
    featured: true,
  },
  {
    id: 'voterocr',
    title: 'VoterOCR & Document Intelligence Engine',
    category: 'Computer Vision',
    shortDesc: 'High-throughput computer vision desktop and batch extraction platform for government archives.',
    fullDesc: 'A specialized desktop & batch processing engine capable of segmenting, cleaning, and extracting hundreds of thousands of voter and identity records from degraded scanned PDFs with zero data leakage.',
    tech: ['Python', 'OpenCV', 'Tesseract OCR', 'Flask', 'PyInstaller', 'SQLite'],
    metrics: [
      { label: 'Records Processed', val: '250,000+ Records' },
      { label: 'Extraction Rate', val: '120 Pages/Minute' },
      { label: 'Offline Mode', val: '100% Air-Gapped Security' },
    ],
    challenges: 'Low-resolution scans, skewed orientation, heavy noise, and the requirement to run entirely offline on standard laptops.',
    solution: 'Built custom OpenCV morphological filters and adaptive thresholding pipelines, packaged as a standalone zero-install desktop binary.',
    github: 'https://github.com/zishandeshmukh',
    live: 'https://github.com/zishandeshmukh',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    featured: true,
  },
  {
    id: 'pulsefin',
    title: 'PulseFin Real-Time Market Analytics',
    category: 'FinTech',
    shortDesc: 'High-concurrency financial sentiment analysis engine with real-time WebSocket market streaming.',
    fullDesc: 'PulseFin ingests real-time ticker feeds, social sentiment, and on-chain metrics to calculate dynamic volatility signals and customizable trigger alerts for active traders.',
    tech: ['Next.js', 'WebSockets', 'Chart.js', 'Redis', 'Python', 'Docker'],
    metrics: [
      { label: 'Stream Latency', val: '<45ms Live Updates' },
      { label: 'Concurrency', val: '10k+ Concurrent Events' },
      { label: 'Uptime', val: '99.95% Guaranteed' },
    ],
    challenges: 'Preventing UI re-render bottlenecks when processing hundreds of price tick events every second.',
    solution: 'Leveraged HTML5 Canvas chart virtualization and Web Workers to decouple data streaming from the React UI render thread.',
    github: 'https://github.com/zishandeshmukh',
    live: 'https://github.com/zishandeshmukh',
    image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=800&q=80',
    featured: false,
  },
  {
    id: 'apexhealth',
    title: 'ApexHealth Telemedicine & EHR Suite',
    category: 'SaaS & Web',
    shortDesc: 'HIPAA-ready clinical workflow system featuring WebRTC video consultations and automated scheduling.',
    fullDesc: 'A comprehensive telemedicine portal connecting patients with specialized clinicians. Includes automated appointment reminders, encrypted digital prescriptions, and instant electronic health record lookup.',
    tech: ['Next.js', 'Node.js', 'WebRTC', 'PostgreSQL', 'Stripe', 'TailwindCSS'],
    metrics: [
      { label: 'Consultations', val: '5,000+ Completed' },
      { label: 'Patient Rating', val: '4.9 / 5.0' },
      { label: 'Compliance', val: 'Encrypted End-to-End' },
    ],
    challenges: 'Ensuring seamless peer-to-peer WebRTC video quality across fluctuating mobile networks while preserving strict privacy compliance.',
    solution: 'Integrated adaptive bitrate signaling and secure JWT ephemeral room authorization.',
    github: 'https://github.com/zishandeshmukh',
    live: 'https://github.com/zishandeshmukh',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    featured: false,
  },
  {
    id: 'omnistore',
    title: 'OmniStore 3D Headless E-Commerce',
    category: 'SaaS & Web',
    shortDesc: 'High-conversion headless storefront with real-time 3D product customization and instant checkout.',
    fullDesc: 'An ultra-modern e-commerce experience designed for custom product manufacturers. Users can customize materials, colors, and accessories in real-time 3D WebGL prior to one-click payment.',
    tech: ['Next.js 16', 'Three.js / React Three Fiber', 'Shopify API', 'Stripe', 'Tailwind'],
    metrics: [
      { label: 'Performance', val: '98+ Google Lighthouse' },
      { label: 'Conversion Boost', val: '+38% Higher Cart Checkouts' },
      { label: 'Page Load', val: '<0.8s Initial Paint' },
    ],
    challenges: 'Maintaining 60fps 3D rendering on low-end mobile devices without compromising page load speeds.',
    solution: 'Employed GLTF Draco mesh compression, progressive LOD (Level of Detail), and Next.js static asset optimization.',
    github: 'https://github.com/zishandeshmukh',
    live: 'https://github.com/zishandeshmukh',
    image: 'https://images.unsplash.com/photo-1556742049-0a67e55722c0?w=800&q=80',
    featured: false,
  },
];

const categories = ['All', 'AI & ML', 'SaaS & Web', 'Computer Vision', 'FinTech'];

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeTab === 'All'
    ? projects
    : projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="projects-section section-padding">
      <div className="centered">
        <span className="section-label">
          <i className="fas fa-rocket" style={{ fontSize: '0.65rem' }}></i>
          Proven Track Record
        </span>
        <h2 className="section-title">
          Featured <span className="accent-gradient">Case Studies &amp; Projects</span>
        </h2>
        <p className="section-subtitle">
          Real products engineered with production-grade rigor. Explore the architecture, tech stacks, and tangible outcomes.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="project-filter-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeTab === cat ? 'active' : ''}`}
            onClick={() => setActiveTab(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div className="project-card modern-card fade-in-up" key={project.id}>
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} loading="lazy" />
              <div className="project-image-overlay">
                <button
                  className="quick-view-btn"
                  onClick={() => setSelectedProject(project)}
                >
                  <i className="fas fa-search-plus"></i> View Case Study
                </button>
              </div>
              <span className="project-cat-badge">{project.category}</span>
            </div>

            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.shortDesc}</p>

              {/* Key Metrics row */}
              <div className="project-metrics-row">
                {project.metrics.slice(0, 2).map((m, mIndex) => (
                  <div className="metric-pill" key={mIndex}>
                    <span className="metric-val">{m.val}</span>
                    <span className="metric-lbl">{m.label}</span>
                  </div>
                ))}
              </div>

              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span className="tech-tag" key={i}>{t}</span>
                ))}
              </div>

              <div className="project-links">
                <button
                  className="project-link details-btn"
                  onClick={() => setSelectedProject(project)}
                >
                  <i className="fas fa-file-lines"></i> Case Study
                </button>
                <a
                  href={project.github}
                  className="project-link github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              <i className="fas fa-times"></i>
            </button>

            <div className="modal-header">
              <span className="service-pill highlight">{selectedProject.category}</span>
              <h2 className="modal-title">{selectedProject.title}</h2>
              <p className="modal-desc">{selectedProject.fullDesc}</p>
            </div>

            <div className="modal-metrics-grid">
              {selectedProject.metrics.map((m, i) => (
                <div className="modal-metric-card" key={i}>
                  <div className="modal-metric-val">{m.val}</div>
                  <div className="modal-metric-lbl">{m.label}</div>
                </div>
              ))}
            </div>

            <div className="modal-section">
              <h4><i className="fas fa-triangle-exclamation" style={{ color: '#ffb703', marginRight: '0.5rem' }}></i> Engineering Challenge</h4>
              <p>{selectedProject.challenges}</p>
            </div>

            <div className="modal-section">
              <h4><i className="fas fa-lightbulb" style={{ color: 'var(--accent)', marginRight: '0.5rem' }}></i> Technical Solution</h4>
              <p>{selectedProject.solution}</p>
            </div>

            <div className="modal-section">
              <h4><i className="fas fa-code" style={{ marginRight: '0.5rem' }}></i> Technology Stack</h4>
              <div className="project-tech" style={{ marginTop: '0.5rem' }}>
                {selectedProject.tech.map((t, i) => (
                  <span className="tech-tag" key={i}>{t}</span>
                ))}
              </div>
            </div>

            <div className="modal-footer">
              <a
                href={selectedProject.github}
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i> View GitHub Repository
              </a>
              <a
                href="#contact"
                className="btn btn-primary"
                onClick={() => {
                  setSelectedProject(null);
                  const el = document.querySelector('#contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Discuss Similar Project <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

