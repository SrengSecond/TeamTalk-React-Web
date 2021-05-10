import React from 'react';
import './FIndTeam.css'
import {Link} from "react-router-dom";
const FindTeam = (props) => {
    return (
        <div className="join-team">
            <div className="join-team-wrapper">
                <h1>{props.title}</h1>
                <div className="text-div">
                    <p>{props.description}</p>
                </div>
                <Link to={"/find_team"}>
                    <button  className={"findTeam-button"}>{props.button}</button>
                </Link>
            </div>
        </div>
    );
};

export default FindTeam;
