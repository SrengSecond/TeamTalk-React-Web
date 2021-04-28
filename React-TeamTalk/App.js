import React from 'react';
import Layout from "./components/layout/Layout";
import './App.css'
import Home from './containers/Home/Home'
import SignUp from "../React-TeamTalk/containers/SignIn&Up/SignUp"
import SignIn from "./containers/SignIn&Up/SignIn";
import LogInOut from "./containers/LogInOut/LogInOut";


const MyComponent = () =>
{
    return (
        <Layout>
            {/*<Home/>*/}
            <LogInOut/>

        </Layout>
    );
};

export default MyComponent;
