import React, { useEffect, useState } from "react";
import style from './Course.module.css';
import Navbarcourse from './Navbarcourse/Navbarcourse';
import Quizfrom from "./Quizform/Quizform";
import Lesson from "../Lesson/Lesson";
import Notassigned from "./Notassigned/Notassigned";


const Course = (props) =>{
    let assignedToCourse = true;

    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
          const response = await fetch(`http://localhost:8000/api/course/`);
          const jsonData = await response.json();
          setData(jsonData);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
    };
  
    console.log(data);
    
    let obj = {
        q1: {
            problemId:"1",
            question:"What is JAVA?",
            rAnswer:'2',
            options:{
                option1:"you",
                option2:"Programming Language",
                option3:"Magic word",
            }
        },
        q2: {
            problemId:"2",
            question:"You love me?",
            rAnswer:'2',
            options:{
                option1:"no",
                option2:"Yes",
                option3:"may be",
            }
        },
        q3: {
            problemId:"3",
            question:"Do you sleep",
            rAnswer:'2',
            options:{
                option1:"yes",
                option2:"No",
                option3:"i am a machine",
            }
        },
    }
    if(assignedToCourse){
        return(
            <div className={style.container}>
                <div className={style.lesson_navbar}>
                    <Navbarcourse State={props.State}/>
                </div>
            </div>
        )
    }else{
        return(
            <div className={style.container}>
                <div className={style.lesson_navbar}>
                    <Navbarcourse State={props.State}/>
                </div>
                <Notassigned/>
            </div>
        )
    }
}
export default Course;