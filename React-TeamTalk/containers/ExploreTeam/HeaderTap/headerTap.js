import React,{useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import PostTeamDetail from "./PostTeamDetail";
import PostedTeamDetail from "./PostedTeamDetail";
import  "./headerTap.css"
import * as MenuType from "../../../../store/actions/FindTeamMenu"
import Menus from "./MenuTap/Menus";
import {connect} from 'react-redux'

function HeaderTap(props)
{
    let menuContent = props.SelectMenu;
    if(menuContent === MenuType.FINDTEAM)
    {
        menuContent = (
            <PostTeamDetail/>
        )
    }
    else if(menuContent === MenuType.MYTEAM)
    {
        menuContent = (
            <PostedTeamDetail/>
        )
    }

    return (

        <div className={"HeaderTap"}>
            {console.log(props.SelectMenu)}
            <Menus/>
            <div className={"tap-container"}>
                <div className={"tap-content"}>
                    {menuContent}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) =>
{
    return {
        SelectMenu: state.FindMenu
    }
}

export default connect(mapStateToProps)(HeaderTap);