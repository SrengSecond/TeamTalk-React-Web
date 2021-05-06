import React from 'react';
import HomeButton from "../Button/HomeButton";

const SignInLog = () => {
    return (
        <div>
            <main className="welcome-title">
                <div className="title">
                    <h3>Welcome to login</h3>
                    <h5>To Manage, Save, Access, Create <br/>Your Team & Question  </h5>
                </div>
                <HomeButton/>
            </main>
        </div>
    );
};

export default SignInLog;
