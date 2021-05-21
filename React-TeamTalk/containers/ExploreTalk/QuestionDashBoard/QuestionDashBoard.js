import React from 'react';
import QuestionHeader from "./header/QuestionHeader";
import './QuestionDashBoard.css';
import QuestionDiv from "./main/QuestionDiv/QuestionDiv";
import AnswerDiv from "./main/AnswerDiv/AnswerDiv";
import UserInputDiv from "./main/UserInputDiv/UserInputDiv";
import Question from "../ExploreTalkDashBoard/main/Question/Question";
function QuestionDashBoard(props) {
    return (
        <div className={"QuestionDashBoard"}>
            <header>
                <QuestionHeader
                    publishedDate={"10 hours ago"}
                    viewCount={"10 Time"}
                    department={"ITE"}
                />
            </header>

            <main>
                <Question/>
                <QuestionDiv/>
                <AnswerDiv/>
                <UserInputDiv/>
            </main>
        </div>
    );
}

export default QuestionDashBoard;