import React from 'react';
import Menu from '../Menu/Menu';
import './Pricing.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck,faTimes } from '@fortawesome/free-solid-svg-icons'
import Footer from '../Footer/Footer';
import {
  Link
} from "react-router-dom";

const Pricing = () => {
    return (
        <>
            <div className="gymHeader">
                <Menu></Menu>
                <div className="layer">
                </div>
                <div className="background">
                </div>
                <div className="classesHeader">
                    <h1 className="text-center">PRICING PLANS</h1>
                </div>
            </div>
            <div className="pricing">
                <h1 className="hadding m-4 text-center" ><span>CHOOSE THE OFFER </span>THAT SUITS YOU</h1>
                <p className="text-center">Sed ut perspiciatis unde omins iste natus error sit voluptatem accusantium doloremque</p>
                <p className="text-center">laudantium,totam rem aperiam</p>
                <div className="row mt-5 mb-5">
                    <div className="price price1">
                        <h6>BILLED MONTHLY</h6>
                        <h2>ADVANCE PLAN</h2>
                        <h1>$140</h1>
                        <ul>
                            <li><FontAwesomeIcon className="text-success" icon={faCheck} /><span>Mobile-Optimized</span></li>
                            <li><FontAwesomeIcon className="text-success" icon={faCheck} /><span>Best Hosting</span></li>
                            <li><FontAwesomeIcon className="text-success" icon={faCheck} /><span>Free Custom</span></li>
                            <li><FontAwesomeIcon className="text-success" icon={faCheck} /><span>Outstanding</span></li>
                            <li><FontAwesomeIcon className="text-success" icon={faCheck} /><span>Happy Customers</span></li>
                        </ul>
                        <Link className="btn commonButton" to="/memberShip"><span>PURCHASE</span></Link>
                    </div>
                    <div className="price price2">
                        <h6>BILLED MONTHLY</h6>
                        <h2>BASIC PLAN</h2>
                        <h1>$120</h1>
                        <ul>
                            <li><FontAwesomeIcon className="text-success" icon={faCheck} /><span>Mobile-Optimized</span></li>
                            <li><FontAwesomeIcon className="text-success" icon={faCheck} /><span>Best Hosting</span></li>
                            <li><FontAwesomeIcon className="text-danger" icon={faTimes} /><span>Free Custom</span></li>
                            <li><FontAwesomeIcon className="text-danger" icon={faTimes} /><span>Outstanding</span></li>
                            <li><FontAwesomeIcon className="text-success" icon={faCheck} /><span>Happy Customers</span></li>
                        </ul>
                        <Link className="btn commonButton" to="/memberShip"><span>PURCHASE</span></Link>
                    </div>
                    <div className="price price3">
                        <h6>BILLED MONTHLY</h6>
                        <h2>BEGINERS</h2>
                        <h1>$90</h1>
                        <ul>
                            <li><FontAwesomeIcon className="text-success" icon={faCheck} /><span>Mobile-Optimized</span></li>
                            <li><FontAwesomeIcon className="text-danger" icon={faTimes} /><span>Best Hosting</span></li>
                            <li><FontAwesomeIcon className="text-danger" icon={faTimes} /><span>Free Custom</span></li>
                            <li><FontAwesomeIcon className="text-danger" icon={faTimes} /><span>Outstanding</span></li>
                            <li><FontAwesomeIcon className="text-success" icon={faCheck} /><span>Happy Customers</span></li>
                        </ul>
                        <Link className="btn commonButton" to="/memberShip"><span>PURCHASE</span></Link>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Pricing;