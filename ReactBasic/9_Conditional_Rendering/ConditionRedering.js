import React from 'react';
import Conditional from "./Conditional";
import LoginOut from "./LoginOut";

class ConditionRedering extends React.Component
{
    constructor()
    {
        super();
        this.state =
            {
                isLoading: true,
                isLogin:false
            }
    }
    componentDidMount()
    {
        console.log("componentDidMount function called");

        setTimeout(() =>
        {
            return(
                this.setState({isLoading:false})
            )
        },1500)

    }

    handleClick = () =>
    {
        this.setState((prevState) =>
        {
            return(
                {
                    isLogin: !prevState.isLogin
                }
            )
        })
    }

    render()
    {
        console.log("render function called");

        return(
            <div>
                {/*<Conditional
                    isLoading={this.state.isLoading}
                />*/}

                <button onClick={this.handleClick}>
                    {
                        <LoginOut
                            isLogin={this.state.isLogin}/>
                    }
                </button>
            </div>
        )
    }
}
export default ConditionRedering