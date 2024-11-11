import React, {useState} from "react";
import ToDoItem from "./ToDoItem";
import toDoListData from "./toDoListData";
import inputTask from "./components/input";


function Body() {

    const toDoItems = toDoListData.map(
        (item) => {
            return <ToDoItem taskName ={item.name} taskDesc = {item.description} taskTime = {item.timeDue} taskDone = {item.done} />
        }
    )

    return (
        <div className="container">
            { tempBool ? <inputTask/> : toDoItems }
        </div>
    )
}

export default Body