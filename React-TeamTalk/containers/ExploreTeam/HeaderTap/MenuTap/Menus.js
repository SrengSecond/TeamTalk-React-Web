import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Menu from './Menu'
import './Menus.css'


function Menus(props)
{
    return (
        <div className="Menus">
            <Menu title={"FindTeam"}/>
            <Menu title={"MyTeam"}/>

        </div>
    );
}


export default Menus;