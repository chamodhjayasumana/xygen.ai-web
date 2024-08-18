import React from 'react';
import './footer.css';
import Feacebook from '../../assets/facebook-icon.png';
import Twitter from '../../assets/twitter.png';
import Youtube from '../../assets/youtube.png';
import Inster from '../../assets/instagram.png';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footerContent">
                <div className="footerSection about">
                    <h3>About XYGen.ai</h3>
                    <p>
                        XYGen.ai is a leading software consulting and development firm with over 30 years of experience
                        in delivering top-quality, secure, and adaptable digital solutions for millions of users worldwide.
                    </p>
                </div>
                <div className="footerSection links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contactInfoPage">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footerSection contactInfo">
                    <h3>Contact Us</h3>
                    <p>Northampton, United Kingdom</p>
                    <p>Colombo, Sri Lanka</p>
                    <p>Email: hr.xygenai.com</p>
                    <p>Phone: +94 74 236 5804</p>
                    <div className="footerSocialLinks">
                        <img src={Feacebook} alt="Facebook" className="socialLink" />
                        <img src={Twitter} alt="Twitter" className="socialLink" />
                        <img src={Youtube} alt="Youtube" className="socialLink" />
                        <img src={Inster} alt="Instagram" className="socialLink" />
                    </div>
                </div>
            </div>
            <div className="footerBottom">
                <p>&copy; 2024 XYGen.ai. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
