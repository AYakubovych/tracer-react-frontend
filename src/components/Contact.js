import React from "react";
import {Form, Input, notification} from "antd";
import CustomCarousel from "../common/mainPage/CustomCarousel";
import TextArea from "antd/es/input/TextArea";
import locationIcon from "../img/icons/location.svg";
import emailIcon from "../img/icons/email.jpg";
import phoneIcon from "../img/icons/phone.png";
import linkedInIcon from "../img/icons/linkedin.webp";
import facebookIcon from "../img/icons/facebook.png";
import {sendFeedback} from "../util/APIUtils";

function f() {
    console.log(document.getElementById("name").value);
    console.log(document.getElementById("email").value);
    console.log(document.getElementById("message").value);

    const feedBackRequest = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message : document.getElementById("message").value
    };

    sendFeedback(feedBackRequest)
        .then(res => {
            notification.error({
                message: 'Sended',
                description: res.message
            });
        })
        .catch(error => {
            notification.error({
                message: 'Error',
                description: error.message || 'Sorry! Something went wrong. Please try again!'
            });
        });
}

export default function About() {

    return (

        <div>
            <div className='wrapper' style={{marginTop:'15px'}}>
                <h3 style={{textAlign:'center'}}>Contact</h3>
                <hr style={{width:'25%'}}/>
                <div className="centered_home_div" style={{position:'relative'}}>

                {/*Message field*/}
                    <div style={{position:'absolute',width:'580px'}}>
                        <Form method="post">
                            <h5>Send me a message</h5>
                            <Input type="text"
                                   id="name"
                                   style={{textAlign:'left',backgroundColor:'white'}}
                                   className={"login_form_field"}
                                   name="Name"
                                   placeholder=" Your name.." />

                            <Input type="text"
                                   id="email"
                                   name="email"
                                   style={{textAlign:'left',backgroundColor:'white'}}
                                   className={"login_form_field"}
                                   placeholder=" Your e-mail.."/>

                            <TextArea type="text"
                                      name="message"
                                      id="message"
                                      style={{height:'170px',textAlign:'left',backgroundColor:'white'}}
                                      className={"login_last_form_field"}
                                      placeholder=" Your message.."/>

                            <Input type="submit"
                                   className="login_submit_button"
                                   value="Send"
                                   onClick={() => f()}
                                   style={{borderRadius:"8px"}}/>

                        </Form>
                    </div>


                {/*Contact field*/}
                    <div style={{position:"absolute",right:'0',width:'580px'}}>
                        <div style={{marginTop:'50px'}}>
                            <img src={locationIcon} width="35" height="35" alt="location"/>
                            <h5>Cracow, Poland</h5>
                            <img src={emailIcon} width="35" height="35" alt="location"/>
                            <h5>a.yakubovych@yahoo.com</h5>
                            <img src={phoneIcon} width="35" height="35" alt="location"/>
                            <h5>+48 575 818 360</h5>
                            <hr style={{width:'50%'}}/>
                            <img src={linkedInIcon} width="35" height="35" alt="location"/>
                            <img src={facebookIcon} width="31" height="31" alt="location"/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}