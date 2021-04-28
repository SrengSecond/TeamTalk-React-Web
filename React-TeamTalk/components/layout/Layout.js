import React from 'react';
import Aux from '../../hoc/Auxs'
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from "../../../React-feature/ResponNavBar/container/Navbar";

function Layout(props) {
    return (
        <Aux>
            <Router>
                <div>
                    {/*<Navbar/>*/}
                </div>
                <main className={'layout-main'}>
                    {props.children}
                </main>
            </Router>
        </Aux>
    );
}

export default Layout;