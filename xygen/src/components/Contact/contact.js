import React from 'react';
import './contact.css';
import Industry1 from '../../assets/ind1.jpg'
import Industry2 from '../../assets/ind2.jpg'
import Industry3 from '../../assets/pexels-designecologist-1779487.jpg'
import Industry4 from '../../assets/pexels-thisisengineering-3862372.jpg'
import Feacebook from '../../assets/facebook-icon.png';
import Twitter from '../../assets/twitter.png';
import Youtube from '../../assets/youtube.png';
import Inster from '../../assets/instagram.png'; 

const Contact = () => {
  return (
    <section id="contactPage">
        <div id="clients">
            <h1 className="contactPageTitle">Our Industry Expertise</h1>
            <p className="clientDesc">We’ve excelled our experience in a wide range of industries to bring valuable insights and provide our clients with the truly beneficial solutions.</p>
            <div className="clientImgs">
                <div className="worksImgs">
                <img src={Industry1} alt="" className="clientImg" />
                    <div className="worksBarText">
                        <h2>Healthcare IT Solutions and Services</h2>
                    </div>
                </div>
                <div className="worksImgs">
                <img src={Industry2} alt="" className="clientImg" />
                    <div className="worksBarText">
                        <h2>Banking IT Services and Solutions</h2>
                    </div>
                </div>
                <div className="worksImgs">
                <img src={Industry3} alt="" className="clientImg" />                    <div className="worksBarText">
                        <h2>Custom Telecom Software Development Services</h2>
                    </div>
                </div>
                <div className="worksImgs">
                <img src={Industry4} alt="" className="clientImg" />                <div className="worksBarText">
                        <h2>IT services for transportation and logistics (T&L)</h2>
                    </div>
                </div>
                
                
                
                
            </div>
        </div>
        {/* <div id="contact">
        <h1 className="contactPageTitle">Contact Us</h1>
        <p>Need a Consultation?</p>
        <span className="contactDesc">Drop us a line! We are here to answer your questions 24/7.</span>
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
        </div> */}
    </section>
  )
}

export default Contact