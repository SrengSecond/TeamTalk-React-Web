import React from 'react';
import './FindTapContent.css'
import ListContent from "./ListContent/ListContent";

function FindTapContent(props)
{

    return (
        <div className={"FindTapContent"}>
            {props.dataSet.map((each) =>
            {
                return(
                    <ListContent type={props.type} key={each.id} title={each.name} id={each.id} selectedTeam={props.selectedTeam}/>
                )
            })}
        </div>
    );
}

export default FindTapContent;