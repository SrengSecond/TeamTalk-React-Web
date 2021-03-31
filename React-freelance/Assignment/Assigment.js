import React from 'react'
import "./Assigment.css"

import AssignmentComponent from "./AssigmentCompoment";
import TextValidation from "./TextValidation";
import CharComponents from "./CharComponents";

class Assigment extends React.Component
{
    constructor()
    {
        super();
        this.state =
            {
                text:"",
                /*textLength: 0,*/
            }
    }
    handleChange = (event) =>
    {
        this.setState(
            {
                text:event.target.value,
                /*textLength:event.target.value.length*/
            })
    }

    handleDelete = (index) =>
    {
        const copyArray = [...this.state.text.split('')]
        copyArray.splice(index,1);
        this.setState(
            {
                text: copyArray.join('')
            })
    }

    render()
    {
        console.log(this.state.text);
        const charList = this.state.text.split('').map((each,index) => {
            return <CharComponents
                key={index}
                handleDelete={this.handleDelete.bind(this,index)}
                charList={each}/>
        })
        return(
            <div>
                <AssignmentComponent
                    handleChange={this.handleChange}
                    {...this.state}
                />
                <TextValidation
                    text={this.state.text}
                />
                <div className="charBox">
                    {charList}
                </div>
            </div>
        )
    }

}
export default Assigment