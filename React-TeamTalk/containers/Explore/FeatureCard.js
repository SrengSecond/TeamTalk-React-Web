import React from 'react';
import './FIndTeam.css'
import {Link} from "react-router-dom";
import background from '../../assets/image/pyramids-starry-green.jpg'
const FeatureCard = (props) =>
{

    return (
        <div className="features-card"
             style={{backgroundImage:`url(${props.backgroundimg})`}}
        >
            <div className="features-card-wrapper">

                <div className="cardTitle-Div">
                    <h1 className={"cardTitle"}>{props.title}
                        <p className="underlineCard"/>
                    </h1>
                </div>

                <div className="cardDetail">
                    <p>{props.description}</p>
                </div>

                <Link to={"/find_team"}>
                    <button  className={"findTeam-button"}>{props.button}</button>
                </Link>
            </div>
        </div>
    );
};

export default FeatureCard;
