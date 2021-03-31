import React from 'react'
import ErrorBoundary from "./ErrorBoundary";
class HigherComponent extends React.Component
{

    render()
    {
        return(
            <div>
                <ErrorBoundary>
                    <form action="">
                        <input type="number" placeholder={"Enter Number"}/>
                        <button type="submit"> asd </button>
                    </form>
                    <p>Samlpe</p>
                </ErrorBoundary>
            </div>
        )
    }


}
export default HigherComponent