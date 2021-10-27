
//import NavBar from './shared/navbar/NavBar';

import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import NavBar from './shared/NavBar';
import Home from '../modules/Home';
import Search from '../modules/Search';
import Artist from './artist/Artist';
import { QueryClientProvider, QueryClient} from 'react-query';

const queryClient = new QueryClient();

function App(): JSX.Element {

    return (
        <Router>
            <NavBar />
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