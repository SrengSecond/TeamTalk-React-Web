import React from 'react';
import QuestionHeader from "./header/QuestionHeader";
import './QuestionDashBoard.css';
import QuestionDiv from "./main/QuestionDiv/QuestionDiv";
import AnswerDiv from "./main/AnswerDiv/AnswerDiv";
import UserInputDiv from "./main/UserInputDiv/UserInputDiv";
import Question from "../ExploreTalkDashBoard/main/Question/Question";
function QuestionDashBoard(props)
{
    const answerList = [
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
    return (
        <div className={"QuestionDashBoard"}>
            <header>
                <QuestionHeader
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
                <UserInputDiv/>
            </main>
        </div>
    );
}

export default QuestionDashBoard;