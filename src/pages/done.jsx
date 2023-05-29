import React from "react";
import Title from "../components/Title/Title";
import TodoList from "../components/TodoList/TodoList";
import { DONE } from "../reducers/tasks";

const Done = (props) => {
  
  return (
    <div>
      <Title title="Done Page"/>
      <TodoList TASKS={DONE} disabled={true}/>
    </div>
  );
};

export default Done