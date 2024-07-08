import React from "react";
import style from './Header.module.css';
// import menu_icon from './../../images/menu-bar.png';
import Links from "./Links/Link";

const Header = (props) =>{
    return(
        <div className={style.container}>
            <div className={style.header_block}>
                <div className={style.header_title}>LEARN GROW ENJOY</div>
                {/* <div className={style.header_menu}>
                    <img src={menu_icon} alt="asd" />
                </div> */}
            </div>
            <div className={style.header_secondblock}>
                <Links path='/course' name="Course"/>
                <Links path='/new' name="New Courses"/>
                <Links path='/' name="Profile"/>
            </div>
        </div>
    )
}
export default Header;