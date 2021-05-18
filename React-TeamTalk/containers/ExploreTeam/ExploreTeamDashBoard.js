
import React, {Component} from 'react';

import HeaderTap from "./HeaderTap/headerTap";
import './ExploreTeamDashBoard.css'

import Selector from "../Selector/Selector";
import * as Menu from '../Selector/Menu'
import * as ActionType from '../../../store/action'
import {connect} from 'react-redux'
import LoadingOverlay from 'react-loading-overlay';

import axios from "axios";

class ExploreTeamDashBoard extends Component
{
    state =
        {
            memberNumber : 1,
            isLoading:false,
            user:null
        }

    handleMemberSize = (e) =>
    {
        this.setState(
            {
                memberNumber:e.target.value
            })
    }
     handleSubmit = (e) =>
    {
        console.log(e)
        // e.preventDefault();
        // this.setState(
        //     {
        //         isLoading: true
        //     })
        //
        // const timer = setTimeout(() =>
        // {
        //     this.setState(
        //         {
        //             isLoading: false
        //         });
        //     {
        //         this.props.handleCloseCreate();
        //     }
        // }, 2000);
        // return () => clearTimeout(timer);
    }


    render() {
        return(
            <div className="ExploreTeamDashBoard">
                <div className={this.props.isCreateTeam ? "layout-overlay-open":"layout-overlay-close"}/>
                <HeaderTap/>

                <div className={this.props.isCreateTeam ? "creatTeam-PopUp-open" : "creatTeam-PopUp-close"}>
                        <LoadingOverlay
                            active={this.state.isLoading}
                            spinner
                            text='Create Your Team shortly...'>
                        <div className="header">
                            <h3>Create Team</h3>
                            <div className={"i-div"} onClick={this.props.handleCloseCreate}>
                                <i className="fas fa-times fa-2x" />
                            </div>
                        </div>
                        <form>
                            <div className="main">
                                <div className="left_input">
                                    <div className="left_input-div">
                                        <p> <b>Optional</b>: Tell everyone about your team</p>
                                        {/*<MultilineTextFields height={"200px"} title={"Description"} marginLeftIn={1}  width={"30ch"}  placeholderTxt={"Describe something about this team..."}/>*/}
                                        <textarea className={"textareaInput"} name={"description"} cols="28" rows="8" placeholder="Describe your Project & Team here..."/>

                                        <p> <b>Optional</b>: what is your required from member ?</p>
                                        {/*<MultilineTextFields  title={"Required"} marginLeftIn={1} width={"30ch"}  placeholderTxt={"What are you required from your team..."}/>*/}
                                        <textarea className={"textareaInput"} name={"required"} cols="28" rows="6" placeholder="What are you required from your team..."/>

                                            <div className={"button-div"}>
                                                <button type={'submit'}  >Create Team</button>
                                            </div>
                                    </div>
                                </div>
                                <div className="right_input">
                                    <div className="right_input-div">
                                        <p>Give your team title</p>
                                        <input type="text" placeholder={"Team Title"} required/>

                                        <p>Which department you focus on</p>
                                        <div className={"selector"}>
                                            <Selector  txtholder={"Department"} menu={Menu.options_Department} required/>
                                        </div>
                                        <div className={"selector"}>
                                            <Selector  txtholder={"Activity"} menu={Menu.options_Activity} required/>
                                        </div>

                                        <p>How many member you want in your team ?</p>
                                        <input type="range" min="1" max="15" placeholder={"Member"} value={this.state.memberNumber} onChange={this.handleMemberSize} required/>
                                        <p className={"memberSize"}>Member: {this.state.memberNumber} </p>

                                        <p>Does anyone can join ?</p>
                                        <div className={"selector"}>
                                            <Selector txtholder={"Permission"} menu={Menu.Options_Permission}/>
                                        </div>

                                        <p>Optional</p>
                                        <input type="text" placeholder={"Add Tags"}/>
                                        <br/>
                                        <input type="text" placeholder={"Location - school - University"}/>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </LoadingOverlay>
                </div>

            </div>

        );
    }
}
ExploreTeamDashBoard.propTypes = {};
const MapStateToProps = (state) =>
{
    return {
        isCreateTeam: state.CreateTeamPopUp
    }
}
const MapDispatchToProps = (dispatch) =>
{
    return {
        handleCloseCreate: () => dispatch({type:ActionType.CREATETEAM})
    }
}
export default connect(MapStateToProps,MapDispatchToProps)(ExploreTeamDashBoard);
