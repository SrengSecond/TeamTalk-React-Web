import React from 'react';
import ReactTooltip from "react-tooltip";
import './AnswerDiv.css'
import Filter from "../../../ExploreTalkDashBoard/header/Tabs/QuestionPost/Filter/Filter";
import AnswerFilter from "./AnswerFilter/AnswerFilter";
function AnswerDiv(props)
{
    return (
        <div className="AnswerDiv">
            <div className="AnswerDiv-header">
                <h2 className="header-title">12 Answer</h2>
                <div className={"header-filter"}>
                    <AnswerFilter/>
                </div>
                {/*<div className="icon">
                    <div className="icon-share">
                        <i className="fas fa-share-alt-square fa-2x"
                           data-tip data-for={"share"}/>
                        <ReactTooltip id={"share"} place={"bottom"}>
                            Share Link or Copy Link
                        </ReactTooltip>
                    </div>

                    <div className="icon-save">
                        <i className="fas fa-save fa-2x"
                           data-tip data-for={"save"}/>
                        <ReactTooltip id={"save"} place={"bottom"}>
                            Save this Question to you list
                        </ReactTooltip>
                    </div>
                </div>*/}
            </div>
            <div className="AnswerDiv-main">
                <div className="right">
                    <div className={"Upvote_icons"}>
                        <i className="fas fa-meteor fa-2x"/>
                        <p>{props.voteCount} votes</p>
                    </div>

                    {/*<div className={"Answer_icons"}>*/}
                    {/*    <i className="fas fa-satellite-dish fa-2x"/>*/}
                    {/*    <p>{props.answerCount} answer</p>*/}
                    {/*</div>*/}

                    {/*<p className={"ViewCount"}>{props.viewCount} Views</p>*/}
                </div>

                <div className="middle">
                    <div className={"middle-top"}>
                        <h2 className={"questionTitle"}>{props.questionTitle}</h2>
                        <div className={"middle-top-right"}>
                        </div>
                    </div>
                    <p className={"questionDescription"}>{props.questionDescription}</p>
                    <div className="questionOwnerProfile">
                        <img className="userProfile" src="" alt=""/>
                        <div className={'userDetail'}>
                            <p className={'userName'}>{props.name}</p>
                            <p className={'department'}>{props.department}</p>
                        </div>
                    </div>
                </div>
                {/*<div className="left">*/}
                {/*    <img className={"userProfile"} src="" alt=""/>*/}
                {/*    <h2 className="userName">{props.name}</h2>*/}
                {/*    <p className="userDetail">{props.department}, {props.school}</p>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

export default AnswerDiv;