import React from 'react';
import './PublicPost.css'
import Question from "../Question/Question";
function PublicPost(props)
{
    const dataSet = ["jackSon","Prdator","MrJason","Sreng","Sal","Poleak","leap"]
    const questionList = dataSet.map((each,index)=>
            {
                return (
                    <Question
                        key={index}
                        name={each}
                        department={"IT Engineering"}
                        school={"RUPP"}
                        questionTitle={"How to declare variables in MatLab?"}
                        tags={"JavaScript, PHP"}
                        publishedDate={"10 hours ago"}
                        questionDescription={"Dear everyone,\n" +
                        "Currently, I am having an intention to develop a web project and need 4 people to work on that together; therefore, if you are interested in making that happen, please direct message to me. Thank you!"}
                        viewCount={"15"}
                        voteCount={10}
                        answerCount={1000}
                    />
                )
            })

    return (
        <>
            {questionList}
        </>
    );
}

export default PublicPost;