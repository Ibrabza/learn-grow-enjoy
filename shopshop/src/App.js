import './App.css';
import React,{useEffect, useState} from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Course from './components/Course/Course';
import Lesson from './components/Lesson/Lesson';
// import Courses from './components/Newcourses/Courses/Courses';
// import nameOfCourse from './components/Course/Navbarcourse/Navbarcourse';
// import CourseInfo from './components/Newcourses/CourseInfo/CourseInfo';
import image from './images/background.jpg';
import Newcourses from './components/Newcourses/Newcourses';
import CourseInfo from './components/Newcourses/CourseInfo/CourseInfo';

const App = () => {
  let obj = [
    {nameOfCourse:"JAVA", numOfLessons:"100",path:'/java'},
    {nameOfCourse:"JAVASCRIPT", numOfLessons:"10",path:'/javascript'}
  ]


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

  let courseinfonav = obj.map( (x) => {
  return (
    <Routes>
      <Route path={`/new/${x.nameOfCourse}`} Component={() => <CourseInfo 
      name={x.nameOfCourse}
      courseImage={image} 
      assigned="22" 
      numLessons={x.numOfLessons} 
      description="VASHE CHETKIY" /> }/>
    </Routes>
  )})
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/course' Component={Course}/>
        </Routes>
        <Routes>
          <Route path='/lesson/:lessonNumber' Component={Lesson}/>
        </Routes>
        <Routes>
          <Route path='/' Component={() => <Profile username="Ibrabza" usermail="220587@mail.com" finishedCourse='100' assignedCourse='1'/>}/>
        </Routes>
        <Routes>
          <Route path='/new' Component={()=> <Newcourses State={obj}/>}/>
        </Routes>
        {courseinfonav}
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
