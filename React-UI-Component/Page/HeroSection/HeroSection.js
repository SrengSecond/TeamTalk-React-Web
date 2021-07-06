import React from 'react';
import './HeroSection.css'
import Button from "../../Button/Button";

function HeroSection(props) {
    return (
        <div className={"heroSection-Container"}>
            <video src={process.env.PUBLIC_URL + '/videos/video-4.mp4'} autoPlay loop muted/>
            <h1>KOLLECTION AWAITS</h1>
            <p>What are you waiting for ?</p>
            <div className="hero-btns">
                <Button className="btns"
                        buttonStyle={"btn--outline"}
                        buttonSize={"btn--large"}>
                    GET STARTED
                </Button>
                <Button className="btns"
                        buttonStyle={"btn--primary"}
                        buttonSize={"btn--large"}
                        borderRadius={"btn-no-radius"}>
                    WATCH KOLLECTION <i className={"far fa-play-circle"}/>
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;