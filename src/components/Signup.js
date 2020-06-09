import React, { Component } from "react";
import {Form, Input, notification} from "antd";
import './Signup.css';
import {
    ACCESS_TOKEN,
    EMAIL_MAX_LENGTH,
    FIRST_NAME_MAX_LENGTH,
    FIRST_NAME_MIN_LENGTH, LAST_NAME_MAX_LENGTH,
    LAST_NAME_MIN_LENGTH
} from "../constants";
import {signup,login} from "../util/APIUtils";


class Signup extends Component{

    constructor(props) {
        super(props);
        this.state = {name:'',lastName:'', email: '', password: ''};
    }
    handleChange = (event) => {
        this.setState({[event.target.name] : event.target.value});
    };

    doSignup = () => {
        if(!this.state.email > EMAIL_MAX_LENGTH &&
            !this.state.name < FIRST_NAME_MIN_LENGTH &&
            !this.state.name > FIRST_NAME_MAX_LENGTH &&
            !this.state.lastName < LAST_NAME_MIN_LENGTH &&
            !this.state.lastName > LAST_NAME_MAX_LENGTH){

            const singUpRequest = {email: this.state.email,
                password: this.state.password,
                name: this.state.name,
                lastName: this.state.lastName
            };
            console.log("doSignup")
            signup(singUpRequest)
                .then(res => {
                    console.log(res);
                    if(res.success === true){
                        this.afterSignUp();
                    }
                    this.redirect()
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
        }else {
            notification.error({
                message: 'Error',
                description: 'One of fields incorrect'
            })
        }
    };

    redirect = () =>{
        setTimeout(() => {
            console.log("redirect");
            window.location.assign("/profile");
        },1000)
    }

    afterSignUp = () => {
        //do login
        const loginRequest = {email: this.state.email, password: this.state.password};
        login(loginRequest).then(
            res => {
                localStorage.setItem(ACCESS_TOKEN,res.accessToken);
                this.setState({...this.state, isAuthenticated: true});
            });
    };

    render() {
        return (
            <div className="center_block_create">
                <div className="top">
                    <h4 className="top_text">Fill the fields</h4>
                </div>
                <div className="create_border">
                    <div className="form_block">
                        <Form method="post">
                            <Input type="text"
                                   name="name"
                                   className={"half_field_left"}
                                   onChange={this.handleChange}
                                   placeholder="First Name" />
                            <Input type="text"
                                   name="lastName"
                                   className={"half_field_right"}
                                   onChange={this.handleChange}
                                   placeholder="Last Name" />

                            <Input type="text"
                                   style={{marginTop:'8px'}}
                                   className={"login_form_field"}
                                   name="email"
                                   onChange={this.handleChange}
                                   placeholder="E-Mail" />

                            <Input type="password"
                                   name="password"
                                   className={"login_last_form_field"}
                                   placeholder="Password"
                                   onChange={this.handleChange}/>

                            <Input type="submit"
                                   className="login_submit_button"
                                   onClick={this.doSignup}
                                   value="Submit"/>

                        </Form>
                    </div>
                </div>
            </div>

        );
    }
}

export default Signup;