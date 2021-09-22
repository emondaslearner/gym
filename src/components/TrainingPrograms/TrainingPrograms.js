import React from 'react';
import programmingImg1 from '../Image/bruce-mars-gJtDg6WfMlQ-unsplash.png'
import programmingImg2 from '../Image/arthur-edelman-qfjuh4OLdxw-unsplash.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './TrainingPrograms.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const TrainingPrograms = () => {
    return (
        <div className="row TrainingPrograms">
            <h1 className="text-center hadding">TRAINING <span>PROGRAMS</span></h1>
            <div className="col-md-6 trainingLeft">
                <img className="img-fluid" src={programmingImg1} alt="" />
                <Link to="/pricing" className="trainingBtn btn commonButton" ><span>YOGA TRAINING SESSION <FontAwesomeIcon icon={faArrowRight} /></span></Link>
            </div>
            <div className="col-md-6 trainingRight">
                <img className="img-fluid" src={programmingImg2} alt="" />
                <Link to="/pricing" className="trainingBtn btn commonButton" ><span>CARDIO TRAINING SESSION <FontAwesomeIcon icon={faArrowRight} /></span></Link>
            </div>
            
        </div>
    );
};

export default TrainingPrograms;