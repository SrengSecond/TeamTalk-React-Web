import * as ActionType from './action'
import * as FindTeamMenu from './actions/FindTeamMenu'
const initialState =
    {
        count:5,
        FindMenu:FindTeamMenu.FINDTEAM
    }

const reducer = (state = initialState,action) =>
{
    switch (action.type)
    {
        case (ActionType.INCREMENT):
            return {
                ...state,
                count:state.count + action.value
            }
        case (ActionType.DECREMENT):
            return {
                ...state,
                count:state.count - action.value
            }
        case (ActionType.SELECTMENU):
        {
            return {
                ...state,
                FindMenu:action.menu
            }
        }
        default:
            return state

    }

}
export default reducer