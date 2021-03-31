import React from "react";
class ClassDependency extends React.Component
{
    constructor() {
        super();
        this.state =
            {
                count: 0
            }
    }

    componentDidMount()
    {
        //interval we creat is knows as Dependency
        this.interval = setInterval(this.updateCount,1000)
    }
    componentWillUnmount()
    {
        /*clearInterval(this.interval)*/
    }
    updateCount = () =>
    {

        this.setState(pre =>
        {
            return {
                count: pre.count + 1
            }
        }
        )
    }

    render()
    {
        return (
            <div>
                <h1>{this.state.count}</h1>
            </div>
        )
    }
}
export default ClassDependency

/*
import React from "react";
class ClassDependency extends React.Component
{
    constructor() {
        super();
    }
    render()
    {
        return(

        )
    }
}
export default ClassDependency*/
