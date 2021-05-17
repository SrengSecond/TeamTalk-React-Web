import React from 'react';
import './FindTapContent.css'
import ListContent from "./ListContent/ListContent";

function FindTapContent(props)
{

    return (
        <div className={"FindTapContent"}>
            {props.dataSet.map((each,index) =>
            {
                return(
                    <ListContent key={index} title={each} id={index}/>
                )
            })}
        </div>
    );
}

export default FindTapContent;