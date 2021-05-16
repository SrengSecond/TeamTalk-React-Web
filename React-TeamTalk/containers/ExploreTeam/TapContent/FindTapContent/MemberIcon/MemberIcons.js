import React,{useState} from 'react';
import './MemberIcons.css'

import MemberIcon from "./MemberIcon";
import Member from "../Member/Member";

function MemberIcons(props)
{
    return(
        <div  className="MemberIcons">
            {props.member.map((each,index) =>
            {
                return (
                    <div key={index}>
                        <MemberIcon fontSize={props.fontSize} classes={each != null?"memberIcon-active" : "memberIcon-inactive"}/>
                    </div>
                )
            })}
        </div>
    );
}

export default MemberIcons;