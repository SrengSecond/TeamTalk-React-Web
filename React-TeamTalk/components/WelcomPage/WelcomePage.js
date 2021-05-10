import React from 'react';
import Home from "../../containers/Home/Home";
import ExploreCompoment from "../../containers/Explore/ExploreCompoment";
import LogInOut from "../../containers/LogInOut/LogInOut";
import Layout from "../layout/Layout";

function WelcomePage(props) {
    return (
        <>
            <Home/>
            <ExploreCompoment/>
            <LogInOut/>
        </>
    );
}

export default WelcomePage;