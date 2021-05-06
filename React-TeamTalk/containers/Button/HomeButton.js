import React from 'react';
import {HashLink as Link} from "react-router-hash-link";

const HomeButton = () => {
    return (
        <div>
            <Link smooth to={"#explore"}>
                <button className={"button-explore"}>
                    <i className="fas fa-angle-double-up"/> Just Explore
                </button>
            </Link>
        </div>
    );
};

export default HomeButton;
