import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,combineReducers} from 'redux'
import {Provider} from 'react-redux'
/*import App from './Backup/Clone/App'*/ //Facebook =clone
/*import App from './App'// Testing env*/
/*import App from "./App";*/
/*import FreelancerApp from "./React-freelance/FreelanceApp";
import MyBasicApp from "./ReactBasic/MyBasicApp";*/

import App from './React-TeamTalk/App' // Project env
import './index.css'
import reducer from "./store/reducer";

const store = createStore(reducer);

//Store -> globalized state
// let store = createStore
/*//action increment
const incrementNumber = () =>
{
    return {
        type: "INCREMENT"
    }
}
const decrementNumber = () =>
{
    return {
        type: "DECREMENT"
    }
}
//Reducer
const counter = (state = 0,action) =>
{
    switch (action.type)
    {
        case "INCREMENT":
            return state + 1
        case "DECREMENT":
            return state - 1
        default:
    }
}
let store = createStore(counter)
store.subscribe(() =>
{
    console.log(store.getState())
})
//dispatch
store.dispatch(incrementNumber)*/


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider> ,document.getElementById("root"));

