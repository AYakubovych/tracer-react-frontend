import TargetsList from "./TargetsList";
import React ,{Component} from "react";
import {addTarget, getSubTargetsList, login} from "../../util/APIUtils";
import {ACCESS_TOKEN} from "../../constants";
import {notification} from "antd";

class TargetListHOC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            targets: []
        };
    }
    render = () => < TargetsList data = {this.state.targets}
                                 isFetching = {this.state.isFetching}
                                 onClick = {this.props.onClick}
                                 addTarget = {this.addTarget.bind(this)}
    />;

    componentDidMount() {
        this.fetchUsers();
    }

    addTarget(email,password){
        console.log(email + " " + password);

        const loginRequest = {email: email, password: password};
        addTarget(loginRequest)
            .then(res => {
                    this.afterLogin()
            })
            .catch(error => {
                if (error.status === 401) {
                    notification.error({
                        message: 'Error',
                        description: 'Email or Password is incorrect. Please try again!'
                    });
                } else {
                    notification.error({
                        message: 'Error',
                        description: error.message || 'Sorry! Something went wrong. Please try again!'
                    });
                }
            })
    }

    afterLogin(){
        window.location.assign("/tracking");
    }



    fetchUsers = () => {
        getSubTargetsList().then(res => {
            this.setState({targets: res})
        })
        .catch(e => {
            console.log(e);
        });
    }
}

export default TargetListHOC;