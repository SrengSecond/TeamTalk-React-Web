import React from 'react';
import '../Style/BasicPractise2.css'
import Auxs from '../hoc/Auxs'
import BaseComponent from "../Weapons/BasicCompoment";
/*import PropTypes from 'prop-types'*/
/*import Radium from 'radium'*/

import AuthContext from '../../../5-CompomentDeepDive/22-ContextAPI/auth_context'

import weaponImg1 from '../../img/destiny-2-destiny-the-taken-king-minecraft-last-word-weapon-minecraft-463b070c75604dd72a57f419baaaccd5.png'
import weaponImg2 from '../../img/destiny-2-assault-rifle-weapon-destiny-97599ac09e6517d6e01afa6b8bbf3b60.png'
import weaponImg3 from '../../img/destiny-rise-of-iron-destiny-2-weapon-bungie-exotic-a635eba7029f6a93d1f0db65ac869bdd.png'

/*class BasicPractise2 extends React.PureComponent*/ //help to implement shouldComponentUpdate with complete props check of that component
class BasicPractise2 extends React.Component
{
    elements = ["Arc","Void","Burn"];

    static contextType = AuthContext;

    constructor(props)
    {
        super(props);
        console.log('[BasicPractise2.js] Constructor')
    }

    //region State
    state =
        {
            weapon:
                [
                    //{id:"A1", name: "HK Auto",damage:"36",element:this.elements[1],img:"https://img2.pngio.com/destiny-2-assault-rifle-weapon-png-clipart-air-gun-assault-destiny-weapons-png-728_269.jpg"},
                    {id:"A1", name: "The Last Word",damage:"36",element:this.elements[1],img:weaponImg1},
                    {id:"A2",name: "KHVOSTOV 7G",damage:'12',element:this.elements[0],img:weaponImg2},
                    {id:"A3",name: "Thorn ",damage:24,element:this.elements[2],img:weaponImg3}
                ],
            add:
                {
                    name:"asd",
                    damage:"",
                    element:""
                },
            validInput: false,
            display: true,
            displayCockpit: true,
            login:false
        }
    //endregion

    //region lifeCycle Component
    static getDerivedStateFromProps(props, state)
    {
        console.log('[BasicPractise2.js] getDerivedStateFromProps',props)
        return state;
    }
    componentDidMount()
    {
        console.log('[BasicPractise2.js] componentDidMount')
        console.log(this.context.authentication);
    }


    shouldComponentUpdate(nextProps, nextState, nextContext)
    {
        console.log('[BasicPractise2.js] shouldComponentUpdate');
        /*return nextState.weapon !== this.state.weapon;*/
        return true
    }

    componentDidUpdate(prevProps, prevState, snapshot)
    {
        console.log('[BasicPractise2.js] componentDidUpdate');
    }
    //endregion

    //region handleFunction
    handleCockpitDisplay = () =>
    {
        this.setState( (prevState) => {
            return (
                {
                    displayCockpit: !prevState.displayCockpit
                }
            )
            }
        )
    }

    //region Handle function callback
    handleDelete = (weaponIndex) =>
    {
        //Make user you make a copy instead of get a reference - using Slice() function
        /*const newArray = this.state.weapon.slice();*/
        //New way
        const newArray = [...this.state.weapon]
        newArray.splice(weaponIndex,1);
        this.setState(
            {
                weapon:newArray
            }
        )
    }

    handleChange = (event) =>
    {
        const {name,value} = event.target

        this.setState((prevState) =>
        {
            return (
                {
                    add: {
                        ...prevState.add,
                        [name]:value
                    }
                }
            )
        }
        )
    }

    handleChanges = (event) =>
    {
        const {name,value} = event.target

        this.setState((prevState) => ({
            add: {
                ...prevState.add,[name]:value
            }
        }))
    }

    handleNameChange = (event,id) =>
    {
        const weaponIndex = this.state.weapon.findIndex(w => {
            return w.id === id
        })

        //copy element of array to update
        //old way
        //const weapon_2 = Object.assign({},this.state.weapon[weaponIndex])
        const weapon = {...this.state.weapon[weaponIndex]};

        //update element's name of found index
        weapon.name = event.target.value;

        //get a copy of array
        const weapons = [...this.state.weapon]

        //replace and updated element into new copy array
        weapons[weaponIndex] = weapon

        this.setState((prevState) =>
        {
            return (
                {
                    weapon: weapons
                }
            )
        });
    }

    handleClick_2 = () =>
    {
        //Validate Name - can add duplicate name
        !this.validation(this.state.add.name) ?
            this.setState((prevState) => ({
                    weapon:
                        [
                            ...prevState.weapon,
                            {name: this.state.add.name,damage: this.state.add.damage}
                        ],
                    validInput:false
                })
            )
        :
                this.setState((prevState) =>
                {
                    return(
                        {
                            validInput: true,
                        }
                    )
                })
    }

    handleClick = () =>
    {
        //Validate Name - can add duplicate name
        !this.validation(this.state.add.name) ?
            this.setState((prevState) => ({
                    weapon:
                        [
                            ...prevState.weapon,
                            {name: this.state.add.name,damage: this.state.add.damage, element: this.state.add.element}
                        ],
                    validInput:false
                })
            )
        :
                this.setState((prevState) =>
                {
                    return(
                        {
                            validInput: true,
                        }
                    )
                })
    }

    handleDisplay = () =>
    {
        this.setState(prevState =>
        {
            return(
                {
                    display:!prevState.display
                }
            )
        })
    }

    handleColorElement = (element) =>
    {
        let color = "";
        switch(element)
        {
            case "Arc":
                color = "#40c9db"
                break;
            case "Burn":
                color="#f59942"
                break;
            case "Void":
                color ="#9942f5"
                break;
            default:
                break
        }
        return (
            {
                backgroundColor: color
            }
        )
    }
    //endregion

    //Name Validation
    validation = (AddName) =>
    {
        return this.state.weapon.some((each) =>
        {
            return(
                    each.name === AddName
            )
        });
    }
    handleLogin = () =>
    {
        this.setState(prevState =>
            {
                console.log("[handleLogin]")
                return(
                    {
                        login: !prevState.login
                    })
            })
    }
    //endregion

    render()
    {
        console.log('[BasicPractise2.js] render ')

        //5.4 Setting Class Names Dynamically
        //TODO :: Add Multiple ClassName to compoment Base on length of Array
        const classes = ['limitWidth'];
        if(this.state.weapon.length <= 2)
        {
            classes.push('red-alert'); // classes = ['red-alert']
        }
        if(this.state.weapon.length <= 1)
        {
            classes.push('bold-alert'); // classes = ['red-alert','bold-alert']
        }

        return(
            <Auxs classes="main-page">
                <AuthContext.Provider value={
                    {
                        authentication: this.state.login,
                        login: this.handleLogin
                    }
                }>
                    <BaseComponent
                        sectionTitle={this.props.sectionTitle}
                        handleDelete={this.handleDelete}
                        handleChanges={this.handleChanges}
                        handleClick={this.handleClick}
                        handleDisplay={this.handleDisplay}
                        handleColorElement={this.handleColorElement}
                        handleNameChange={this.handleNameChange}
                        elements={this.elements}
                        classes={classes}
                        handleCockpitDisplay={this.handleCockpitDisplay}
                        handleLogin={this.handleLogin}
                        /*warningText={}*/
                        {...this.state}/>
                </AuthContext.Provider>
            </Auxs>
        )
    }
}

export default BasicPractise2;