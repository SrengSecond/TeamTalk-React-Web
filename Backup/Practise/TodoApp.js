import React from "react";
import TodoItem from "../Compoment/TodoItem";
import TodoData from "./TodoData";
class TodoApp extends React.Component
{
    constructor()
    {
        super();
        this.state =
        {
            Todo: TodoData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id)
    {
       console.log(id);
       this.setState((prevState)=>
       {
           const updateTodo = prevState.Todo.map(todo =>
           {
               if(todo.id === id)
               {
                   todo.complete = !todo.complete;
               }
               return todo;
           })
           return {
               Todo: updateTodo
           }
       })
    }

    render()
    {
        const TodoList = this.state.Todo.map((eachTodo) =>
            <div>
                <TodoItem
                    id = {eachTodo.id}
                    todo = {eachTodo}
                    handleChange = {this.handleChange}
                />
            </div>)

        return (
            <div className={"TodoList"}>
                {TodoList}
            </div>
        )
    }


}
export default TodoApp