import frontBack from "../img/svg/front-back.svg";
import React from "react";


export default function About() {

    return (
        <div className='wrapper'>
            <div className="centered_home_div">
                <div style={{width : '1200px',height:'780px', overflowY: 'auto',overflowX: 'auto'}}>
                    <img src={frontBack}/>
                </div>
            </div>
        </div>
    );
}
