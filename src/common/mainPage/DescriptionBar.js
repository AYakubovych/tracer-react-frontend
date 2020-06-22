import React from "react";

export default function DescriptionBar() {
    return (
        <div>

            <div className='wrapper' >
                <div className="centered_home_div">
                    <h5 style={{float:'left',width:'450px',textAlign:'left',color:'#204969'}}>
                        The data about the localisation of
                        your employees can be the key to
                        improve productivity. Additionally,
                        time management is one of the most
                        important parts of the work process,
                        so it is extremely useful to keep it under the radar.</h5>
                </div>
            </div>
            <div className='wrapper' style={{height:'160px'}}>
                <div className="centered_home_div">
                    <h5 style={{float:'right',width:'450px',textAlign:'right',color:'#204969'}}>
                        The main priority of caring parents is to keep their child in safety.
                        However, due to the fast paced modern style of life, it is hard to keep it in mind throughout the time.
                        That is why the possibility to check the location of your child would serve as a
                        passive tool to control their activity.
                    </h5>
                </div>
            </div>
        </div>

    )};