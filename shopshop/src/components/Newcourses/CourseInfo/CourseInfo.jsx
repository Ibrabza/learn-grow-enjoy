import React from "react";
import style from './CourseInfo.module.css';

const CourseInfo = (props) =>{
    console.log(props)
    return(
        <div className={style.container}>
            <div className={style.info_image}><img src={props.courseImage} alt="asd" /></div>
            <div className={style.infoside}>
                <div className={style.title}>{props.name}</div>
                <div className={style.infoblock}>
                    <div className={style.infoblock_assigned}>Assigned users: {props.assigned}</div>
                    <div className={style.infoblock_numLessons}>Lessons: {props.numLessons}</div>
                    <div className={style.infoblock_description}>
                        <div className={style.description_title}>Description</div>
                        <div className={style.description_itself}>{props.description}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CourseInfo;