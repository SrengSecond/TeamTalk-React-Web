import React from 'react';
import {Switch,BrowserRouter as Router,Route} from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";

function App(props) {
    return (
        <>
            <Router>
                <Navbar/>
                <Switch>
                    <Route path={'/'} exact />
                </Switch>
            </Router>
        </>
    );
}

export default App;