import React from 'react';
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom"


import Layout from "./components/layout/Layout";
import Home from './containers/Home/Home'
import LogInOut from "./containers/LogInOut/LogInOut";
import ExploreCompoment from "./containers/Explore/ExploreCompoment";
import ExploreTeamDashBoard from "./containers/ExploreTeam/ExploreTeamDashBoard";
import HeaderTap from './containers/ExploreTeam/HeaderTap/headerTap'
import './App.css'
import WelcomePage from "./components/WelcomPage/WelcomePage";
import ScrollToTop from "./containers/ScrollToUp/ScrollToTop";
import {connect} from 'react-redux'
import * as ActionTypes from '../store/action'
import ExploreTalkDashBoard from "./containers/ExploreTalk/ExploreTalkDashBoard/ExploreTalkDashBoard";
import {useLocation} from "react-router-dom"
import Register from "./containers/LogInOut/Register";
import Profile from "./containers/LogInOut/Profile/Profile";


const App = (props) =>
{
    // const {search} = useLocation();
    // console.log(search);

    return (
        <div>
            <Layout>
                <ScrollToTop/>

                {/*<h1>{props.count}</h1>*/}
                {/*<button onClick={props.onIncrement}>increment</button>*/}
                {/*<button onClick={props.onDecrement}>decrement</button>*/}

                <Switch>
                    <Redirect exact from={"/"} to={"/home"}/>
                    <Route path={'/home'} component={WelcomePage}/>
                    <Route path={'/register'} exact component={Register}/>
                    <Route path={'/register/profile'} component={Profile}/>
                    <Route path={'/exploreTeam'} component={ExploreTeamDashBoard}/>
                    <Route path={'/exploreTalk'} component={ExploreTalkDashBoard}/>
                    <Route>404 Not Fount!</Route>

                    {/*<Route path={'/find_team/find'}  component={ExploreTeamDashBoard}/>*/}
                </Switch>
            </Layout>
        </div>

);
};

const mapStateToProps = (state) =>
{
    return{
        count:state.count
    }
}
const mapDispatchToProps = (dispatch) =>
{
    return {
        onIncrement: () => dispatch({type:ActionTypes.INCREMENT,value:10}),
        onDecrement: () => dispatch({type:ActionTypes.DECREMENT,value:10}),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
