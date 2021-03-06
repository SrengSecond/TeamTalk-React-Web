import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {Button} from "../Button/Button";
import './NavBar.css'

function Navbar(props)
{
    const [click,setClick] = useState(false);
    const [button,setButton] = useState(true);
    const handleClick = () =>
    {
        setClick(!click);
    }
    const closeMobileMenu = () =>
    {
        setClick(false)
    }
    const showButton = () =>
    {
        if(window.innerWidth <= 960)
        {
            setButton(false);
        }else
            {
                setButton(true);
            }
    }

    window.addEventListener('resize',showButton)

    return (
        <>
         <nav className={"navbar"}/>

         <div className="navbar-container">
            <Link to={"/"} className={"navbar-logo"}>
                BLOMMER
                <i className="fas fa-meteor"/>
            </Link>
             <div className="menu-icon"
                  onClick={handleClick}>
                 <i className={click ? 'fas fa-times':"fas fa-bars"}/>
             </div>

             <ul className={click ? 'nav-menu active':'nav-menu'}>
                 <li className={"nav-item"}>
                     <Link to={"/"} className={"nav-links"} onClick={closeMobileMenu}>
                         Home
                     </Link>
                 </li>
                 <li className={"nav-item"}>
                     <Link to={"/about"} className={"nav-links"} onClick={closeMobileMenu}>
                         About
                     </Link>
                 </li>
                 <li className={"nav-item"}>
                     <Link to={"/Product"} className={"nav-links"} onClick={closeMobileMenu}>
                         Product
                     </Link>
                 </li>
                 <li className={"nav-item"}>
                     <Link to={"/sign-up"} className={"nav-links-mobile"} onClick={closeMobileMenu}>
                         Sign Up
                     </Link>
                 </li>
             </ul>

             {button && <Button buttonStyle={"btn--outline"}>SIGN UO</Button>}
         </div>
        </>
    );
}

export default Navbar;