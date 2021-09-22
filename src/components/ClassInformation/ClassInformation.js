import React from 'react';
import Menu from '../Menu/Menu';
import './ClassInformation.css'
import classImg from '../Image/humphrey-muleba-LOA2mTj1vhc-unsplash.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import Footer from '../Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const ClassInformation = () => {
    return (
        <>
            <div className="gymHeader">
                <Menu></Menu>
                <div className="layer">
                </div>
                <div className="background">
                </div>
                <div className="classesHeader">
                    <h1 className="text-center">ADVANCE GYM</h1>
                </div>
            </div>
            <div className="row classInformation">
                <div className="col-7 information">
                    <img src={classImg} alt="" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis doloribus voluptate vitae accusantium animi asperiores quibusdam facilis sapiente molestiae corporis, fuga iusto quasi totam, et iste placeat voluptatibus. Veniam aspernatur velit aliquam quasi! Accusantium culpa saepe laborum? Repellendus, et ullam iste, mollitia rerum assumenda excepturi nam temporibus eaque, nulla reiciendis.</p>

                    <ul>
                        <li><FontAwesomeIcon style={{color:'gold'}} icon={faCheckSquare}/> <span>Having Slimmer Shapely Thighs</span></li>
                        <li><FontAwesomeIcon style={{color:'gold'}} icon={faCheckSquare}/> <span>Getting Stronger Body</span></li>
                        <li><FontAwesomeIcon style={{color:'gold'}} icon={faCheckSquare}/> <span>Increased Metabolism</span></li>
                        <li><FontAwesomeIcon style={{color:'gold'}} icon={faCheckSquare}/> <span>Increased Muscular Endurance</span></li>
                        <li><FontAwesomeIcon style={{color:'gold'}} icon={faCheckSquare}/> <span>Maximum Result in Less Then Time</span></li>
                        <li><FontAwesomeIcon style={{color:'gold'}} icon={faCheckSquare}/> <span>Firm Hips and Tummy</span></li>
                    </ul>
                </div>
                <div className="col-4 schedule">
                    <h1 className="hadding"><span>CLASS </span>SCHEDULE</h1>
                    <div className="row day">
                        <div className="dayIn">
                            <h5>Monday</h5>
                            <p>8:00 AM - 9:00 AM</p>
                        </div>
                        <div className="dayIn">
                            <h5>Monday</h5>
                            <p>8:00 AM - 9:00 AM</p>
                        </div>
                        <div className="dayIn">
                            <h5>Monday</h5>
                            <p>8:00 AM - 9:00 AM</p>
                        </div>
                        <div className="dayIn">
                            <h5>Monday</h5>
                            <p>8:00 AM - 9:00 AM</p>
                        </div>
                        <div className="dayIn">
                            <h5>Monday</h5>
                            <p>8:00 AM - 9:00 AM</p>
                        </div>
                        <div className="dayIn">
                            <h5>Monday</h5>
                            <p>8:00 AM - 9:00 AM</p>
                        </div>
                    </div>
                    <Link className="btn commonButton" to="/pricing"><span>JOIN US</span></Link>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default ClassInformation;