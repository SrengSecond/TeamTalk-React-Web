import React from 'react';
import Aux from '../hoc/Auxs'
function Layout(props) {
    return (
        <Aux>
            <div>
                <h1>Sample</h1>
            </div>
            <main className="layout-main">
                {props.children}
            </main>
        </Aux>
    )
}

export default Layout;