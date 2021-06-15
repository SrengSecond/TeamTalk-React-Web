import React from 'react'
import './LogInOut.css'
import SignIn from "../SignIn&Up/SignIn";
import SignUp from "../SignIn&Up/SignUp";
import SignInLog from "../SignIn&Up/SignInLog";
import SignUpLog from "../SignIn&Up/SignUpLog";

class LogInOut extends React.Component
{
    render()
    {
        return(
            <div className="logInOut-background" id={"sign-up"}>
                <SignInLog/>
                <SignIn/>
            </div>
        )
    }
}
export default LogInOut