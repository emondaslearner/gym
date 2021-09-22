import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faYoutube,faInstagram,faTwitter,faWhatsapp } from '@fortawesome/free-brands-svg-icons' 

const Footer = () => {
    return (
        <div className="footer">
            <div className="row footerContent">
                <div className="col-3 logo">
                    <h2>POWER <span>X</span></h2>
                </div>
                <div className="col-2 footerLink">
                    <li>Need Help?</li>
                    <li><a href="">Help center</a></li>
                    <li><a href="">Email support</a></li>
                    <li><a href="">Live Chat</a></li>
                    <li><a href="">Gift Certificates</a></li>
                    <li><a href="">Send Us Feedback</a></li>
                </div>
                <div className="col-2 footerLink">
                    <li>Digital Resources</li>
                    <li><a href="">Articles</a></li>
                    <li><a href="">E-books</a></li>
                </div>
                <div className="col-2 footerLink">
                    <li>Connect with us</li>
                    <li>
                        <nav className="social d-flex">
                            <a href=""><FontAwesomeIcon icon={faYoutube} /></a>
                            <a href=""><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href=""><FontAwesomeIcon icon={faWhatsapp} /></a>
                        </nav>
                    </li>
                    <li><a href="">Forum</a></li>
                </div>
                <div className="col-3 footerLink">
                    <li>Join Our Newsletter</li>
                    <li><a href="">Get exclusive news,features and updates from the Shredder weight loss academy.</a></li>
                </div>
            </div>
        </div>
    );
};

export default Footer;