import React from 'react';
import Aux from '../../hoc/Auxs'
import Navbar from "../../container/Navbar";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from "../Page/Home";
import About from "../../../../Backup/Main/Router/About";
import Help from "../Page/Help";
import WhatNew from "../Page/WhatNew";
import SignUp from "../Page/SignUp";
import DeveloperUpdate from "../Page/DeveloperUpdate";
import Form from "../Page/Form";
import Community from "../Page/Community";

import './Layout.css'


function Layout(props) {
    return (
        <Aux>
            <div>
                <div className="nav-bar">
                <Router>
                    <Navbar/>
                    <Switch>
                        <Route path={'/'} exact component={Home}/>
                        <Route path={'/about-us'} exact component={About}/>
                        <Route path={'/help'} exact component={Help}/>
                        <Route path={'/sign-up'} exact component={SignUp}/>
                        <Route path={'/what-new'} exact component={WhatNew}/>
                        <Route path={'/dev-update'} exact component={DeveloperUpdate}/>
                        <Route path={'/form'} exact component={Form}/>
                        <Route path={'/community'} exact component={Community}/>
                    </Switch>
                </Router>
                </div>
            </div>
            <main className="layout-main">
                {props.children}
            </main>
        </Aux>
    )
}

export default Layout;