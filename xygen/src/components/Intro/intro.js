import React from 'react';
import './intro.css';
import bg from '../../assets/a1.jpg'
import btnImg from '../../assets/getS.png'
import {Link} from 'react-scroll'


const intro = () => {
    return (
      <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">We are <span className="introName">XYgen.ai</span><br/>Software Consulting and Development</span>
            <p className="introPara">Since 1989. For millions of users. We are responsible for delivering top-quality, secure,<br/> and adaptable digital solutions that satisfy the needs of today and unlock the opportunities of tomorrow.</p>
            <Link><button className="btn"><img src={btnImg} alt= "Get started" className="btnImg"/>Get started</button></Link>
        </div>
        <img src={bg} alt="profile" className="bg"/>
      </section>
    )
}

export default intro

// the digital world in your hands