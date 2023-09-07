import React from 'react'
import '../Styles/aboutContainer.css';

const AboutContainer = () => {
  return (
    <div className='about-container'>
    <div className='abt-img-container'>
    </div>
    <div className='abt-info-container'>
      <h3 className='abt-h3'>WHO WE ARE</h3>
      <h1 className='abt-h1'>Drawing attention to <br/> your brand.</h1>
      <p className='abt-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,<br/> luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
      <div className='abt-table'>
      <table>
        <tbody>
          <tr>
            <td>Metus proin nunc primis</td>
            <td>Metus proin nunc primis</td>
          </tr>
          <tr>
            <td>Scelerisque morbi proin</td>
            <td>Scelerisque morbi proin</td>
          </tr>
          <tr>
            <td>Dictumst nascetur egestas</td>
            <td>Dictumst nascetur egestas</td>
          </tr>
        </tbody>
      </table>
    </div>
    <button className='abt-btn'>Learn more</button>
    </div>
    </div>
  )
}

export default AboutContainer