import React from "react";
import './Props.css'
function CoverArt(props)
{
    console.log(props)
    return (
        <div className={"Cover-art"}>
            <img src={props.contact.img}/>
            <h3>{props.contact.name}</h3>
            <p>Release Date: {props.contact.ReleaseDate}</p>
        </div>
    )
}
export default CoverArt