import React from "react";
import "./InfoBar.css";
import descriptionIcon from "../../img/icons/desctiption.png";

function aboutHref() {
    window.location.assign("/about");
}

export default function Home() {
    return (
        <div>
            <div className={"info_bar_div"}>
                <img src={descriptionIcon} width="45" height="45" alt="disc"/>
                <h5 className={"home_info_top_text"}>Project description</h5>
                <h6 className={"home_info_mid_text"}>If you want to know more about this project, click here</h6>
                <span onClick={() => aboutHref()} className={"home_info_link"}>About ></span>
            </div>

            <div className={"info_bar_div"}>
                {/**/}
            </div>

            <div className={"info_bar_div"}>
                {/**/}
            </div>

            <div className={"info_bar_div"}>
                {/**/}
            </div>

        </div>
    )};