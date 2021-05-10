import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"


import Layout from "./components/layout/Layout";
import Home from './containers/Home/Home'
import LogInOut from "./containers/LogInOut/LogInOut";
import ExploreCompoment from "./containers/Explore/ExploreCompoment";
import ExploreTeamDashBoard from "./containers/ExploreTeam/ExploreTeamDashBoard";

import './App.css'
import WelcomePage from "./components/WelcomPage/WelcomePage";

const App = () =>
{
    return (
        <div>
            <Router>
                <Layout>
                    <Switch>
                        {/*<Route path={''} components={WelcomePage}/>*/}
                        {/*<WelcomePage/>*/}
                        {/*<Route path={'/find_team'} component={ExploreTeamDashBoard}/>*/}
                        <ExploreTeamDashBoard/>
                    </Switch>
                </Layout>
            </Router>
        </div>

);
};

export default App;
