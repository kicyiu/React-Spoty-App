import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../../../assets/img/banner-ico.png'
import Home from '../../modules/Home';
import Search from '../../modules/Search';

function NavBar(): JSX.Element {

    return (
        <Router>
            <Navbar expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
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
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/search">Search</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Switch>
                <Route path="home">
                    <Home/>
                </Route>
                <Route path="search">
                    <Search/>
                </Route>
            </Switch>
        </Router>
    );
}

export default NavBar;