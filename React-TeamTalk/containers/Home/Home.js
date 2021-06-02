import React from 'react';
import './Home.css'
import ExploreCompoment from "../Explore/ExploreCompoment";
import Layout from "../../components/layout/Layout";
import {HashLink} from "react-router-hash-link";
import axios from "axios";

class Home extends React.Component
{
    render()
    {
         return(
             <div className="home-background" id={"home"}>

                 <main className="home-Title">
                    <div className="title">
                        <h1>Welcome</h1>
                        <h2>Right Place 4YOU</h2>
                    </div>

                    <p>A platform where you can be helped as accessing it </p>

                     <HashLink smooth to={"#explore"}>
                        <button className={"button-explore"}>
                            <i className="fas fa-arrow-down"/> Explore
                        </button>
                     </HashLink>
                 </main>

                 <footer>
                     <div>
                        <i className="fas fa-globe fa-3x" />
                        <p>Open Platform</p>
                     </div>
                     <div>
                        <i className="fas fa-user-friends fa-3x"/>
                        <p>User</p>
                     </div>
                     <div>
                        <i className="fas fa-sitemap fa-3x"/>
                        <p>Team</p>
                     </div>
                     <div>
                        <i className="fas fa-lightbulb fa-3x"/>
                        <p>Answer</p>
                     </div>
                 </footer>

             </div>
         )
    }
}

export default Home;