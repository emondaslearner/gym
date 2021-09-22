import React from 'react';
import './About.css'
import aboutImg from '../Image/wells-chan-H-vAxuWxmi8-unsplash.jpg'

const About = () => {
    return (
        <div id="about" className="row aboutUs" >
            <div className="col-6 aboutLeft">
                <img className="img-fluid" src={aboutImg} alt="" />
            </div>
            <div className="col-4 m-auto aboutRight">
                <h1>ABOUT US</h1>
                <h2>WE ARE HERE TO DREAM!</h2>
                <h2 className="second">OUR TEAM IS HERE SURE YOU.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis unde fuga possimus, sint amet inventore aspernatur? Fuga tempora, voluptates tempore consequuntur sunt odit delectus eaque vitae repellendus et hic fugiat? Quae, tenetur.</p>
            </div>
        </div>
    );
};

export default About;