import React from 'react';
import './Section2.css'
import bg from '../Image/Group 80.png'

const Section2 = () => {
    return (
        <div className="row workOut" >
            <div className="service sc1">
                <div className="workLayout"></div>
                <img src={bg} alt="" />
                <h1>PROGRESSION</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi quisquam harum qui dolorum consectetur adipisicing elit</p>
            </div>
            <div className="service sc2">
                <div className="d-none workLayout"></div>
                <img src={bg} alt="" />
                <h1>WORKOUT</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi quisquam harum qui dolorum consectetur adipisicing elit</p>
            </div>
            <div className="service sc3">
                <div className="d-none workLayout"></div>
                <img src={bg} alt="" />
                <h1>NUTRITION</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi quisquam harum qui dolorum consectetur adipisicing elit</p>
            </div>
            
        </div>
    );
};

export default Section2;