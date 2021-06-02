import React,{useEffect}from 'react';
import './PublicPost.css'
import Question from "../Question/Question";
import {useSelector,useDispatch} from "react-redux"
import * as ActionType from '../../../../../../store/action'
import axios from "axios";
import {RemoveQuestionList,StoreQuestionList} from "../../../../../../store/actions/QuestionAction"
import LoadingOverlay from 'react-loading-overlay'
import LoadingOverLay from "../../../../Loading/LoadingOverLay/LoadingOverLay";
// import {useLocation} from 'react-router-dom'

function PublicPost(props)
{
    console.log("[PublicPost.js] Render")

    const {ExploreTalkData} = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(()=>
    {
        console.log("[PublicPost.js] componentDidMount")
        fetchData()
        return () =>
        {
            dispatch(RemoveQuestionList())
        }
    },[])

    useEffect(()=>
    {
        console.log("[PublicPost.js] componentDidUpdate")

            console.log(ExploreTalkData)
    },)

    const fetchData = async () =>
    {
        const response = await axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .catch(error=>
            {
                console.log("Err",error);
            })
        dispatch(StoreQuestionList(response.data))
    }

    /*const dataSet = [{title:"jackSon",key:10},{title:"jackSons",key:5},{title:"jackSons",key:5}]*/

    const questionList = ExploreTalkData.map((each,index)=>
            {
                return (
                    <Question
                        key={index}
                        data={each}
                        /*key={each.id}
                        linkTo={"/exploreTalk/post"}
                        name={each.userId}
                        department={"IT Engineering"}
                        school={"RUPP"}
                        questionTitle={each.title}
                        tags={"JavaScript, PHP"}
                        publishedDate={"10 hours ago"}
                        questionDescription={each.body}
                        viewCount={"15"}
                        voteCount={10}
                        answerCount={1000}*/
                    />
                )
            })
    const loadingTitle = <LoadingOverLay text={"Loading Team in Shortly "}/>

    return <>
            {
                (ExploreTalkData.length === 0)? loadingTitle : questionList
            }
        </>
}

export default PublicPost;