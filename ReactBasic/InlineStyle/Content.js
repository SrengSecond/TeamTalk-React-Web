import React from "react";

function Content()
{
    const style =
        {
            color:"grey",
            backgroundColor:"#cccccc",
            fontSize: "20px"
        }
    return(
        <main className="mainContainer">
            <h1 style={style}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, accusantium aut commodi consectetur eveniet iusto libero molestiae obcaecati odit officia pariatur perferendis placeat quaerat qui quis quo, sapiente sed voluptatum.</h1>
        </main>
    )
}
export default Content;