import React from 'react';
class Refs extends React.Component
{
    constructor(props) {
        super(props);
        this.inputElement = React.createRef();
    }
    componentDidMount()
    {
        this.inputElement.current.focus();
    }
    render()
    {
        return(
            <div
            >
                <h1>name {this.props.name}</h1>
                <h1>age {this.props.age}</h1>
                <input
                    type="text"
                    placeholder="EnterSomething"

                    //1
                    //ref={(inputEL) => (inputEL.focus())}

                    //2
                    /*ref={(inputEL) => (this.inputElement = inputEL) }*/

                    //3
                    ref={this.inputElement}
                />
            </div>
        )
    }
}
export default Refs