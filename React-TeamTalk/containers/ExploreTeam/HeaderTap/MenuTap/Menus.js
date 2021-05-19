import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Menu from './Menu'
import './Menus.css'


function Menus(props)
{
    return (
        <div className="Menus">
            <Menu title={"FindTeam"} link={"/find_team/findteam"}/>
            <Menu title={"MyTeam"} link={"/find_team/myteam"}/>
        </div>
    );
}


export default Menus;