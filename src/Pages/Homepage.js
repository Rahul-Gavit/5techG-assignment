import React from 'react'
import '../Styles/homepage.css'
import WelcomeContainer from '../Components/WelcomeContainer'
import AboutContainer from '../Components/AboutContainer'
import SocialContainer from '../Components/SocialContainer'
import CreativeContainer from '../Components/CreativeContainer'
import BrandContainer from '../Components/BrandContainer'
import HelpContainer from '../Components/HelpContainer'
import FooterContainer from '../Components/FooterContainer'

const Homepage = () => {
  return (
    <div>
    <WelcomeContainer/>
    <AboutContainer/>
    <SocialContainer/>
    <CreativeContainer/>
    <BrandContainer/>
    <HelpContainer/>
    <FooterContainer/>
    </div>
  )
}

export default Homepage