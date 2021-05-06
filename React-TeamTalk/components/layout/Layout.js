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
import FectData from "../Network/FectData";


function Layout(props) {
    return (
        <Aux>
            <Router>
                {/*<FectData/>*/}
                <div>
                    <Navbar/>
                </div>
                <main className={'layout-main'}>
                    {props.children}
                </main>
            </Router>
        </Aux>
    );
}

export default Layout;