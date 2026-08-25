'use client';

const testimonials = [
  {
    quote: 'Zishan and Sahil delivered our TenderVault document parsing pipeline 2 weeks ahead of our launch deadline. Their understanding of AI and Next.js is top-notch.',
    author: 'Rajesh K.',
    role: 'Managing Director',
    company: 'InfraTech Solutions',
    project: 'TenderVault SaaS',
    rating: 5,
  },
  {
    quote: 'The VoterOCR desktop application saved our data processing team hundreds of hours of manual entry. Zero bugs in production, clean code, and outstanding communication.',
    author: 'Anand M.',
    role: 'Operations Head',
    company: 'DataCorp India',
    project: 'OCR Intelligence',
    rating: 5,
  },
  {
    quote: 'Working directly with the founders made a massive difference. Fast turnaround, daily updates, and they suggested UX improvements that significantly improved our conversion rate.',
    author: 'Siddharth P.',
    role: 'Founder & CEO',
    company: 'FinPulse Labs',
    project: 'FinTech Dashboard',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section section-padding">
      <div className="centered">
        <span className="section-label">
          <i className="fas fa-star" style={{ fontSize: '0.65rem' }}></i>
          Client Feedback
        </span>
        <h2 className="section-title">
          Trusted by <span className="accent-gradient">Founders &amp; Teams</span>
        </h2>
        <p className="section-subtitle">
          Here is what clients say about our speed, engineering quality, and direct collaboration.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((item, index) => (
          <div className="testimonial-card modern-card fade-in-up" key={index}>
            <div className="testimonial-stars">
              {[...Array(item.rating)].map((_, i) => (
                <i className="fas fa-star" key={i}></i>
              ))}
            </div>

            <p className="testimonial-quote">&ldquo;{item.quote}&rdquo;</p>

            <div className="testimonial-footer">
              <div className="testimonial-author-avatar">
                {item.author.charAt(0)}
              </div>
              <div className="testimonial-meta">
                <h4 className="author-name">{item.author}</h4>
                <p className="author-role">{item.role}, <strong>{item.company}</strong></p>
              </div>
            </div>

            <div className="testimonial-project-tag">
              <i className="fas fa-tag"></i> {item.project}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
