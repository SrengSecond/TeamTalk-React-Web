import React, {useEffect} from 'react';
import './Tabs.css'
import PostForm from "./CreatePost/PostForm/PostForm";
import CreatePost from "./CreatePost/CreatePost";
import QuestionPost from "./QuestionPost/QuestionPost";
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
function Tabs(props)
{
    // const TalkMore = <div className="QuestionPostTap"><QuestionPost questionCount={20}/></div>
    // const MyQuestion = <div className="CreatePostTap"><CreatePost/></div
    console.log("[Tab.js] Render")

    useEffect(()=>
    {
        console.log("[Tab.js] componentDidMount")
        // fetchProduct();

    },[])

    useEffect(()=>
    {
        console.log("[Tab.js] componentDidUpdate")
    },)

    const selectMenu = () =>
        {
            if(props.SelectMenuName === "TalkMore")
            {
                return <div className="QuestionPostTap"><QuestionPost questionCount={20}/></div>
            }
            else if(props.SelectMenuName === "MyQuestion")
                {
                   return <div className="CreatePostTap"><CreatePost/></div>
                }
        }

    return (
        <div className="Tabs">
            {selectMenu()}
        </div>
    );
}

export default Tabs;