import React from 'react'
import NavBar from './NavBar'
import '../Styles/wlcContainer.css';

const WelcomeContainer = () => {
  return (
    <div className='home-container'>
    <NavBar/>
    <div className='wlc-info-container'>
    <h2 className='wlc-h2'>Welcome to Veloza</h2>
    <h1 className='wlc-h1'>Giving the social <br/>experience</h1>
    <p className='wlc-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
    <button className='wlc-btn'>Discover more</button>
    </div>
    </div>
  )
}

export default WelcomeContainer