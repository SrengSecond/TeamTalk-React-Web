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
                        <button className={"headerButton"}>Ask Question</button>
                    </div>
                </div>
                <div className="bottom">
                    <p className={"txtDetail"}>Publish: <b className={"PlaceHolderData"}>{props.publishedDate}</b> </p>
                    <p className={"txtDetail"}>Views: <b className={"PlaceHolderData"}>{props.viewCount}</b> </p>
                    <p className={"txtDetail"}>Department: <b className={"PlaceHolderData"}>{props.department}</b></p>
                </div>
            </div>
        </div>
    );
}

export default QuestionHeader;