import React from "react";
import style from './Quizform.module.css';

const Quizfrom = (props) =>{
    let input = React.createRef();
    return (
        <div className={style.container}>
            <div className={style.quiz_problems}>
                        <form action="question">
                            <div className={style.problem}>
                                <div className={style.problem_title}>Question {props.state.q1.problemId}</div>
                                <div className={style.problem_question}>{props.state.q1.question}</div>
                                <div className={style.problem_input}>
                                    <input type="radio" name="q1o1" id="q1o1" value="1"/>
                                    <label htmlFor="q1o1">{props.state.q1.options.option1}</label><br/>
                                    <input type="radio" name="q1o1" id="q1o2" value="2"/>
                                    <label htmlFor="q1o2">{props.state.q1.options.option2}</label><br/>
                                    <input type="radio" name="q1o1" id="q1o3" value="3"/>
                                    <label htmlFor="q1o3">{props.state.q1.options.option3}</label>
                                </div>
                            </div>
                            <div className={style.problem}>
                                <div className={style.problem_title}>Question {props.state.q2.problemId}</div>
                                <div className={style.problem_question}>{props.state.q2.question}</div>
                                    <div className={style.problem_input}>
                                    <input type="radio" name="q1o1" id="q1o1" value="1"/>
                                    <label htmlFor="q1o1">{props.state.q2.options.option1}</label><br/>
                                    <input type="radio" name="q2o1" id="q1o2" value="2"/>
                                    <label htmlFor="q1o2">{props.state.q2.options.option2}</label><br/>
                                    <input type="radio" name="q2o1" id="q1o3" value="3"/>
                                    <label htmlFor="q1o3">{props.state.q3.options.option3}</label>
                                </div>
                            </div>
                            <div className={style.problem}>
                                <div className={style.problem_title}>Question {props.state.q3.problemId}</div>
                                <div className={style.problem_question}>{props.state.q3.question}</div>
                                <div className={style.problem_input}>
                                <input type="radio" name="q1o1" id="q1o1" value="1"/>
                                    <label htmlFor="q1o1">{props.state.q2.options.option1}</label><br/>
                                    <input type="radio" name="q2o1" id="q1o2" value="2"/>
                                    <label htmlFor="q1o2">{props.state.q2.options.option2}</label><br/>
                                    <input type="radio" name="q2o1" id="q1o3" value="3"/>
                                    <label htmlFor="q1o3">{props.state.q3.options.option3}</label>
                                </div>
                            </div>
                            <div className={style.quiz_submit}>
                                <button type="button">Answear</button>
                            </div>
                        </form>
                    </div>
        </div>
    )
}
export default Quizfrom;