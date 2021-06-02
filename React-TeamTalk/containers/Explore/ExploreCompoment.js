import React from 'react';
import FeatureCard from "./FeatureCard";
import './ExploreeeCompoment.css'
import TeamBackground from "../../assets/image_2/pyramids-starry-green.jpg";
import TalkBackground from "../../assets/image_2/pyramids-starry-pink.png";
import ManageBackground from "../../assets/image_2/pyramids-starry-hard-green.png";
const ExploreCompoment = () =>
{
    return(
        <div className="ExploreCompoment-div" id={"explore"}>
            <div>
                <div className="title-name">
                    <h1>TeamTalk Features.</h1>
                </div>

                <div  className={"explore-Item"}>
                    <FeatureCard title={"TalkMore"}
                                 description={"At there, you can freely seek any answer in response to your question as well as help answer others’."}
                                 button={"LEARN MORE"}
                                 backgroundimg={TalkBackground}
                    />

                    <FeatureCard title={"FindTeam"}
                                 description={"At there, you can freely and easily form a team to fullfil your project as well as find any existing team to be part of that team’s project."}
                                 button={"LEARN MORE"}
                                 backgroundimg={TeamBackground}

                    />

                    <FeatureCard title={"ManageTeam"}
                                 description={"Manage,Keep track team progress and member, with build in system with find team,you join or create"}
                                 button={"LEARN MORE"}
                                 backgroundimg={ManageBackground}
                    />
                </div>
            </div>
        </div>
    );
}
export default ExploreCompoment;
