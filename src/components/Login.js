import React, { Component } from "react";
import {ACCESS_TOKEN} from '../constants';
import { Form, Input,notification } from 'antd';
import { login } from '../util/APIUtils';


import './Login.css';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {email: '', password: ''};
    }

    handleChange = (event) => {
        this.setState({[event.target.name] : event.target.value});
    };

    loginLogic = () => {
        const loginRequest = {email: this.state.email, password: this.state.password};
            login(loginRequest)
            .then(res => {
                if (res.accessToken !== null) {
                    localStorage.setItem(ACCESS_TOKEN,res.accessToken);
                    this.afterLogin()
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
    };

    afterLogin(){
        window.location.assign("/profile");
    }

    render() {
        return (
            <div className="center_block_login">
                <div className="top">
                    <h4 className="top_text">Fill the fields</h4>
                </div>
                <div className="center_border">
                    <div className="form_block">
                        <Form method="post">
                            <Input type="text"
                                   className="login_form_field"
                                   name="email"
                                   onChange={this.handleChange}
                                   placeholder="E-Mail" />

                            <Input type="password"
                                   name="password"
                                   className="login_last_form_field"
                                   placeholder="Password"
                                   onChange={this.handleChange}/>

                            <Input type="submit"
                                    className="login_submit_button"
                                    onClick={this.loginLogic}
                                    value="Submit"/>

                        </Form>
                    </div>
                </div>
            </div>

        );
    }
}

export default Login;