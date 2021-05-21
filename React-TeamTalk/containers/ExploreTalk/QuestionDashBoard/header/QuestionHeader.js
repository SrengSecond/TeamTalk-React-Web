import React from 'react';
import './QuestionHeader.css'
function QuestionHeader(props) {
    return (
        <div className={"QuestionHeader"}>
            <div className="QuestionHeader-div">
                <div className="top">
                    <h1 className={"top-left"}>How to declare Variable in MatLab ?</h1>
                    <div className="top-right">
                        <button className={"headerButton"} >All Question</button>
                        <br/>
                        <button className={"headerButton"}>My Question</button>
                    </div>
                </div>
                <div className="bottom">
                    <p className={"txtDetail"}>Published: <b className={"PlaceHolderData"}>{props.publishedDate}</b> </p>
                    <p className={"txtDetail"}>Views: <b className={"PlaceHolderData"}>{props.viewCount}</b> </p>
                    <p className={"txtDetail"}>Department: <b className={"PlaceHolderData"}>{props.department}</b></p>
                    <p className={"txtDetail"}>Tags: <b className={"PlaceHolderData"}>{props.tags}</b></p>
                </div>
            </div>
        </div>
    );
}

export default QuestionHeader;