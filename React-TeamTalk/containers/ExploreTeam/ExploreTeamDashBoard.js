
import React, {Component} from 'react';

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
