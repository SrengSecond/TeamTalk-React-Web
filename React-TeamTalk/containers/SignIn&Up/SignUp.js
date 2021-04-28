import React from 'react';
import './SignUp.css'
import WithClass from '../../hoc/WithClass'
class SignUp extends React.Component
{
    render()
    {
        return(
            <div className="signUp-component">
                <div className={"signUp-form"}>
                    <h1 className={"form-title"}>REGISTRATION FORM</h1>
                    <div className="registration-form">
                        <form action="">
                            <label htmlFor="">Name</label>
                            <input className={"first-name-col"} type="text"/>
                            <input className={"last-name-col"} type="text"/>

                            <label className={"first-name-label"} htmlFor="">First Name</label>
                            <label className={"last-name-label"} htmlFor="">Last Name</label>

                            <label htmlFor="">School</label>
                            <input type="text"/>

                            <label htmlFor="">Major</label>
                            <input className={"major"} type="text"/>

                            <label className={"year-label"} htmlFor="">Year</label>
                            <input className={"year"} type="number"/>

                            <label htmlFor="">Email</label>
                            <input type="email"/>

                            <label htmlFor="">Password</label>
                            <input type="password"/>

                            <label htmlFor="">Confirm</label>
                            <input type="password"/>

                            <label htmlFor="">Phone</label>
                            <input type="number"/>

                            <button className={"submit-button"} type="submit">REGISTER</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default SignUp