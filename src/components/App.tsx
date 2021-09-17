
//import NavBar from './shared/navbar/NavBar';

import React from 'react';
import logo from '../assets/img/banner-ico.png';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Home from '../modules/Home';
import Search from '../modules/Search';
import Artist from './artist/Artist';
import { QueryClientProvider, QueryClient} from 'react-query';

const queryClient = new QueryClient();

function App(): JSX.Element {

    return (
        <Router>
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
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/search">Search</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="container m-5">
                <Switch>
                    <Route path="/home">
                        <Home/>
                    </Route>
                    <Route path="/search">
                        <Search/>
                    </Route>
                    <Route path="/artist">
                        <QueryClientProvider client={queryClient}>
                            <Artist/>
                        </QueryClientProvider>
                    </Route>
                    <Route path="/">
                        <Redirect to="/home" />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;