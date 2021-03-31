import React, {useEffect} from "react";
import '../Style/BasicCompoment.css'
import styled from 'styled-components'
import Weapon from './Weapon/Weapon'
import Radium from "radium"
import Cockpit from "../Cockpit/Cockpit";
import Header from "../Cockpit/Header";

function BaseComponent(props)
{
    useEffect(() =>
    {
        console.log('[BaseComponent] useEffect')
        //Http request
        setTimeout(() =>
        {
            //alert('Save to cloud!')

        },1000);
    }, [])

    console.log('[BaseComponent.js] rendering...');
    const DisplayButton = styled.button`
          background-color: ${props => props.alt.display ? 'orange' : 'gray'};
          border: 1px solid black;
          border-radius:2px;
          padding: 8px;
          color: white;
          cursor: pointer;
          margin-bottom: 10px;
          
          &:hover 
          {
            background-color: ${props => props.alt.display ? '#ff8400' : 'black'}; 
            color:white;
          }
    `
    let weapons = null;

    if(props.display)
    {
        weapons = (
            <div className="weapon">
                <hr/>
                <h1>WeaponList</h1>
                <Weapon
                    weapon={props.weapon}
                    colorChange={props.handleColorElement}
                    delete={props.handleDelete}
                    handleNameChange={props.handleNameChange}
                />
                <Header/>
            </div>
        )
/*        DisplayButton.backgroundColor = "white"
        DisplayButton.color = "black"*/

        /*displayButtonStyle[':hover'] =
        {
            backgroundColor:"lightGray"
        }*/

    }

    let displayCockpit = null;

    if(props.displayCockpit)
    {
        displayCockpit = (
         <Cockpit
            handleClick={props.handleClick}
            handleChanges={props.handleChanges}
            handleLogin={props.handleLogin}
            add={props.add}
            validInput={props.validInput}

        />
        )
    }

return(
    <div>
        <button
            onClick={props.handleCockpitDisplay}
        >
            ShowCockpit
        </button><hr/>

        {displayCockpit}

        <main className="Display-button">
            <DisplayButton
                alt={props}
                onClick={props.handleDisplay}>
                {props.display ? "ShowList" : "CloseList"}
            </DisplayButton>
        </main>

                <footer
                className={props.classes.join(' ')}
                >
                    {props.weapon.length > 2 ? <p>The weapon is enough </p> : <p>weapon are on low suply</p>}
                </footer>

        {weapons}
    </div>

)
}
export default BaseComponent