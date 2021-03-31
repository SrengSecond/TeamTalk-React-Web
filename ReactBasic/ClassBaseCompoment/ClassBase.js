import React from 'react'

class ClassBase extends React.Component
{
    constructor() {
        super();
        this.state =
            {
                count:0,
                havocount:0
            }
            this.handleOnclick3 = this.handleOnclick3.bind(this);
    }

    handleOnclick3()
    {
        console.log("sd");
    }

    render()
    {
        const handleOnclick = () =>
        {
            this.setState( (pre_state)=>
            {
                return (
                    {
                        count: pre_state.count + 1
                    }
                )
            })
        }


        /*const prev_function = (pre_state) =>
        {
            return (
                {
                    this.state.count =
                }
            )
        }*/

        return(
            <div>
                <button onClick={handleOnclick}>count: {this.state.count}</button>
                <h1 >  {this.state.havocount} </h1>
            </div>
        )
    }
}
export default ClassBase;