import React from 'react';
import './CreateButton.css'
import {connect} from 'react-redux'
import * as ActionTypes from '../../../../../store/action'
function CreateButton(props)
{

    return (
        <div>
            <button onClick={props.handleCreate} className={"create_button"}>
                Create Team
            </button>

        </div>
    );
}
const MapStateToProps = (state) =>
{
    return {
        isCreatePop: state.CreateTeamPopUp
    }
}
const MapDispatchToProps = (dispatch) =>
{
    return{
        handleCreate: () => dispatch({type:ActionTypes.CREATETEAM})
    }
}
export default connect(MapStateToProps,MapDispatchToProps)(CreateButton);