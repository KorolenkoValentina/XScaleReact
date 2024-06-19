import React from 'react';
import logo from '../../../assets/images/about/Logo.svg'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
return (
<header>
    <Navbar expand="lg">
        <Container>
            <Navbar.Brand href="#">
                <img src={logo} className="img-fluid" alt="logo" />
            </Navbar.Brand>
            <Nav className="ms-auto">
            <Nav.Link  className="subtitle">Already have an account?</Nav.Link> 
              <Nav.Link href="#" className="btn" as={NavLink} to="/login">Log in</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
</header>
);
};

export default Header;