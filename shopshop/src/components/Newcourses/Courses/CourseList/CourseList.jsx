import React from "react";
import style from './CourseList.module.css';
import { NavLink } from "react-router-dom";


const CourseList = (props) =>{
    return(
        <NavLink to={`/new/${props.nameOfCourse}`}>
            <div className={style.container}>
                <div className={style.title}>{props.nameOfCourse}</div>
                <div className={style.numOfLessons}>{props.numOfLessons}</div>
            </div>
        </NavLink>
    )
}
export default CourseList;