import React from 'react';
import './QuestionPost.css'
import Filter from "./Filter/Filter";

function QuestionPost(props) {
    return (
        <div className={"QuestionPost"}>

                <div className="left">
                    <h1 className={"QuestionTitle"}>All Questions</h1>
                    <p className={"QuestionCount"}>Question: {props.questionCount}</p>
                </div>
                <div className="right">
                    <Filter/>
                </div>
        </div>
    );
}

export default QuestionPost;