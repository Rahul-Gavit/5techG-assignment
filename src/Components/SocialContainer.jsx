import React from 'react'
import '../Styles/socialContainer.css'

const SocialContainer = () => {
  return (
    <div className='social-container'>
    <div className='sc-info-container'>
    <h1 className='sc-h1'>We are ready to serve you <br/> differently.</h1>
        <p className='sc-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, <br/> pulvinar dapibus leo.</p>
        <i class="fa-regular fa-circle-play" style={{color: "#ffffff", fontSize:"3rem"}}></i>
    </div>
    <div className='sc-card-container'>
    <div className='sc-card1'>
    <i className="fa-brands fa-youtube sc-i" style={{color: "#ff0000"}}></i>
    <h1>9M+</h1>
    <h3>Subscribers</h3>
    </div>
    <div className='sc-card2'>
    <i className="fa-brands fa-instagram sc-i" style={{color: "#ff0000"}}></i>
    <h1>14M+</h1>
    <h3>Followers</h3>
    </div>
    <div className='sc-card3'>
    <i className="fa-brands fa-tiktok sc-i" style={{color: "#ff0000"}}></i>
    <h1>13M+</h1>
    <h3>Followers</h3>
    </div>
    <div className='sc-card4'>
    <i className="fa-brands fa-twitter sc-i" style={{color: "#ff0000"}}></i>
    <h1>9M+</h1>
    <h3>Followers</h3>
    </div>
    </div>
    </div>
  )
}

export default SocialContainer