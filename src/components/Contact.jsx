import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { data } from '../data/resume';

export default function Contact() {
  const cards = [
    { icon: 'bi-telephone-fill', label: 'Phone', value: data.phone, href: `tel:${data.phone}` },
    { icon: 'bi-envelope-fill',  label: 'Email', value: data.email, href: `mailto:${data.email}` },
    { icon: 'bi-linkedin',       label: 'LinkedIn', value: 'linkedin.com/in/sheetalbirla', href: data.linkedin },
    { icon: 'bi-github',         label: 'GitHub', value: 'github.com/Sheetal1902', href: data.github },
  ];

  return (
    <section id="contact" className="section contact-section">
      <Container>
        <div className="text-center mb-5">
          <div className="section-tag">Get In Touch</div>
          <h2 className="section-title">Let's <span>Connect</span></h2>
          <div className="divider mx-auto" />
          <p className="section-sub mx-auto">
            Open to new opportunities, collaborations, or just a friendly chat about frontend development.
          </p>
        </div>

        <Row className="justify-content-center">
          <Col lg={8}>
            <Row className="g-3">
              {cards.map((c, i) => (
                <Col sm={6} key={i}>
                  <a href={c.href} target="_blank" rel="noreferrer" className="contact-card">
                    <div className="contact-icon">
                      <i className={`bi ${c.icon}`} />
                    </div>
                    <div>
                      <div className="contact-label">{c.label}</div>
                      <div className="contact-value">{c.value}</div>
                    </div>
                    <i className="bi bi-arrow-up-right ms-auto" style={{ color: 'var(--muted)', fontSize: '0.9rem' }} />
                  </a>
                </Col>
              ))}
            </Row>

            {/* CTA */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(56,189,248,0.1), rgba(129,140,248,0.1))',
              border: '1px solid rgba(56,189,248,0.2)',
              borderRadius: 16,
              padding: '36px 30px',
              textAlign: 'center',
              marginTop: 28,
            }}>
              <h4 style={{ fontFamily: 'Syne,sans-serif', color: '#fff', marginBottom: 8 }}>
                Ready to build something great?
              </h4>
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: 24 }}>
                I'm currently available for full-time roles and freelance projects.
              </p>
              <a href={`mailto:${data.email}`} className="btn-primary-custom" style={{ display: 'inline-flex' }}>
                <i className="bi bi-send-fill" /> Send Me a Message
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
