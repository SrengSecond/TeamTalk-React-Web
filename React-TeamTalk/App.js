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
                {/*<Home/>*/}
                {/*<ExploreCompoment/>*/}
                {/*<LogInOut/>*/}
            </Layout>
        </Router>
    );
};

export default App;
