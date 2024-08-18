import React from 'react';
import './works.css';
import  Work1 from '../../assets/p1.jpg';
import Work2 from '../../assets/p2.jpg';
import Work3 from '../../assets/p3.jpg';
import Work4 from '../../assets/p4.jpg';
import Work5 from '../../assets/p5.jpg';
import Work6 from '../../assets/p6.jpg';



const Works = () => {
  return (
    <section id='works'>
        <h2 className="workstitle">Success Stories</h2>
        <span className="worksDesc">With a focus on delivering actionable insights and scalable solutions, Xygen.ai is your trusted partner in navigating the evolving landscape of AI technology.</span>
        <div className="worksGrid">
            <div className="worksImgs">
            <img src={Work1} alt=" Work1" className="worksImg"/>
                <div className="worksBarText">
                    <h2>Entertainment, Software products</h2>
                    <p>Innovative Software Products for a Global Leader in Image Processing</p>
                </div>
            </div>
            <div className="worksImgs">
            <img src={Work2} alt=" Work1" className="worksImg"/>
                <div className="worksBarText">
                    <h2>Healthcare</h2>
                    <p>GAMP4-Compliant Software to Automate Cancer & TPN Drugs Manufacturing</p>
                </div>
            </div>
            <div className="worksImgs">
            <img src={Work3} alt=" Work1" className="worksImg"/>
                <div className="worksBarText">
                    <h2>Travel & Hospitality</h2>
                    <p>Microservices-Based Backend for an Innovative Self-Service App Used in 15 Large European Hotels</p>
                </div>
            </div>
            <div className="worksImgs">
            <img src={Work4} alt=" Work1" className="worksImg"/>
                <div className="worksBarText">
                    <h2>Entertainment, Information Technology, Software products</h2>
                    <p>Refactoring and Re-Architecting a SaaS Gaming Platform into SOA in Just 4 Months</p>
                </div>
            </div>
            <div className="worksImgs">
            <img src={Work5} alt=" Work1" className="worksImg"/>
                <div className="worksBarText">
                    <h2>Retail, Wellness and Sports, Travel & Hospitality</h2>
                    <p>Managed Testing of an Ecommerce Solution, CRM and Data Warehouse for US Multi-Industry Corporation</p>
                </div>
            </div>
            <div className="worksImgs">
            <img src={Work6} alt=" Work1" className="worksImg"/>
                <div className="worksBarText">
                    <h2>Information Technology, Software products</h2>
                    <p>Scalable Azure-Based Software Product for vCIO Service Management</p>
                </div>
            </div>
        </div>
        <button className="workBtn">See More</button>
    </section>
  );
}

export default Works