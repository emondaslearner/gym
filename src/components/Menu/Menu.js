import React from 'react';
import './Menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faTimes } from '@fortawesome/free-solid-svg-icons'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Menu = () => {
    const showMenu = (e) => {
        e.preventDefault()
        document.querySelector('.Menu nav').style.display = 'block';
        document.querySelector('.Menu nav').style.opacity = '1';
        document.querySelector('.Menu nav').classList.add('animateMenu');
        document.querySelector('.bar').style.display = 'none';
    }
    const closeMenu = (e) => {
        e.preventDefault()
        document.querySelector('.Menu nav').style.display = 'none';
        document.querySelector('.bar').style.display = 'block';
        document.querySelector('.Menu nav').classList.remove('animateMenu');
    }
    return (
        <div className="row m-auto pt-4 Menu">
            <div className="col-3 logo">
                <h2>POWER <span>X</span></h2>
            </div>
            <nav className="col-9">
                <li><Link to="" >Home</Link></li>
                <li><Link to="/classes" >Our Classes</Link></li>
                <li><Link to="/classSchedule">class schedule</Link></li>
                <li><a href="/#about" >About Us</a></li>
                <li><a href="/#blog" >Blog</a></li>
                <li><Link to="/pricing" >Pricing</Link></li>
                <a onClick={closeMenu} className="close" href=""><FontAwesomeIcon icon={faTimes} /></a>
            </nav>
            <div className="bar">
                <a onClick={showMenu} href=""><FontAwesomeIcon icon={faBars} /></a>
            </div>
        </div>
    );
};

export default Menu;