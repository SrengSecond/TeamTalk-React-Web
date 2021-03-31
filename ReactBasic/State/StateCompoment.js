import React,{Component} from 'react'
class StateCompoment extends Component
{
    constructor() {
        super();
        this.state =
            {
                count: 0
            }
    }

    render()
    {
        return(
            <div className="stateCompoment'">
                <button>
                    count: {this.state.count}
                </button>
            </div>
        )
    }
}
export default StateCompoment;