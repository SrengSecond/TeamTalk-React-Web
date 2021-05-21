import React from 'react';
import './QuestionList.css'
import PublicPost from "./PublicPost/PublicPost";
import {Switch, Route} from 'react-router-dom'
import UserPost from "./UserPost/UserPost";

function QuestionList(props) {
    return (
        <div className="QuestionList">
            <Switch>
                <Route path={'/exploreTalk/allQuestion'}>{PublicPost}</Route>
                <Route path={'/exploreTalk/myQuestion'}>{UserPost}</Route>
            </Switch>
        </div>
    );
}

export default QuestionList;