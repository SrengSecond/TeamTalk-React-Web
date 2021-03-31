import React from 'react'
function LoginOut(props)
{
    return(
        <div>
            {props.isLogin? <h1>You login</h1> : <h1>You logout</h1>}
        </div>
    )
}
export default LoginOut