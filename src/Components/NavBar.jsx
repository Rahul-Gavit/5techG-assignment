import React from 'react'

const NavBar = () => {
  return (
    <div className='nav-container'>
        <h1 className='nav-h1'>Veloza!</h1>
        <div className='info-container'>
        <a className='nav-a' href='#'>Home</a>
        <a className='nav-a' href='#'>About Us</a>
        <a className='nav-a' href='#'>What We do</a>
        <a className='nav-a' href='#'>Partner</a>
        <a className='nav-a' href='#'>Pages</a>
        <button className='nav-btn'>Contact</button>
        </div>
    </div>
  )
}

export default NavBar