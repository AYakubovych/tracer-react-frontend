import React from 'react'
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import {Button} from "react-bootstrap";
import "./TargetList.css";
import { Form, Input,notification } from 'antd';

const TargetsList = (props) => {

    function openForm() {
        document.getElementById("myForm").style.display = "block";
    }

    function closeForm(){
        document.getElementById("myForm").style.display = "none";
    }

    function formSubmit() {
        props.addTarget(document.getElementById("email").value , document.getElementById("password").value)

    }

    return (
        <div style={{overflowY: 'auto', overflowX: 'hidden',height : '420px'}}>
            <Button className="add_button list_item" onClick={() => openForm()}>+ Add</Button>

            <div className="form-popup" id="myForm">
                <form className="form-container">
                    <Button type="button"
                            className="list_item add_button"
                            onClick={() => closeForm()}
                            style={{backgroundColor:'red', borderColor:'#9C221F'}}
                    >Close</Button>

                    <Input type="text"
                           className="login_form_field"
                           placeholder="Enter Email"
                           name="email"
                           id="email"
                           required/>
                    <Input type="password"
                           className="login_last_form_field"
                           placeholder="Enter Password"
                           name="password"
                           id="password" required/>

                    <Button type="button"
                            className="login_submit_button"
                            style={{borderRadius:'0'}}
                            onClick={() => formSubmit()}
                    >Add</Button>
                </form>
            </div>

            {props.data.map((target,key) => {
                return (<Button key={key}
                                className="list_item"
                                onClick={() => props.onClick(key)}
                >{target.name} {target.lastName}</Button>)
            })}
        </div>
    )
};
export default TargetsList;
