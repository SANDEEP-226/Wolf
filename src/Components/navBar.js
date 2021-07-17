import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import logo from './images/logo.png';
import Wolf1 from './images/wolf.jpg'
import Wolf2 from './images/wolf2.jpg'
import Wolf3 from './images/wolf3.jpg'

import Home from './Home';
import About from './About';
import Contact from './Contact';


class navBar extends React.Component {
    render() {
        return (

            <Router>
                <div className="NavBar">
                    <div className="Logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className="ul">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li><li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>

                </div>
                <hr />
                <Switch>
                    <Route exact path="/">
                        <Home imgSrc={Wolf1} />
                    </Route>
                    <Route path="/about">
                        <About imgSrc1={Wolf2} imgSrc2={Wolf3} />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                </Switch>

            </Router>
        );
    }
}

export default navBar;