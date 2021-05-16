import React,{useState} from 'react';

import WithClass from '../hoc/WithClass'
import Aux from '../hoc/Auxs'
import {Link} from 'react-router-dom'
import {HashLink} from "react-router-hash-link";
import Dropdown from "./Dropdown";
import Button from "../components/Button/Button";

import './Navbar.css'

function Navbar ()
{
    const [click,setClick] = useState(false)
    const [dropdown,setDropdown] = useState(false)

    const handleClick = () =>
    {
        setClick(!click)
    }

    const handleMobileMenus = () =>
    {
        setClick(false)
    }
    const OnMouseEnter = () =>
    {
        if(window.innerWidth<1200)
        {
            setDropdown(false);
        }
        else
        {
            setDropdown(true);
        }
    }
    const OnMouseLeave = () =>
    {
        if(window.innerWidth<1200)
        {
            setDropdown(false);
        }
        else
            {
                setDropdown(false);
            }
    }

    return (
        <Aux>
                <nav className={"navbar"}>
                    <Link className={"navbar-logo"} to={'/home'}>
                        <i className="fas fa-user-astronaut"/> TeamTalk.
                    </Link>

                    <div className={"menu-icon"}
                         onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars" } />
                    </div>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>

                        <li className={"nav-item"}>
                            <HashLink smooth className={"nav-links"}
                                  onClick={handleMobileMenus}
                                  to={'#'}>
                                About Us
                            </HashLink >
                        </li>

                        <li className={"nav-item"}
                            onMouseEnter={OnMouseEnter}
                            onMouseLeave={OnMouseLeave}
                        >
                            <HashLink smooth className={"nav-links"}
                                  onClick={handleMobileMenus}
                                  to={'#explore'}>
                                Explore <i className={"fas fa-caret-down"}/>
                            </HashLink>
                            {dropdown && <Dropdown/>}
                        </li>

                        <li className={"nav-item"}>
                            <Link className={"nav-links"}
                                  onClick={handleMobileMenus}
                                  to={'/home'}>
                                Help
                            </Link>
                        </li>

                        <li className={"nav-item"}>
                            <Link className={"nav-links-mobile"}
                                  onClick={handleMobileMenus}
                                  to={'/sign-up'}>
                                LOG IN
                            </Link>
                        </li>
                    </ul>
                    <Button/>
                </nav>
        </Aux>
    )
}
export default Navbar;