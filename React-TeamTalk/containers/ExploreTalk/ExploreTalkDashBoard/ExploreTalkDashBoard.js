import React from 'react';
import './ExploreTalkDashBoard.css'
import MenuTabs from "./header/MenuTabs/MenuTabs";
import Tabs from "./header/Tabs/Tabs";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import QuestionList from "./main/QuestionList";
import QuestionHeader from "../QuestionDashBoard/header/QuestionHeader";
import QuestionDashBoard from "../QuestionDashBoard/QuestionDashBoard";
function ExploreTalkDashBoard(props)
{
    const explorePage =
        <>
            <header className={"headerDashBoard"}>
                <MenuTabs/>
                <Tabs/>
            </header>

            <main className="mainDashBoard">
                <QuestionList/>
            </main>
        </>
    // const DetailPage =
    return (
        <div className="ExploreTalkDashBoard">
            <div className="Page_Layout">
                {/*{explorePage}*/}
                <QuestionDashBoard/>
            </div>
        </div>
    );
}

export default ExploreTalkDashBoard;