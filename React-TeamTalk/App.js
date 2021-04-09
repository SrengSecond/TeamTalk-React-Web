import React from 'react';
import Layout from "./components/layout/Layout";
import './App.css'
import Home from './containers/Home/Home'
const MyComponent = () =>
{
    return (
        <Layout>
            <Home/>
        </Layout>
    );
};

export default MyComponent;
