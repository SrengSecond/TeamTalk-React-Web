import React from 'react';
import './BuildControl.css'

function BuildControl(props)
{
    return (
        <div className="build-control">
            <div className="label">{props.label}</div>
            <button
                className="less"
                name={"less"}
                onClick={props.addIngredientHandler}
                disabled={props.disableInfo}
            >Less</button>
            <button
                className="more"
                    name={"more"}
                    /*onClick={props.handleAdd}>More</button>*/
                    onClick={props.addIngredientHandler}>More</button>
        </div>
    );
}

export default BuildControl;