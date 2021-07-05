import React from 'react';
import './DepartmentButton.css'

function DepartmentButton(props)
{
    return (
        <div className={props.classes}>
            <button className={"button"}
                    onClick={() => props.handleClick(props.name)}>
                {props.name}
            </button>
        </div>
    );
}

export default DepartmentButton;