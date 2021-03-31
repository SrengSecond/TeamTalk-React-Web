import React from "react";
import './ss'

function handleEvent()
{
    console.log("changing")
}

class TodoItem extends React.Component
{
    constructor()
    {
        super();
        this.state =
            {
                fontStyle: "italic"
            }
    }

    render()
    {

        const inline =
            {
                fontStyle: this.state.fontStyle
            }
        return (
            <div className={"TodoItem"}>
                <input type={"checkbox"}
                       checked={this.props.todo.complete}
                       onChange={()=>this.props.handleChange(this.props.id)}
                />
                <p style={this.props.todo.complete ? inline : null}>{this.props.todo.text}</p>

            </div>
        )
    }



}

export default TodoItem;