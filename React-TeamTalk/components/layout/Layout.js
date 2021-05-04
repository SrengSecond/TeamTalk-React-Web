import React from 'react';
import Aux from '../../hoc/Auxs'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from "../../../React-feature/ResponNavBar/container/Navbar";
import Home from "../../../React-feature/ResponNavBar/components/Page/Home";
import About from "../../../Backup/Main/Router/About";
import Help from "../../../React-feature/ResponNavBar/components/Page/Help";
import SignUp from "../../../React-feature/ResponNavBar/components/Page/SignUp";
import WhatNew from "../../../React-feature/ResponNavBar/components/Page/WhatNew";
import DeveloperUpdate from "../../../React-feature/ResponNavBar/components/Page/DeveloperUpdate";
import Form from "../../../React-feature/ResponNavBar/components/Page/Form";
import Community from "../../../React-feature/ResponNavBar/components/Page/Community";
import ExploreCompoment from "../../containers/Explore/ExploreCompoment";

function Layout(props) {
    return (
        <Aux>
            <Router>
                <div>
                    <Navbar/>
{/*                    <Switch>
                        <Route path={'/'} exact component={Home}/>
                        <Route path={'/about-us'} exact component={About}/>
                        <Route path={'/help'} exact component={Help}/>
                        <Route path={'/sign-up'} exact component={SignUp}/>
                        <Route path={'/what-new'} exact component={WhatNew}/>
                        <Route path={'/dev-update'} exact component={DeveloperUpdate}/>
                        <Route path={'/form'} exact component={Form}/>
                        <Route path={'/community'} exact component={Community}/>
                    </Switch>*/}
                </div>
                <main className={'layout-main'}>
                    {props.children}
                </main>

            </Router>
        </Aux>
    );
}

export default Layout;