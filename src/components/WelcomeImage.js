import React from 'react'
import welcomeimage from '../assets/welcomeimage.png';
import './WelcomeImage.css';

export default function WelcomeImage() {
  return (
    <>
      <h1 className='pt-5 pb-4'>
        <img src={ welcomeimage } alt="electric car and charging station" className='welcomeimage'/>
      </h1>
    </>  
  )
}
