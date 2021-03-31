import React from 'react'
function UserInput(props)

{
    return(
        <div>
            <input
                type="date"
                onChange={props.handleChange}
                value={props.value}
            />
        </div>
    )
}
export default UserInput;