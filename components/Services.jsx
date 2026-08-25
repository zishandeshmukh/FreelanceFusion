'use client';

const services = [
  {
    icon: 'fas fa-layer-group',
    title: 'Full-Stack Web & SaaS Engineering',
    desc: 'Production-ready web applications built for speed, security, and scalability. From MVPs to high-concurrency B2B platforms.',
    features: ['Next.js 16 App Router', 'REST & GraphQL APIs', 'PostgreSQL & Supabase', 'Role-Based Access Control'],
    tag: 'Web & SaaS',
    badge: 'Popular',
  },
  {
    icon: 'fas fa-brain',
    title: 'Generative AI & Autonomous Agents',
    desc: 'Custom LLM pipelines, Retrieval-Augmented Generation (RAG), multimodal AI, and intelligent autonomous workflows for your business.',
    features: ['Custom RAG Systems', 'Gemini & OpenAI Fine-tuning', 'Vector Search (Pinecone/pgvector)', 'Automated AI Agents'],
    tag: 'AI & ML',
    badge: 'High Impact',
  },
  {
    icon: 'fas fa-eye',
    title: 'Computer Vision & Intelligent OCR',
    desc: 'High-throughput document extraction and visual intelligence engines that turn unstructured PDFs, images, and documents into structured database records.',
    features: ['PDF & Table Extraction', 'OpenCV & Tesseract Pipelines', 'Batch Processing Engine', 'Multi-template OCR'],
    tag: 'Vision & OCR',
  },
  {
    icon: 'fas fa-cloud',
    title: 'Cloud Architecture & DevOps',
    desc: 'Zero-downtime deployments, containerization, serverless setups, and CI/CD automation on modern cloud platforms.',
    features: ['Docker & Containerization', 'Vercel, AWS & GCP Deployment', 'Redis Caching & Queues', 'Automated CI/CD'],
    tag: 'Cloud & Infra',
  },
  {
    icon: 'fas fa-mobile-screen-button',
    title: 'Cross-Platform Mobile Apps',
    desc: 'Fast, native-feeling mobile applications for iOS & Android built with clean architecture and seamless backend integration.',
    features: ['React Native / Expo', 'Offline-first Sync', 'Push Notifications & Auth', 'App Store & Play Store Prep'],
    tag: 'Mobile',
  },
  {
    icon: 'fas fa-compass-drafting',
    title: 'Product Strategy & UI/UX Design',
    desc: 'User-centric product architecture, Figma design systems, and rapid interactive prototypes validated before writing code.',
    features: ['Figma Design Systems', 'Interactive Prototyping', 'Conversion Optimization', 'User Journey Mapping'],
    tag: 'Design & Strategy',
  },
];

export default function Services() {
  return (
    <section id="services" className="services-section section-padding">
      <div className="centered">
        <span className="section-label">
          <i className="fas fa-cube" style={{ fontSize: '0.65rem' }}></i>
          Core Capabilities
        </span>
        <h2 className="section-title">
          Engineering Solutions That <span className="accent-gradient">Drive Real Growth</span>
        </h2>
        <p className="section-subtitle">
          We combine deep technical engineering with sharp product intuition. Everything we build is clean, maintainable, and built to scale.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card modern-card fade-in-up" key={index}>
            <div className="service-card-top">
              <div className="service-icon-box">
                <i className={service.icon}></i>
              </div>
              <div className="service-badges">
                {service.badge && <span className="service-pill highlight">{service.badge}</span>}
                <span className="service-pill">{service.tag}</span>
              </div>
            </div>

            <div className="service-card-body">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              
              <ul className="service-feature-list">
                {service.features.map((feat, fIndex) => (
                  <li key={fIndex}>
                    <i className="fas fa-check"></i>
                    <span>{feat}</span>
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

