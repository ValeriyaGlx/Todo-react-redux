import React from "react";
import cl from './Button.module.css'

const Button = (props) => {

    return (
        <button className={cl.button} {...props}>{props.title}</button>
    )

}

export default Button