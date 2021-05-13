import React from 'react';
import Member from "./Member";
import './Members.css'
import icon from '../icon/mental-health.png'
import Scrollbar from "react-scrollbars-custom";

function Members(props) {
    return (
        <div>

            <div className="Members">
                <Scrollbar style={{ height:170 }}>

                    <Member  name={"MonsterHunter"} iconUrl={icon} department={"ITED"} role={"Programmer"}/>
                    <Member  name={"MonsterHunter"} iconUrl={icon} department={"ITED"} role={"Programmer"}/>
                    <Member  name={"MonsterHunter"} iconUrl={icon} department={"ITED"} role={"Programmer"}/>
                    <Member  name={"MonsterHunter"} iconUrl={icon} department={"ITED"} role={"Programmer"}/>
                    <Member  name={"MonsterHunter"} iconUrl={icon} department={"ITED"} role={"Programmer"}/>
                    <Member  name={"MonsterHunter"} iconUrl={icon} department={"ITED"} role={"Programmer"}/>
                    <Member  name={"MonsterHunter"} iconUrl={icon} department={"ITED"} role={"Programmer"}/>
                    {/*<Member  name={"MonsterHunter"} iconUrl={icon} department={"ITED"} role={"Programmer"}/>*/}
                    {/*<Member  name={"Ly Sreng"} iconUrl={icon} department={"ITED"} role={"Programmer"}/>*/}
                    {/*<Member  name={"KrazyEcho"} iconUrl={icon} department={"ITED"} role={"Programmer"}/>*/}

                </Scrollbar>
            </div>

        </div>
    );
}

export default Members;