import React from "react";
import style from './Profile.module.css';
// import paleva from './../../images/background.jpg'
// import paleva from '

const Profile = (props) =>{
    return(
        <div className={style.container}>
            <div className={style.profile_infoblock}>
                <div className={style.profile_image}>
                    <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" alt="" />
                </div>
                <div className={style.infoside}>
                    <div className={style.info_title}>Profile info</div>
                    <div className={style.info_username}>{props.username}</div>
                    <div className={style.info_usermail}>Maill: {props.usermail}</div>
                    <div className={style.info_finishedCourse}>Completed Courses: {props.finishedCourse}</div>
                    <div className={style.info_assignedCourse}>Assigned Courses: {props.assignedCourse}</div>
                </div>
            </div>
        </div>
    )
}

export default Profile;