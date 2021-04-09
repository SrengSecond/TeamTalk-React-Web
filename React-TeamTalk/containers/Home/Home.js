import React from 'react';
import './Home.css'
class Home extends React.Component
{
    render()
    {
         return(
             <div className="home-background">
                <div className="home-Title">
                    <h1>Welcome</h1>
                    <h2>Right Place 4YOU</h2>
                    <p>A platform where you can be helped as accessing it </p>
                    <button>
                        Explore
                    </button>
                </div>
             </div>
         )
    }
}

export default Home;