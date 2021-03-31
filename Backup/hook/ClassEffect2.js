import React from "react";

class ClassEffect2 extends React.Component {
    constructor() {
        console.log("Constructor")

        super();
        this.state =
            {
                x: 0,
                y: 0
            }
    }

    componentDidMount() {
        console.log("Component did mount")
        window.addEventListener('mousemove', this.logMousePosition)
    }

    logMousePosition = (e) => {
        console.log("Mouse moving")
        this.setState(
            {
                x: e.clientX,
                y: e.clientY
            })
    }

    componentWillUnmount()
    {
        window.removeEventListener('mousemove',this.logMousePosition)
    }

    render() {
        console.log("Component render")

        return (
            <div>
                <p>x: {this.state.x}</p>
                <p>y: {this.state.y}</p>
            </div>
        )
    }
}


export default ClassEffect2