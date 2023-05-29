import React, { useState } from "react";
import cl from "./TodoItem.module.css";

const TodoItem = ({
  id,
  text,
  removeTask,
  isComplited,
  taskComplited,
  disabled,
  change,
  editTask,
}) => {
  const classes = [cl.todoItem];
  const classesBtn = [cl.button];
  const classesEdit =  change ? [cl.buttonEdit, cl.buttonCheck] : [cl.buttonEdit, cl.buttonEditSym];
  const [input, setInput] = useState(text);

  if (isComplited) {
    classes.push(cl.complited);
    classesBtn.push(cl.buttonDiasbled);
    classesEdit.push(cl.buttonDiasbled);
  }

  return (
    <li className={classes.join(" ")}>
      <input
        type="checkbox"
        disabled={disabled}
        onChange={(e) => {
          taskComplited(e);
          setTimeout(() => {
            removeTask(id);
          }, 100);
        }}
        id={id}
        value={text}
      />
      {change ? (
        <input
          defaultValue={text}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      ) : (
        <label htmlFor={id}>{text}</label>
      )}
      <div>
        <button
          className={classesEdit.join(" ")}
          disabled={disabled}
          id={id}
          onClick={(e) => {
            editTask(e.target.id, input, change);
          }}
        ></button>
        <button
          className={classesBtn.join(" ")}
          disabled={disabled}
          onClick={() => {
            setTimeout(() => {
              removeTask(id);
            }, 150);
          }}
        ></button>
      </div>
    </li>
  );
};

export default TodoItem;
