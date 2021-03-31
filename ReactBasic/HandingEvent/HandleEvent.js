import React,{Component} from 'react'
class HandleEvents extends Component
{
    constructor() {
        super();
        this.state =
            {
                count: 0,
                havorCount: 0,
                isCheck:true,
            }
            //this.handleEvent = this.handleEvent.bind(this);
    }


    handleEvent = () =>
    {
        this.setState(
            {
                count:this.state.count + 1
            })
    }

    anotherHandleEvent = () =>
    {
        this.setState((prev_state) =>
        {
            return(
                {
                    count: prev_state.count + 1
                }
            )
        })
    }

    render()
    {
        const handlePrev_State = (prev_state) =>
        {
            console.log("handlePrev_State Called")
            return(
                {
                    isCheck: !prev_state.isCheck
                }
            )
        }

        const handleOnChange = () =>
        {
            console.log("You did hit checkbox");
            this.setState(handlePrev_State)
        }

        return(

            //region JSX (Writing HTML on javaScript)
            <div className="handleEvent">
                <button onClick={this.handleEvent}>
                    count: {this.state.count}
                </button>

{/*                <p onMouseOver={this.handlePoint}>
                    havorCount: {this.state.havorCount}
                </p>*/}

                <input
                    type={"checkbox"}
                    checked={this.state.isCheck}
                    onChange={handleOnChange}
                />
            </div>
            //endregion
        )
    }
}


export default HandleEvents