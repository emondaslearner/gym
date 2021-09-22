import React from 'react';
import './WhyChooseUs.css'
import serviceImg1 from '../Image/Group 87.png'
import serviceImg2 from '../Image/Group 88.png'
import serviceImg3 from '../Image/gift-2.png'

const WhyChooseUs = () => {
    return (
        <div id="blog" className="WhyChooseUs">
            <h1 className="text-center hadding"><span>WHY </span> CHOOSE US</h1>
            <div className="row services">
            <div className="service">
                    <img src={serviceImg1} alt="" />
                    <h3>FREE FITNESS TRAINING</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat nihil vel optio placeat fugit recusandae molestias amet sit dolores similique!</p>
                </div>
                <div className="service">
                    <img src={serviceImg2} alt="" />
                    <h3>TONS OF CARDIO & STRENGTH</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat nihil vel optio placeat fugit recusandae molestias amet sit dolores similique!</p>
                </div>
                <div className="service">
                    <img src={serviceImg3} alt="" />
                    <h3>NO COMMITMENT MEMBERSHIP</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat nihil vel optio placeat fugit recusandae molestias amet sit dolores similique!</p>
                </div>
                
            </div>
        </div>
    );
};

export default WhyChooseUs;