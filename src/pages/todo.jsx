import React, { useState } from "react";
import Title from "../components/Title/Title";
import Input from "../components/Input/Input";
import TodoList from "../components/TodoList/TodoList";
import { connect } from "react-redux";
import { addTask, removeTask, checkTask, addText, editTask,} from "../actions/actionCreator";



const Todo = (props) => {
    const [input, setInput] = useState('');
    const [err, setErr] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
        props.addText(input);

        if(input.length > 2){
            setErr('');
         } else {
            setErr('Task is too short');
         }
    }

    const addTask = (e) => {

     if(input.length > 3 && e.key==='Enter') {
        props.addTask((new Date()).getTime(), input, false, false);
        setErr('');
        setInput('');
     } else {
        setErr('Task is too short');
     }
    }

    const taskComplited = (e) => {
        props.checkTask(new Date().getTime(), e.target.value, true, false);
    }



    return (
        <div>
            <Title title={["TODO list for", props.name].join(' ')}/>
            <Input labeltitle="What do you want TODO?"
            placeholder = "Write your todo"
            id="todo"
            value = {input}
            onChange = {handleChange}
            onKeyDown={addTask}
            error={err}
            />
            <TodoList TASKS={props.tasks.todos} disabled={false} removeTask={props.removeTask} taskComplited={taskComplited} editTask={props.editTask}/>
        </div>
    )
}

export default connect(state => ({
    tasks: state.tasks
}), { addTask, removeTask, checkTask, addText, editTask,})(Todo)