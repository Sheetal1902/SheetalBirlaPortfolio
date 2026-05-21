import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { data } from '../data/resume';

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <Container>
        <div className="text-center mb-5">
          <div className="section-tag">What I've Built</div>
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <div className="divider mx-auto" />
          <p className="section-sub mx-auto">Selected personal and freelance work showcasing frontend craft.</p>
        </div>

        <Row className="g-4 justify-content-center">
          {data.projects.map((p, i) => (
            <Col md={6} lg={5} key={i}>
              <div className="project-card" style={{ '--card-accent': p.color }}>
                <div className="project-number">0{i + 1}</div>
                <div className="project-name">{p.name}</div>
                <div className="project-subtitle">{p.subtitle}</div>
                <div className="project-period">
                  <i className="bi bi-calendar3" />{p.period}
                </div>
                <p className="project-desc">{p.description}</p>
                <div className="mb-4">
                  {p.points.map((pt, j) => (
                    <div className="project-point" key={j}>{pt}</div>
                  ))}
                </div>
                <div>
                  {p.tech.map(t => (
                    <span key={t} className="tech-badge" style={{
                      background: `${p.color}15`,
                      borderColor: `${p.color}35`,
                      color: p.color,
                    }}>{t}</span>
                  ))}
                </div>

                <div className="d-flex gap-3 mt-4">
                  <a href={data.github} target="_blank" rel="noreferrer"
                    className="btn-outline-custom" style={{ fontSize: '0.78rem', padding: '7px 16px' }}>
                    <i className="bi bi-github" /> Code
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
