import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { data } from '../data/resume';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid" />
      <div className="hero-glow" />
      <div className="hero-glow-2" />

      <Container style={{ position: 'relative', zIndex: 2 }}>
        <Row className="align-items-center gy-5">
          {/* Left */}
          <Col lg={7}>
            <div className="badge-pill fade-up">
              <span className="badge-dot" />
              Available for opportunities
            </div>

            <h1 className="hero-name fade-up delay-1">
              {data.name.split(' ')[0]}<br />
              <span className="accent">{data.name.split(' ')[1]}</span>
            </h1>

            <p className="hero-title fade-up delay-2">{data.title}</p>
            <p className="hero-desc fade-up delay-3">{data.summary}</p>

            <div className="d-flex flex-wrap gap-3 fade-up delay-4">
              <a href="#projects" className="btn-primary-custom">
                <i className="bi bi-grid-3x3-gap-fill" /> View Work
              </a>
              <a href="#contact" className="btn-outline-custom">
                <i className="bi bi-send" /> Get in Touch
              </a>
              <a href={data.github} target="_blank" rel="noreferrer" className="btn-outline-custom">
                <i className="bi bi-github" /> GitHub
              </a>
            </div>
          </Col>

          {/* Right — stats */}
          <Col lg={5}>
            <Row className="g-3 fade-up delay-5">
              {[
                { num: '1+', label: 'Year Experience' },
                { num: '10+', label: 'Projects Delivered' },
                { num: '3+', label: 'Internships' },
                { num: '8.95', label: 'Diploma CGPA' },
              ].map((s, i) => (
                <Col xs={6} key={i}>
                  <div className="stat-box">
                    <div className="stat-num">{s.num}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                </Col>
              ))}
            </Row>

            {/* Social links */}
            <div className="d-flex gap-3 mt-4 justify-content-center fade-up delay-6">
              {[
                { href: data.linkedin, icon: 'bi-linkedin', label: 'LinkedIn' },
                { href: data.github,   icon: 'bi-github',   label: 'GitHub' },
                { href: `mailto:${data.email}`, icon: 'bi-envelope-fill', label: 'Email' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                  title={s.label}
                  style={{
                    width: 42, height: 42,
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 10,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#94a3b8', fontSize: '1.1rem',
                    transition: 'all 0.2s', textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.color = 'var(--accent)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.color = '#94a3b8';
                  }}>
                  <i className={`bi ${s.icon}`} />
                </a>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
