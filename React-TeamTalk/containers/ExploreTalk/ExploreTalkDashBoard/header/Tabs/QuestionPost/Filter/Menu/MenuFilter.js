import React from 'react';
import {Link} from "react-router-dom";
import './Menu.css'

function MenuFilter(props)
{

    return (
        <Link className={props.SelectMenuName !== props.targetName ? "Menu" : "Menu-select" }
              name={props.targetName}
              onClick={props.handleColorChange}
              to={`${props.linkto}`}> {props.title} </Link>
    )

}

export default MenuFilter;