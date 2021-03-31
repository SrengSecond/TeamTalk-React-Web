import React from "react";
import "./App.css"
import Header from "./Header";
import SideBar from "./SideBar";
import Feed from "./Feed";
import Widget from "./Widget";

function App()
{
    return (
        <div className="app">
            <Header/>
            <div className={"app__body"}>
                <SideBar/>
                <Feed/>
                <Widget/>
            </div>

            {/*//body
                //sidebar
                //feed
                //widgets*/}
        </div>
    )
}
export default App