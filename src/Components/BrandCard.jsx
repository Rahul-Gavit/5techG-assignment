import React from 'react'
import '../Styles/brandCard.css'

const BrandCard = (props) => {
    const title = props.title;
    const icons = props.icons;
    const info = props.info;
  return (
    <div className='brand-card'>
    <i className={icons}style={{color: "#1b4a9d;"}}></i>
    <h1>{title}</h1>
    <p>{info}</p>
    <p></p>
    </div>
  )
}

export default BrandCard