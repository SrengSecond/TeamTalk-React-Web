import React,{useEffect} from 'react';
import Question from "../Question/Question";
import {useSelector,useDispatch} from "react-redux";

import axios from "axios";
import {RemoveQuestionList, StoreQuestionList} from "../../../../../../store/actions/QuestionAction";
import LoadingOverLay from "../../../../Loading/LoadingOverLay/LoadingOverLay";

function UserPost(props)
{
    const {ExploreTalkData} = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect( () =>
    {
        fetchData()
        return () =>
        {
           dispatch(RemoveQuestionList())
        }
    },[])

    const fetchData =  async () =>
    {
        const response = await axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .catch(error =>
            {
                console.log("Err" + error)
            })
        dispatch(StoreQuestionList(response.data))
    }
    const sampleData = [{name:"Sreng"},{name:"sal"},{name:"sax"},{name:"sax"}]
    // const questionList = store.ExploreTalkData.map((each,index) =>
    const loadingTitle = <LoadingOverLay txt={"Loading your team shortly"}/>
    const questionList = ExploreTalkData.map((each,index) =>
    {
        return (
            <Question
                key={index}
                data={each}
                // key={index }
                // name={each}
                // questionID={index}
                // linkTo={`/exploreTalk/Question/${index}`}
                // department={"IT Engineering"}
                // school={"RUPP"}
                // questionTitle={"How to declare variables in MatLab?"}
                // tags={"JavaScript, PHP"}
                // publishedDate={"10 hours ago"}
                // questionDescription={"Dear everyone,\n" +
                // "Currently, I am having an intention to develop a web project and need 4 people to work on that together; therefore, if you are interested in making that happen, please direct message to me. Thank you!"}
                // viewCount={"15"}
                // voteCount={10}
                // answerCount={1000}
            />
        )
    })

    return (
        <>
            {(ExploreTalkData.length === 0)? loadingTitle : questionList}
        </>
    );
}

export default UserPost;