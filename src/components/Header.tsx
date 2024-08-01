import React from 'react';
import '../assets/styles/Header/header.css'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom'; 
import logo from '../assets/images/about/Logo.svg'; 
import logoLight from '../assets/images/mainpage/Logo.svg'

interface HeaderProps {
  linkColor?: string; 
} 
const Header: React.FC<HeaderProps> = ({ linkColor = 'default-color' }) => {
  const location = useLocation();
  
  const currentLogo = location.pathname === '/' ? logoLight : logo;
  return (
    <header data-testid="header">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <img
               src={currentLogo}
              className="img-fluid"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/" className={`header__link ${linkColor}`}>Home</Nav.Link>
              <Nav.Link as={NavLink} to="/about" className={`header__link ${linkColor}`}>About</Nav.Link>
              <NavDropdown className={`header__link ${linkColor}`} title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item as={NavLink} to="/services" >Logistics IT Platform</NavDropdown.Item>
                <NavDropdown.Item href="#">Airfreight services</NavDropdown.Item>
                <NavDropdown.Item href="#">Trucking / Haulage</NavDropdown.Item>
                <NavDropdown.Item href="#">Customs brokerage</NavDropdown.Item>
                <NavDropdown.Item href="#">Cargo insurance</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={NavLink} to="/contacts" className={`header__link ${linkColor}`}>Contact us</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link href="#" className="btn">Go to the app</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

