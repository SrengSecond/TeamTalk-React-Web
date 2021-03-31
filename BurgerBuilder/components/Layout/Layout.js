import React from 'react';
import Aux from '../../hoc/Auxs'

import './Layout.css'

function Layout(props)
{
    return (
        <Aux>
            <div>
                ToolBar,
                SideBar,
                BackDrop,
            </div>
            <main className="layout-main">
                {props.children}
            </main>
        </Aux>
    )
}
export default Layout