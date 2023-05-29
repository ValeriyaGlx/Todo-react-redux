import React from "react";
import cl from "./Modal.module.css";
import Title from "../Title/Title";
import Input from "../Input/Input";
import Button from "../Button/Button";
import {nameValidation} from '../../helpers/validation'

const Modal = (props) => {
  const classes = [cl.modal, cl.active];

  if (!props.modal) {
    classes.pop();
  }

  return (
    <div className={classes.join(" ")}>
      <div className={cl.content}>
        <Title title="your TODO list!" />
        <Input
          labeltitle="Add your Name:"
          placeholder="From the capital letter, please"
          id="name"
          value = {props.value}
          error = {props.err}
          onChange={(e)=> {
            const name = nameValidation(e.target.value);
            props.handleChange(name)
          }}
        />
       
        <Button title="Submit" onClick={props.submitName}/>
      </div>
    </div>
  );
};

export default Modal;
