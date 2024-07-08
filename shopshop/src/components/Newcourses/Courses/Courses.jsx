import React, {useEffect,useState} from "react";
import style from './Courses.module.css';
import CourseList from './CourseList/CourseList';

const Courses = (props) =>{
    
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
          const response = await fetch(`http://127.0.0.1:8000/api/new`);
          const jsonData = await response.json();
          setData(jsonData);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
    };
  
    console.log(data);
    // console.log(data[0].name);
    let listOfCourses = data.map((x) =>{return <CourseList nameOfCourse={x.name} numOfLessons={x.numOfLessons}/>})
    

    // let items = props.State;
    return(
        <div className={style.container}>
            <div className={style.title}>Available Courses</div>
            <div className={style.courseList}>
                {listOfCourses}
            </div>
        </div>
    )
}
export default Courses;