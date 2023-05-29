import React from "react";
import cl from './Title.module.css'

const Title = (props) => {
    return (
        <h1 className={cl.title}> This is {props.title}</h1>
    )
}

export default Title