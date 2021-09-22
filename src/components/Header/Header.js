import React from 'react';
import './Header.css'
import '../CommonCss/common.css'
import Menu from '../Menu/Menu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Header = () => {
    return (
        <div className="gymHeader">
            <Menu></Menu>
            <div className="layer">
            </div>
            <div className="background">
            </div>
            <div className="row headerContent">
                <div className="col-5 headerLeft">
                    <h1>THE BEST FITNESS STUDIO IN TOWN</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, velit reprehenderit nemo consequatur magni saepe est fuga ea quam cumque praesentium asperiores laborum incidunt fugiat! Esse, in? Saepe, quisquam!</p>
                    <Link to="/pricing" className="btn commonButton"><span>JOIN US</span></Link>
                </div>
                <div className="col-6 headerRight">
                    <iframe src="https://www.youtube.com/embed/gey73xiS8F4?autoplay=1&mute=1" title="YouTube video player" allow="autoplay; encrypted-media" frameborder="0"></iframe>
                </div>
            </div>
        </div>
    );
};

export default Header;