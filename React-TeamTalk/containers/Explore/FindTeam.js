import React from 'react';
import './FIndTeam.css'
const FindTeam = (props) => {
    return (
        <div className="join-team">
            <div className="join-team-wrapper">
                <h1>{props.title}</h1>
                <div className="text-div">
                    <p>{props.description}</p>
                </div>
                <button className={"findTeam-button"}>{props.button}</button>
            </div>
        </div>
    );
};

export default FindTeam;
