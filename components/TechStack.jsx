'use client';
import { useState } from 'react';

const techCategories = [
  {
    id: 'frontend',
    name: 'Frontend & UI',
    icon: 'fas fa-palette',
    items: [
      { name: 'Next.js 16 (App Router)', level: 'Advanced', desc: 'SSR, SSG, Server Actions & edge caching' },
      { name: 'React 19', level: 'Advanced', desc: 'Modern hooks, concurrent rendering & state' },
      { name: 'Tailwind CSS', level: 'Advanced', desc: 'Responsive design systems & custom animations' },
      { name: 'Three.js / React Three Fiber', level: 'Intermediate', desc: '3D interactive canvas & WebGL models' },
      { name: 'TypeScript / JavaScript', level: 'Advanced', desc: 'Strict type safety & modern ESNext' },
    ],
  },
  {
    id: 'backend',
    name: 'Backend & APIs',
    icon: 'fas fa-server',
    items: [
      { name: 'FastAPI & Python', level: 'Advanced', desc: 'High-performance async endpoints & data models' },
      { name: 'Node.js & Express', level: 'Advanced', desc: 'Event-driven microservices & REST APIs' },
      { name: 'WebSockets & Socket.io', level: 'Advanced', desc: 'Real-time bidirectional data streaming' },
      { name: 'Flask', level: 'Advanced', desc: 'Lightweight services & desktop API backends' },
      { name: 'JWT & OAuth Auth', level: 'Advanced', desc: 'Secure session management & RBAC' },
    ],
  },
  {
    id: 'ai',
    name: 'AI, LLMs & Vision',
    icon: 'fas fa-brain',
    items: [
      { name: 'Gemini & OpenAI APIs', level: 'Advanced', desc: 'Multimodal vision, function calling & prompt engineering' },
      { name: 'LangChain & RAG Pipelines', level: 'Advanced', desc: 'Document ingestion, chunking & semantic retrieval' },
      { name: 'Pinecone & Vector Search', level: 'Advanced', desc: 'High-speed embeddings indexing & similarity search' },
      { name: 'OpenCV & Tesseract OCR', level: 'Advanced', desc: 'Image preprocessing, segmentation & text extraction' },
      { name: 'Autonomous AI Agents', level: 'Advanced', desc: 'Tool calling, loop execution & structured JSON outputs' },
    ],
  },
  {
    id: 'database',
    name: 'Databases & Cache',
    icon: 'fas fa-database',
    items: [
      { name: 'PostgreSQL & Supabase', level: 'Advanced', desc: 'Relational schema, pgvector, row-level security' },
      { name: 'Redis', level: 'Advanced', desc: 'In-memory caching, pub/sub & rate limiting' },
      { name: 'MongoDB', level: 'Advanced', desc: 'Document store for high-volume unstructured data' },
      { name: 'SQLite', level: 'Advanced', desc: 'Embedded zero-config database for offline apps' },
    ],
  },
  {
    id: 'devops',
    name: 'Cloud & DevOps',
    icon: 'fas fa-cloud',
    items: [
      { name: 'Vercel Deployment', level: 'Advanced', desc: 'Instant serverless preview & production deployment' },
      { name: 'Docker & Docker Compose', level: 'Advanced', desc: 'Containerized multi-service development' },
      { name: 'AWS (S3 / EC2)', level: 'Intermediate', desc: 'Cloud object storage & compute instances' },
      { name: 'GitHub Actions / CI-CD', level: 'Advanced', desc: 'Automated test runners & deployment pipelines' },
    ],
  },
];

export default function TechStack() {
  const [activeTab, setActiveTab] = useState('frontend');

  const activeCategory = techCategories.find((c) => c.id === activeTab) || techCategories[0];

  return (
    <section id="tech" className="tech-section section-padding">
      <div className="centered">
        <span className="section-label">
          <i className="fas fa-microchip" style={{ fontSize: '0.65rem' }}></i>
          Battle-Tested Tools
        </span>
        <h2 className="section-title">
          Modern <span className="accent-gradient">Technology Stack</span>
        </h2>
        <p className="section-subtitle">
          We use industry-standard modern frameworks and robust tools that guarantee speed, scalability, and maintainability.
        </p>
      </div>

      <div className="tech-tabs-wrapper">
        {techCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`tech-tab-btn ${activeTab === cat.id ? 'active' : ''}`}
            onClick={() => setActiveTab(cat.id)}
          >
            <i className={cat.icon}></i>
            <span>{cat.name}</span>
          </button>
        ))}
      </div>

      <div className="tech-items-grid">
        {activeCategory.items.map((item, idx) => (
          <div className="tech-item-card glass-card fade-in-up" key={idx}>
            <div className="tech-card-header">
              <span className="tech-name">{item.name}</span>
              <span className="tech-level-pill">{item.level}</span>
            </div>
            <p className="tech-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
