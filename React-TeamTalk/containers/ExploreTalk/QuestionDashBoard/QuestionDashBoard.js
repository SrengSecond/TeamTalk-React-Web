import React,{useEffect} from 'react';
import QuestionHeader from "./header/QuestionHeader";
import './QuestionDashBoard.css';
import QuestionDiv from "./main/QuestionDiv/QuestionDiv";
import AnswerDiv from "./main/AnswerDiv/AnswerDiv";
import UserInputDiv from "./main/UserInputDiv/UserInputDiv";
import axios from "axios";
import { useParams } from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {DeSelectQuestionDetail, SelectQuestionDetail} from "../../../../store/actions/QuestionAction";
import LoadingOverLay from "../../Loading/LoadingOverLay/LoadingOverLay";

function QuestionDashBoard(props)
{
    const dispatch = useDispatch();
    const store = useSelector(state => state.SelectTalkDataDetail)
    const {QuestionId} = useParams()

    const answerList =
        [
        {
            name:"Sreng",
            upvoteNumbeer:4,
            description:"Lorem ipsum dolor sit amet, " +
                "consectetur adipisicing elit. Dol" +
                "orem modi nostrum omnis rerum. Aliquam" +
                "aliquid cum ducimus inventore laborum magnam obca" +
                "ecati ut voluptatum. Aspernatur "
        },{
            name:"Sal",
            upvoteNumbeer:3,
            description:"Mortal Kombat sit amet, " +
                "consectetur adipisicing elit. Dol" +
                "orem modi nostrum omnis rerum. Aliquam" +
                "aliquid cum ducimus inventore laborum magnam obca" +
                "ecati ut voluptatum. Aspernatur "
        }]

    useEffect(()=>
    {

        if(QuestionId && QuestionId !== "") fetchQuestionDetail();
        return () =>
        {
            dispatch(DeSelectQuestionDetail())
        }
    },[QuestionId])

    const fetchQuestionDetail = async() =>
    {
        const response = await axios
            .get(`https://jsonplaceholder.typicode.com/posts/${QuestionId}`)
            .catch(error =>
                console.log("Err" + error))
        console.log(response.data)
        console.log(response.data.body)

        dispatch(SelectQuestionDetail(response.data))
    }

    const Loading = <LoadingOverLay text={"Loading Team in Shortly "}/>

    const DetailContent = <>
        <header>
            <QuestionHeader
                questionTitle={store.title}
                publishedDate={"10 hours ago"}
                viewCount={"10 Time"}
                department={"ITE"}
                tags={"JavaScript, PHP"}/>
        </header>

        <main>

            <QuestionDiv
                key={1}
                name={"Ly Sreng"}
                department={"IT Engineering"}
                school={"RUPP"}
                questionTitle={"How to declare variables in MatLab?"}
                tags={"JavaScript, PHP"}
                publishedDate={"10 hours ago"}
                questionDescription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem modi nostrum omnis rerum. Aliquam aliquid cum ducimus inventore laborum magnam obcaecati ut voluptatum. Aspernatur dolorem magni nemo, veniam vero voluptatem!\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem modi nostrum omnis rerum. Aliquam aliquid cum ducimus inventore laborum magnam obcaecati ut voluptatum. Aspernatur dolorem magni nemo, veniam vero voluptatem!\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem modi nostrum omnis rerum. Aliquam aliquid cum ducimus inventore laborum magnam obcaecati ut voluptatum. Aspernatur dolorem magni nemo, veniam vero voluptatem!\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem modi nostrum omnis rerum. Aliquam aliquid cum ducimus inventore laborum magnam obcaecati ut voluptatum. Aspernatur dolorem magni nemo, veniam vero voluptatem!\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem modi nostrum omnis rerum. Aliquam aliquid cum ducimus inventore laborum magnam obcaecati ut voluptatum. Aspernatur dolorem magni nemo, veniam vero voluptatem!\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem modi nostrum omnis rerum. Aliquam aliquid cum ducimus inventore laborum magnam obcaecati ut voluptatum. Aspernatur dolorem magni nemo, veniam vero voluptatem!\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem modi nostrum omnis rerum. Aliquam aliquid cum ducimus inventore laborum magnam obcaecati ut voluptatum. Aspernatur dolorem magni nemo, veniam vero voluptatem!\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem modi nostrum omnis rerum. Aliquam aliquid cum ducimus inventore laborum magnam obcaecati ut voluptatum. Aspernatur dolorem magni nemo, veniam vero voluptatem!\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem modi nostrum omnis rerum. Aliquam aliquid cum ducimus inventore laborum magnam obcaecati ut voluptatum. Aspernatur dolorem magni nemo, veniam vero voluptatem!\n"}
                viewCount={"15"}
                voteCount={10}
                answerCount={52}/>

            <AnswerDiv AnswersList={answerList}
                       key={2}
                       name={"Ly Sreng"}
                       department={"IT Engineering"}
                       school={"RUPP"}
                       questionTitle={"How to declare variables in MatLab?"}
                       tags={"JavaScript, PHP"}
                       publishedDate={"10 hours ago"}
                       questionDescription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem modi nostrum omnis rerum. Aliquam aliquid cum ducimus inventore laborum magnam obcaecati ut voluptatum. Aspernatur dolorem magni nemo, veniam vero voluptatem!\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem modi nostrum omnis rerum. Aliquam aliquid cum ducimus inventore laborum magnam obcaecati ut voluptatum. Aspernatur dolorem magni nemo, veniam vero voluptatem!\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem modi nostrum omnis rerum. Aliquam aliquid cum ducimus inventore laborum magnam obcaecati ut voluptatum. Aspernatur dolorem magni nemo, veniam vero voluptatem!\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem modi nostrum omnis rerum. Aliquam aliquid cum ducimus inventore laborum magnam obcaecati ut voluptatum. Aspernatur dolorem magni nemo, veniam vero voluptatem!\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem modi nostrum omnis rerum. Aliquam aliquid cum ducimus inventore laborum magnam obcaecati ut voluptatum. Aspernatur dolorem magni nemo, veniam vero voluptatem!\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem modi nostrum omnis rerum. Aliquam aliquid cum ducimus inventore laborum magnam obcaecati ut voluptatum. Aspernatur dolorem magni nemo, veniam vero voluptatem!\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem modi nostrum omnis rerum. Aliquam aliquid cum ducimus inventore laborum magnam obcaecati ut voluptatum. Aspernatur dolorem magni nemo, veniam vero voluptatem!\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem modi nostrum omnis rerum. Aliquam aliquid cum ducimus inventore laborum magnam obcaecati ut voluptatum. Aspernatur dolorem magni nemo, veniam vero voluptatem!\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem modi nostrum omnis rerum. Aliquam aliquid cum ducimus inventore laborum magnam obcaecati ut voluptatum. Aspernatur dolorem magni nemo, veniam vero voluptatem!\n"}
                       viewCount={"15"}
                       voteCount={10}
                       answerCount={52}/>

            <UserInputDiv/>
            
        </main>
    </>

    return (
        <div className={"QuestionDashBoard"}>
            {
                (Object.keys(store).length === 0)? Loading:DetailContent
            }
        </div>
    );
}

export default QuestionDashBoard;