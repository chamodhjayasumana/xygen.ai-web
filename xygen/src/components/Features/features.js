import React from 'react';
import './features.css';
import AI from '../../assets/AI.jpg';
import DS from '../../assets/dsa.jpg';
import WEB from '../../assets/web.jpg';

const Features = () => {
  return (
    <section id="feature">
        <span className="featureTitle">What is our vission </span>
        <span className="featureDesc">At Xygen.ai, we are passionate pioneers in the world of Artificial Intelligence and Machine Learning. Our mission is to drive innovation and deliver cutting-edge solutions that empower businesses and transform industries.</span>
        <div className="featerBars">
            <div className="featureBar" >
                <img src={AI} alt=" AI" className="featureImg"/>
                <div className="featureBarText">
                    <h2>AI and ML applications</h2>
                    <p>Our expertise extends across various AI and ML applications, including natural language processing, computer vision, and intelligent automation.</p>
                </div>
            </div>
            <div className="featureBar" >
                <img src={DS} alt="DS" className="featureImg"/>
                <div className="featureBarText">
                    <h2>Data-Driven Insights</h2>
                    <p>Leveraging AI to gain deeper customer insights and improve decision-making.</p>
                </div>
            </div>
            <div className="featureBar" >
                <img src={WEB} alt="WEB" className="featureImg"/>
                <div className="featureBarText">
                    <h2>Web Development</h2>
                    <p>Web development in Python and familiarity with framework such as TensorFlor,PyTorch or Keras</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features