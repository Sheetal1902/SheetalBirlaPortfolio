import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <Navbar expand="lg" className="navbar-custom"
      style={{ boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.5)' : 'none' }}>
      <Container>
        <Navbar.Brand href="#hero" className="navbar-brand-name">
          SB<span>.</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="nav-collapse" />
        <Navbar.Collapse id="nav-collapse">
          <Nav className="ms-auto align-items-lg-center gap-1">
            {links.map(l => (
              <Nav.Link key={l.href} href={l.href} className="nav-link-custom">{l.label}</Nav.Link>
            ))}
            <a href="mailto:sheetalbirla027@gmail.com"
              className="btn-primary-custom ms-2" style={{ fontSize: '0.78rem', padding: '8px 18px' }}>
              Hire Me
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
