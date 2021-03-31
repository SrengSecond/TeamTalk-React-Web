import React from "react";
import Header from "./Header";
import FetchData from "./MemeGenerator";


class App extends React.Component
{
    constructor()
    {
        super();
    }
    render()
    {
        return (
            <div>
                <Header/>
                <FetchData/>
            </div>
        )
    }
}
export default App