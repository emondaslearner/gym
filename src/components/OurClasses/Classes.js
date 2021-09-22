import React from 'react';
import Menu from '../Menu/Menu';
import classImg1 from '../Image/victor-freitas-546919-unsplash.png'
import classImg2 from '../Image/baylee-gramling-5m4Z14SDL80-unsplash.jpg'
import classImg3 from '../Image/humphrey-muleba-LOA2mTj1vhc-unsplash.jpg'
import classImg4 from '../Image/alora-griffiths-TuzrzArccvc-unsplash.jpg'
import classImg5 from '../Image/john-fornander-FIu48iuo_4g-unsplash.jpg'
import classImg6 from '../Image/sven-mieke-Lx_GDv7VA9M-unsplash.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Classes.css'
import Footer from '../Footer/Footer';

const Classes = () => {
    return (
        <>
            <div className="gymHeader">
                <Menu></Menu>
                <div className="layer">
                </div>
                <div className="background">
                </div>
                <div className="classesHeader">
                    <h1 className="text-center">OUR CLASSES</h1>
                </div>
            </div>
            <div className="row classes">
                <div className="class">
                    <img src={classImg1} alt="" />
                    <a className="btn commonButton" href=""><span>PSYCHO TRAINING <FontAwesomeIcon icon={faArrowRight} /></span></a>
                </div>
                <div className="class">
                    <img src={classImg2} alt="" />
                    <a className="btn commonButton" href=""><span>SELF DEFENSE <FontAwesomeIcon icon={faArrowRight} /></span></a>
                </div>
                <div className="class">
                    <img src={classImg3} alt="" />
                    <a className="btn commonButton" href=""><span>ADVANCE GYM <FontAwesomeIcon icon={faArrowRight} /></span></a>
                </div>
                <div className="class">
                    <img src={classImg4} alt="" />
                    <a className="btn commonButton" href=""><span>CARDIO TRAINING <FontAwesomeIcon icon={faArrowRight} /></span></a>
                </div>
                <div className="class">
                    <img src={classImg5} alt="" />
                    <a className="btn commonButton" href=""><span>STRENGTH TRAINING <FontAwesomeIcon icon={faArrowRight} /></span></a>
                </div>
                <div className="class">
                    <img src={classImg6} alt="" />
                    <a className="btn commonButton" href=""><span>PSYCHO TRAINING <FontAwesomeIcon icon={faArrowRight} /></span></a>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Classes;