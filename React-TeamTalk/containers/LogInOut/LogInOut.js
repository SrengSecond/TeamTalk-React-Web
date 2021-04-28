import React from 'react'
import './LogInOut.css'
import SignIn from "../SignIn&Up/SignIn";
class LogInOut extends React.Component
{
    render()
    {
        return(
            <div className="home-background">

                {/*welcome-title*/}
                <main className="welcome-title">
                    <div className="title">
                        <h3>Welcome Again</h3>
                        <h4>We Glad You Come Here</h4>
                    </div>
                    <button className={"button-explore"}>
                        Home
                    </button>
                </main>

                {/*login Form*/}
                <SignIn/>
            </div>
        )
    }
}
export default LogInOut