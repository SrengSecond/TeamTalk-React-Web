import React, {useEffect, useState} from "react";
function HookEffect2()
{
    const [x,setx] = useState(0)
    const [y,sety] = useState(0)


    const logMousePosition = (event) =>
    {
        console.log("mouse")

        setx(event.clientX)
        sety(event.clientY)
    }

    const addEvent = () =>
    {
        console.log("event")
        window.addEventListener('mousemove',logMousePosition)

        return() =>
        {
            window.removeEventListener('mousemove',logMousePosition)
        }
    }


    useEffect(addEvent,[])


    return (
        <div>
            <p>x: {x}</p>
            <p>y: {y}</p>
        </div>
    )
}
/*class HookEffect2 extends React.Component
{
    constructor()
    {
        console.log("Constructor")

        super();
        this.state =
            {
                x:0,
                y:0
            }
    }
    componentDidMount()
    {
        console.log("Component did mount")
        window.addEventListener('mousemove',this.logMousePosition)
    }
    logMousePosition = (e) =>
    {
        console.log("Mouse moving")
        this.setState(
            {
                x: e.clientX,
                y: e.clientY
            })
    }

    render()
    {
        console.log("Component render")

        return (
            <div>
                <p>x: {this.state.x}</p>
                <p>y: {this.state.y}</p>
            </div>
        )
    }
}*/
export default HookEffect2