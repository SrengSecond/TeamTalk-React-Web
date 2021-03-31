import React from 'react'
import Aux from './/Auxs'

function Adjacent ()
{
    //WE can return multiple element with parent div using Array and key
/*    return[
            <h1 key={1}
            >The House</h1>,
            <h1 key={2}
            >Of the</h1>,
            <h1 key={3}
            >Dead</h1>,
            <h1 key={4}
            >OVERKILL</h1>
        ]*/

    // or we can aux component to wrapper
/*        return(

            <Aux>
            <h1>The House</h1>
            <h1>OF THE</h1>
            <h1>DEAD</h1>
            </Aux>
        )  */
    // or we can React.fragment component to wrapper
        return(
            <React.Fragment>
            <h1>The House</h1>
            <h1>OF THE</h1>
            <h1>DEAD</h1>
            </React.Fragment>
        )
}
export default Adjacent