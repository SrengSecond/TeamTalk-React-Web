import React from 'react'
function AssignmentComponent(props)
{
    return(
        <div>
            <input
                onChange={props.handleChange}
                value={props.text}
                type="text"/>
            <p
            >Input Length:{props.text.length}</p>

        </div>
    )
}
export default AssignmentComponent