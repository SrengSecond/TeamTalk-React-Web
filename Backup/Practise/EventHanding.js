import React from "react";

class EventHanding extends React.Component
{
    constructor()
    {
        super();
        this.state =
            {
                count: 0,
                sa : 5
            }
            this.HandleClick = this.HandleClick.bind(this)

    }
    HandleClick()
    {
        //this.state.count++ // we don't directly update the state
        this.setState({count: 2}/*(lastState) =>
        {
            return {
               count: lastState.count + 1
            }
        }*/)
    }
    HandleMouse()
    {
       console.log("holing")
    }
    render()
    {
        return(
            <div>
                <h1 onMouseOver={this.HandleMouse()}>{this.state.count}</h1>
                <button onClick={this.HandleClick} >Click</button>
            </div>
        )
    }


}
export default EventHanding