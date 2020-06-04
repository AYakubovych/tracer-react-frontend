import React from "react";
import "./Home.css";
import '@brainhubeu/react-carousel/lib/style.css';
import CustomCarousel from "../common/mainPage/CustomCarousel";

import textLogoImg from '../img/logoText.jpg'
import logoImg from '../img/logo.jpg';
import {login} from "../util/APIUtils";
import {ACCESS_TOKEN} from "../constants";
import {notification} from "antd";
import {TEST_USER_PASSWORD,TEST_USER_EMAIL} from "../constants/testUser";


function testUserLogin (){
    const loginRequest = {email: TEST_USER_EMAIL, password: TEST_USER_PASSWORD};
    login(loginRequest)
        .then(res => {
            if (res.accessToken !== null) {
                localStorage.setItem(ACCESS_TOKEN,res.accessToken);
                window.location.assign("/profile");
            }
        })
        .catch(error => {
            if (error.status === 401) {
                notification.error({
                    message: 'Error',
                    description: 'Your Username or Password is incorrect. Please try again!'
                });
            } else {
                notification.error({
                    message: 'Error',
                    description: error.message || 'Sorry! Something went wrong. Please try again!'
                });
            }
        })
}

export default function Home() {

    return (
        <div className="Home">
            <div className="attention">
                <span>
                    Project still in progress..
                </span>
            </div>
            <div className="attention" style={{backgroundColor:'#1F6961'}}>
                <span onClick={() => testUserLogin()}
                      className="test_user_span">
                   &#8594; Click here to try test user &#8592;
                </span>
            </div>
            <div className='wrapper'>
                <div className="centered_home_div">
                    <img src={logoImg} width="350" height="350"/>
                    <img src={textLogoImg} width="750" style={{marginTop:'225px'}}/>
                </div>
            </div>

            <div className='wrapper'>
                <h2 className="home_page_text">Created with usage</h2>
                <div className="centered_home_div">
                    <CustomCarousel/>
                </div>
            </div>
        </div>
    );
}