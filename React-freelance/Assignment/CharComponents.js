import React from 'react'
import "./CharComponents.css"
function CharComponents(props)
{
    return(
        <div>
            <p
                className="characterList"
                onClick={props.handleDelete}
            >
                {props.charList}
            </p>
        </div>
    )
}
export default CharComponents