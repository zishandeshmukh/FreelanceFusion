'use client';
import { useState } from 'react';

const faqs = [
  {
    question: 'How do milestone payments and invoicing work?',
    answer: 'We operate on transparent, milestone-based payments. Typically, this is structured as 30% upon project kickoff & architecture approval, 40% upon functional staging preview, and 30% upon final production launch & code handover. We accept Bank Transfers, UPI, Stripe, and Wise for international clients.',
  },
  {
    question: 'Do I get 100% full IP and source code ownership?',
    answer: 'Yes, absolutely. All code, database schemas, Figma assets, and configuration scripts are 100% your intellectual property. We push directly to your private GitHub organization.',
  },
  {
    question: 'Can you sign an NDA before we share our project details?',
    answer: 'Yes. We are completely comfortable signing a standard Non-Disclosure Agreement (NDA) before our initial discovery call to ensure your proprietary ideas and data remain strictly confidential.',
  },
  {
    question: 'How quickly can we start, and what is the typical timeline?',
    answer: 'We can typically kick off within 48 to 72 hours. MVPs and focused feature modules take approximately 10 to 14 business days, while comprehensive full-scale SaaS platforms take 3 to 5 weeks.',
  },
  {
    question: 'How do we communicate and track progress during the build?',
    answer: 'We maintain direct founder communication with zero middle managers. We set up a dedicated Slack channel or WhatsApp group for fast async communication, along with weekly live video demos and continuous staging URL access.',
  },
  {
    question: 'What happens after launch? Do you provide post-delivery support?',
    answer: 'Every completed project includes a 30-Day Free Warranty covering any bug fixes, technical adjustments, and deployment optimization. After that, we offer lightweight maintenance retainers or on-demand hourly support as your business scales.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="faq-section section-padding">
      <div className="centered">
        <span className="section-label">
          <i className="fas fa-circle-question" style={{ fontSize: '0.65rem' }}></i>
          Got Questions?
        </span>
        <h2 className="section-title">
          Frequently Asked <span className="accent-gradient">Questions</span>
        </h2>
        <p className="section-subtitle">
          Everything you need to know about working with our dev duo, timelines, IP rights, and payment structure.
        </p>
      </div>

      <div className="faq-container">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              className={`faq-item glass-card ${isOpen ? 'open' : ''}`}
              key={index}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="faq-icon">
                  <i className={`fas ${isOpen ? 'fa-minus' : 'fa-plus'}`}></i>
                </span>
              </div>
              {isOpen && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
