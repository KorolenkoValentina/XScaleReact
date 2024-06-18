import React from 'react';
import '../assets/styles/Footer/footer.css'
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/images/mainpage/Logo-footer.svg'; 

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-menu">
          <Col md={6} className="logo-menu">
            <img src={logo} alt="Footer Logo" />
            <p className="subtitle">Innovative platform for the logistics industry</p>
          </Col>
          <Col md={6} className="menu">
            <ul id="demo-nav">
              <li><a href="index.html">Home</a></li>
              <li><a href="aboutus.html">About</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="contacts.html">Contact us</a></li>
            </ul>
          </Col>
        </Row>
        <Row className="social">
          <Col md={6} className="menu-secondary">
            <ul id="demo-nav">
              <li><a href="#">© 2021 Xscale</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of conditions</a></li>
            </ul>
          </Col>
          <Col md={6} className="socials">
            <ul className="social-icons">
              <li><a href="#" className="facebook" target="_blank" rel="noopener noreferrer"></a></li>
              <li><a href="#" className="linkedin" target="_blank" rel="noopener noreferrer"></a></li>
              <li><a href="#" className="twitter" target="_blank" rel="noopener noreferrer"></a></li>
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
