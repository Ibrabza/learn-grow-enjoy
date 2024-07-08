import React,{useEffect, useState} from 'react';
import style from './Navbarcourse.module.css';
import { NavLink } from "react-router-dom";

const NameOfCourse = (props) =>{
    let max = 10;
    // let lessons_nav = () =>{
    //     for (let index = 0; index <= max; index++) {
            
            
    //     }
    // }
    // let items = max.map( () => {
    //     return <NavLink to={`/course/lesson/${max}`}>lesson {max}</NavLink>
    // })
    const [data, setData] = useState([]);

  useEffect(() => {
      fetchData();
  }, []);

  const fetchData = async () => {
    try {
        const response = await fetch(`http://127.0.0.1:8000/lge/api/assigned_course_count/`);
        const jsonData = await response.json();
        setData(jsonData.count);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
  }

  const renderLessonLinks = () => {
    let items = [];
        for (let j = 1; j <= data; j++) {
            items.push(
                <NavLink to={`/lesson/${j}`}>Lesson {j}</NavLink>
            );
        }
    return items;
};


    return(
        <div className={style.container}>
            {renderLessonLinks()}
        </div>
    )
}
export default NameOfCourse;