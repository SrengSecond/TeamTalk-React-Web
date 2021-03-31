import React from 'react'
import './Main.css'

function Main()
{
    return (
        <div className="main">
                <img src="https://www.flaticon.com/svg/vstatic/svg/188/188989.svg?token=exp=1614512734~hmac=d309b8104c021ef8eff7f87dea641743" alt=""/>
            <div className="top">
                <p className="main-name-level">Greninja <br/> Lv88</p>
            </div>
            <div className="middle">
                <div className="HP-bar">
                    <h5 className="HP-bar-label">HP</h5>
                    <div className="HP-bar-Health">
                    </div>
                </div>
            </div>
            <div className="bottom">
                <p className="main-HP-Values">
                    199/199
                </p>
            </div>


        </div>
    )
}
export default Main