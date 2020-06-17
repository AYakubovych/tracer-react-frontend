import React from "react";
import "./InfoBar.css";
import descriptionIcon from "../../img/icons/desctiption.png";

function aboutHref() {
    window.location.assign("/about");
}

export default function InfoBar() {
    return (
        <div>
            <div className={"info_bar_div"}>
                <img src={descriptionIcon} width="45" height="45" alt="disc" style={{marginLeft:'-6px'}}/>
                <h5 className={"home_info_top_text"}>Project description</h5>
                <h6 className={"home_info_mid_text"}>More than 8000 lines of code in 3 services,deployed on hand made and self configure server</h6>
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