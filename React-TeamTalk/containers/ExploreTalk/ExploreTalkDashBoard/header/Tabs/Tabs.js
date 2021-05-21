import React from 'react';
import './Tabs.css'
import PostForm from "./CreatePost/PostForm/PostForm";
import CreatePost from "./CreatePost/CreatePost";
import QuestionPost from "./QuestionPost/QuestionPost";
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
function Tabs(props)
{
    const TalkMore = <div className="QuestionPostTap"><QuestionPost questionCount={20}/></div>
    const MyQuestion = <div className="CreatePostTap"><CreatePost/></div>
    return (
        <div className="Tabs">
            <Switch>
                <Redirect exact from={"/exploreTalk"} to={"/exploreTalk/allQuestion"}/>
                <Route path={'/exploreTalk/allQuestion'}>{TalkMore}</Route>
                <Route path={'/exploreTalk/myQuestion'}>{MyQuestion}</Route>
            </Switch>

        </div>
    );
}

export default Tabs;