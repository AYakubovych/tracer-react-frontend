import React from "react";
import "./Team.css";
//PHOTOS
import contactIcon from "../img/icons/contact.png";
import firstPhoto from "../img/photos/1.jpg";
import secondPhoto from "../img/photos/2.jpg";
import fifthPhoto from "../img/photos/5.jpg";
import fourthPhoto from "../img/photos/4.jpg";


export default function TargetsList(){

    return(
        <div>
            <div className='wrapper'>
                <div className="centered_home_div">

                    <h3 style={{textAlign:'center',marginTop:'15px'}}>Team</h3>
                    <hr style={{width:'25%'}}/>

                    {/*1 row*/}
                    <div className="team_row">
                        <div className="team_border" style={{float:'left'}}>
                            <img src={firstPhoto} width='598px' height='350px' alt="photo"/>
                        </div>
                        <div style={{float:'right',width:'600px',position:'relative'}}>
                            <div style={{left:'40px',marginTop:'138px',position:'absolute'}}>
                                <h4 style={{color:'#204969'}}>Anton Yakubovych</h4>
                                <h4 style={{color:'#204969'}}>CEO</h4>
                            </div>
                        </div>
                    </div>
                    {/*2 row*/}
                    <div className="team_row">
                        <div className="team_border" style={{float:'right'}}>
                            <img src={secondPhoto} width='598px' height='350px' alt="photo"/>
                        </div>
                        <div style={{float:'left',width:'600px',position:'relative'}}>
                            <div style={{right:'40px',marginTop:'138px',position:'absolute'}}>
                                <h4 style={{color:'#204969'}}>Anton Yakubovych</h4>
                                <h4 style={{color:'#204969'}}>DevOps</h4>
                            </div>
                        </div>
                    </div>
                    {/*3 row*/}
                    <div className="team_row">
                        <div className="team_border" style={{float:'left'}}>
                            <img src={fifthPhoto} width='598px' height='350px' alt="photo"/>
                        </div>
                        <div style={{float:'right',width:'600px',position:'relative'}}>
                            <div style={{left:'40px',marginTop:'138px',position:'absolute'}}>
                                <h4 style={{color:'#204969'}}>Anton Yakubovych</h4>
                                <h4 style={{color:'#204969'}}>Frontend dev</h4>
                            </div>
                        </div>
                    </div>
                    {/*4 row*/}
                    <div className="team_row">
                        <div className="team_border" style={{float:'right'}}>
                            <img src={fourthPhoto} width='598px' height='350px' alt="photo"/>
                        </div>
                        <div style={{float:'left',width:'600px',position:'relative'}}>
                            <div style={{right:'40px',marginTop:'138px',position:'absolute'}}>
                                <h4 style={{color:'#204969'}}>Anton Yakubovych</h4>
                                <h4 style={{color:'#204969'}}>Backend dev</h4>
                            </div>
                        </div>
                    </div>
                    {/*5 row*/}

                </div>
            </div>
        </div>
    );
};
