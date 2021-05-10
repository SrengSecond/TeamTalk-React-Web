import React from 'react';
import FindTeam from "./FindTeam";
import './ExploreeeCompoment.css'
const ExploreCompoment = () =>
{
    return(
        <div className="ExploreCompoment-div" id={"explore"}>
            <div>
                <div className="title-name">
                    <h1>Explore TeamTalk</h1>
                </div>

                <div  className={"explore-Item"}>
                    <FindTeam title={"TalkMore"}
                              description={"At there, you can freely seek any answer in response to your question as well as help answer others’."}
                              button={"Explore Talk"}/>

                    <FindTeam title={"FindTeam"}
                              description={"At there, you can freely and easily form a team to fullfil your project as well as find any existing team to be part of that team’s project."}
                              button={"Explore Team"}/>
                </div>
            </div>
        </div>
    );
}
export default ExploreCompoment;
