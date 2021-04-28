import React from 'react';
import './SingIn.css'
import  '../Home/Home.css'
import {Link} from "react-router-dom";

class SignIn extends React.Component
{
    render()
    {
        return(
            <div className={"signIn-compoment"}>
                <div className="login-form">
                    <h1 className={"login-Title"}>LOGIN FORM</h1>
                    <form action="">
                        <label className={"input-label"} htmlFor="">USERNAME</label><br/>
                        <input type="text"/>
                        <br/>
                        <label className={"input-label"} htmlFor="">PASSWORD</label><br/>
                        <input type="text"/>
                        <br/>
                        <div className={"form-footer"}>
                            <div className={"remember-check"}>
                                <input type="checkbox"/>
                                <label htmlFor="">Remember Me</label>
                            </div>
                            <Link href="" to={'/forget_password'}>Forget Password ?</Link>
                        </div>
                        <br/>
                        <button className={"primary-button"} type={"submit"}> LOG IN</button>
                    </form>
                </div>
            </div>
/*            <div className="home-background">
                <main className="home-Title">
                    <div className="title">
                        <h3>Welcome Again</h3>
                        <h4>We Glad You Come Here</h4>
                    </div>

                    <button className={"button-explore"}>
                        Home
                    </button>
                </main>

                <h1>
                    BACk
                </h1>
            </div>*/
        )
    }
}
export default SignIn