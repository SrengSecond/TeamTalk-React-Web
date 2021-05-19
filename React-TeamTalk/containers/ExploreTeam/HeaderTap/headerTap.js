import React,{useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link,Redirect} from 'react-router-dom'
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
            {/*<Link to={"/find_team/findteam"}>tap</Link>*/}
            {/*<Link to={"/find_team/myteam"}>tick</Link>*/}
            <Menus/>
            <div className={"tap-container"}>
                <div className={"tap-content"}>
                    {menuContent}
                    {/*<Switch>*/}
                    {/*    <Redirect exact from={"/find_team/"} to={"/find_team/findteam"}/>*/}
                    {/*    <Route path={"/find_team/findteam"} exact component={PostTeamDetail}/>*/}
                    {/*    <Route path={"/find_team/myteam"} exact component={PostedTeamDetail}/>*/}
                    {/*</Switch>*/}
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