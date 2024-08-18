import React from 'react'
import './navbar.css';
import logo from '../../assets/xygen_ai_logo.jpg';
import contactImg from '../../assets/contact.png';
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <nav className="Navbar">
      <img src={logo} alt="logo" className='logo' onClick={()=>{
        document.getElementById('intro').scrollIntoView({behavior:'smooth'});
      }}/>
      <div className="desktopMenu">
          <Link activeClass='active' to='intro' spy={true} offset={-100} duration={500} className="descktopMenuListItem">Home</Link>
          <Link activeClass='active' to='feature' spy={true} offset={-100} duration={500}  className="descktopMenuListItem">About Us</Link>
          <Link activeClass='active' to='works' spy={true} offset={-100} duration={500}  className="descktopMenuListItem">Services</Link>
          <Link activeClass='active' to='contactPage' spy={true} offset={-100} duration={500}  className="descktopMenuListItem">Client</Link>
      </div>
      <button className="descktopMenuBtn" onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior:'smooth'});
      }}>
          <img src={contactImg} art="" className="descktopMenuImg"/>Contact Us</button>
    </nav>
  )
}

export default Navbar