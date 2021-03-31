import React,{useState} from "react";
class ClassEffect extends React.Component
{
    constructor()
    {
        super();
        this.state =
        {
            count: 0
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount()
    {
        console.log("component mount")
        document.title = `Count ${this.state.count}`
    }
    componentDidUpdate(prevProps, prevState, snapshot)
    {
        console.log("component Update")
        document.title = `Count ${this.state.count}`

    }
    componentWillUnmount()
    {

    }

    handleChange ()
    {
        for(let i = 0; i<20; i++)
        {
            this.setState(prevCount =>
                {
                    return{
                        count: prevCount.count+ 1
                    }
                }
            )
        }


    }

    render()
    {
        console.log("component render")
        return (
            <div>
                <button onClick={this.handleChange} >click counts {this.state.count}</button>
                <h2>{JSON.stringify(this.state.count)}</h2>
            </div>
        )
    }


}
export default ClassEffect