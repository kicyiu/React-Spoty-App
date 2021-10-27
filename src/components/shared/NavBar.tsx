import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../../assets/img/banner-ico.png';
import './NavBar.css';

const NavBar = (): JSX.Element => {

    return (
        <Navbar expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">
                        <img
                            alt=""
                            src={ logo }
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        SpotiApp
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav defaultActiveKey="/home" className="me-auto">
                            <NavLink activeClassName="active" className="navLinks" to="/home">Home</NavLink>
                            <NavLink activeClassName="active" className="navLinks" to="/search">Search</NavLink>
                            {/* <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/search">Search</Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}

export default NavBar;