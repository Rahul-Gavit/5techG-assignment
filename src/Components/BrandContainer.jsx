import React from 'react'
import BrandCard from './BrandCard'
import '../Styles/brandCard.css'

const BrandContainer = () => {

  const cardinfo = [
    {
      title:"Promotions",
      icons:"fa-regular fa-gem",
      info:"Neque netus rhoncus arcu tincidunt ultricies. Molestie lectus non netus volutpat imperdiet odio dignissim sem."
    },
    {
      title:"Vlogger",
      icons:"fa-solid fa-camera",
      info:"Neque netus rhoncus arcu tincidunt ultricies. Molestie lectus non netus volutpat imperdiet odio dignissim sem."
    },
    {
      title:"Models",
      icons:"fa-solid fa-clapperboard",
      info:"Neque netus rhoncus arcu tincidunt ultricies. Molestie lectus non netus volutpat imperdiet odio dignissim sem."
    },
    {
      title:"Singer",
      icons:"fa-solid fa-clapperboard",
      info:"Neque netus rhoncus arcu tincidunt ultricies. Molestie lectus non netus volutpat imperdiet odio dignissim sem."
    },
    {
      title:"Actor",
      icons:"fa-solid fa-microphone",
      info:"Neque netus rhoncus arcu tincidunt ultricies. Molestie lectus non netus volutpat imperdiet odio dignissim sem."
    },
    {
      title:"TV Shows",
      icons:"fa-solid fa-tv",
      info:"Neque netus rhoncus arcu tincidunt ultricies. Molestie lectus non netus volutpat imperdiet odio dignissim sem."
    }
  ]
  return (
    <div className='brand-container'>
    <div className='brand-info-container'>
        <h3 className='brand-h3'>WHAT WE DO</h3>
        <h1 className='brand-h1'>Drawing attention to your brand.</h1>
    </div>
    <div className='brand-card-container'>
        <BrandCard title = {cardinfo[0].title} icons = {cardinfo[0].icons} info = {cardinfo[0].info} />
        <BrandCard title = {cardinfo[1].title} icons = {cardinfo[1].icons} info = {cardinfo[1].info} />
        <BrandCard title = {cardinfo[2].title} icons = {cardinfo[2].icons} info = {cardinfo[2].info} />
        <BrandCard title = {cardinfo[3].title} icons = {cardinfo[3].icons} info = {cardinfo[3].info} />
        <BrandCard title = {cardinfo[4].title} icons = {cardinfo[4].icons} info = {cardinfo[4].info} />
        <BrandCard title = {cardinfo[5].title} icons = {cardinfo[5].icons} info = {cardinfo[5].info} />
    </div>
    </div>
  )
}

export default BrandContainer