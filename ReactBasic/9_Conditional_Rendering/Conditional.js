import React from 'react'
function Conditional(props)
{
    console.log(props.isLoading)
/*    if(props.isLoading)
    {
        return(
            <div>
                <h1>is Loading...</h1>
            </div>
        )
    }
    else
        {
            return(
                <div>
                    <h1>Finished loading</h1>
                </div>
            )
        }*/
    return(
        <div>
            <h1>{props.isLoading? "is loading": "done loading"}</h1>
        </div>
    )
}
export default Conditional