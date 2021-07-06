import React from 'react';
import HeroSection from "../HeroSection/HeroSection";
import Cards from "../../Card/Cards";
import Footer from "../../Footer/Footer";


function Home(props) {
    return (
        <>
            <HeroSection/>
            <Cards/>
            <Footer/>
        </>
    );
}

export default Home;