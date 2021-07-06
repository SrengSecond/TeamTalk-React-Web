import React from 'react';
import CardItem from "./CardItem";
import './Card.css'

function Cards(props) {
    return (
        <div className="cards">
            <h1>Checkout these EPIC Lofi Center ! </h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src={process.env.PUBLIC_URL + '/images/img-10.jpg'}
                            text={"Explore the hidden Flyer Pizza deep inside Mass of galaxy Space"}
                            label={"Cafe"}
                            path={"/services"}
                        />
                        <CardItem
                            src={process.env.PUBLIC_URL + '/images/img-11.jpg'}
                            text={"Relax at near lofi cafe with Gas Station on rode nearby "}
                            label={"GasStation"}
                            path={"/services"}
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src={process.env.PUBLIC_URL + '/images/img-14.jpg'}
                            text={"Explore 100 of video and hit classic movie from 80's to 2000"}
                            label={"VideoRenter"}
                            path={"/services"}
                        />
                        <CardItem
                            src={process.env.PUBLIC_URL + '/images/img-12.jpg'}
                            text={"Relax at near lofi cafe with Gas Station on rode nearby "}
                            label={"Resterant"}
                            path={"/services"}
                        />
                        <CardItem
                            src={process.env.PUBLIC_URL + '/images/img-13.jpg'}
                            text={"Relax at near lofi cafe with Gas Station on rode nearby "}
                            label={"Hotel"}
                            path={"/services"}
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;