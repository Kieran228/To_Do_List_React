import React from "react";
import ToDoItem from "./ToDoItem";
import toDoListData from "../toDoListData";
import InputTask from "./InputTask";

function Body(props) {

    const toDoItems = toDoListData.map(
        (item) => {
            return <ToDoItem taskName={item.name} taskDesc={item.description} taskTime={item.timeDue} taskDone={item.done} />
        }
    )
    console.log(toDoItems)

    return (
        <div className="container">
            { props.viewBool ? <InputTask /> : toDoItems}
        </div>
    )
}

export default Body;