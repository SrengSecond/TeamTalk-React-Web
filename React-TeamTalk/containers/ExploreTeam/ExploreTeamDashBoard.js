
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

class ExploreTeamDashBoard extends Component
{
    state =
        {
            isLoading:false,
        }


     handleSubmit = (e) =>
    {
        console.log(e)

        // e.preventDefault();

        this.setState(
            {
                isLoading: true
            })

        const timer = setTimeout(() =>
        {
            this.setState(
                {
                    isLoading: false
                });
            {
                this.props.handleCloseCreate();
            }
        }, 2000);
        return () => clearTimeout(timer);

    }


    render() {
        return(
            <div className="ExploreTeamDashBoard">
                <div className={this.props.isCreateTeam ? "layout-overlay-open":"layout-overlay-close"}/>
                <HeaderTap/>
                <CreatTeamFrom isCreateTeam={this.props.isCreateTeam}  handleCloseCreate={this.props.handleCloseCreate} isLoading={this.state.isLoading} handleSubmit={this.handleSubmit}/>
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
