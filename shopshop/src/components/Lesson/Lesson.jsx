import React, { useEffect, useState } from "react";
import style from './Lesson.module.css';
import Navbarcourse from '../Course/Navbarcourse/Navbarcourse';
import Quizfrom from "../Course/Quizform/Quizform";

const Lesson = (props) => {
    let currentURL = window.location.href;
    currentURL = currentURL.split('/');

    const lessonNumber = currentURL[currentURL.length - 1];

    const [data, setData] = useState([]);
    const [quizData, setQuizData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
        fetchDataQuiz();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/course/`);
            const jsonData = await response.json();
            setData(jsonData[lessonNumber - 1]);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchDataQuiz = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/lge/api/lesson_questions/${lessonNumber}`);
            const jsonData = await response.json();
            setQuizData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false); // Set loading to false once data fetching is complete
        }
    };

    if (loading) {
        return <div>Loading...</div>; // Display loading indicator while data is being fetched
    }

    let obj = {
        q1: {
            problemId : quizData[0].id,
            question : quizData[0].question,
            rAnswer : quizData[0].rightAnswear,
            options : {
                option1 : quizData[0].option1,
                option2 : quizData[0].option2,
                option3 : quizData[0].option3,
                }
        },
        q2: {
            problemId : quizData[1].id,
            question : quizData[1].question,
            rAnswer : quizData[1].rightAnswear,
            options : {
                option1 : quizData[1].option1,
                option2 : quizData[1].option2,
                option3 : quizData[1].option3,
                }
        },
        q3: {
            problemId : quizData[2].id,
            question : quizData[2].question,
            rAnswer : quizData[2].rightAnswear,
            options : {
                option1 : quizData[2].option1,
                option2 : quizData[2].option2,
                option3 : quizData[2].option3,
                }
        },
    }

    // Once loading is complete, render the component
    return (
        <div className={style.container}>
            <div className={style.lesson}>
                <div className={style.title}>Lesson 1</div>
                <div className={style.video}>
                    <iframe width="560" height="315" src={data.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className={style.quiz_block}>
                    <div className={style.quiz_title}>QUIZ</div>
                    <Quizfrom state={obj} />
                </div>
            </div>
        </div>
    );
}

export default Lesson;
