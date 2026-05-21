import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { data } from '../data/resume';

const icons = ['🎓', '📚', '🏫'];

export default function Education() {
  return (
    <section id="education" className="section">
      <Container>
        <Row className="align-items-start">
          <Col lg={4} className="mb-5 mb-lg-0">
            <div className="section-tag">Academic Background</div>
            <h2 className="section-title">Education &amp; <span>Coursework</span></h2>
            <div className="divider" />
            <p className="section-sub mb-4">
              Solid computer science foundation from diploma through B.Tech, complemented by
              hands-on technical coursework.
            </p>

            {/* Coursework */}
            <div style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: 14,
              padding: 20,
            }}>
              <div className="section-tag mb-3">Relevant Coursework</div>
              {data.coursework.map(c => (
                <span key={c} className="course-tag">{c}</span>
              ))}
            </div>
          </Col>

          <Col lg={8}>
            {data.education.map((edu, i) => (
              <div className="edu-card" key={i}>
                <div className="edu-icon">{icons[i]}</div>
                <div style={{ flex: 1 }}>
                  <div className="edu-degree">{edu.degree}</div>
                  <div className="edu-school">{edu.school}</div>
                  <div className="edu-meta">
                    <span><i className="bi bi-calendar3 me-1" />{edu.period}</span>
                    <span><i className="bi bi-geo-alt me-1" />{edu.location}</span>
                    {edu.detail && <span><i className="bi bi-award me-1" />{edu.detail}</span>}
                  </div>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
