import React from 'react';
import Aux from '../../hoc/Auxs'
import {BrowserRouter as Router} from 'react-router-dom'
import './Layout.css'
import Navbar from "../../../React-feature/ResponNavBar/container/Navbar";

function Layout(props)
{
    return (
        <Aux>
            <div>
                <Router>
                <Navbar/>
                {/*ToolBar,
                SideBar,
                BackDrop,*/}
                </Router>

            </div>
            <main className="layout-main">
                {props.children}
            </main>
        </Aux>
    )
}
export default Layout