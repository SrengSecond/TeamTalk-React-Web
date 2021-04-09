import React from 'react';
import Aux from '../../hoc/Auxs'
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from "../../../React-feature/ResponNavBar/container/Navbar";

function Layout(props) {
    return (
        <Aux>
            <div>
                <Router>
                    <Navbar/>
                </Router>
            </div>
            <main className={'layout-main'}>
                {props.children}
            </main>
        </Aux>
    );
}

export default Layout;