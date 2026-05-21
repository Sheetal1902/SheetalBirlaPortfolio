import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { data } from '../data/resume';

export default function Experience() {
  const [expanded, setExpanded] = useState({ 0: true });

  return (
    <section id="experience" className="section">
      <Container>
        <Row className="align-items-start">
          <Col lg={4} className="mb-5 mb-lg-0">
            <div className="section-tag">Where I've Worked</div>
            <h2 className="section-title">Work <span>Experience</span></h2>
            <div className="divider" />
            <p className="section-sub">
              Real-world experience shipping products across diverse domains — from fintech and trading to
              inventory systems and corporate platforms.
            </p>
          </Col>

          <Col lg={8}>
            <div className="timeline">
              {data.experience.map((exp, i) => (
                <div className="timeline-item" key={i}>
                  <div className="timeline-dot" />
                  <div className="exp-card">
                    <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-1">
                      <div className="exp-role">{exp.role}</div>
                      <span style={{
                        fontSize: '0.75rem',
                        background: 'rgba(56,189,248,0.1)',
                        border: '1px solid rgba(56,189,248,0.2)',
                        color: 'var(--accent)',
                        padding: '3px 10px',
                        borderRadius: 6,
                        whiteSpace: 'nowrap',
                      }}>{exp.period}</span>
                    </div>
                    <div className="exp-company">{exp.company}</div>
                    <div className="exp-meta">
                      <span><i className="bi bi-geo-alt" />{exp.location}</span>
                    </div>

                    {/* Bullets — collapsible if many */}
                    {(expanded[i] ? exp.highlights : exp.highlights.slice(0, 3)).map((h, j) => (
                      <div className="exp-bullet" key={j}>{h}</div>
                    ))}

                    {exp.highlights.length > 3 && (
                      <button
                        onClick={() => setExpanded(p => ({ ...p, [i]: !p[i] }))}
                        style={{
                          background: 'none', border: 'none',
                          color: 'var(--accent)', fontSize: '0.8rem',
                          cursor: 'pointer', marginTop: 10, padding: 0,
                          display: 'flex', alignItems: 'center', gap: 5,
                        }}>
                        <i className={`bi bi-chevron-${expanded[i] ? 'up' : 'down'}`} />
                        {expanded[i] ? 'Show less' : `Show ${exp.highlights.length - 3} more`}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
