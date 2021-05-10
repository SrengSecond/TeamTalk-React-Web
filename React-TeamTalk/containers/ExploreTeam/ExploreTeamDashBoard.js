
import React, {Component} from 'react';
import FindTeam from "./FindTeam/FindTeam";
import MyTeam from "./MyTeam/MyTeam";
import HeaderTap from "./HeaderTap/headerTap";
import './ExploreTeamDashBoard.css'


class ExploreTeamDashBoard extends Component
{
    render() {
        return(
            <div className="ExploreTeamDashBoard">
                <HeaderTap/>
            </div>
        );
    }
}
ExploreTeamDashBoard.propTypes = {};

export default ExploreTeamDashBoard;
