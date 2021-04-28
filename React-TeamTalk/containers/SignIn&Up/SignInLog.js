import React from 'react';
import HomeButton from "../Button/HomeButton";

const SignInLog = () => {
    return (
        <div>
            <main className="welcome-title">
                <div className="title">
                    <h3>Welcome Again</h3>
                    <h4>We Glad You Come Here</h4>
                </div>
                <HomeButton/>
            </main>
        </div>
    );
};

export default SignInLog;
