import React from 'react';
import Layout from "./components/layout/Layout";
import './App.css'
import Home from './containers/Home/Home'
import SignUp from "../React-TeamTalk/containers/SignUp/SignUp"
import SignIn from "./containers/SignIn&Up/SignIn";

const MyComponent = () =>
{
    return (
        <Layout>
            {/*<Home/>*/}
            <SignIn/>
        </Layout>
    );
};

export default MyComponent;
