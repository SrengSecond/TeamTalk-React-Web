import * as ActionType from './action'
import * as FindTeamMenu from './actions/FindTeamMenu'
const initialState =
    {
        count:5,
        FindMenu:FindTeamMenu.FINDTEAM,

        AllPostTeam:[{name:"C++",id:1,email:"ZombieStudio@gmail.com"},{name:"java",id:2},{name:"android",id:3},{name:"C++",id:4,email:"ZombieStudio@gmail.com"},{name:"java",id:5},{name:"android",id:6}],
        AllPostedTeam:[{name:"C#",id:3},{name:"java",id:2},{name:"android",id:4}],

        SelectPostTeam: null,
        DetailPostTeam: null,

        SelectPostedTeam:null,
        DetailPostedTeam:null,

        CreateTeamPopUp:false,

        ExploreTalkData:[],
        SelectTalkDataDetail:{}
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

        case (ActionType.CREATETEAM):
        {
            console.log(!state.CreateTeamPopUp);

            return {
                ...state,
                CreateTeamPopUp: !state.CreateTeamPopUp
            }
        }

        case (ActionType.SETEXPLORETALKDATA):
        {
            console.log("[reducer.js] SetExploreData[]")
            return {
                ...state,
                ExploreTalkData: action.fetchData}
        }
        case (ActionType.REMOVEEXPLORETALKDATA):
        {
            console.log("[reducer.js] RemoveExploreData[]")
            return {
                ...state,
                ExploreTalkData: []}
        }
        case (ActionType.SELECTEXPLORETALKDATA):
        {
            console.log("[reducer.js] SelectExploreData[]")
            return {
                ...state,
                SelectTalkDataDetail: action.selectQuestion}
        }
        case (ActionType.DESELECTEXPLORETALKDATA):
        {
            console.log("[reducer.js] DeSelectExploreData[]")
            return {
                ...state,
                SelectTalkDataDetail: {}}
        }

        case (ActionType.SELECTTEAM):
        {

            if(action.listType === "post")
                {
                    const SelectDetailTeam = state.AllPostTeam.filter(res => res.id === action.id)

                    console.log("Select Item post called")
                    console.log(SelectDetailTeam[0])
                    // console.log(DetailPostTeam)
                    return {
                        ...state,
                        SelectPostTeam:action.id,
                        DetailPostTeam:SelectDetailTeam
                    }
                }
                else if(action.listType === "posted")
                    {
                        const SelectDetailTeam = state.AllPostedTeam.filter(res => res.id === action.id)

                        console.log("Select Item posted called")
                        console.log(SelectDetailTeam[0])
                        return {
                            ...state,
                            SelectPostedTeam:action.id,
                            DetailPostedTeam:SelectDetailTeam
                        }
                    }
        }
        default:
            return state
    }

}
export default reducer