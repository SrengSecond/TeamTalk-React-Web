import React from 'react';
import './Question.css'
import {Link} from "react-router-dom";

function Question(props) {
    return (
        <div className="Question">
            <div className="left">
                <img className={"userProfile"} src="" alt=""/>
                <h2 className="userName">{props.name}</h2>
                <p className="userDetail">{props.department}, {props.school}</p>
            </div>

            <div className="middle">
                <div className={"middle-top"}>
                    {/*<h2 className={"questionTitle"}>{props.questionTitle}</h2>*/}
                    <Link
                        to={'/exploreTalk/allQuestion/1'}
                        className={"questionTitle"}>
                        {props.questionTitle}
                    </Link>

                    <div className={"middle-top-right"}>
                        <h4 className={"questionTag"}>TAG: {props.tags}</h4>
                        <p className={"publishedTime"}>Published: {props.publishedDate} </p>
                    </div>
                </div>
                <p className={"questionDescription"}>{props.questionDescription}</p>
            </div>

            <div className="right">
                <div className={"Upvote_icons"}>
                    <i className="fas fa-meteor fa-2x"/>
                    <p>{props.voteCount} votes</p>
                </div>

                <div className={"Answer_icons"}>
                    <i className="fas fa-satellite-dish fa-2x"/>
                    <p>{props.answerCount} answer</p>

                </div>

                <p className={"ViewCount"}>{props.viewCount} Views</p>
            </div>
        </div>
    );
}

export default Question;