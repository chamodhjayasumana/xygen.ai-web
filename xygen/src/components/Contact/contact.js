import React from 'react';
import './contact.css';
import Industry1 from '../../assets/ind1.jpg'
import Industry2 from '../../assets/ind2.jpg'
import Industry3 from '../../assets/pexels-designecologist-1779487.jpg'
import Industry4 from '../../assets/pexels-thisisengineering-3862372.jpg'
 
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
        <div id="contact">

        </div>
    </section>
  )
}

export default Contact