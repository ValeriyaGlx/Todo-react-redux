
import React from "react";
import cl from './Input.module.css';

const Input = ({labeltitle, id, value, onChange, onKeyDown, error, placeholder, }) => {

return (
    <div className={cl.todoContainer}>
    <label htmlFor={id}>{labeltitle}</label>
    <input value={value}
           placeholder={placeholder}
           onChange={onChange}
           onKeyDown={onKeyDown}
           />
    <span className={cl.span}>{error}</span>
    </div>

)
}

export default Input