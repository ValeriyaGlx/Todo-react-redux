import React from "react";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({TASKS, removeTask, taskComplited, disabled, editTask}) => {
    return (
        <ul>
            {TASKS.map(({id, text, isComplited, change}) => (
            <TodoItem
            key = {id}
            change={change}
            text = {text}
            isComplited = {isComplited}
            removeTask={removeTask}
            taskComplited = {taskComplited}
            editTask = {editTask}
            id={id}
            disabled = {disabled}
            />
          ))}
        </ul>
    )
}

export default TodoList