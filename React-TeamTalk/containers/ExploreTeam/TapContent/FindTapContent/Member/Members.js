import React from 'react';
import Member from "./Member";
import './Members.css'
import icon from './../icon/mental-health.png'

function Members(props) {
    return (
        <div>
            <div className="Members">
                <Member  name={"Sreng"} iconUrl={icon} department={"ITED"} role={"Programmer"}/>
                <Member name={"Jane"} iconUrl={""} department={"ITTE"} role={"Designer"}/>
                <Member name={"Jane"} iconUrl={""} department={"ITTE"} role={"Designer"}/>
                <Member name={"Jane"} iconUrl={""} department={"ITTE"} role={"Designer"}/>
                <Member name={"Jane"} iconUrl={""} department={"ITTE"} role={"Designer"}/>
            </div>
        </div>
    );
}

export default Members;