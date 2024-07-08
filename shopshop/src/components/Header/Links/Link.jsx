import React from "react";
import style from './Link.module.css';
import { NavLink } from "react-router-dom";

const Link = (props) =>{
    return(
        <div className={style.container}>
            <NavLink to={props.path}>{props.name}</NavLink>
        </div>
    )
}

export default Link;