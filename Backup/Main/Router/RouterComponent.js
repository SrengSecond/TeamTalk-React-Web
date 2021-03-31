import React from "react";

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import Home from "./Home";
import Planet from "./Planet";



function RouterComponent()
{
    return(
        <Router>
            <div className="routerComponent">
                <Nav/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/shop" component={Shop}/>
                    <Route path="/planet" component={Planet}/>
                </Switch>
            </div>
        </Router>
    )
}
export default RouterComponent