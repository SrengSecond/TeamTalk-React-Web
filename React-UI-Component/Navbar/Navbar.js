import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import {MenuItems} from '../MenuItems/MenuItems'
import './Navabar.css'
import Button from "../Button/Button";

function Navbar(props)
{
    const [click,setClick] = useState(false);
    const handleClick = () =>
    {
        setClick(!click);
    }

    return (
        <>
            <nav className={"NavbarItems"}>
                <h1 className={"navbar-logo"}>
                    <i className={"fas fa-box-open"}/>
                    Kollection
                </h1>

                <div className={"menu-icon"}
                     onClick={handleClick}>
                    <i className={click ? "fas fa-times":"fas fa-bars"}/>
                </div>

                <ul className={click ? 'nav-menu active' : "nav-menu"}>
                    {MenuItems.map((item,index)=>
                    {
                        return (
                            <li>
                                <Link to={item.url}
                                      className={item.cName}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}

                </ul>

                <Button>Sign Up</Button>
            </nav>
        </>
    );
}

export default Navbar;