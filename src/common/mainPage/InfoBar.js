import React from "react";
import "./InfoBar.css";
import descriptionIcon from "../../img/icons/desctiption.png";
import humanIcon from "../../img/icons/human.png";
import guideIcon from "../../img/icons/guide.png";
import contactIcon from "../../img/icons/contact.png";

function aboutHref() {
    window.location.assign("/about");
}
function contactHref() {
    window.location.assign("/contact");
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

            <div className={"info_bar_div"} style={{marginLeft:'300px'}}>
                <img src={guideIcon} width="45" height="45" alt="disc" style={{marginLeft:'-6px'}}/>
                <h5 className={"home_info_top_text"}>Usage guide</h5>
                <h6 className={"home_info_mid_text"}>More than 8000 lines of code in 3 services,deployed on hand made and self configure server</h6>
                <span onClick={() => aboutHref()} className={"home_info_link"}>About ></span>
            </div>

            <div className={"info_bar_div"} style={{marginLeft:'600px'}}>
                <img src={humanIcon} width="45" height="45" alt="disc" style={{marginLeft:'-3px'}}/>
                <h5 className={"home_info_top_text"}>Team</h5>
                <h6 className={"home_info_mid_text"}>More than 8000 lines of code in 3 services,deployed on hand made and self configure server</h6>
                <span onClick={() => aboutHref()} className={"home_info_link"}>About ></span>
            </div>

            <div className={"info_bar_div"} style={{marginLeft:'900px'}}>
                <img src={contactIcon} width="45" height="45" alt="disc" style={{marginLeft:'-3px'}}/>
                <h5 className={"home_info_top_text"}>Contact</h5>
                <h6 className={"home_info_mid_text"}>More than 8000 lines of code in 3 services,deployed on hand made and self configure server</h6>
                <span onClick={() => contactHref()} className={"home_info_link"}>Contact ></span>
            </div>

        </div>
    )};