import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { data } from '../data/resume';

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <Container>
        <div className="text-center mb-5">
          <div className="section-tag">What I Work With</div>
          <h2 className="section-title">Technical <span>Skills</span></h2>
          <div className="divider mx-auto" />
          <p className="section-sub mx-auto">A curated toolkit built through real-world project delivery.</p>
        </div>

        <Row className="g-4">
          {data.skills.map((cat, i) => (
            <Col md={6} lg={4} key={i}>
              <div className="skill-category-card">
                <div className="skill-cat-label">
                  <i className="bi bi-cpu me-2" />{cat.category}
                </div>
                <div>
                  {cat.items.map(item => (
                    <span key={item} className="skill-tag">{item}</span>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
