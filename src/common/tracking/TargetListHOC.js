import TargetsList from "./TargetsList";
import React ,{Component} from "react";
import {addTarget, getSubTargetsList} from "../../util/APIUtils";
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

    addTarget(key){

        const loginRequest = {key : key};

        addTarget(loginRequest)
            .then( () => {
                    this.afterLogin()
            })
            .catch(error => {
                console.log("error")

                notification.error({
                    message: 'Error',
                    description: error.message || 'Sorry! Something went wrong. Please try again!'
                });
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