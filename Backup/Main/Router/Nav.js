import React from "react";
import {Link} from "react-router-dom"

import '../Router_style/Nav.css'

function Nav()
{
    return(
        <nav>
            <h1>Logo</h1>
            <ul className="nav_Link">
                <Link to={"/about"}>
                    <ol>About</ol>
                </Link>
                <Link to={"/shop"}>
                    <ol>Shop</ol>
                </Link>
                <Link to={"/planet"}>
                    <ol>Planet</ol>
                </Link>
            </ul>
        </nav>
    )
}
export default Nav