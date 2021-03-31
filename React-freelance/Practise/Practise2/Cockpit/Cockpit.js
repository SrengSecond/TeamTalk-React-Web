import React, {useEffect} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'
import AuthContext from '../../../5-CompomentDeepDive/22-ContextAPI/auth_context'
function Cockpit(props)
{

    useEffect(() =>
    {
        console.log('[Cockpit.js] useEffect')
        //Http request

        const callAlert = setTimeout(() =>
        {
            alert('Save to cloud!')
            /*console.log('[Cockpit.js] save to cloud!')*/
        },1000);
        return() =>
        {
            clearTimeout(callAlert);
            console.log('[Cockpit.js] will unmount cleanup')
        }
    }, [props.add.name]);

    useEffect( () =>
    {
        console.log('[Cockpit.js] useEffect 2')
        return(
            () => {console.log('[Cockpit.js] update clean up')}
        )
    }
    )
    const HeaderTitle = styled.div`
          
          display:flex;
          color:black; 
          font-family: sans-serif;
          align-items:flex-end;
          margin: 0 0 1em 0`;

    const Index = styled.div`
          display:flex;
          flex-direction:column;
          justify-content:end;
          margin-right: 5px;
          background-color:black;
          color:white;
          padding: 5px 5px 5px 5px;
          font-size:12px;
        `;
    const P = styled.p`
          background-color:black;
          font-weight: bold;
          padding:0;
        `;

    const H1 = styled.h1`
          margin: 7px 0 0 0 ;
          text-align:center;
          font-size:3em;
        `
    return (
        <div>
            {console.log('[Cockpit.js] rendering...')}
            <header>
                <HeaderTitle>
                    <div>
                        <Index>
                            <P>SECTION</P>
                            <H1>6</H1>
                        </Index>
                    </div>
                    <div>
                        <H1>FRIDAY NIGHT FIGHT NIGHT</H1>
                    </div>
                </HeaderTitle>
                <div className="input-name">
                    <input
                        type="text"
                        name={"name"}
                        value={props.add.name}
                        placeholder="WeaponName"
                        onChange={props.handleChanges}/>
                    <p
                        style={
                            {
                                display: !props.validInput && "none",
                                color:"red"
                            }}>
                        Name are already existed
                    </p>
                </div><br/>
                <input
                    style={
                        {
                            appearance:"textField"
                        }
                    }
                    type="number"
                    name={"damage"}
                    value={props.add.damage}
                    placeholder="weaponDamage"
                    onChange={props.handleChanges}/><br/>


                <select
                    name="element"
                    onChange={props.handleChanges}
                    value={props.element}
                >
                    <option value={"Arc"}>Arc</option>
                    <option value={"Void"}>Void</option>
                    <option value={"Burn"}>Burn</option>
                </select>

                <button
                    onClick={props.handleClick}>
                    Add
                </button>

                <AuthContext.Consumer>
                    {context => <button onClick={context.login}>Login</button>}
                </AuthContext.Consumer>
{/*                <button
                    onClick={props.handleLogin}>
                    Login
                </button>*/}
            </header>
        </div>
    )
}
Cockpit.proptype =
    {
        name:PropTypes.number,
        handleChanges:PropTypes.func
    }
export default React.memo(Cockpit);