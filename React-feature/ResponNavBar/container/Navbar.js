import React,{useState} from 'react';

import WithClass from '../hoc/WithClass'
import Aux from '../hoc/Auxs'
import {Link} from 'react-router-dom'
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
        if(window.innerWidth<960)
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
        if(window.innerWidth<960)
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
                    <Link className={"navbar-logo"} to={'/'}>
                        TeamTalk.
                    </Link>

                    <div className={"menu-icon"}
                         onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars" } />
                    </div>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className={"nav-item"}>
                            <Link className={"nav-links"}
                                  onClick={handleMobileMenus}
                                  to={'/about-us'}>
                                About Us
                            </Link>
                        </li>

                        <li className={"nav-item"}
                            onMouseEnter={OnMouseEnter}
                            onMouseLeave={OnMouseLeave}
                        >
                            <Link className={"nav-links"}
                                  onClick={handleMobileMenus}
                                  to={'/community'}>
                                Community <i className={"fas fa-caret-down"}/>
                            </Link>
                            {dropdown && <Dropdown/>}
                        </li>

                        <li className={"nav-item"}>
                            <Link className={"nav-links"}
                                  onClick={handleMobileMenus}
                                  to={'/help'}>
                                Help
                            </Link>
                        </li>

                        <li className={"nav-item"}>
                            <Link className={"nav-links-mobile"}
                                  onClick={handleMobileMenus}
                                  to={'/sign-up'}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    <Button/>
                </nav>
        </Aux>
    )
}
export default Navbar;