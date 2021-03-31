import React from "react";
import "./SideBarRow.css"
import {Avatar} from "@material-ui/core";
function SideBarRow ({src, title, Icon})
{
    return (
        <div className={"sidebarRow"}>
            {src && <Avatar src={src}/>}
            {Icon && <Icon/>}
            <h4>{title}</h4>
        </div>
    )
}
export default SideBarRow