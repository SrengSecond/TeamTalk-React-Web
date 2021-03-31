import React from "react";
function Conditional(props)
{
    /*if(props.isLoading)
    {
        return (
            <h3>Loading...</h3>
        )
    }
    else
    {
        return (
            <h1>finish loading</h1>
        )
    }*/

    return (
        <div>
            {props.isLoading ? <h3>Loading...</h3> : <h3>Hello World</h3>}
        </div>
    )


}
export default Conditional