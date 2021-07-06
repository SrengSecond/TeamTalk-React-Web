import React from 'react';
import Navbar from "./Navbar/Navbar";
import {Redirect,Switch,BrowserRouter as Router,Route} from "react-router-dom";

import './App.css'
import Home from "./Page/Home/Home";
import Service from "./Page/Service/Service";
import Product from "./Page/Product/Product";
import Order from "./Page/Order/Order";
import Contact from "./Page/ContactUs/Contact";
function App(props) {
    return (
        <>
            <Router>
                <Navbar/>
                <Switch>
                    <Redirect from={"/"} exact to={"/home"}/>
                    <Route path={'/home'} component={Home}/>
                    <Route path={'/service'} component={Service}/>
                    <Route path={'/order'} component={Order}/>
                    <Route path={'/product'} component={Product}/>
                    <Route path={'/contact-us'} component={Contact}/>
                    <Route path={'/sign-up'} component={Home}/>
                </Switch>
            </Router>
        </>
    );
}

export default App;