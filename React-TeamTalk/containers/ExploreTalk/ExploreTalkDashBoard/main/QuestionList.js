import React from 'react';
import './QuestionList.css'
import PublicPost from "./PublicPost/PublicPost";
import UserPost from "./UserPost/UserPost";

function QuestionList(props)
{
    const renderContent = (props.SelectMenuName === "TalkMore"?<PublicPost/>:<UserPost/>)

    return (
        <div className="QuestionList">
            {renderContent}
        </div>
    );
}

export default QuestionList;