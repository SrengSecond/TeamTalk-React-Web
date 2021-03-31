import React,{Component} from 'react'
class CycleMethods extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            name: "Sok",
            damage: 50
        }
    }

    // This method only called one when this class compoment show up on screen
    componentDidMount()
    {
        //Example of the this function when you want to API called from external source
        console.log("ComponentDidMount function got called")
/*        this.setState(
            {
                name: this.props.name,
                damage: this.props.damage,
            }
        )*/
        this.setState(
            {

            }
        );
    }

    // This method is used to update DOM in response to prop or state change
    componentDidUpdate(prevProps)
    {
        console.log("ComponentDidUpdate function got called")
        if (this.props.name !== prevProps.name)
        {
            console.log("allow name to be change");
        }
    }

    //This lifecycle can be handy sometimes when you don’t want React to render your state or prop changes.
    shouldComponentUpdate(nextProps, nextState, nextContext)
    {
        console.log("shouldComponentUpdate function got called")
        return true;
    }

    //method is called just before the component is unmounted and destroyed.
    //If there are any cleanup actions that you would need to do, this would be the right spot.
    componentWillUnmount()
    {

    }

    //static getDerivedStateFromProps(props, state) {}

    //create backup some kind of data like object
    getSnapshotBeforeUpdate(prevProps, prevState)
    {

    }

    render()
    {
        console.log("render function got called")
        return (
            //region jsx
            <div className="cycleMethods">
                <h1>Name:{this.props.name}</h1>
                <h1 style={{display: this.state.damage > 100 && "none"}} >damage:{this.props.damage}</h1>
            </div>
            //endregion
        )
    }
}
export default CycleMethods