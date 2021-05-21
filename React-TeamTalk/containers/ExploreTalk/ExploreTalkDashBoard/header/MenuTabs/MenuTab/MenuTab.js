import React from 'react';
import {Link} from "react-router-dom";
import './MenuTap.css'

function MenuTab(props)
{
    return (
        <Link className={props.SelectMenuName !== props.targetName ? "MenuTap" : "MenuTap-select" }
              name={props.targetName}
              onClick={props.handleColorChange}
              to={`${props.linkto}`}> {props.title}
        </Link>

    );
}

export default MenuTab;