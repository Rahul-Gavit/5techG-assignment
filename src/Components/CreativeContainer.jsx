import React from 'react'
import '../Styles/creativeContainer.css'

const CreativeContainer = () => {
  return (
    <div className='creative-container'>
    <div className='creative-info-container'>
    <h1 className='ctv-h1'>Creative ideas that will help your brand soar</h1>
    <p className='ctv-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
    <button className='ctv-btn'>Learn more</button>
    </div>
    <div className='creative-card-container'>
        <h1 className='ctv-card-h1'>Bringing creativity into action.</h1>
        <p className='ctv-card-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
    </div>
    </div>
  )
}

export default CreativeContainer