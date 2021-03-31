import React, {useEffect,useRef, useContext} from 'react';
import PropTypes from 'prop-types'
import './Weapon.css'
import AuthContext from '../../../../5-CompomentDeepDive/22-ContextAPI/auth_context'
import styled from 'styled-components'

function Weapon(props)
{
    const AccessablityStyle = styled.div`
    color: ${props => props.alt.authentication? 'green' : 'black'};
    text-align:start
        
`
    const inputRef = useRef(null);
    const authContext = useContext(AuthContext)

    useEffect(() =>
    {
        console.log('[Weapon.js] useEffect')
        inputRef.current.focus();

        return () =>
        {
            console.log('[Weapon.js] clean work in useEffect')
        }
    },[]);
    console.log('[Weapon.js] rendering...')


    const mapArray = props.weapon.map((each,index) =>
    {
        return(
            <div
                className={"weaponBar"}
                key={index}>
                {console.log('[Weapon] each rendering')}
                <AccessablityStyle alt={authContext}>
                    {authContext.authentication ? 'Open Access' : 'Login'}
                </AccessablityStyle>

                <h3 className={"weapon-name"}>{each.name}</h3>
                <img className={"weapon-img"} src={each.img} alt=""/>
                <div className={"edit-content-border"}>
                    <main className={"edit-content"}>
                        <p style={props.colorChange(each.element)}>Damage: {each.damage} <br/>Element: {each.element}</p>

                        <button className={"delete-weapon"}
                                onClick={props.delete.bind(this,index)}>
                            Delete
                        </button>
                        <input
                            ref={inputRef}
                            type="text"
                            onChange={ (event) => props.handleNameChange(event,each.id)}
                            value={each.name}
                            placeholder={"EditName"}/>
                    </main>
                </div>
            </div>
        )
    })
    return (
        <div className={"weapon-list"}>
            {mapArray}
        </div>
    )

}
Weapon.propTypes =
    {
        name: PropTypes.string,
        damage: PropTypes.number,
        handleNameChange: PropTypes.func
    }
export default React.memo(Weapon);