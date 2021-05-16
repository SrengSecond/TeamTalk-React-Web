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

const App = (props) =>
{
    return (
        <div>
            <Router>
                <Layout>
                    <ScrollToTop/>
                    <Route path={'/'}>
                        <Redirect to={'/home'}>
                        </Redirect>
                    </Route>

                    {/*<h1>{props.count}</h1>*/}
                    {/*<button onClick={props.onIncrement}>increment</button>*/}
                    {/*<button onClick={props.onDecrement}>decrement</button>*/}

                    <Switch>
                        <Route path={'/home'} component={WelcomePage}/>
                        <Route path={'/find_team'} exact component={ExploreTeamDashBoard}/>
                        {/*<Route path={'/find_team/find'}  component={ExploreTeamDashBoard}/>*/}
                    </Switch>
                </Layout>
            </Router>
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
    return{
        onIncrement: () => dispatch({type:ActionTypes.INCREMENT,value:10}),
        onDecrement: () => dispatch({type:ActionTypes.DECREMENT,value:10}),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
