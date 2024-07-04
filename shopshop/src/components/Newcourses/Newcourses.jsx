import React, { useEffect, useState } from "react";
import style from './Newcourses.module.css';
import Courses from "./Courses/Courses";

const Newcourses = (props) =>{



    return(
            <div className={style.container}>
                <Courses State = {props.State}/>
            </div>
    )
}
export default Newcourses
