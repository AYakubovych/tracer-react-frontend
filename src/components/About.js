import frontBack from "../img/svg/front-back.svg";
import android from "../img/svg/android.svg";
import React, {useState} from "react";
import Button from "react-bootstrap/Button";

const renderSwitch = (param) =>{
    switch (param) {
        case 's1':
        return <div>
            <img src={frontBack}/>
        </div>

        case 's2' :
            return <div>
                <img src={android}/>
            </div>
    }
}

export default function About() {

    const [view,setView] =useState([]);

    return (
        <div className='wrapper' style={{marginTop:'15px'}}>
            <div className="centered_home_div">
                <h5>
                    This project is my graduation work, in which I am combining the knowledge gained during my studies.
                    The project is separated into 4 parts: Frontend, Backend, Android service and Android application.
                    For this project I had built and set up a personal server and also made it accessible in
                    the Internet by using the DDNS protocol. The main purpose of it is to
                    gather information about locations of linked users.

                    The starting point is the Android application, which opportunities involves users registration
                    that follows up with receiving and sending location data to RabbitMQ queue. In order to create
                    this application I had used AndroidSDK 19lvl and built it with Gradle.

                    The next part is the Android service, which serves as a message receiver
                    from RabbitMQ and Android applications. Moreover, it is used to process and save data to the database.
                    To create this service I had involved Java 8+, Spring(Boot, Data, MVC), PostgreSQL и Maven.

                    Backend service is intended to receive and process data from the database and further handling
                    asynchronous JSON requests from the Frontend. It follows with authentication and authorisation
                    for users who wants to get an information about the location of Android application users.
                    Having an aim to develop Backend service, I had used Java 8+, Spring(Boot, MVC, Security, Data),
                    Maven, Hibernate, JWT и PostgreSQL.

                    The main task of Frontend service is to receive, display, modify and send back data to Backend service.
                    Communication between services is carried out with the help of asynchronous requests that are represented
                    in REST architecture. Frontend is based on ReactJS with the usage of GoogleMap API for better
                    location data visualisation.

                    The server, which was built for this project, runs on Ubuntu OS.
                    Additionally, services are deployed on preinstalled Docker PaaS.
                    Beside that, server was upgraded with PostgreSQL database and RabbitMQ.

                    Most of the time, there is no problem with connection to the server, however,
                    from time to time I provide maintenance, which usually lasts no longer than 24 h.

                    Communication schemas are represented bellow:

                </h5>
                    <Button
                        style={{color:'while',backgroundColor:'#204969',borderColor:'#204969',margin:'4px'}}
                        onClick={() => setView('s1')}>
                        Front-Back
                    </Button>
                    <Button
                        style={{color:'white',backgroundColor:'#204969',borderColor:'#204969',margin:'4px'}}
                        onClick={() => setView('s2')}>
                        Phone app-Queue service
                    </Button>
                    <div>
                        <div style={{width : '1200px',height:'640px', overflowY: 'auto',overflowX: 'auto'}}>
                            {renderSwitch(view)}
                        </div>
                    </div>
            </div>
        </div>
    );
}
