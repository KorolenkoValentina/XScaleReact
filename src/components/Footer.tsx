import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/Footer/footer.css'
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/images/mainpage/Logo-footer.svg'; 

const Footer: React.FC = () => {
  return (
    <footer className="footer" data-testid="footer">
      <Container>
        <Row className="footer-menu">
          <Col md={6} className="logo-menu">
            <img src={logo} alt="Footer logo" />
            <p className="subtitle">Innovative platform for the logistics industry</p>
          </Col>
          <Col md={6} className="menu">
            <ul id="demo-nav">
            <li><NavLink to="/" className="footer-link">Home</NavLink></li>
              <li><NavLink to="/about" className="footer-link">About</NavLink></li>
              <li><NavLink to="/services" className="footer-link">Services</NavLink></li>
              <li><NavLink to="/contacts" className="footer-link">Contact us</NavLink></li>
            </ul>
          </Col>
        </Row>
        <Row className="social">
          <Col md={6} className="menu-secondary">
            <ul id="demo-nav">
              <li><a href="/terms" >© 2021 Xscale</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of conditions</a></li>
            </ul>
          </Col>
          <Col md={6} className="socials">
            <ul className="social-icons">
            <li><a href="https://www.facebook.com" className="facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook"></a></li>
            <li><a href="https://www.linkedin.com" className="linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"></a></li>
            <li><a href="https://www.twitter.com" className="twitter" target="_blank" rel="noopener noreferrer" aria-label="Twitter"></a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <button className="btn">Go to the app</button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
