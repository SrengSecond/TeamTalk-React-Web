import React from 'react';
import './DepartmentButton.css'

function DepartmentButton(props) {
    return (
        <div className={"DepartmentButton"}>
            <button className={"button"}>
                {props.name}
            </button>

        </div>
    );
}

export default DepartmentButton;