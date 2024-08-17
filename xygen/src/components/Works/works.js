import React from 'react';
import './works.css';
import  Work1 from '../../assets/a2.jpg';
import Work2 from '../../assets/a3.jpg';
import Work3 from '../../assets/a4.jpg';
import Work4 from '../../assets/a5.jpg';
import Work5 from '../../assets/a2.jpg';
import Work6 from '../../assets/a1.jpg';



const Works = () => {
  return (
    <section id='works'>
        <h2 className="workstitle">Success Stories</h2>
        <span className="worksDesc">With a focus on delivering actionable insights and scalable solutions, Xygen.ai is your trusted partner in navigating the evolving landscape of AI technology.</span>
        <div className="worksGrid">
            <div className="worksImgs">
            <img src={Work1} alt=" Work1" className="worksImg"/>
                <div className="worksBarText">
                    <h2>AI and ML applications</h2>
                    <p>Our expertise extends across various AI and ML applications, including natural language processing, computer vision, and intelligent automation.</p>
                </div>
            </div>
            <div className="worksImgs">
            <img src={Work1} alt=" Work1" className="worksImg"/>
                <div className="worksBarText">
                    <h2>AI and ML applications</h2>
                    <p>Our expertise extends across various AI and ML applications, including natural language processing, computer vision, and intelligent automation.</p>
                </div>
            </div>
            <div className="worksImgs">
            <img src={Work1} alt=" Work1" className="worksImg"/>
                <div className="worksBarText">
                    <h2>AI and ML applications</h2>
                    <p>Our expertise extends across various AI and ML applications, including natural language processing, computer vision, and intelligent automation.</p>
                </div>
            </div>
            <div className="worksImgs">
            <img src={Work1} alt=" Work1" className="worksImg"/>
                <div className="worksBarText">
                    <h2>AI and ML applications</h2>
                    <p>Our expertise extends across various AI and ML applications, including natural language processing, computer vision, and intelligent automation.</p>
                </div>
            </div>
            <div className="worksImgs">
            <img src={Work1} alt=" Work1" className="worksImg"/>
                <div className="worksBarText">
                    <h2>AI and ML applications</h2>
                    <p>Our expertise extends across various AI and ML applications, including natural language processing, computer vision, and intelligent automation.</p>
                </div>
            </div>
            <div className="worksImgs">
            <img src={Work1} alt=" Work1" className="worksImg"/>
                <div className="worksBarText">
                    <h2>AI and ML applications</h2>
                    <p>Our expertise extends across various AI and ML applications, including natural language processing, computer vision, and intelligent automation.</p>
                </div>
            </div>
        </div>
        <button className="workBtn">See More</button>
    </section>
  );
}

export default Works