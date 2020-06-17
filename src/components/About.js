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
                    Этот проект - дипломная работа, в которой я старался показать свои знания.
                    Проект разделен на 4 части: Фронтенд, Бакенд, Андроид-сервис и Андроид аппликация.
                    Для проекта я собрал и настроил сервер, а также открыл к нему доступ в сети интернет с помошю DDNS протокола.
                    И все это работает вместе ради одной цели - даль возможноть получать данные о местоположении.

                    Начинаеться все с приложения на андроид. В нем осущетвляеться возможноть реистрации пользователя(цели)
                    и последищее получение и отправка данных о местоположении в RabbitMQ. Для создания я использовал AndroidSDK 19lvl.

                    Андроид-сервис работает получателем сообщения с RabbitMQ и Андроид приложения, обработкой данных
                    и сохранением данных в базу данных. Создан с использованием
                    Java 8+, Spring(Boot,Data,MVC), PostgreSQL и Maven.

                    Бекенд предназначен для получения и обработки данных с базы данных, обработки асинзронных JSON
                    запросов с Фронтенда, аутентикации и авторизации пользователя(User) который
                    хочет получить инфомацию о местоположении Target пользователя.
                    Написан с использовние Java 8+, Spring(Boot, MVC, Security, Data),
                    Maven, Hibernate, JWT и PostgreSQL.

                    Фронтенд занимаеться получением данных, их отображением, модификацией и отправкой на Бекенд.
                    Работа с данными осуществляеться с помощю асинхронных запросов.
                    Создан на основе ReactJS с использованием GoogleMap API для отображения данных о локализации.

                    Сервер, на собранный для этого проекта, работает на ос Ubuntu.
                    Сервисы запущены на преустановленном Docker. Также, отдельно устанновлены PostgreSQL базаданных и RabbitMQ
                    Сервер, большую часть времени находиться в рабочем состоянии, но иногда я провожу тех.работы и обслуживание
                    но они не дляться дольше 24 часов.

                    Ниже представлены схемы комуникации:
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
