import React, {useEffect} from 'react';
import './Question.css'
import {Link,useParams} from "react-router-dom";

function Question(props)
{
    console.log("[Question.js] Render")

    // const {path} = props.match
    // const {QuestionId} = useParams()
    const handleClickLink = () =>
    {
        console.log(props.QuestionID);
    }

    useEffect(()=>
    {
        console.log("[Question.js] componentDidMount")
        // fetchProduct();

    },[])

    useEffect(()=>
    {
        console.log("[Question.js] componentDidUpdate")
    },)

    return (
        <div className="Question">
            <div className="left">
                <img className={"userProfile"} src="" alt=""/>
                <h2 className="userName">{props.data.name}</h2>
                <p className="userDetail">{/*{props.department}*/}, {/*{props.school}*/}</p>
            </div>

            <div className="middle">
                <div className={"middle-top"}>
                    {/*<h2 className={"questionTitle"}>{props.questionTitle}</h2>*/}
                    <Link
                        onClick={handleClickLink}
                        to={`/exploreTalk/${props.data.id}`}
                        className={"questionTitle"}>
                        {props.data.title}
                    </Link>

                    <div className={"middle-top-right"}>
                        <h4 className={"questionTag"}>TAG: {/*{props.tags}*/}</h4>
                        <p className={"publishedTime"}>Published: {/*{props.publishedDate}*/} </p>
                    </div>
                </div>
                <p className={"questionDescription"}>{props.data.body}</p>
            </div>

            <div className="right">
                <div className={"Upvote_icons"}>
                    <i className="fas fa-meteor fa-2x"/>
                    <p>{/*{props.voteCount}*/} votes</p>
                </div>

                <div className={"Answer_icons"}>
                    <i className="fas fa-satellite-dish fa-2x"/>
                    <p>{/*{props.answerCount}*/} answer</p>

                </div>

                <p className={"ViewCount"}>{/*{props.viewCount}*/} Views</p>
            </div>
        </div>
    );
}

export default Question;