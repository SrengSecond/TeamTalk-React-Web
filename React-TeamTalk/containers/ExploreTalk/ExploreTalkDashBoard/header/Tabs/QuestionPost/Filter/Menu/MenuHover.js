import React from 'react';
import './Menu.css'
function MenuHover(props) {
    return (
        <p
            className={"Menu"}
            onClick={props.handleHover}
            // onMouseLeave={props.handleHover}
        >{props.title} </p>
    );
}

export default MenuHover;