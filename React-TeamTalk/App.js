import React from 'react';
import Layout from "./components/layout/Layout";
import './App.css'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Home from './containers/Home/Home'
import LogInOut from "./containers/LogInOut/LogInOut";
import ExploreCompoment from "./containers/Explore/ExploreCompoment";



const App = () =>
{
    return (
        <Router>
            <Layout>
                    <Switch>
                        <Route path={"/"} exact component={Home}/>
                        <Route path={"/explore"} component={ExploreCompoment}/>
                        <Route path={"/sign-up"} component={LogInOut}/>
                    </Switch>
                    {/*<Home/>*/}
                    {/*<ExploreCompoment/>*/}
                    {/*<LogInOut/>*/}
            </Layout>
        </Router>

    );
};

export default App;
