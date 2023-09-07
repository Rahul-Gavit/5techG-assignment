import React from 'react'
import '../Styles/footerContainer.css'

const FooterContainer = () => {
  return (
    <div className='footer-container'>
    <div className='joinus-container'>
    <h1 className='joinus-h1'>Newsletter</h1>
    <p className='joinus-p'>Signup our newsletter to get update information, news, insight or promotions.</p>
    <input className='joinus-input' type='email' placeholder='Enter Your email'/>
    <button className='joinus-btn'>Sign up</button>
    </div>


    <div className='bottom-container'>
    <div className='footer-contact'>
        <a href='#'>itsmerahulgavit@gmail.com</a>
        <a href='#'>7715857835</a>
        <p>Copyright © 2021 Veloza, All rights reserved. Powered by MoxCreative.</p>
    </div>
    <h1>Veloza.</h1>
    <div className='footer-social'>
        <i className="fa-brands fa-facebook" style={{color: "#fff"}}></i>
        <i className="fa-brands fa-instagram" style={{color: "#fff"}}></i>
        <i className="fa-brands fa-twitter" style={{color: "#fff"}}></i>
        <i className="fa-brands fa-youtube" style={{color: "#fff"}}></i>
        <p>Privacy Policy ie Policy Term of use</p>
    </div>
    </div>
    </div>
  )
}

export default FooterContainer