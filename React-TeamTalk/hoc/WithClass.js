import React from "react";
import Aux from './Auxs'
function WithClass(props)
{
    return (
        <Aux className={props.classes}>
            {props.children}
        </Aux>
    );
}

export default WithClass;