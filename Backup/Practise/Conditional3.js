import React from "react";
class Conditional3 extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            isLogin : false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick()
    {
        this.setState(preLogin => {
                return {
                    isLogin: !preLogin.isLogin
                }
            })
    }

    render()
    {
        console.log(this.state.isLogin)
        return (
            <div>
                <button onClick={this.handleClick} > {this.state.isLogin? "logout" : "login"} </button>
                <h2> {this.state.isLogin ? "Logged In" : "Logged Out" }</h2>
            </div>
        )
    }
}
export default Conditional3