import React from 'react'
import './navbar.css';
import logo from '../../assets/xygen_ai_logo.jpg';
import contactImg from '../../assets/contact.png';
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <nav className="Navbar">
      <img src={logo} alt="logo" className='logo' />
      <div className="desktopMenu">
          <Link className="descktopMenuListItem">Home</Link>
          <Link className="descktopMenuListItem">About Us</Link>
          <Link className="descktopMenuListItem">Services</Link>
          <Link className="descktopMenuListItem">Client</Link>
      </div>
      <button className="descktopMenuBtn">
          <img src={contactImg} art="" className="descktopMenuImg"/>Contact Us</button>
    </nav>
  )
}

export default Navbar