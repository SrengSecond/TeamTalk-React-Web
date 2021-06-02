import React,{useState,useEffect} from 'react';
import './ExploreTalkDashBoard.css'
import MenuTabs from "./header/MenuTabs/MenuTabs";
import Tabs from "./header/Tabs/Tabs";
import {Switch,Route,Redirect,useLocation} from 'react-router-dom'
// import queryString from 'query-string'
import QuestionList from "./main/QuestionList";
import queryString from 'query-string'
import QuestionHeader from "../QuestionDashBoard/header/QuestionHeader";
import QuestionDashBoard from "../QuestionDashBoard/QuestionDashBoard";
import MenuTab from "./header/MenuTabs/MenuTab/MenuTab";
import axios from "axios";
import {connect,useSelector,useDispatch} from "react-redux"
import * as ActionType from "../../../../store/action"
import Question from "./main/Question/Question";
import LoadingOverlay from "react-loading-overlay";
function ExploreTalkDashBoard(props)
{
    {console.log("[ExploreTalkDashBoard.js] Render")}

    //state
    const [connect,question,SetQuestion] = useState(null);
    const [Menu,SetMenu] = useState("TalkMore")

    //Redux
    const store = useSelector(state=>state)
    const dispatch = useDispatch();

    //handleClick Menu
    const handleColorChange = (event) =>
    {
        SetMenu(event.target.name);
    }

    useEffect(()=>
    {
        console.log("[ExploreTalkDashBoard.js] componentDidMount")
        // fetchProduct();

    },[])

    useEffect(()=>
    {
        console.log("[ExploreTalkDashBoard.js] componentDidUpdate")
    },)

    const fetchProduct = async () =>
    {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            .catch(error =>
            {
                console.log("Err",error);
            })

        dispatch(setData(response.data));
    }

    const explorePage =
        <>
                <header className={"headerDashBoard"}>

                    <div className={"MenuTaps"}>
                        <MenuTab SelectMenuName={Menu} targetName={"TalkMore"} title={"TalkMore"} linkto={"/exploreTalk?TalkMore=&"} handleColorChange={handleColorChange}/>
                        <MenuTab SelectMenuName={Menu} targetName={"MyQuestion"} title={"MyQuestion"} linkto={"/exploreTalk?MyQuestion=&"} handleColorChange={handleColorChange}/>
                    </div>
                    <Tabs SelectMenuName={Menu}/>
                </header>

                <main className="mainDashBoard">
                    <QuestionList SelectMenuName={Menu}/>
                </main>

        </>

    //render component
    return (
        <div className="ExploreTalkDashBoard">
            <div className="Page_Layout">
                <Switch>
                    <Route exact path={"/exploreTalk"}>{explorePage}</Route>
                    <Route path={"/exploreTalk/:QuestionId"} component={QuestionDashBoard}/>
                </Switch>
            </div>
        </div>
    );
}
const MapStateToProps = (state) =>
{
    return {
        getExploreTalkData: state.ExploreTalkData
    }
}
const MapDispatchToProps = (dispatch) =>
{
    return {
        setExploreTalkData: () => dispatch({type:ActionType.SETEXPLORETALKDATA})
    }
}

const setData = (fetchData) =>
{
    return{
        type:ActionType.SETEXPLORETALKDATA,
        fetchData:fetchData
    };
};

export default connect(MapStateToProps,MapDispatchToProps) (ExploreTalkDashBoard);