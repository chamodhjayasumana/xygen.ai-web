import React from 'react';
import './contactInfo.css';
import Feacebook from '../../assets/facebook-icon.png';
import Twitter from '../../assets/twitter.png';
import Youtube from '../../assets/youtube.png';
import Inster from '../../assets/instagram.png';


const ContactInfo = () => {
    return(
    <section id="contactInfoPage">
    <div id="contact">
        <h1 className="contactInfoPageTitle">Contact Us</h1>
        <p>Need a Consultation?</p>
        <span className="contactInfoDesc">Drop us a line! We are here to answer your questions 24/7.</span>
        <form className="contactForm">
            <input type="text" className="name" placeholder='Your Name'/>
            <input type="text" className="name" placeholder='Your Name'/>
            <textarea className="msg" name="message" rows="5" placeholder='Your Message'></textarea>
            <button type='submit' value='send' className="submitBtn">Submit</button>
            <div className="links">
                <img src={Feacebook} alt="Facebook" className="link" />
                <img src={Twitter} alt="twitter" className="link" />
                <img src={Youtube} alt="Youtube" className="link" />
                <img src={Inster} alt="Instergram" className="link" />
            </div>
        </form>
    
    </div>
</section>)
}

export default ContactInfo