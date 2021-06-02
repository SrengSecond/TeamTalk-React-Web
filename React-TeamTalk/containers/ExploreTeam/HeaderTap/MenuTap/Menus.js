import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Menu from './Menu'
import './Menus.css'


function Menus(props)
{
    return (
        <div className="Menus">
            <Menu title={"FindTeam"} link={"/exploreTeam/findteam"}/>
            <Menu title={"MyTeam"} link={"/exploreTeam/myteam"}/>
        </div>
    );
}


export default Menus;