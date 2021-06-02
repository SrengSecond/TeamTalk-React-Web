
import React, {Component} from 'react';

import HeaderTap from "./HeaderTap/headerTap";
import './ExploreTeamDashBoard.css'

import Selector from "../Selector/Selector";
import * as Menu from '../Selector/Menu'
import * as ActionType from '../../../store/action'
import {connect} from 'react-redux'
import LoadingOverlay from 'react-loading-overlay';

import axios from "axios";
import CreatTeamFrom from "./TapContent/FindTapContent/CreateTeamForm/CreatTeamFrom";

function ExploreTeamDashBoard(props)
{
        return(
            <LoadingOverlay
                active={false}
                spinner={<div><i className="fab fa-galactic-republic fa-spin fa-6x"/></div> }
                text='Loading Team shortly...'>
                <div className="ExploreTeamDashBoard">
                        <div className={props.isCreateTeam ? "layout-overlay-open":"layout-overlay-close"}/>
                        <HeaderTap/>
                        <CreatTeamFrom isCreateTeam={props.isCreateTeam}  handleCloseCreate={props.handleCloseCreate}/>
                </div>
            </LoadingOverlay>
        );
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
