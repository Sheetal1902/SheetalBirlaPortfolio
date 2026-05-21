import React from 'react';
import { Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <p>
          Designed &amp; built by <span>Sheetal Birla</span> &nbsp;·&nbsp;
         
          {new Date().getFullYear()}
        </p>
      </Container>
    </footer>
  );
}
