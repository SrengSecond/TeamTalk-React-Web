import React from 'react';
import './Register.css'
import './LogInOut.css'
import SignUpLog from "../SignIn&Up/SignUpLog";
import SignUp from "../SignIn&Up/SignUp";
import HomeButton from "../Button/HomeButton";
import {Link} from "react-router-dom";


function Register(props)
{
    return (
        <div className="logInOut-background" /*id={"sign-up"}*/>
            <main className="welcome-title">
                <div className="title">
                    <h5>Please Fill Your Data</h5></div>
                <Link to={"Home"}>
                    <button className={"button-explore"}>
                        <i className="fas fa-angle-double-up"/> Go Back
                    </button>
                </Link>
            </main>
            <SignUp/>
        </div>
    );
}

export default Register;