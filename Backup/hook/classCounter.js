import React from "react";
class ClassCounter extends React.Component
{
    constructor()
    {
        super();
        this.state =
            {
                count: 0
            }
    }

    handleChange = () =>
    {
        this.setState((prevState) =>
        {
                return{
                    count: prevState.count + 1
                }
            }
        )
    }

    render()
    {
        return (
            <div>
                {/*<button onClick={this.handleChange}>click {this.state.count}</button>*/}
                <button onClick={()=>
                {
                    this.setState()
                }
                }>click {this.state.count}</button>
            </div>
        )
    }
}
export default ClassCounter