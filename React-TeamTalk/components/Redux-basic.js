const redux = require('redux')
const createStore = redux.createStore;

//dispatch function
const addNumber = () =>
{
    return {
        type: 'ADD_COUNTER'
    }
}
const addNumberValue = (addNumber) =>
{
    return {
        type: 'ADD_COUNTER_VALUE',
        value: addNumber
    }
}

//initial State
const initialState = {
    counter: 0,
    dumpNumber:5
}

//Reducer
const rootReducer = (state = initialState,actions) =>
{

    // switch (state.type)
    // {
    //     case "increment" :
    // }
    if(actions.type === 'ADD_COUNTER')
    {
        return {
            ...state, counter: state.counter + 1
        }
    }
    if(actions.type === 'ADD_COUNTER_VALUE')
    {
        return {
            ...state, counter: state.counter + actions.value
        }
    }
    return state;
}


//Store
const store = createStore(rootReducer)
console.log(store.getState());

//Subscription
store.subscribe(() =>
{
    console.log('[Subscription]',store.getState());
})

//Dispatch Action
store.dispatch(addNumber());
store.dispatch(addNumberValue(15));
console.log(store.getState());

