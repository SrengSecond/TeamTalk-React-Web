import React from "react";

function Jokes(props)
{
    return (
        <div>
            <h3 style={{display: props.question ? "block" : "none"}}>Question: {props.question}</h3>
            <h3>Answer: {props.punchline}</h3>
            {/*<h3 style={{display: props.contact.question ? "block" : "none"}}>Question: {props.contact.question}</h3>*/}
            {/*<h3>Answer: {props.contact.punchline}</h3>*/}
            <hr/>
        </div>
    )
}

export default Jokes