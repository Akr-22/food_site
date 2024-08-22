import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className='footer-content-left'>
            <img src={assets.logo} alt="" srcset=""/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis libero quas recusandae, placeat hic, autem eos molestiae praesentium officia  </p>
            <div className="footer-social-icons">
                <img src={assets.linkedin} alt="" />
                <img src={assets.email} alt="" />
                <img src={assets.insta} alt="" />
            </div>
        </div>
        <div className='footer-content-center'>
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>

        </div>
        <div className='footer-content-right'>
            <h2>Get In Touch</h2>
            <ul>
                <li>+1-212-222-456</li>
                <li>contact@foodybuddy.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 - All Rights Reserved.
      </p>
    </div>
  )
}

export default Footer
